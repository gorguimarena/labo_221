/**
 * @swagger
 * tags:
 *   name: Prelevements
 *   description: API d'enregistrement des prélèvements
 */

/**
 * @swagger
 * components:
 *   schemas:
 *     Prelevement:
 *       type: object
 *       required:
 *         - patientId
 *         - technicienId
 *         - analyseId
 *         - datePrelevement
 *       properties:
 *         id:
 *           type: integer
 *         patientId:
 *           type: integer
 *           description: ID du Patient concerné
 *         technicienId:
 *           type: integer
 *           description: ID du Technicien désigné
 *         analyseId:
 *           type: integer
 *           description: ID du type d'analyse
 *         datePrelevement:
 *           type: string
 *           format: date-time
 *           description: La date du prélèvement (doit être passée ou présente)
 *       example:
 *         patientId: 1
 *         technicienId: 1
 *         analyseId: 1
 *         datePrelevement: "2023-11-20T08:30:00Z"
 */

/**
 * @swagger
 * /api/prelevements:
 *   post:
 *     summary: Enregistrer un nouveau prélèvement
 *     description: Crée un prélèvement pour un patient avec statut par défaut `EN_ATTENTE`. Vérifie que le patient ne possède pas déjà un prélèvement EN_ATTENTE pour la même analyse.
 *     tags: [Prelevements]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Prelevement'
 *     responses:
 *       201:
 *         description: Prélèvement enregistré avec succès.
 *       400:
 *         description: Identifiants inexistants, doublon (EN_ATTENTE pour le même patient/analyse), ou date future.
 */
