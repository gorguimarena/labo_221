import z from "../config/zod";

const createAnalyseSchema = z.object({
    code: z.string().min(1, "Le code est requis"),
    libelle: z.string().min(1, "Le libellé est requis"),
    prix: z.number().min(1, "Le prix est requis"),
    delaiResultat: z.number().min(1, "Le délai de résultat est requis"),
});

const updateAnalyseSchema = z.object({
    code: z.string().min(1, "Le code est requis").optional(),
    libelle: z.string().min(1, "Le libellé est requis").optional(),
    prix: z.number().min(1, "Le prix est requis").optional(),
    delaiResultat: z.number().min(1, "Le délai de résultat est requis").optional(),
});

export { createAnalyseSchema, updateAnalyseSchema };