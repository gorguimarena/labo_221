import express from "../config/express.js";

const router = express.Router();

router.get("/", (req, res) => {
    res.status(200).json({ message: "API du laboratoire LABO 221", swagger: "/api-docs" });
});

export default router;