import React from "react";
import { render, fireEvent } from "@testing-library/react";
import NewBoxForm from "./NewBoxForm";

// Snapshot Test
test("NewBoxForm component snapshot", () => {
  const { container } = render(<NewBoxForm addBox={() => {}} />);
  expect(container).toMatchSnapshot();
});

// Smoke Test
test("NewBoxForm component renders without errors and adds a new box", () => {
  const addBoxMock = jest.fn();
  const { getByText, getByPlaceholderText } = render(
    <NewBoxForm addBox={addBoxMock} />
  );

  // Assert that the component renders without errors
  expect(getByPlaceholderText("Background Color")).toBeInTheDocument();
  expect(getByPlaceholderText("Height")).toBeInTheDocument();
  expect(getByPlaceholderText("Width")).toBeInTheDocument();
  expect(getByText("Build")).toBeInTheDocument();

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

  // Check if the addBox function was called with the correct values
  expect(addBoxMock).toHaveBeenCalledWith("red", "50px", "50px");
});
