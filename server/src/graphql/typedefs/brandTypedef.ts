


export const BrandTypeDefs = `#graphql
  input Args {
    name: String!
  }
  
  type Brand {
    id: ID
    name: String
  }

  extend type Query {
    books: String
  }



  extend type Mutation {
    createBrand(params: Args): Brand
  }
`;