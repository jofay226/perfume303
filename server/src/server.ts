import { ApolloServer } from '@apollo/server';
import { startStandaloneServer } from '@apollo/server/standalone';
import { BrandTypeDefs } from './graphql/typedefs/brandTypedef.ts';
import { brandResolvers } from './graphql/resolvers/brandResolver.ts';
import { PerfumeTypeDefs } from './graphql/typedefs/perfumeTypedef.ts';
import { PerfumeResolvers } from './graphql/resolvers/perfumeResolver.ts';




const typeDefs = `#graphql
  type Query 
  type Mutation
  ${BrandTypeDefs}
  ${PerfumeTypeDefs}
`;

const resolvers = {
  Query: {
    ...brandResolvers.Query,
    ...PerfumeResolvers.Query
  },
  Mutation: {
    ...brandResolvers.Mutation,
    ...PerfumeResolvers.Mutation
  }
};

const server = new ApolloServer({
  typeDefs,
  resolvers,
});



const { url } = await startStandaloneServer(server, {
  listen: { port: 4000 },
});

console.log(`🚀  Server ready at: ${url}`);