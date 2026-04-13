import z from "../config/zod";

const createPatientSchema = z.object({
    prenom: z.string().min(1, "Le prénom est requis"),
    nom: z.string().min(1, "Le nom est requis"),
    dateNaissance: z.string().min(1, "La date de naissance est requise"),
    telephone: z.string().min(1, "Le téléphone est requis"),
    email: z.string().min(1, "L'email est requis"),
});

const updatePatientSchema = z.object({
    prenom: z.string().min(1, "Le prénom est requis").optional(),
    nom: z.string().min(1, "Le nom est requis").optional(),
    dateNaissance: z.string().min(1, "La date de naissance est requise").optional(),
    telephone: z.string().min(1, "Le téléphone est requis").optional(),
    email: z.string().min(1, "L'email est requis").optional(),
});

export { createPatientSchema, updatePatientSchema };
