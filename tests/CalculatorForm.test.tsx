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

describe("CalculatorForm Component - Progressive Wizard Flow", () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  it("renders the Intro step initially and advances on clicking Next", () => {
    render(<CalculatorForm />);
    
    // Step 0: Intro rendering checks
    expect(screen.getByRole("heading", { name: /Intro/i })).toBeInTheDocument();
    expect(screen.getByText(/ballpark budget & timeline/i)).toBeInTheDocument();
    
    const nextButton = screen.getByRole("button", { name: /Next/i });
    expect(nextButton).toBeInTheDocument();
    expect(screen.getByRole("button", { name: /View In Calculator/i })).toBeInTheDocument();

    // Click next to advance to Step 1 (Platform)
    fireEvent.click(nextButton);

    // Verify step 1 elements
    expect(screen.getByRole("heading", { name: /Which platforms do you want to launch on first\?/i })).toBeInTheDocument();
    expect(screen.getByRole("heading", { name: /Your Project/i })).toBeInTheDocument();
  });

  it("calculates budget and submits lead successfully through progressive steps", async () => {
    render(<CalculatorForm />);

    // Step 0: Click Next to start
    fireEvent.click(screen.getByRole("button", { name: /Next/i }));

    // Step 1: Select Platform - Single platform (advances to Step 2 automatically)
    const singlePlatformBtn = screen.getByRole("button", { name: /Single platform/i });
    fireEvent.click(singlePlatformBtn);

    // Step 2: Select Complexity - Low (advances to Step 3 automatically)
    const lowComplexityBtn = screen.getByRole("button", { name: /Low/i });
    fireEvent.click(lowComplexityBtn);

    // Step 3: Select Essential Features - Email/password accounts & Analytics, then click Next
    fireEvent.click(screen.getByRole("switch", { name: /Toggle Email\/password accounts/i }));
    fireEvent.click(screen.getByRole("switch", { name: /Toggle Analytics/i }));

    const step3Next = screen.getByRole("button", { name: /Next/i });
    fireEvent.click(step3Next);

    // Step 4: Click Next on Advanced Features (skip advanced features)
    const step4Next = screen.getByRole("button", { name: /Next/i });
    fireEvent.click(step4Next);

    // Step 5: Select Timeline - 8-12 Weeks (advances to Step 6 automatically)
    const standardTimelineBtn = screen.getByRole("button", { name: /8-12 Weeks/i });
    fireEvent.click(standardTimelineBtn);

    // Step 6: Input email and submit lead brief
    const emailInput = screen.getByPlaceholderText("Enter your professional email");
    fireEvent.change(emailInput, { target: { value: "test-wizard@example.com" } });

    // Submit form
    const submitBtn = screen.getByRole("button", { name: /Get My Estimate/i });
    fireEvent.click(submitBtn);

    // Step 7: Wait for Results step and verify cost calculation display
    // Base cost: 4000 (single)
    // Complexity multiplier: 1.0 (low)
    // Features: auth_email (+600), analytics (+600) -> 1200
    // Timeline multiplier: 1.0 (standard)
    // Expected Total = (4000 + 1200) * 1.0 * 1.0 = 5200
    await waitFor(() => {
      expect(screen.getByText("$5,200")).toBeInTheDocument();
    });

    // Check if submitLead was called with the correct parameters
    expect(submitLead).toHaveBeenCalledWith({
      email: "test-wizard@example.com",
      source: "calculator",
      metadata: {
        appType: "single",
        complexity: "low",
        timeline: "8",
        features: ["auth_email", "analytics"],
        estimatedCost: 5200,
      },
    });

    expect(screen.getByText(/test-wizard@example.com/i)).toBeInTheDocument();
  });

  it("displays an error message when lead submission fails on Step 6", async () => {
    (submitLead as jest.Mock).mockRejectedValueOnce(new Error("API Submission Failed"));

    render(<CalculatorForm />);

    // Fast-forward to Step 6
    fireEvent.click(screen.getByRole("button", { name: /Next/i })); // to Step 1
    fireEvent.click(screen.getByRole("button", { name: /Single platform/i })); // to Step 2
    fireEvent.click(screen.getByRole("button", { name: /Low/i })); // to Step 3
    fireEvent.click(screen.getByRole("button", { name: /Next/i })); // to Step 4
    fireEvent.click(screen.getByRole("button", { name: /Next/i })); // to Step 5
    fireEvent.click(screen.getByRole("button", { name: /8-12 Weeks/i })); // to Step 6
    
    // Fill email
    const emailInput = screen.getByPlaceholderText("Enter your professional email");
    fireEvent.change(emailInput, { target: { value: "error-wizard@example.com" } });

    // Submit
    const submitBtn = screen.getByRole("button", { name: /Get My Estimate/i });
    fireEvent.click(submitBtn);

    // Wait for the error message to display
    await waitFor(() => {
      expect(screen.getByText("API Submission Failed")).toBeInTheDocument();
    });

    // Results screen should not be active
    expect(screen.queryByText("$5,200")).not.toBeInTheDocument();
  });

  it("allows back navigation and retains previously selected states", () => {
    render(<CalculatorForm />);

    // Start
    fireEvent.click(screen.getByRole("button", { name: /Next/i }));

    // Go to Step 2
    fireEvent.click(screen.getByRole("button", { name: /Single platform/i }));

    // Click back to return to Step 1
    const backBtn = screen.getByRole("button", { name: /Go back/i });
    fireEvent.click(backBtn);

    // Step 1 Heading should be active
    expect(screen.getByRole("heading", { name: /Which platforms do you want to launch on first\?/i })).toBeInTheDocument();
    
    // Verify that the 'Single platform' card reflects the active styled border selection
    const singlePlatformBtn = screen.getByRole("button", { name: /Single platform/i });
    expect(singlePlatformBtn).toHaveClass("border-accent-red");
  });
});
