import { DataTypes, Model, type Optional } from "sequelize";
import type { Sequelize } from "sequelize";

interface CountryAttributes {
	id: number;
	name: string;
	population: number;
	area: number;
	languages: string[];
	hemisphere: "north" | "south" | "both";
	avgTemperature: number;
	politicalOrientation: {
		leaning: "left" | "center" | "right";
		intensity: "moderate" | "strong";
	};
	majorCities: Array<{
		name: string;
		population: number;
		isCapital: boolean;
	}>;
}

type CountryCreationAttributes = Optional<CountryAttributes, "id">;

export class Country
	extends Model<CountryAttributes, CountryCreationAttributes>
	implements CountryAttributes
{
	public id!: number;
	public name!: string;
	public population!: number;
	public area!: number;
	public languages!: string[];
	public hemisphere!: "north" | "south" | "both";
	public avgTemperature!: number;
	public politicalOrientation!: {
		leaning: "left" | "center" | "right";
		intensity: "moderate" | "strong";
	};
	public majorCities!: Array<{
		name: string;
		population: number;
		isCapital: boolean;
	}>;
}

export const initCountryModel = (sequelize: Sequelize) => {
	Country.init(
		{
			id: {
				type: DataTypes.INTEGER,
				autoIncrement: true,
				primaryKey: true,
			},
			name: {
				type: DataTypes.STRING,
				allowNull: false,
			},
			population: {
				type: DataTypes.INTEGER,
				allowNull: false,
			},
			area: {
				type: DataTypes.FLOAT,
				allowNull: false,
			},
			languages: {
				type: DataTypes.ARRAY(DataTypes.STRING),
				allowNull: false,
			},
			hemisphere: {
				type: DataTypes.ENUM("north", "south", "both"),
				allowNull: false,
			},
			avgTemperature: {
				type: DataTypes.FLOAT,
				allowNull: false,
			},
			politicalOrientation: {
				type: DataTypes.JSONB,
				allowNull: false,
			},
			majorCities: {
				type: DataTypes.JSONB,
				allowNull: false,
			},
		},
		{
			sequelize,
			modelName: "Country",
			tableName: "countries",
		},
	);
};
