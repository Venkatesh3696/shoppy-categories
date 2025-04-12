import express from "express";

import {
  checkUser,
  createUser,
  loginUser,
  LogoutUser,
} from "../controllers/users.controller.js";

const router = express.Router();

router.post("/signup", createUser);
router.post("/login", loginUser);
router.get("/check-user", checkUser);
router.post("/logout", LogoutUser);

export default router;
