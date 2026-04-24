import { parfumeService } from "../../services/perfumeService.ts";


export const PerfumeResolvers = {
  Query: {
    test: () => {
      return "test"
    },
  },

  Mutation: {
    createPerfume: async (_, args) => {
      console.log(args);
    
      // const newPerfume =  await parfumeService.createPerfume();
      // console.log(newPerfume);
    
      return {id: "fakeID", name: "fakeName"}
    },
  }
};