import express from "express";
import analyseController from "../controllers/analyse.controller.js";

const router = express.Router();

router.post("/", analyseController.create);
router.delete("/:id", analyseController.delete);

export default router;