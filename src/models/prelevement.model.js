class Prelevement {

    constructor(id, patient, technicien, analyse, datePrelevement, dateResultat, statut, createdAt, updatedAt, deletedAt) {
        this.id = id;
        this.patient = patient;
        this.technicien = technicien;
        this.analyse = analyse;
        this.datePrelevement = datePrelevement;
        this.dateResultat = dateResultat;
        this.statut = statut;
        this.createdAt = createdAt;
        this.updatedAt = updatedAt;
        this.deletedAt = deletedAt;
    }
    
}

export default Prelevement;
