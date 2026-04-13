import prelevementService from "../services/prelevement.service.js";
import { createPrelevementSchema } from "../validations/prelevement.schema.js";

class PrelevementController {
    async create(req, res) {
        try {
            const validatedData = createPrelevementSchema.parse(req.body);
            const prelevement = await prelevementService.create(validatedData);
            return res.status(201).json(prelevement);
        } catch (error) {
            if (error.name === 'ZodError') {
                return res.status(400).json({ errors: error.errors });
            }
            return res.status(400).json({ error: error.message });
        }
    }
}

export default new PrelevementController();
