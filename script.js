var taskInput = document.getElementById("taskInput");
var taskList = document.getElementById("taskList");

function addTask() {
  const taskText = taskInput.value.trim();
  if (taskText === "") return;

  var li = document.createElement("li");

  li.innerHTML = `
    <span onclick="toggleTask(this)">${taskText}</span>
    <div class="actions">
      <button onclick="toggleTask(this)">✔</button>
      <button class="delete" onclick="deleteTask(this)">✖</button>
    </div>
  `;

  taskList.appendChild(li);
  taskInput.value = "";
}

function toggleTask(element) {
  var li = element.closest("li");
  li.classList.toggle("completed");
}

function deleteTask(element) {
  element.closest("li").remove();
}
