import { render, screen } from "@testing-library/react";
import Error from "./Error";

describe("Error component test", () => {
  function RenderComponent() {
    render(<Error />);
  }
  it("should render the error card component", () => {
    RenderComponent();
    expect(screen.getByTestId("app-error-component")).toBeTruthy();
  });
  it("should render the error message", () => {
    expect(
      screen.findByText(/You should be seeing news, not this error message./)
    ).toBeTruthy();
  });
});
