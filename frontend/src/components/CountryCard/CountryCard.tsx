import styles from "./CountryCard.module.scss";

interface CountryCardProps {
	name: string;
	population: number;
}

export const CountryCard = ({ name, population }: CountryCardProps) => {
	return (
		<div className={styles.card}>
			<h3 className={styles.title}>{name}</h3>
			<p className={styles.population}>
				Population: {population.toLocaleString()}
			</p>
		</div>
	);
};
