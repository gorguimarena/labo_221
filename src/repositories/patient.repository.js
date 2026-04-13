import BaseRepository from "./base.repository";

class PatientRepository extends BaseRepository {
    constructor() {
        super("patient");
    }
}

export default PatientRepository;