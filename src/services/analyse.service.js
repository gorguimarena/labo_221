import AnalyseRepository from "../repositories/analyse.repository.js";
import PrelevementRepository from "../repositories/prelevement.repository.js";
import crypto from "crypto";

const analyseRepository = new AnalyseRepository();
const prelevementRepository = new PrelevementRepository();

class AnalyseService {
    async create(data) {
        let isUnique = false;
        let generatedCode;

        // Génération d'un code unique
        while (!isUnique) {
            generatedCode = `ANA-${crypto.randomBytes(3).toString("hex").toUpperCase()}`;
            const existing = await analyseRepository.findFirst({ code: generatedCode });
            if (!existing) {
                isUnique = true;
            }
        }

        data.code = generatedCode;
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
