import express from "express";

const productRouter = express.Router();

productRouter.get("/", (req, res) => {
	const cant = parseInt(req.query?.cant || 1);
	const cantidades = Array(cant).fill(0);
	res.render("products/productForm", { layout: "index", cant: cantidades });
});

productRouter.post("/", (req, res) => {
	res.render("products/products", {
		layout: "index",
		nombre:
			req.body.nombre.charAt(0).toUpperCase() + req.body.nombre.slice(1),
		productos: req.body.productos,
	});
});

export default productRouter;
