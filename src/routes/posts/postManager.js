import fs from "fs";
import { v4 as newId } from "uuid";

class PostManager {
	constructor(path) {
		this.path = path;
	}

	async addPost(post) {
		const posts = await fs.promises.readFile(this.path, "utf-8");
		const parsedPosts = JSON.parse(posts);

		const newPost = {
			id: newId(),
			date: new Date().toLocaleString("es-AR"),
			title: post.title,
			content: post.content,
		};

		parsedPosts.push(newPost);

		await fs.promises.writeFile(
			this.path,
			JSON.stringify(parsedPosts, null, 2),
		);

		return newPost;
	}

	async getPosts() {
		const posts = await fs.promises.readFile(this.path, "utf-8");
		const parsedPosts = JSON.parse(posts);
		return parsedPosts;
	}

	async getPostById(id) {
		const posts = await this.getPosts();
		const post = posts.find((post) => post.id === id);
		return post;
	}

	async deletePost(id) {
		const posts = await this.getPosts();
		const filteredPosts = posts.filter((post) => post.id !== id);
		await fs.promises.writeFile(
			this.path,
			JSON.stringify(filteredPosts, null, 2),
		);
		return filteredPosts;
	}
}

export default PostManager;
