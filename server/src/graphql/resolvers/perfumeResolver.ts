import { parfumeService } from "../../services/perfumeService.ts";


export const PerfumeResolvers = {
  Query: {
    test: () => {
      return "test"
    },
  },

  Mutation: {
    createPerfume: async () => {
      const newPerfume =  await parfumeService.createPerfume();
      console.log(newPerfume);
    
      return "success"
    },
  }
};