import { ApolloServer, gql } from 'apollo-server-micro'

const typeDefs = gql `
  type Query {
    sayHello: String
  }
`

const resolvers = {
  Query: {
    sayHello: () => {
      return "Hello Master"
    }
  }
}

const apolloServer = new ApolloServer({ typeDefs, resolvers })

export const config = {
  api: {
    bodyParser: false
  }
}

export default apolloServer.createHandler({ path: "/api/graphql" })



// SHORT WAY
// export default (req, res) => {
//   res.status(200).json({
//     test: "Hello Master"
//   })
// }

// LONG WAY
// export default (req, res) => {
//   res.setHeader('Content-Type', 'application/json')
//   res.statusCode = 200
//   res.end(JSON.stringify({
//     test: "Hello Master"
//   }))
// }
