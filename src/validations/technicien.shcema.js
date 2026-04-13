import z from "../config/zod";

const createTechnicienSchema = z.object({
    prenom: z.string().min(1, "Le prénom est requis"),
    nom: z.string().min(1, "Le nom est requis"),
    email: z.string().email("L'email est invalide"),
    telephone: z.string().min(1, "Le téléphone est requis"),
    qualification: z.string().min(1, "La qualification est requise"),
});

const updateTechnicienSchema = z.object({
    prenom: z.string().min(1, "Le prénom est requis").optional(),
    nom: z.string().min(1, "Le nom est requis").optional(),
    email: z.string().min(1, "L'email est requis").optional(),
    telephone: z.string().min(1, "Le téléphone est requis").optional(),
    qualification: z.string().min(1, "La qualification est requise").optional(),
});

export { createTechnicienSchema, updateTechnicienSchema };