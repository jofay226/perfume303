import { brandService } from "../../services/brandService.ts";

export const brandResolvers = {
  Query: {
    books: () => "fdksl",
  },
  Mutation: {
    createBrand: (_, {params}: {params: {name: string}}) => {
      const newBrand = brandService.createBrand(params.name)
      return newBrand
    },
  },
};








