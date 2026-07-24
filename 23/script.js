document.addEventListener("DOMContentLoaded", () => {
  const list = document.getElementById("myList");
  const input = document.getElementById("fld");
  const addBtn = document.getElementById("addBtn");

  const modal = document.getElementById("taskModal");
  const modalBody = document.querySelector(".modal-body");
  const closeBtn = document.querySelector(".close-btn");
  const closeModalBtn = document.querySelector(".close-modal");

  addBtn.addEventListener("click", async () => {
    const taskText = input.value.trim();
    const id = Date.now();

    if (taskText === "") {
      return;
    }

    const response = await fetch("http://localhost:3000/tasks", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        id: id,
        name: taskText,
      }),
    });

    const updatedTasks = await response.json();

    renderTask(updatedTasks);

    input.value = "";
  });

  list.addEventListener("click", async (event) => {
    const deleteButton = event.target.closest("button");

    const task = event.target.closest("li");

    const id = task.dataset.id;

    const response = await fetch(`http://localhost:3000/task/${id}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
    });

    const updatedTasks = await response.json();

    renderTask(updatedTasks);
  });

  function closeModal() {
    modal.classList.remove("show");
  }

  async function init() {
    const response = await fetch("http://localhost:3000/tasks");
    const data = await response.json();

    list.innerHTML = "";

    renderTask(data);
  }

  function renderTask(data) {
    list.innerHTML = "";
    const items = data.map((task) => {
      const li = document.createElement("li");
      li.dataset.id = task.id;

      const span = document.createElement("span");
      span.textContent = task.name;

      const deleteBtn = document.createElement("button");
      deleteBtn.type = "button";
      deleteBtn.textContent = "Delete";

      li.append(span, deleteBtn);
      list.append(li);
    });
  }

  init();

  closeBtn.addEventListener("click", closeModal);
  closeModalBtn.addEventListener("click", closeModal);

  modal.addEventListener("click", (event) => {
    if (event.target === modal) {
      closeModal();
    }
  });
});
