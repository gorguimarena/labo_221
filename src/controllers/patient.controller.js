import patientService from "../services/patient.service.js";
import { createPatientSchema } from "../validations/patient.schema.js";

class PatientController {
    async create(req, res) {
        try {
            const validatedData = createPatientSchema.parse(req.body);
            const patient = await patientService.create(validatedData);
            return res.status(201).json(patient);
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
            await patientService.delete(id);
            return res.status(204).send();
        } catch (error) {
            return res.status(400).json({ error: error.message });
        }
    }
}

export default new PatientController();
