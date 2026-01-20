let tasks = [];
let nextId = 1;

function resetStore() {
  tasks = [];
  nextId = 1;
}

function createTask(title) {
  const task = { id: nextId++, title, done: false };
  tasks.push(task);
  return task;
}

function getAllTasks() {
  return tasks;
}

function getTaskById(id) {
  return tasks.find((t) => t.id === id) || null;
}

function updateTask(id, data) {
  const task = getTaskById(id);
  if (!task) return null;

  if (typeof data.title === "string") task.title = data.title;
  if (typeof data.done === "boolean") task.done = data.done;

  return task;
}

function deleteTask(id) {
  const index = tasks.findIndex((t) => t.id === id);
  if (index === -1) return false;
  tasks.splice(index, 1);
  return true;
}

module.exports = {
  resetStore,
  createTask,
  getAllTasks,
  getTaskById,
  updateTask,
  deleteTask,
};
