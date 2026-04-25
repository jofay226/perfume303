import prisma from "../libs/prisma.ts"

export const parfumeService = {
    createPerfume: async ({name, description, brandId, variants}) => {
        const newBrand =  prisma.perfume.create({
            data: {
                name,
                description,
                brandId,
                variants: {
                    create: variants
                }
            }
        })
        return newBrand
    }
}



