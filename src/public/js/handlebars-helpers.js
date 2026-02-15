function deletePost(id) {
	let eliminar = window.confirm("¿Estas seguro de eliminar el post?");
	if (eliminar) {
		fetch(`/posts/${id}`, { method: "DELETE" }).then(() => {
			let posts = document.querySelectorAll(".post");
			posts.forEach((post) => {
				if (post.id === id) {
					post.remove();
				}
			});
		});
	}
}
