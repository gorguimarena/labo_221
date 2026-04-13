import z from "../config/zod.js";

const createPatientSchema = z.object({
    prenom: z.string().min(1, "Le prénom est requis"),
    nom: z.string().min(1, "Le nom est requis"),
    dateNaissance: z.coerce.date().max(new Date(), "La date de naissance doit être inférieure ou égale à aujourd'hui"),
    telephone: z.string().min(1, "Le téléphone est requis").optional(),
    email: z.string().email("L'email est invalide"),
});

const updatePatientSchema = z.object({
    prenom: z.string().min(1, "Le prénom est requis").optional(),
    nom: z.string().min(1, "Le nom est requis").optional(),
    dateNaissance: z.coerce.date().max(new Date(), "La date de naissance doit être inférieure ou égale à aujourd'hui").optional(),
    telephone: z.string().min(1, "Le téléphone est requis").optional(),
    email: z.string().email("L'email est invalide").optional(),
});

export { createPatientSchema, updatePatientSchema };
