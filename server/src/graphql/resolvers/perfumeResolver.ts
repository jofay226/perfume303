
import { parfumeService } from "../../services/perfumeService.ts";


export const PerfumeResolvers = {
  Query: {
    test: () => {
      return "test"
    },
  },

  Mutation: {
    createPerfume: async (_, {input}) => {
      const newPerfume =  await parfumeService.createPerfume(input);
      return newPerfume
    },
  }
};



