import React from "react";
import { render, fireEvent } from "@testing-library/react";
import BoxList from "./BoxList";

// Snapshot Test for BoxList component
test("BoxList component snapshot", () => {
  const { container } = render(<BoxList />);
  expect(container).toMatchSnapshot();
});

// Smoke Test for BoxList component
test("BoxList component renders without errors and adds/removes boxes", () => {
  const { getByText, getByPlaceholderText, queryByText } = render(<BoxList />);

  // Assert that the component renders without errors
  expect(getByText("Make a Box")).toBeInTheDocument();

  // Simulate user input and form submission
  fireEvent.change(getByPlaceholderText("Background Color"), {
    target: { value: "red" },
  });
  fireEvent.change(getByPlaceholderText("Height"), {
    target: { value: "50px" },
  });
  fireEvent.change(getByPlaceholderText("Width"), {
    target: { value: "50px" },
  });
  fireEvent.click(getByText("Build"));

  // Check if the box is added
  expect(getByText("X")).toBeInTheDocument();

  // Simulate removing the box
  fireEvent.click(getByText("X"));

  // Check if the box is removed
  expect(queryByText("X")).toBeNull();
});
