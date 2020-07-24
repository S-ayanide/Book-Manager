const express = require("express");
const { graphqlHTTP } = require("express-graphql");
const schema = require("./schema/schema");
const mongoose = require("mongoose");
const cors = require("cors");
const { mongoDatabase } = require("./config/config");

const app = express();

const PORT = 4000 || process.env.PORT;

//Attempt to connect to database
mongoose.connect(mongoDatabase, { useNewUrlParser: true, useUnifiedTopology: true });

try {
	mongoose.connection.once("open", () => {
		console.log("Successfully Connected to DB");
	});
} catch (e) {
	console.log(e);
}

app.use(cors());
app.use(
	"/graphql",
	graphqlHTTP({
		schema: schema,
		graphiql: true,
	})
);

app.listen(PORT, () => {
	console.log("Listening for requests on Port : ", PORT);
});
