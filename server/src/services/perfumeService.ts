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
    },
    getPerfumes: async (filters) => {
        const perfumes = await prisma.perfume.findMany({
            where: {
                ...(filters.brandId && {brandId: filters.brandId}),
                variants: {
                    some: {
                        ...(filters.size && {size: filters.size}),
                        ...(filters.concentration && {concentration: filters.concentration}),
                    }
                }
            },
            include:{
                variants: {
                    ...(filters.size && {size: filters.size}),
                    ...(filters.concentration && {concentration: filters.concentration}),
                }
            } 
        }) 
        return perfumes 
    }


}



