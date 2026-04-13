import TechnicienRepository from "../repositories/technicien.repository.js";
import PrelevementRepository from "../repositories/prelevement.repository.js";

const technicienRepository = new TechnicienRepository();
const prelevementRepository = new PrelevementRepository();

class TechnicienService {
    async create(data) {
        // Vérification unicité email
        const existing = await technicienRepository.findFirst({ email: data.email });
        if (existing) {
            throw new Error("un email similaire est déjà utilisé");
        }
        return await technicienRepository.create(data);
    }

    async findAll() {
        return await technicienRepository.findAll();
    }

    async findById(id) {
        return await technicienRepository.findById(id);
    }

    async delete(id) {
        // Interdire suppression si prélèvements EN_COURS
        const prelevements = await prelevementRepository.findAll({
            where: {
                technicienId: id,
                statut: "EN_COURS"
            }
        });

        if (prelevements && prelevements.length > 0) {
            throw new Error("Impossible de supprimer un technicien ayant des prélèvements EN_COURS");
        }

        return await technicienRepository.delete(id);
    }
}

export default new TechnicienService();
