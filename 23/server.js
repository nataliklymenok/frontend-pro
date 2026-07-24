const express = require("express");
const cors = require("cors");
const app = express();
const port = 3000;

app.use(cors());
app.use(express.json());
let tasks = [
  {
    id: 1,
    name: "Task1",
  },
  {
    id: 2,
    name: "Task2",
  },
];

app.get("/", (req, res) => {
  res.send("Вітаємо на головній сторінці!");
});

app.get("/tasks", (req, res) => {
  res.send(tasks);
});

app.get("/task/:id", (req, res) => {
  res.send(`Інформація про користувача з id ${req.params.id}`);
});

app.post("/tasks", (req, res) => {
  const newTask = { ...req.body };
  tasks.push(newTask);
  res.send(tasks);
});

app.delete("/task/:id", (req, res) => {
  const id = +req.params.id;
  tasks = tasks.filter((item) => item.id !== id);
  res.send(tasks);
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
