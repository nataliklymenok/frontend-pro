import { render, screen, fireEvent } from "@testing-library/react";
import App from "./App";

test("page contains header TODO", () => {
  render(<App />);

  expect(screen.getByRole("heading", { name: /TODO/i })).toBeInTheDocument();
});

test("input field can be set string and digits", () => {
  render(<App />);

  const input = screen.getByPlaceholderText(/enter a new task/i);
  fireEvent.change(input, { target: { value: "Task123" } });

  expect(input.value).toBe("Task123");
});

test("error appears if add empty task", async () => {
  render(<App />);

  const button = screen.getByRole("button", { name: /add task/i });
  fireEvent.click(button);

  expect(
    await screen.findByText(/task should be more than 5 chars/i),
  ).toBeInTheDocument();
});

test("error appears if four chars added", async () => {
  render(<App />);

  const input = screen.getByPlaceholderText(/enter a new task/i);
  fireEvent.change(input, { target: { value: "1111" } });

  const button = screen.getByRole("button", { name: /add task/i });
  fireEvent.click(button);

  expect(
    await screen.findByText(/task should be more than 5 chars/i),
  ).toBeInTheDocument();
});

test("error does not appear if five chars added", async () => {
  render(<App />);

  const input = screen.getByPlaceholderText(/enter a new task/i);
  fireEvent.change(input, { target: { value: "Task1" } });

  expect(input.value).toBe("Task1");

  const button = screen.getByRole("button", { name: /add task/i });
  fireEvent.click(button);

  expect(await screen.findByText("Task1")).toBeInTheDocument();

  expect(
    screen.queryByText(/task should be more than 5 chars/i),
  ).not.toBeInTheDocument();
});
