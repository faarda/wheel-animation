import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import { IconType } from "../atoms";
import FeatureBtn from "./FeatureBtn";

const testData = {
  icon: IconType.CAMERA,
  description: "High Resolution Camera",
  showDescBefore: false,
  iconLabel: "Camera Icon",
  isActive: true,
  label: "Camera feature button",
};

describe("FeatureBtn", () => {
  it("Renders the button element with a specific classname", () => {
    render(<FeatureBtn {...testData} />);

    const buttonElement = screen.getByRole("button");
    const buttonLabel = screen.getByText(/High Resolution Camera/i);

    expect(buttonElement).toBeInTheDocument();
    expect(buttonElement).toHaveClass("feature-btn");
    expect(buttonElement).toContainElement(buttonLabel);
  });
});
