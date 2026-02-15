import express from "express";
import { UserManager } from "./userManager.js";
const userRouter = express.Router();

const userManager = new UserManager(process.cwd() + "/src/data/users.json");

userRouter.get("/", async (req, res) => {
	const users = await userManager.getUsers();
	res.render("users/users", {
		layout: "index",
		users,
	});
});

userRouter.get("/add", async (req, res) => {
	res.render("users/newUser", {
		layout: "index",
	});
});

userRouter.post("/add", async (req, res) => {
	const user = req.body;
	const newUser = await userManager.addUser(user);
	res.render("users/users", {
		layout: "index",
		users: [newUser],
	});
});

export default userRouter;
