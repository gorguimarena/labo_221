import prisma from "../config/prisma";

class BaseRepository {
    constructor(model) {
        this.prisma = prisma;
        this.model = model;
    }

    async create(data) {
        return this.prisma[this.model].create({ data });
    }

    async findAll() {
        return this.prisma[this.model].findMany();
    }

    async findById(id) {
        return this.prisma[this.model].findUnique({ where: { id } });
    }

    async update(id, data) {
        return this.prisma[this.model].update({ where: { id }, data });
    }

    async delete(id) {
        return this.prisma[this.model].delete({ where: { id } });
    }
}

export default BaseRepository;