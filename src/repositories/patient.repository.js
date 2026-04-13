import BaseRepository from "./base.repository.js";

class PatientRepository extends BaseRepository {
    constructor() {
        super("patient");
    }
}

export default PatientRepository;