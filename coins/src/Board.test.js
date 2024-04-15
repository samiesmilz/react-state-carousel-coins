import React from "react";
import { render } from "@testing-library/react";
import Board from "./Board.js";

it("renders without crashing...", () => {
  render(<Board />);
});

it("matches snapshot...", () => {
  const { asFragment } = render(<Board />);
  expect(asFragment()).toMatchSnapshot();
});
