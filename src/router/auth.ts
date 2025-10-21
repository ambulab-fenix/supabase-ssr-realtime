import { Router } from "express";
import controller from "../controller/auth";

const router = Router();

router.post("/signup", controller.signUp);
router.post("/signin", controller.signIn);
router.post("/signout", controller.signOut);

export default router;
