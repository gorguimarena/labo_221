import AnalyseRepository from "../repositories/analyse.repository.js";
import PrelevementRepository from "../repositories/prelevement.repository.js";

const analyseRepository = new AnalyseRepository();
const prelevementRepository = new PrelevementRepository();

class AnalyseService {
    async create(data) {
        // Vérification unicité code
        const existing = await analyseRepository.findFirst({ code: data.code });
        if (existing) {
            throw new Error("le code de l'analyse est déjà utilisé");
        }
        return await analyseRepository.create(data);
    }

    async findAll() {
        return await analyseRepository.findAll();
    }

    async findById(id) {
        return await analyseRepository.findById(id);
    }

    async delete(id) {
        // Interdire suppression si prélèvements existent
        const prelevements = await prelevementRepository.findFirst({
            analyseId: id
        });

        if (prelevements) {
            throw new Error("Impossible de supprimer une analyse liée à des prélèvements");
        }

        return await analyseRepository.delete(id);
    }
}

export default new AnalyseService();
