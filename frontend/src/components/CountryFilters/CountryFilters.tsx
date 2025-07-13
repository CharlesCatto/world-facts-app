import { useState } from "react";
import styles from "./CountryFilters.module.css";

interface Filters {
	sortBy: "name" | "population" | "area";
	temperatureRange: [number, number];
	hemisphere?: "north" | "south";
	politicalLeaning?: "left" | "center" | "right";
}

interface CountryFiltersProps {
	onFilter: (filters: Filters) => void;
}

export const CountryFilters = ({ onFilter }: CountryFiltersProps) => {
	const [filters, setFilters] = useState<Filters>({
		sortBy: "name",
		temperatureRange: [-20, 40],
	});

	return (
		<div className={styles.filters}>
			<select
				value={filters.sortBy}
				onChange={(e) =>
					setFilters({
						...filters,
						sortBy: e.target.value as "name" | "population" | "area",
					})
				}
			>
				<option value="name">Alphabétique</option>
				<option value="population">Population</option>
				<option value="area">Superficie</option>
			</select>

			<button type="button" onClick={() => onFilter(filters)}>
				Appliquer les filtres
			</button>
		</div>
	);
};
