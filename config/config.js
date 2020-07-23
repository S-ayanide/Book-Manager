const dotenv = require("dotenv");
dotenv.config();

module.exports = {
	mongoDatabase: process.env.MONGO_DB_SRV,
};
