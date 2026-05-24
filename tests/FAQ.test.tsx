import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import FAQ, { defaultFaqs } from "@/components/FAQ";

describe("FAQ Component", () => {
  it("renders all default FAQ questions", () => {
    render(<FAQ />);
    defaultFaqs.forEach((faq) => {
      expect(screen.getByText(faq.question)).toBeInTheDocument();
    });
  });

  it("toggles FAQ answer visibility classes on click", () => {
    render(<FAQ />);
    const firstFaq = defaultFaqs[0];
    
    // Click button element lookup
    const questionButton = screen.getByText(firstFaq.question).closest("button");
    expect(questionButton).toBeInTheDocument();

    const answerElement = screen.getByText(firstFaq.answer);
    expect(answerElement).toBeInTheDocument();
    
    // Initially, container should be collapsed/hidden
    const container = answerElement.closest(".grid");
    expect(container).toHaveClass("grid-rows-[0fr]");
    expect(container).toHaveClass("opacity-0");

    // Click the FAQ question button
    fireEvent.click(questionButton!);

    // Now the container should be expanded/visible
    expect(container).toHaveClass("grid-rows-[1fr]");
    expect(container).toHaveClass("opacity-100");

    // Click it again
    fireEvent.click(questionButton!);

    // Should collapse/hide again
    expect(container).toHaveClass("grid-rows-[0fr]");
    expect(container).toHaveClass("opacity-0");
  });
});
