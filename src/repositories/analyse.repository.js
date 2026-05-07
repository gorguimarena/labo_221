import { keys } from "../models/keys.models.js";
import BaseRepository from "./base.repository.js";

class AnalyseRepository extends BaseRepository {
    constructor() {
        super(keys.analyse);
    }
}

export default AnalyseRepository;