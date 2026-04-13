import z from "../config/zod";

const createPrelevementSchema = z.object({
    patientId: z.string().min(1, "Le patient est requis"),
    technicienId: z.string().min(1, "Le technicien est requis"),
    analyseId: z.string().min(1, "L'analyse est requise"),
    datePrelevement: z.string().min(1, "La date de prélèvement est requise"),
    statut: z.enum(["EN_ATTENTE", "EN_COURS", "TERMINE"]),
});

const updatePrelevementSchema = z.object({
    patientId: z.string().min(1, "Le patient est requis").optional(),
    technicienId: z.string().min(1, "Le technicien est requis").optional(),
    analyseId: z.string().min(1, "L'analyse est requise").optional(),
    datePrelevement: z.string().min(1, "La date de prélèvement est requise").optional(),
    statut: z.enum(["EN_ATTENTE", "EN_COURS", "TERMINE"]).optional(),
});

export { createPrelevementSchema, updatePrelevementSchema };
