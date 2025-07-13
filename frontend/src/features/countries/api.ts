import type { Filters } from "../countries/types";

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

export const fetchCountries = async (filters?: Filters): Promise<Country[]> => {
	try {
		const params = new URLSearchParams();

		if (filters) {
			if (filters.sortBy) params.append("sortBy", filters.sortBy);
			if (filters.hemisphere) params.append("hemisphere", filters.hemisphere);
			if (filters.politicalLeaning)
				params.append("politicalLeaning", filters.politicalLeaning);
			params.append("temperatureRange", filters.temperatureRange.join(","));
		}

		const response = await fetch(
			`http://localhost:3000/api/countries?${params.toString()}`,
		);

		if (!response.ok) {
			throw new Error("Network response was not ok");
		}

		return response.json();
	} catch (error) {
		console.error("Error fetching countries:", error);
		throw error;
	}
};

export const fetchRandomCountry = async (): Promise<Country> => {
	const response = await fetch(
		"http://localhost:3000/api/countries?random=true",
	);
	return response.json();
};
