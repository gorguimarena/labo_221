import BaseRepository from "./base.repository.js";
import { keys } from "../models/keys.models.js";

class TechnicienRepository extends BaseRepository {
    constructor() {
        super(keys.technicien);
    }
}

export default TechnicienRepository;