import { Router } from "express";
import addPostController from "../controllers/post.controllers/add.post.controller.js";
import getAllPostsController from "../controllers/post.controllers/get.all.post.controller.js";
import getPostByIdController from "../controllers/post.controllers/getPostById.controller.js";
import updatePostByIdController from "../controllers/post.controllers/update.post.controller.js";
import deletePostByIdController from "../controllers/post.controllers/delete.post.ById.controller.js";
const postRoute = Router();
// YANGI MAQOLA YARATISH
postRoute.post("/posts", async (req, res) => {
  addPostController(req, res);
});

// GET ALL POSTS ROUTE
postRoute.get("/posts", async (req, res) => {
  getAllPostsController(req, res);
});

// GET ONE POST BY ID
postRoute.get("/posts/:id", async (req, res) => {
  getPostByIdController(req, res);
});

// UPDATE POSTS INFORMATIONS BY ID
postRoute.put("/posts/:id", (req, res) => {
  updatePostByIdController(req, res);
});

// DELETE POST BY ID
postRoute.delete("/posts/:id", (req, res) => {
  deletePostByIdController(req, res);
});
export default postRoute;
