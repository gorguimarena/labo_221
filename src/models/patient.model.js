class Patient {
    constructor(id, prenom, nom, dateNaissance, telephone, email, createdAt, updatedAt, deletedAt) {
        this.id = id;
        this.prenom = prenom;
        this.nom = nom;
        this.dateNaissance = dateNaissance;
        this.telephone = telephone;
        this.email = email;
        this.createdAt = createdAt;
        this.updatedAt = updatedAt;
        this.deletedAt = deletedAt;
    }

}

export default Patient;