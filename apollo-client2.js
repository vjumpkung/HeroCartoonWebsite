import { ApolloClient, InMemoryCache } from "@apollo/client";
const defaultOptions = {
  watchQuery: {
    fetchPolicy: "no-cache",
    errorPolicy: "ignore",
  },
  query: {
    fetchPolicy: "no-cache",
    errorPolicy: "all",
  },
};
const client2 = new ApolloClient({
  uri: "https://api-ap-northeast-1.graphcms.com/v2/ckzw7q2h43cda01z89rg1dr28/master",
  cache: new InMemoryCache(),
  defaultOptions: defaultOptions,
});
export default client2;
