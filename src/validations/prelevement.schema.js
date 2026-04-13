import z from "../config/zod.js";

const createPrelevementSchema = z.object({
    patientId: z.number().int("L'ID patient doit être un entier"),
    technicienId: z.number().int("L'ID technicien doit être un entier"),
    analyseId: z.number().int("L'ID analyse doit être un entier"),
    datePrelevement: z.coerce.date().max(new Date(), "La date de prélèvement ne peut pas être dans le futur"),
    statut: z.enum(["EN_ATTENTE", "EN_COURS", "TERMINE"]).optional(),
});

const updatePrelevementSchema = z.object({
    patientId: z.number().int("L'ID patient doit être un entier").optional(),
    technicienId: z.number().int("L'ID technicien doit être un entier").optional(),
    analyseId: z.number().int("L'ID analyse doit être un entier").optional(),
    datePrelevement: z.coerce.date().max(new Date(), "La date de prélèvement ne peut pas être dans le futur").optional(),
    statut: z.enum(["EN_ATTENTE", "EN_COURS", "TERMINE"]).optional(),
});

export { createPrelevementSchema, updatePrelevementSchema };
