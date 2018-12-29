require("dotenv").config()
const express = require("express");
const graphqlHTTP = require("express-graphql");
const mongoose = require("mongoose")

const schema = require("./schema/schema")

const app = express()

const DB_USER = process.env.DB_USER
const DB_PASSWORD = process.env.DB_PASSWORD
const DB_NAME = process.env.DB_NAME
const DB_HOST = process.env.DB_HOST
const DB_PORT = process.env.DB_PORT

const DB_STR = "mongodb://"+DB_USER+":"+DB_PASSWORD+"@"+DB_HOST+":"+DB_PORT+"/"+DB_NAME
mongoose.connect(DB_STR)
mongoose.connection.once("open", ()=> {
    console.log("Connected to database...")
})
// graphql middleware
app.use("/graphql", graphqlHTTP({
    // pass graphql schema
    schema, //schema: schema
    graphiql: true// test graphql
}));

app.listen(5000, () => {
    console.log("Listening on port 5000")
})
