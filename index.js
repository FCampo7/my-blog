import express from "express";
import { engine } from "express-handlebars";
import userRouter from "./routes/users/userRouter.js";
import productRouter from "./routes/productos/productRouter.js";
import postRouter from "./routes/posts/postRouter.js";

const app = express();
const PORT = 3000;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.engine("handlebars", engine());
app.set("views", process.cwd() + "/src/views");
app.set("view engine", "handlebars");
app.use(express.static(process.cwd() + "/src/views"));
app.use(express.static(process.cwd() + "/src/public"));

app.use("/users", userRouter);
app.use("/products", productRouter);
app.use("/posts", postRouter);

app.get("/", (req, res) => {
	res.render("welcome", { layout: "index" });
});

/*app.listen(PORT, () => {
	console.log(`Server started on port http://localhost:${PORT}`);
});*/

export default app;
