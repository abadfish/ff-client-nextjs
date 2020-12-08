import { useMemo } from 'react'
import { ApolloClient, ApolloProvider, createHttpLink, InMemoryCache } from '@apollo/client'
import Head from 'next/head'
import fetch from 'isomorphic-unfetch'
// import { InMemoryCache } from 'apollo-cache-inmemory'
// import { HttpLink } from 'apollo-link-http'


export function withApollo (PageComponent) {

  const WithApollo = ({ apolloClient, apolloState, ...pageProps }) => {

    const client = apolloClient || initApolloClient(apolloState)

    return (
      <ApolloProvider client={client}>
        <PageComponent {...pageProps}/>
      </ApolloProvider>
    )
  }

  // if (process.env.NODE_ENV !== 'production') {
  //   const displayName =
  //     PageComponent.displayName || PageComponent.name || 'Component'
  //
  //   if (displayName === 'App') {
  //     console.warn('This withApollo HOC only works with PageComponents.')
  //   }
  //
  //   WithApollo.displayName = `withApollo(${displayName})`
  // }

  // if (ssr || PageComponent.getInitialProps) {
    WithApollo.getInitialProps = async (ctx) => {
      const { AppTree } = ctx
      const apolloClient = (ctx.apolloClient = initApolloClient())

      let pageProps = {}
      if (PageComponent.getInitialProps) {
        pageProps = await PageComponent.getInitialProps(ctx)
      }

      // if on server
      if (typeof window === 'undefined') {
        if (ctx.res && ctx.res.finished) {
          return pageProps
        }

        // if (ssr) {
          try {
            const { getDataFromTree } = await import('@apollo/react-ssr')
            await getDataFromTree(
              <AppTree
                pageProps={{
                  ...pageProps,
                  apolloClient
                }}
              />
            )
          } catch (e) {
            console.error('Error while running `getDataFromTree`', e)
          }
          Head.rewind()
        // }
      }

      const apolloState = apolloClient.cache.extract()
      return {
        ...pageProps,
        apolloState
      }
    }
  // }
  return WithApollo
}

const initApolloClient = (initialState = {}) => {
  const url = "http://localhost:3000"
  const ssrMode = typeof window === "undefined";

  const link = new createHttpLink({
    uri: `${url}/api/graphql`,
    fetch,
  })

  const cache = new InMemoryCache().restore(initialState);

  const client = new ApolloClient({
    ssrMode,
    link,
    cache,
  })

  return client
}

// /**
//  * Always creates a new apollo client on the server
//  * Creates or reuses apollo client in the browser.
//  * @param  {Object} initialState
//  */
// function initApolloClient (initialState) {
//   // Make sure to create a new client for every server-side request so that data
//   // isn't shared between connections (which would be bad)
//   if (typeof window === 'undefined') {
//     return createApolloClient(initialState)
//   }
//
//   // Reuse client on the client-side
//   if (!apolloClient) {
//     apolloClient = createApolloClient(initialState)
//   }
//
//   return apolloClient
// }
//
// /**
//  * Creates and configures the ApolloClient
//  * @param  {Object} [initialState={}]
//  */
// function createApolloClient (initialState = {}) {
//   // Check out https://github.com/zeit/next.js/pull/4611 if you want to use the AWSAppSyncClient
//   return new ApolloClient({
//     ssrMode: typeof window === 'undefined', // Disables forceFetch on the server (so queries are only run once)
//     link: new HttpLink({
//       uri: 'http://localhost:3000/api/graphql',
//       // credentials: 'same-origin', // Additional fetch() options like `credentials` or `headers`
//       fetch
//     }),
//     cache: new InMemoryCache().restore(initialState)
//   })
// }
