import PatientRepository from "../repositories/patient.repository.js";
import PrelevementRepository from "../repositories/prelevement.repository.js";

const patientRepository = new PatientRepository();
const prelevementRepository = new PrelevementRepository();

class PatientService {
    async create(data) {
        // Vérification unicité email
        const existing = await patientRepository.findFirst({ email: data.email });
        if (existing) {
            throw new Error("un email similaire est déjà utilisé");
        }
        return await patientRepository.create(data);
    }

    async findAll() {
        return await patientRepository.findAll();
    }

    async findById(id) {
        return await patientRepository.findById(id);
    }

    async delete(id) {
        // Interdire suppression si prélèvements existent
        const prelevements = await prelevementRepository.findFirst({
            patientId: id
        });

        if (prelevements) {
            throw new Error("Impossible de supprimer un patient ayant des prélèvements");
        }

        return await patientRepository.delete(id);
    }
}

export default new PatientService();
