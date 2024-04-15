import { render } from "@testing-library/react";
import App from "./App";

test("renders without error", () => {
  const { isFragment } = render(<App />);
  expect(isFragment).toMatchSnapshot();
});
