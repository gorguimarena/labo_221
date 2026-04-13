import technicienService from "../services/technicien.service.js";
import { createTechnicienSchema } from "../validations/technicien.shcema.js";

class TechnicienController {
    async create(req, res) {
        try {
            const validatedData = createTechnicienSchema.parse(req.body);
            const technicien = await technicienService.create(validatedData);
            return res.status(201).json(technicien);
        } catch (error) {
            if (error.name === 'ZodError') {
                return res.status(400).json({ errors: error.errors });
            }
            return res.status(400).json({ error: error.message });
        }
    }

    async delete(req, res) {
        try {
            const id = parseInt(req.params.id);
            await technicienService.delete(id);
            return res.status(204).send();
        } catch (error) {
            return res.status(400).json({ error: error.message });
        }
    }
}

export default new TechnicienController();
