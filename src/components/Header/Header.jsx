import { NavLink } from "react-router-dom";

import { Container } from "../Container/Container";

import styles from "./Header.module.scss";

export const Header = function () {
	return (
		<>
			<header className="header">
				<Container>
					<nav>
						<NavLink className={({ isActive }) => (isActive ? `${styles.nav__link} ${styles.active}` : styles.nav__link)} to="/">
							HOME
						</NavLink>
						<NavLink className={({ isActive }) => (isActive ? `${styles.nav__link} ${styles.active}` : styles.nav__link)} to="/movies">
							SEARCH MOVIES
						</NavLink>
					</nav>
				</Container>
			</header>
		</>
	);
};
