/**
 * @jest-environment jsdom
 */
import { render, screen } from "@testing-library/react";
import Page from "../app/page";

it("Renders Page", () => {
  const renderPage = render(<Page />);
  expect(renderPage).toBeDefined();
});
