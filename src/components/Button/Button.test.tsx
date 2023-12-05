import { render, screen } from "@testing-library/react";
import Button from "./Button";

describe("Button component test", () => {
  function RenderComponent() {
    render(<Button>Test</Button>);
  }
  it("should render the button component", () => {
    RenderComponent();
    expect(screen.getByTestId("button-component")).toBeTruthy();
  });
  it("should render the button text", () => {
    RenderComponent();
    expect(screen.findByText(/Test/)).toBeTruthy();
  });
});
