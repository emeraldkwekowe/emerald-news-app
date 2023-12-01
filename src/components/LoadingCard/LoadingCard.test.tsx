import { render, screen } from "@testing-library/react";
import LoadingCard from "./LoadingCard";

describe("LoadingCards Component", () => {
  function RenderLoadingCard() {
    render(<LoadingCard></LoadingCard>);
  }
  it("should render the loading card component", () => {
    RenderLoadingCard();
    expect(screen.getByTestId("loading-card")).toBeTruthy();
  });
});
