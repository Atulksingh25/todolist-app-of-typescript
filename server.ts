interface TodoItem {
  id: number;
  task: string;
  completed: boolean;
}

let todos: TodoItem[] = [];

function addTodo(): void {
  const input = document.getElementById("taskInput") as HTMLInputElement;
  const task = input.value.trim();
  if (task === "") return;

  const newTodo: TodoItem = {
    id: Date.now(),
    task,
    completed: false,
  };
  todos.push(newTodo);
  input.value = "";
  renderTodos();
}

function toggleTodo(id: number): void {
  todos = todos.map(todo =>
    todo.id === id ? { ...todo, completed: !todo.completed } : todo
  );
  renderTodos();
}

function deleteTodo(id: number): void {
  todos = todos.filter(todo => todo.id !== id);
  renderTodos();
}

function renderTodos(): void {
  const list = document.getElementById("todoList")!;
  list.innerHTML = "";

  todos.forEach(todo => {
    const li = document.createElement("li");
    li.className = todo.completed ? "completed" : "";
    li.innerHTML = `
      ${todo.task}
      <button onclick="toggleTodo(${todo.id})">✅</button>
      <button onclick="deleteTodo(${todo.id})">❌</button>
    `;
    list.appendChild(li);
  });
}
