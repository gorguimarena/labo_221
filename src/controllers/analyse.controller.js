import analyseService from "../services/analyse.service.js";
import { createAnalyseSchema } from "../validations/analyse.schema.js";

class AnalyseController {
    async create(req, res) {
        try {
            const validatedData = createAnalyseSchema.parse(req.body);
            const analyse = await analyseService.create(validatedData);
            return res.status(201).json(analyse);
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
            await analyseService.delete(id);
            return res.status(204).send();
        } catch (error) {
            return res.status(400).json({ error: error.message });
        }
    }
}

export default new AnalyseController();
