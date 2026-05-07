import { keys } from "../models/keys.models.js";
import BaseRepository from "./base.repository.js";

class PrelevementRepository extends BaseRepository {
    constructor() {
        super(keys.prelevement);
    }
}

export default PrelevementRepository;