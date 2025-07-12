const form = document.getElementById("todo-form");
const todoInput = document.getElementById("todo-input");
const dateInput = document.getElementById("date-input");
const todoList = document.getElementById("todo-list");
const filterInput = document.getElementById("filter");

form.addEventListener("submit", function (e) {
  e.preventDefault();

  const task = todoInput.value.trim();
  const date = dateInput.value;

  if (task === "" || date === "") {
    alert("Please fill in both fields.");
    return;
  }

  const li = document.createElement("li");
  li.innerHTML = `${task} <small>(${date})</small>
    <button class="delete-btn">Delete</button>`;

  todoList.appendChild(li);

  todoInput.value = "";
  dateInput.value = "";
});

todoList.addEventListener("click", function (e) {
  if (e.target.classList.contains("delete-btn")) {
    e.target.parentElement.remove();
  }
});

filterInput.addEventListener("input", function () {
  const filter = filterInput.value.toLowerCase();
  const items = todoList.getElementsByTagName("li");

  Array.from(items).forEach(function (item) {
    const text = item.textContent.toLowerCase();
    item.style.display = text.includes(filter) ? "flex" : "none";
  });
});
