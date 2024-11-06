import { render, screen } from "@testing-library/react";
import { describe, expect, test } from "vitest";
import App from "../../src/App";
import { BrowserRouter } from "react-router-dom";

describe("Header", () => {
  test(`Brand Name`, () => {
    render(<App />, { wrapper: BrowserRouter });

    expect(screen.getByText(/neo/i)).toBeInTheDocument();
  });

  test(`Home`, () => {
    render(<App />, { wrapper: BrowserRouter });

    expect(screen.getByText(/home/i)).toBeInTheDocument();
  });

  test(`Products`, () => {
    render(<App />, { wrapper: BrowserRouter });

    expect(screen.getByText(/products/i)).toBeInTheDocument();
  });
});
