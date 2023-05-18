import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import FeatureCard from "./FeatureCard";
import { IconType } from "../atoms";

const testData = {
  icon: IconType.TRAVEL,
  advantage: "Easily find your way to any destination",
  iconLabel: "Path icon",
  benefits: ["Seamlessly navigate", "Save time, reduce stress"] as [string, string],
  isActive: true,
};

describe("FeatureCard", () => {
  it("Renders the card correctly", () => {
    render(<FeatureCard {...testData} />);

    const advantageTextEl = screen.getByText(/Easily find your way to any destination/i);

    expect(advantageTextEl).toBeInTheDocument();
  });
});
