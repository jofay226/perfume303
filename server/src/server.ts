import { ApolloServer } from '@apollo/server';
import { startStandaloneServer } from '@apollo/server/standalone';
import { BrandTypeDefs } from './graphql/typedefs/brandTypedef.ts';
import { brandResolvers } from './graphql/resolvers/brandResolver.ts';




const typeDefs = `#graphql
  type Query 
  type Mutation
  ${BrandTypeDefs}
`;

const resolvers = {
  Query: {
    ...brandResolvers.Query
  },
  Mutation: {
    ...brandResolvers.Mutation
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