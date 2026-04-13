import express from "../config/express";

const router = express.Router();

router.get("/", (req, res) => {
    res.status(200).json({ message: "API du laboratoire LABO 221 - Gestion des prélèvements" });
});

router.post("/", (req, res) => {
    res.status(200).json({ message: "API du laboratoire LABO 221 - Gestion des prélèvements" });
});

router.put("/:id", (req, res) => {
    res.status(200).json({ message: "API du laboratoire LABO 221 - Gestion des prélèvements" });
});

router.delete("/:id", (req, res) => {
    res.status(200).json({ message: "API du laboratoire LABO 221 - Gestion des prélèvements" });
});

export default router;