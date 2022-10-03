import { ApolloClient, InMemoryCache } from "@apollo/client";

export const client = new ApolloClient({
  uri: "https://api-sa-east-1.hygraph.com/v2/cl8t1uf1w46zv01uq34b70o5h/master",
  cache: new InMemoryCache()
})