import { Sequelize } from "sequelize";

const sequelize = new Sequelize(
	process.env.DB_NAME || "worldfacts",
	process.env.DB_USER || "postgres",
	process.env.DB_PASSWORD || "postgres",
	{
		host: process.env.DB_HOST || "localhost",
		port: Number.parseInt(process.env.DB_PORT || "5432", 10),
		dialect: "postgres",
		logging: process.env.NODE_ENV === "development" ? console.log : false,
	},
);

export { sequelize };
