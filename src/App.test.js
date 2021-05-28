import React, { useState as useStateMock } from "react";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import App from "./App";

jest.mock("react", () => ({
  ...jest.requireActual("react"),
  useState: jest.fn(),
}));

describe("Test", () => {
  const setState = jest.fn();

  beforeEach(() => {
    useStateMock.mockImplementation((init) => [init, setState]);
  });

  it("Is a test where we want to mock useState", () => {
    render(<App />);
    const button = screen.getByRole("button");
    userEvent.click(button);
    expect(setState).toHaveBeenCalledWith("clicked");
  });
});
