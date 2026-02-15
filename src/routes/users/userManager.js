import fs from "fs";

export class UserManager {
	constructor(path) {
		this.path = path;
	}

	async #readFile() {
		try {
			const data = await fs.promises.readFile(this.path, "utf-8");
			return JSON.parse(data);
		} catch (error) {
			return [];
		}
	}

	async #writeFile(data) {
		try {
			await fs.promises.writeFile(
				this.path,
				JSON.stringify(data, null, 2),
			);
		} catch (error) {
			throw error;
		}
	}

	async addUser(user) {
		const users = await this.#readFile();
		users.push(user);
		await this.#writeFile(users);
		return user;
	}

	async getUsers() {
		return await this.#readFile();
	}
}
