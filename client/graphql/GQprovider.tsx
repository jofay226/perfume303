"use client";
import { ReactNode } from "react";
import { ApolloClient, HttpLink, InMemoryCache } from "@apollo/client";
import { ApolloProvider } from "@apollo/client/react";

function GQprovider({ children }: { children: ReactNode }) {
  const client = new ApolloClient({
    link: new HttpLink({ uri: "http://localhost:4000/" }),
    cache: new InMemoryCache(),
  });

  return <ApolloProvider client={client}>{children}</ApolloProvider>;
}

export default GQprovider;
