import { ApolloClient, InMemoryCache, } from "@apollo/client";
const client = new ApolloClient({
  uri: "https://admin.herocartoontshirt.com/graphql",
  cache: new InMemoryCache(),
  defaultOptions: defaultOptions,

});
const defaultOptions = {
  watchQuery: {
    fetchPolicy: 'no-cache',
    errorPolicy: 'ignore',
  },
  query: {
    fetchPolicy: 'no-cache',
    errorPolicy: 'all',
  },
}
export default client;
