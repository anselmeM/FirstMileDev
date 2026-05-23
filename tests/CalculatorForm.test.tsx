import React from "react";
import { render, screen, fireEvent, waitFor } from "@testing-library/react";
import CalculatorForm from "@/app/calculator/CalculatorForm";
import { submitLead } from "@/lib/leads";

// Mock the submitLead function
jest.mock("@/lib/leads", () => ({
  submitLead: jest.fn().mockResolvedValue({ success: true }),
}));

// Mock scrollIntoView since jsdom doesn't support it
beforeAll(() => {
  window.HTMLElement.prototype.scrollIntoView = jest.fn();
});

describe("CalculatorForm Component", () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  it("renders the calculator form steps correctly", () => {
    render(<CalculatorForm />);
    
    // Check for title and step labels
    expect(screen.getByRole("heading", { name: /Your Project/i })).toBeInTheDocument();
    expect(screen.getByText(/01. Select Platform/i)).toBeInTheDocument();
    expect(screen.getByText(/02. Define Complexity/i)).toBeInTheDocument();
    expect(screen.getByText(/03. Critical Features/i)).toBeInTheDocument();
    expect(screen.getByText(/04. Target Velocity/i)).toBeInTheDocument();
    expect(screen.getByText(/Generate Technical Brief/i)).toBeInTheDocument();
  });

  it("calculates budget and submits lead successfully", async () => {
    render(<CalculatorForm />);

    // Step 1: Select Platform - Web App
    const webAppRadio = screen.getByLabelText("Web App");
    fireEvent.click(webAppRadio);

    // Step 2: Select Complexity - Launchpad MVP (medium)
    const mediumComplexityRadio = screen.getByLabelText(/Launchpad MVP/i);
    fireEvent.click(mediumComplexityRadio);

    // Step 3: Select Features - User Authentication & Stripe / Payments
    const authButton = screen.getByText("User Authentication");
    const paymentsButton = screen.getByText("Stripe / Payments");
    fireEvent.click(authButton);
    fireEvent.click(paymentsButton);

    // Step 4: Select Timeline - 8-12 Weeks (standard)
    const standardTimelineRadio = screen.getByLabelText(/8-12 Weeks/i);
    fireEvent.click(standardTimelineRadio);

    // Step 5: Input email
    const emailInput = screen.getByPlaceholderText("Enter your professional email");
    fireEvent.change(emailInput, { target: { value: "test@example.com" } });

    // Submit form
    const submitButton = screen.getByRole("button", { name: /Get My Estimate/i });
    fireEvent.click(submitButton);

    // Wait for submission and check cost calculation display
    // Base cost: 3000 (web)
    // Features: 2 * 500 = 1000
    // Complexity multiplier: 1.5 (medium)
    // Timeline multiplier: 1 (standard)
    // Expected Total = (3000 + 1000) * 1.5 * 1 = 6000
    await waitFor(() => {
      expect(screen.getByText("$6,000")).toBeInTheDocument();
    });

    // Check if submitLead was called with the correct parameters
    expect(submitLead).toHaveBeenCalledWith({
      email: "test@example.com",
      source: "calculator",
      metadata: {
        appType: "web",
        complexity: "medium",
        timeline: "8",
        features: ["auth", "payments"],
        estimatedCost: 6000,
      },
    });

    expect(screen.getByText(/test@example.com/i)).toBeInTheDocument();
  });

  it("displays an error message when lead submission fails", async () => {
    (submitLead as jest.Mock).mockRejectedValueOnce(new Error("Network Error"));

    render(<CalculatorForm />);

    // Fill minimum required fields
    fireEvent.click(screen.getByLabelText("Web App"));
    fireEvent.click(screen.getByLabelText(/Launchpad MVP/i));
    fireEvent.click(screen.getByLabelText(/8-12 Weeks/i));
    
    const emailInput = screen.getByPlaceholderText("Enter your professional email");
    fireEvent.change(emailInput, { target: { value: "error@example.com" } });

    // Submit
    const submitButton = screen.getByRole("button", { name: /Get My Estimate/i });
    fireEvent.click(submitButton);

    // Wait for the error message to display
    await waitFor(() => {
      expect(screen.getByText("Network Error")).toBeInTheDocument();
    });

    // Cost estimate should not be shown
    expect(screen.queryByText("$6,000")).not.toBeInTheDocument();
  });
});
