import React from "react";
import { render } from "@testing-library/react";
import App from "./App";

// Smoke Test for App component
test("App component renders without errors", () => {
  const { getByText } = render(<App />);

  // Assert that the component renders without errors
  expect(getByText("Make a Box")).toBeInTheDocument(); // This assumes "Make a Box" is present in BoxList
});

