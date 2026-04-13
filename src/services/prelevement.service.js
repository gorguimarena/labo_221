import PrelevementRepository from "../repositories/prelevement.repository.js";
import PatientRepository from "../repositories/patient.repository.js";
import TechnicienRepository from "../repositories/technicien.repository.js";
import AnalyseRepository from "../repositories/analyse.repository.js";

const prelevementRepository = new PrelevementRepository();
const patientRepository = new PatientRepository();
const technicienRepository = new TechnicienRepository();
const analyseRepository = new AnalyseRepository();

class PrelevementService {
    async create(data) {
        // Vérifier existence patient
        const patient = await patientRepository.findById(data.patientId);
        if (!patient) throw new Error("Le patient spécifié n'existe pas");

        // Vérifier existence technicien
        const technicien = await technicienRepository.findById(data.technicienId);
        if (!technicien) throw new Error("Le technicien spécifié n'existe pas");

        // Vérifier existence analyse
        const analyse = await analyseRepository.findById(data.analyseId);
        if (!analyse) throw new Error("Le type d'analyse spécifié n'existe pas");

        // Vérifier doublon (patientId, analyseId) EN_ATTENTE
        const existingEnAttente = await prelevementRepository.findFirst({
            patientId: data.patientId,
            analyseId: data.analyseId,
            statut: "EN_ATTENTE"
        });

        if (existingEnAttente) {
            throw new Error("Le patient possède déjà un prélèvement en attente pour ce type d'analyse");
        }

        // Créer avec statut = EN_ATTENTE
        const prelevementData = {
            ...data,
            statut: "EN_ATTENTE"
        };

        return await prelevementRepository.create(prelevementData);
    }

    async findAll() {
        return await prelevementRepository.findAll();
    }

    async findById(id) {
        return await prelevementRepository.findById(id);
    }
}

export default new PrelevementService();
