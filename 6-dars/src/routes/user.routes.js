import { Router } from "express";
import addUserController from "../controllers/add.user.controller.js";
import getAllUsersController from "../controllers/get.all.users.controller.js";
import getUserByIdController from "../controllers/getUserById.controller.js";
import updateUserInfoController from "../controllers/update.user.controller.js";
import deleteUserByIdcontroller from "../controllers/delete.user.byID.controller.js";
const userRoute = Router();

//    ADD USER ROUTE
userRoute.post("/users", (req, res) => {
  addUserController(req, res);
});
export default userRoute;

//    GET ALL USERS
userRoute.get("/users", (req, res) => {
  getAllUsersController(req, res);
});

//   GET USER BY ID
userRoute.get("/users/:id", (req, res) => {
  getUserByIdController(req, res);
});

//    UPDATE USER INFORMATIONS BY ID
userRoute.put("/users/:id", async (req, res) => {
  updateUserInfoController(req, res);
});

//    DELETE USER BY ID ROUTE
userRoute.delete("/users/:id", (req, res) => {
  deleteUserByIdcontroller(req, res);
});
