import { Router } from "express";
import {
  changeCurrentPassword,
  getCurrentUser,
  login,
  logout,
  register,
  updateAccountDetails,
} from "../controllers/user.controller.js";
import { verifyJwt } from "../middlewares/auth.middleware.js";

const router = Router();

router.route("/register").post(register);
router.route("/login").post(login);
router.route("/logout").get(verifyJwt, logout);
router.route("/getuser").get(verifyJwt, getCurrentUser);
router.route("/changepassword").post(verifyJwt, changeCurrentPassword);
router.route("/updatedetails").patch(verifyJwt, updateAccountDetails);

export default router;
