import prisma from "../libs/prisma.ts"

export const parfumeService = {
    createPerfume: async () => {
        const newBrand =  prisma.perfume.create({
            data: {
                name: "sport",
                description: "dksbjb kjgfdjb bgsjbsg gsdjb sjk bs bksjb gkj",
                brandId: "691821ac-ea3f-4cbd-854b-4a465ab13f72",
                variants: {
                    create: [
                        {price: 55, size: 50, concentration: "EDT"},
                        {price: 105, size:100, concentration: "EDP"},
                        {price: 159, size:150, concentration: "PERFUME"}
                    ]
                }
            }
        })
        return newBrand
    }
}


