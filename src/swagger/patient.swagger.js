/**
 * @swagger
 * tags:
 *   name: Patients
 *   description: API de gestion des patients
 */

/**
 * @swagger
 * components:
 *   schemas:
 *     Patient:
 *       type: object
 *       required:
 *         - prenom
 *         - nom
 *         - email
 *         - dateNaissance
 *       properties:
 *         id:
 *           type: integer
 *         prenom:
 *           type: string
 *         nom:
 *           type: string
 *         email:
 *           type: string
 *           format: email
 *         telephone:
 *           type: string
 *         dateNaissance:
 *           type: string
 *           format: date-time
 *           description: Date de naissance du patient (doit être passée ou présente).
 *       example:
 *         prenom: "Moussa"
 *         nom: "Ndiaye"
 *         email: "moussa.ndiaye@example.com"
 *         telephone: "778901234"
 *         dateNaissance: "1985-10-12T00:00:00Z"
 */

/**
 * @swagger
 * /api/patients:
 *   post:
 *     summary: Créer un patient
 *     tags: [Patients]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Patient'
 *     responses:
 *       201:
 *         description: Patient créé avec succès.
 *       400:
 *         description: Erreur de format (ex dateNaissance future) ou email pris.
 */

/**
 * @swagger
 * /api/patients/{id}:
 *   delete:
 *     summary: Supprimer un patient
 *     description: Supprime un patient. Interdit si le patient possède déjà des prélèvements.
 *     tags: [Patients]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: integer
 *         required: true
 *         description: Identifiant du patient
 *     responses:
 *       204:
 *         description: Suppression réussie.
 *       400:
 *         description: Impossible de supprimer car un prélèvement dépendant existe.
 */
