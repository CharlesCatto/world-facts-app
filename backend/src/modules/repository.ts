import { Op, type Sequelize } from "sequelize";
import { Country } from "../../../models/country";

interface FilterOptions {
	sortBy?: "name" | "population" | "area";
	minPopulation?: number;
	maxTemperature?: number;
	politicalLeaning?: "left" | "center" | "right";
	random?: boolean;
	limit?: number;
}

export class CountriesRepository {
	private sequelize: Sequelize;

	constructor(sequelize: Sequelize) {
		this.sequelize = sequelize;
	}

	async getFilteredCountries(options: FilterOptions) {
		const query: {
			where: any;
			order?: any;
			limit?: number;
		} = { where: {} };

		// Filtres
		if (options.minPopulation) {
			query.where.population = { [Op.gte]: options.minPopulation };
		}

		if (options.politicalLeaning) {
			query.where.politicalOrientation = {
				leaning: options.politicalLeaning,
			};
		}

		// Tri
		if (options.sortBy) {
			query.order = [
				[options.sortBy, options.sortBy === "name" ? "ASC" : "DESC"],
			];
		}

		// Limite
		if (options.limit) {
			query.limit = options.limit;
		}

		// Aléatoire
		if (options.random) {
			query.order = this.sequelize.random();
			query.limit = 1;
		}

		return Country.findAll(query);
	}
}
