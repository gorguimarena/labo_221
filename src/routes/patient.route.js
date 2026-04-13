import express from "express";
import patientController from "../controllers/patient.controller.js";

const router = express.Router();

router.post("/", patientController.create);
router.delete("/:id", patientController.delete);

export default router;
