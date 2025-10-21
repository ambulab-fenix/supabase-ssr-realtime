import { Router } from "express";
import controller from "../controller/ambulance";

const router = Router();

router.get("/watch", controller.watch);

export default router;
