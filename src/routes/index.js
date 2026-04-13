import express from "../config/express.js";

const router = express.Router();

router.get("/", (req, res) => {
    res.status(200).json({ message: "API du laboratoire LABO 221", swagger: "/api-docs" });
});

router.use("/patients", patientRoutes);
router.use("/techniciens", technicienRoutes);
router.use("/analyses", analyseRoutes);
router.use("/prelevements", prelevementRoutes);

export default router;