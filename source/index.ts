import express from "express";
import {
	createUserController,
	findOneUserController,
	listUsersController
} from "./controllers/user.controller";

const app = express();
const port = 3000;

app.use(express.json());

app.get("/users", listUsersController);
app.post("/users", createUserController);
app.get("/users/:userId", findOneUserController);

app.listen(port, () => {
	console.log(`Server is running at http://localhost:${port}`);
});
