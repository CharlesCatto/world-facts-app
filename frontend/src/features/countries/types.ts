export interface Filters {
	sortBy: "name" | "population" | "area";
	temperatureRange: [number, number];
	hemisphere?: "north" | "south";
	politicalLeaning?: "left" | "center" | "right";
}

export interface Country {
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
