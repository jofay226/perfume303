
export const BrandTypeDefs = `#graphql
  input Args {
    name: String!
  }
  
  type Brand {
    id: ID
    name: String
  }

  extend type Query {
    getBrands: [Brand]
  }



  extend type Mutation {
    createBrand(params: Args): Brand
  }
`;