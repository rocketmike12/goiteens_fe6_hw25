import { NavLink } from "react-router-dom";

import { Container } from "../Container/Container";

import styles from "./Header.module.scss";

export const Header = function () {
	return (
		<>
			<header className={styles["header"]}>
				<Container>
					<nav className={styles["header__nav"]}>
						<NavLink className={({ isActive }) => (isActive ? `${styles["header__nav__link"]} ${styles["active"]}` : styles["header__nav__link"])} to="/">
							HOME
						</NavLink>
						<NavLink className={({ isActive }) => (isActive ? `${styles["header__nav__link"]} ${styles["active"]}` : styles["header__nav__link"])} to="/movies">
							SEARCH MOVIES
						</NavLink>
					</nav>
				</Container>
			</header>
		</>
	);
};
