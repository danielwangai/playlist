const express = require("express");
const graphqlHTTP = require("express-graphql");

const schema = require("./schema/schema")

const app = express()

// graphql middleware
app.use("/graphql", graphqlHTTP({
    // pass graphql schema
    schema, //schema: schema
    graphiql: true// test graphql
}));

app.listen(5000, () => {
    console.log("Listening on port 5000")
})
