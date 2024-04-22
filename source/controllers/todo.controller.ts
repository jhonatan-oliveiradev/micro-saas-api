import type { Request, Response } from "express";
import { prisma } from "../lib/prisma";

export const createTodoController = async (
	request: Request,
	response: Response
) => {
	const userId = request.headers["x-user-id"];

	if (!userId) {
		return response.status(403).send({
			error: "Unauthorized"
		});
	}

	const user = await prisma.user.findUnique({
		where: {
			id: userId as string
		}
	});

	if (!user) {
		return response.status(403).send({
			error: "Unauthorized"
		});
	}

	const { title } = request.body;

	const todo = await prisma.todo.create({
		data: {
			title,
			userId: user.id
		}
	});

	return response.status(201).send(todo);
};
