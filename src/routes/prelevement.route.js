import express from "express";
import prelevementController from "../controllers/prelevement.controller.js";

const router = express.Router();

router.post("/", prelevementController.create);

export default router;