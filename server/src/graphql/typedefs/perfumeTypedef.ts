export const PerfumeTypeDefs = `#graphql



  type Perfume {
    id: ID 
    name: String
  }

  input Variant {
    price: Int 
    size: Int 
    concentration: String
  }

  input PerfumeInput {
    name: String
    description: String
    brandId: ID
    variants: [Variant]
  }

  type Query {
    test: String
  }
  type Mutation {
    createPerfume(input: PerfumeInput): Perfume
  }
`;

             