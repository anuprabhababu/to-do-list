let step = 1;
let name = "";
let tasks = [];
let newTask = {
  title: "",
  description: "",
  date: "",
  completed: false,
};

function renderApp() {
  const app = document.getElementById("app");

  if (step === 1) {
    app.innerHTML = `
      <div class="flex-center">
        <h1>To Do ✓</h1>
        <p>Organize along with me</p>
        <button onclick="nextStep()">Get Started</button>
      </div>
    `;
  } else if (step === 2) {
    app.innerHTML = `
      <div class="flex-center">
        <h2>What's your name?</h2>
        <input type="text" id="username" placeholder="Enter your name">
        <button onclick="saveName()">Continue</button>
      </div>
    `;
  } else if (step === 3) {
    const tasksHTML = tasks
      .map(
        (task, index) => `
        <div class="bg-white task">
          <input type="checkbox" class="checkbox" ${
            task.completed ? "checked" : ""
          } onchange="toggleTask(${index})">
          <div class="${task.completed ? "completed" : ""}">
            <h3>${task.title}</h3>
            <p>${task.description}</p>
            <p>Due: ${task.date}</p>
          </div>
        </div>
      `
      )
      .join("");

    app.innerHTML = `
      <h2>Hi ${name}! 👋</h2>
      <div class="bg-white">
        <input type="text" id="title" placeholder="Task Title">
        <textarea id="description" placeholder="Task Description"></textarea>
        <input type="date" id="date">
        <button onclick="addTask()">Add Task +</button>
      </div>
      <div>
        ${tasksHTML}
      </div>
    `;
  }
}

function nextStep() {
  step = 2;
  renderApp();
}

function saveName() {
  const usernameInput = document.getElementById("username");
  if (usernameInput.value) {
    name = usernameInput.value;
    step = 3;
    renderApp();
  }
}

function addTask() {
  const title = document.getElementById("title").value;
  const description = document.getElementById("description").value;
  const date = document.getElementById("date").value;

  if (title && description && date) {
    tasks.push({ title, description, date, completed: false });
    renderApp();
  }
}

function toggleTask(index) {
  tasks[index].completed = !tasks[index].completed;
  renderApp();
}

renderApp();

