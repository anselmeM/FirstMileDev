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

  it("toggles FAQ answer on click", () => {
    render(<FAQ />);
    const firstFaq = defaultFaqs[0];
    
    // Initially, the answer should not be in the document (due to conditional rendering)
    expect(screen.queryByText(firstFaq.answer)).not.toBeInTheDocument();

    // Click the first FAQ question button
    const questionButton = screen.getByText(firstFaq.question).closest("button");
    expect(questionButton).toBeInTheDocument();
    fireEvent.click(questionButton!);

    // Now the answer should be in the document
    expect(screen.getByText(firstFaq.answer)).toBeInTheDocument();

    // Click it again
    fireEvent.click(questionButton!);

    // Answer should be removed from the document
    expect(screen.queryByText(firstFaq.answer)).not.toBeInTheDocument();
  });
});
