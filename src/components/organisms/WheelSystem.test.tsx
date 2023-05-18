import "@testing-library/jest-dom";
import { fireEvent, render, screen, waitFor } from "@testing-library/react";
import WheelSystem from "./WheelSystem";
import { features } from "@/pages";

describe("WheelSystem", () => {
  it("Clicking a button should make the corresponding card active", async () => {
    render(<WheelSystem features={features} />);

    const featureBtn = screen.getByTestId("wheel-btn-camera-resolution");
    const featureCard = screen.getByTestId("feature-card-camera-resolution");

    fireEvent.click(featureBtn);

    await waitFor(
      () => {
        expect(featureCard).toHaveClass("feature-card--active");
      },
      { timeout: 1000 }
    );
  });
});
