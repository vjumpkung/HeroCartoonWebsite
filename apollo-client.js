import { ApolloClient, InMemoryCache, } from "@apollo/client";
const client = new ApolloClient({
  uri: "https://admin.herocartoontshirt.com/graphql",
});
export default client;
