import { render, screen } from "@testing-library/react";
import NewsBanner from "./NewsBanner";

describe("NewsBanner Component test", () => {
  function RenderLoadingCard() {
    render(<NewsBanner />);
  }
  it("should render the news banner component", () => {
    RenderLoadingCard();
    expect(screen.getByTestId("newsbanner-div")).toBeTruthy();
  });
});
