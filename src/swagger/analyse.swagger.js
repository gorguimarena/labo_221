/**
 * @swagger
 * tags:
 *   name: Analyses
 *   description: API de gestion des types d'analyses
 */

/**
 * @swagger
 * components:
 *   schemas:
 *     Analyse:
 *       type: object
 *       required:
 *         - code
 *         - libelle
 *         - prix
 *         - delaiResultat
 *       properties:
 *         id:
 *           type: integer
 *         code:
 *           type: string
 *           description: Code unique de l'analyse
 *         libelle:
 *           type: string
 *           description: Intitulé (ex NFS, glycémie)
 *         prix:
 *           type: number
 *           format: float
 *           description: Prix de l'analyse (doit être > 0)
 *         delaiResultat:
 *           type: integer
 *           description: Délai du résultat en heures (entier > 0)
 *       example:
 *         code: "GLY-01"
 *         libelle: "Glycémie à jeun"
 *         prix: 5000.0
 *         delaiResultat: 24
 */

/**
 * @swagger
 * /api/analyses:
 *   post:
 *     summary: Créer un type d'analyse
 *     tags: [Analyses]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Analyse'
 *     responses:
 *       201:
 *         description: Analyse enregistrée avec succès.
 *       400:
 *         description: Données invalides ou code déjà utilisé.
 */

/**
 * @swagger
 * /api/analyses/{id}:
 *   delete:
 *     summary: Supprimer un type d'analyse
 *     description: Supprime une analyse. Interdit s'il existe des prélèvements liés.
 *     tags: [Analyses]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: integer
 *         required: true
 *         description: Identifiant de l'analyse
 *     responses:
 *       204:
 *         description: "Suppression réussie."
 *       400:
 *         description: "Impossible de supprimer : des historiques de prélèvement existent."
 */
