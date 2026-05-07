import { keys } from "../models/keys.models.js";
import BaseRepository from "./base.repository.js";

class PatientRepository extends BaseRepository {
    constructor() {
        super(keys.patient);
    }
}

export default PatientRepository;