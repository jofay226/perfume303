import { brandService } from "../../services/brandService.ts";

export const brandResolvers = {
  Query: {
    getBrands: () => {
      const brands = brandService.brands();
      return brands
    },
  },
  Mutation: {
    createBrand: (_: any, {params}: {params: {name: string}}) => {
      const newBrand = brandService.createBrand(params.name)
      return newBrand
    },
  },
};







