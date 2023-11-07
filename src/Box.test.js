import React from "react";
import { render, fireEvent } from "@testing-library/react";
import Box from "./Box";

// Snapshot Test
test("Box component snapshot", () => {
  const { container } = render(
    <Box id={1} background="red" height="50px" width="50px" />
  );
  expect(container).toMatchSnapshot();
});

// Smoke Test
test("Box component renders without errors and has a remove button", () => {
  const removeBoxMock = jest.fn();
  const { getByText } = render(
    <Box id={1} background="red" height="50px" width="50px" removeBox={removeBoxMock} />
  );

  // Assert that the component renders without errors
  expect(getByText("X")).toBeInTheDocument(); // Check for the presence of the remove button

  // Simulate a click on the remove button
  fireEvent.click(getByText("X"));

  // Check if the removeBox function was called with the correct ID
  expect(removeBoxMock).toHaveBeenCalledWith(1);
});
