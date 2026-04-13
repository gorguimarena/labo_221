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
        return this.prisma[this.model].findMany({
            ...args,
            where: {
                ...(args.where || {}),
                deletedAt: null
            }
        });
    }

    async findById(id) {
        return this.prisma[this.model].findFirst({
            where: { 
                id, 
                deletedAt: null 
            } 
        });
    }

    async findFirst(where) {
        return this.prisma[this.model].findFirst({ 
            where: {
                ...where,
                deletedAt: null
            }
        });
    }

    async update(id, data) {
        return this.prisma[this.model].update({ where: { id }, data });
    }

    async delete(id) {
        return this.prisma[this.model].update({ 
            where: { id },
            data: { deletedAt: new Date() }
        });
    }
}

export default BaseRepository;