import { ApolloClient, HttpLink, InMemoryCache } from "@apollo/client";

const client = new ApolloClient({
    link: new HttpLink({ uri: import.meta.env.VITE_GRAPHQL_API }),
    cache: new InMemoryCache(),
})

export default client