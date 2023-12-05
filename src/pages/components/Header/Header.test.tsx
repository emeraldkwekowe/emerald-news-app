import { render, screen } from "@testing-library/react";
import Header from "./Header";
import { MemoryRouter } from "react-router-dom";

describe("Button component test", () => {
  function RenderComponent() {
    render(
      //Memory router needed to test Link compoennt
      <MemoryRouter>
        <Header />
      </MemoryRouter>
    );
  }
  it("should render the header component", () => {
    RenderComponent();
    expect(screen.getByTestId("header-component")).toBeTruthy();
  });
});
