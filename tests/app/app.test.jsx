import { render, screen } from "@testing-library/react";
import { describe, expect, test } from "vitest";
import App from "../../src/App";
import { BrowserRouter } from "react-router-dom";
import userEvent from "@testing-library/user-event";

function renderApp() {
  render(<App />, { wrapper: BrowserRouter });
}

describe("Header links are present", () => {
  test(`Brand Name`, () => {
    renderApp();

    expect(screen.getByText(/neo/i)).toBeInTheDocument();
  });

  test(`Home`, () => {
    renderApp();

    expect(screen.getByText(/home/i)).toBeInTheDocument();
  });

  test(`Products`, () => {
    renderApp();

    expect(screen.getByText(/products/i)).toBeInTheDocument();
  });
});

describe("Cart Quickview", () => {
  test("Quickview is hidden By default", async () => {
    renderApp();

    const quickView = screen.getByTestId("quickview");

    expect(quickView).toHaveStyle({
      transform: "translateX(100%)",
    });
  });

  test("Cart Quickview transforms on click", async () => {
    renderApp();

    const user = userEvent.setup();
    const cartButton = screen.getByTestId("cartButton");
    const quickView = screen.getByTestId("quickview");

    await user.click(cartButton);

    expect(quickView).toHaveStyle({
      transform: "translateX(0%)",
    });
  });
});
