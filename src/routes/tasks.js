const express = require("express");
const {
  createTask,
  getAllTasks,
  getTaskById,
  updateTask,
  deleteTask,
} = require("../services/taskService");

const router = express.Router();

// CREATE
router.post("/", (req, res) => {
  const { title } = req.body;

  if (!title || typeof title !== "string" || title.trim().length < 1) {
    return res.status(400).json({ error: "tytuł jest wymagany" });
  }

  const task = createTask(title.trim());
  return res.status(201).json(task);
});

// READ ALL
router.get("/", (req, res) => {
  return res.json(getAllTasks());
});

// READ ONE
router.get("/:id", (req, res) => {
  const id = Number(req.params.id);
  const task = getTaskById(id);

  if (!task) return res.status(404).json({ error: "nie znaleziono zadania" });
  return res.json(task);
});

// UPDATE
router.put("/:id", (req, res) => {
  const id = Number(req.params.id);
  const updated = updateTask(id, req.body);

  if (!updated) return res.status(404).json({ error: "nie znaleziono zadania" });
  return res.json(updated);
});

// DELETE
router.delete("/:id", (req, res) => {
  const id = Number(req.params.id);
  const ok = deleteTask(id);

  if (!ok) return res.status(404).json({ error: "nie znaleziono zadania" });
  return res.status(204).send();
});

module.exports = router;
