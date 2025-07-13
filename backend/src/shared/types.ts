export interface Country {
	id: number;
	name: string;
	population: number;
	area: number; // km²
	languages: string[];
	hemisphere: "north" | "south" | "both";
	avgTemperature: number; // °C
	politicalOrientation: {
		leaning: "left" | "center" | "right";
		intensity: "moderate" | "strong";
	};
	majorCities: {
		name: string;
		population: number;
		isCapital: boolean;
	}[];
}
