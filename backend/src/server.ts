import express from "express";
import { createCountriesRouter } from "./modules/countries/router";

const app = express();
app.use(express.json());

// Routes
app.use("/api/countries", createCountriesRouter());

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
	console.log(`Server running on port ${PORT}`);
});
