import prisma from "../config/prisma.js";

class BaseRepository {
    constructor(model) {
        this.prisma = prisma;
        this.model = model;
    }

    async create(data) {
        return this.prisma[this.model].create({ data });
    }

    async findAll(args = {}) {
        return this.prisma[this.model].findMany(args);
    }

    async findById(id) {
        return this.prisma[this.model].findUnique({ where: { id } });
    }

    async findFirst(where) {
        return this.prisma[this.model].findFirst({ where });
    }

    async update(id, data) {
        return this.prisma[this.model].update({ where: { id }, data });
    }

    async delete(id) {
        return this.prisma[this.model].delete({ where: { id } });
    }
}

export default BaseRepository;