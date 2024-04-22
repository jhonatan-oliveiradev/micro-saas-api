import type { Request, Response } from "express";

export const createTodoController = (request: Request, response: Response) => {
	const userId = request.headers["x-user-id"];

	if (!userId) {
		return response.status(403).json({ error: "Unauthorized" });
	}
};
