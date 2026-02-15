import fs from "fs";
import { v4 as newId } from "uuid";
import db from "../../firebase/config.js";
import { collection, addDoc, getDocs, deleteDoc } from "firebase/firestore";

class PostManager {
	constructor(path) {
		this.path = path;
	}

	async addPost(post) {
		const postsRef = collection(db, "posts");
		//const posts = await fs.promises.readFile(this.path, "utf-8");
		const parsedPosts = JSON.parse(posts);

		const newPost = {
			//id: newId(),
			date: new Date().toLocaleString("es-AR"),
			title: post.title,
			content: post.content,
		};

		parsedPosts.push(newPost);

		const docRef = await addDoc(postsRef, newPost);

		newPost.id = docRef.id;
		/*await fs.promises.writeFile(
			this.path,
			JSON.stringify(parsedPosts, null, 2),
		);*/

		return newPost;
	}

	async getPosts() {
		//const posts = await fs.promises.readFile(this.path, "utf-8");
		const postsRef = collection(db, "posts");
		const posts = await getDocs(postsRef);
		const parsedPosts = posts.docs.map((doc) => ({
			id: doc.id,
			...doc.data(),
		}));
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
		const postsRef = collection(db, "posts");
		await deleteDoc(doc(postsRef, id));
		/*await fs.promises.writeFile(
			this.path,
			JSON.stringify(filteredPosts, null, 2),
		);*/
		//return filteredPosts;
	}
}

export default PostManager;
