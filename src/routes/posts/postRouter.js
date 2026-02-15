import express from "express";
import PostManager from "./postManager.js";
const postRouter = express.Router();
const postManager = new PostManager(process.cwd() + "/src/data/posts.json");
import { QuillDeltaToHtmlConverter } from "quill-delta-to-html";

postRouter.get("/", async (req, res) => {
	const posts = await postManager.getPosts();
	res.render("posts/posts", { layout: "index", posts });
});

postRouter.get("/newPost", (req, res) => {
	res.render("posts/newPost", { layout: "quill" });
});

postRouter.post("/newPost", async (req, res) => {
	const post = await postManager.addPost(req.body);
	res.status(201).redirect(`/posts/${post.id}`);
});

postRouter.get("/:id", async (req, res) => {
	const post = await postManager.getPostById(req.params.id);
	post.content = new QuillDeltaToHtmlConverter(
		JSON.parse(post.content),
	).convert();
	res.render("posts/post", { layout: "index", message: post });
});

postRouter.delete("/:id", async (req, res) => {
	const deletedPost = await postManager.deletePost(req.params.id);
	res.status(200).json({ success: true });
});

export default postRouter;
