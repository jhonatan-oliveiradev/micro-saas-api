import express from "express";
import {
	createUserController,
	findOneUserController,
	listUsersController
} from "./controllers/user.controller";
import { createTodoController } from "./controllers/todo.controller";

const app = express();
const port = 3000;

app.use(express.json());

app.get("/users", listUsersController);
app.post("/users", createUserController);
app.get("/users/:userId", findOneUserController);
app.post("/todos", createTodoController);

app.listen(port, () => {
	console.log(`Server is running at http://localhost:${port}`);
});
