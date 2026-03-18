import { test, expect } from "vitest";
import { render, fireEvent } from "@solidjs/testing-library";
import { Home } from "../routes/index";

test("increments value", async () => {
  const { getByRole, getByText } = render(() => <Home />);
  expect(getByText("Counter: 0")).toBeTruthy();
  const button = getByRole("button");
  fireEvent.click(button);
  expect(getByText("Counter: 1")).toBeTruthy();
});
