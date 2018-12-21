const graphql = require("graphql")

// destructuring
const { GraphQLObjectType, GraphQLString, GraphQLSchema } = graphql

// define types
const BookType = new GraphQLObjectType({
    name: "Book",
    fields: () => ({
        id: { type: GraphQLString},
        name: { type: GraphQLString},
        genre: { type: GraphQLString}
    })
})

// define root query
const RootQuery = new GraphQLObjectType({
    name: "RootQueryType",
    fields: {
        book: {
            type: BookType,
            args: { id: {type: GraphQLString}},
            resolve(parent, args) {
                // get data from source - e.g. db
            }
        }
    }
})

module.exports = new GraphQLSchema({
    query: RootQuery
})
