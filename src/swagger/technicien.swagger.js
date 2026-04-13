/**
 * @swagger
 * tags:
 *   name: Techniciens
 *   description: API de gestion des techniciens
 */

/**
 * @swagger
 * components:
 *   schemas:
 *     Technicien:
 *       type: object
 *       required:
 *         - prenom
 *         - nom
 *         - email
 *         - qualification
 *       properties:
 *         id:
 *           type: integer
 *           description: Identifiant unique du technicien
 *         prenom:
 *           type: string
 *         nom:
 *           type: string
 *         email:
 *           type: string
 *           format: email
 *         telephone:
 *           type: string
 *         qualification:
 *           type: string
 *           description: La qualification professionnelle du technicien
 *       example:
 *         prenom: "Awa"
 *         nom: "Diop"
 *         email: "awa.diop@labo.sn"
 *         telephone: "771234567"
 *         qualification: "Ingénieur biomédical"
 */

/**
 * @swagger
 * /api/techniciens:
 *   post:
 *     summary: Créer un technicien
 *     tags: [Techniciens]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Technicien'
 *     responses:
 *       201:
 *         description: Technicien créé avec succès.
 *       400:
 *         description: L'email est déjà utilisé ou les données envoyées sont invalides (ex erreur Zod).
 */

/**
 * @swagger
 * /api/techniciens/{id}:
 *   delete:
 *     summary: Supprimer un technicien
 *     description: Supprime un technicien. Interdit si le technicien possède des prélèvements EN_COURS.
 *     tags: [Techniciens]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: integer
 *         required: true
 *         description: Identifiant du technicien à supprimer
 *     responses:
 *       204:
 *         description: Technicien supprimé avec succès (aucun contenu retourné).
 *       400:
 *         description: Impossible de supprimer le technicien en raison de l'existence de prélèvements EN_COURS ou ID non trouvé.
 */
