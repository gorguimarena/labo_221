import z from "../config/zod.js";

const createAnalyseSchema = z.object({
    libelle: z.string().min(1, "Le libellé est requis"),
    prix: z.number().positive("Le prix doit être supérieur à 0"),
    delaiResultat: z.number().int("Le délai doit être un entier").positive("Le délai doit être supérieur à 0"),
});

const updateAnalyseSchema = z.object({
    code: z.string().min(1, "Le code est requis").optional(),
    libelle: z.string().min(1, "Le libellé est requis").optional(),
    prix: z.number().positive("Le prix doit être supérieur à 0").optional(),
    delaiResultat: z.number().int("Le délai doit être un entier").positive("Le délai doit être supérieur à 0").optional(),
});

export { createAnalyseSchema, updateAnalyseSchema };