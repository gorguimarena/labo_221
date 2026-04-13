import prisma from "../src/config/prisma.js";

async function main() {
  console.log("Début du seeding...");

  // Nettoyage de la base de données (optionnel, pour éviter les doublons au ré-exécution)
  await prisma.prelevement.deleteMany();
  await prisma.technicien.deleteMany();
  await prisma.patient.deleteMany();
  await prisma.analyse.deleteMany();

  console.log("Base de données nettoyée.");

  // 1. Seed Techniciens
  const technicien1 = await prisma.technicien.create({
    data: {
      prenom: "Ousmane",
      nom: "Sow",
      email: "ousmane.sow@labo221.sn",
      telephone: "771234567",
      qualification: "Biologiste"
    }
  });

  const technicien2 = await prisma.technicien.create({
    data: {
      prenom: "Amina",
      nom: "Fall",
      email: "amina.fall@labo221.sn",
      telephone: "761234567",
      qualification: "Technicienne de laboratoire"
    }
  });

  // 2. Seed Patients
  const patient1 = await prisma.patient.create({
    data: {
      prenom: "Modou",
      nom: "Diop",
      email: "modou.diop@gmail.com",
      telephone: "778889900",
      dateNaissance: new Date("1990-05-15T00:00:00Z"),
    }
  });

  const patient2 = await prisma.patient.create({
    data: {
      prenom: "Fatou",
      nom: "Ndiaye",
      email: "fatou.ndiaye@yahoo.fr",
      telephone: "765554433",
      dateNaissance: new Date("1985-11-20T00:00:00Z"),
    }
  });

  // 3. Seed Analyses
  const analyse1 = await prisma.analyse.create({
    data: {
      code: "GLY-01",
      libelle: "Glycémie à jeun",
      prix: 3000.0,
      delaiResultat: 12
    }
  });

  const analyse2 = await prisma.analyse.create({
    data: {
      code: "NFS-01",
      libelle: "Numération Formule Sanguine",
      prix: 5000.0,
      delaiResultat: 24
    }
  });

  const analyse3 = await prisma.analyse.create({
    data: {
      code: "CHO-01",
      libelle: "Cholestérol Total",
      prix: 4000.0,
      delaiResultat: 12
    }
  });

  // 4. Seed Prelevements
  await prisma.prelevement.create({
    data: {
      patientId: patient1.id,
      technicienId: technicien1.id,
      analyseId: analyse1.id,
      datePrelevement: new Date("2023-12-01T08:00:00Z"),
      statut: "TERMINE",
      dateResultat: new Date("2023-12-01T16:00:00Z")
    }
  });

  await prisma.prelevement.create({
    data: {
      patientId: patient2.id,
      technicienId: technicien2.id,
      analyseId: analyse2.id,
      datePrelevement: new Date(),
      statut: "EN_ATTENTE"
    }
  });

  console.log("Seeding terminé avec succès !");
  console.log("2 Techniciens, 2 Patients, 3 Analyses et 2 Prélèvements générés.");
}

main()
  .catch((e) => {
    console.error("Erreur durant le seeding:", e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
