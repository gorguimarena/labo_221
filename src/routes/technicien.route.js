import express from "express";
import technicienController from "../controllers/technicien.controller.js";

const router = express.Router();

router.post("/", technicienController.create);
router.delete("/:id", technicienController.delete);

export default router;