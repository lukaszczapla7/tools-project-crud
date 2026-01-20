const request = require("supertest");
const app = require("../app");
const { resetStore } = require("../services/taskService");

beforeEach(() => {
  resetStore();
});

describe("CRUD /tasks", () => {
  test("POST /tasks tworzy nowe zadanie", async () => {
    const res = await request(app)
      .post("/tasks")
      .send({ title: "Pierwsze zadanie" });

    expect(res.statusCode).toBe(201);
    expect(res.body).toHaveProperty("id");
    expect(res.body.title).toBe("Pierwsze zadanie");
    expect(res.body.done).toBe(false);
  });

  test("GET /tasks zwraca listę zadań", async () => {
    await request(app).post("/tasks").send({ title: "Task A" });
    await request(app).post("/tasks").send({ title: "Task B" });

    const res = await request(app).get("/tasks");

    expect(res.statusCode).toBe(200);
    expect(Array.isArray(res.body)).toBe(true);
    expect(res.body.length).toBe(2);
    expect(res.body[0]).toHaveProperty("id");
  });

  test("DELETE /tasks/:id usuwa zadanie", async () => {
    const created = await request(app)
      .post("/tasks")
      .send({ title: "Do usunięcia" });

    const id = created.body.id;

    const del = await request(app).delete(`/tasks/${id}`);
    expect(del.statusCode).toBe(204);

    const after = await request(app).get(`/tasks/${id}`);
    expect(after.statusCode).toBe(404);
  });
});
