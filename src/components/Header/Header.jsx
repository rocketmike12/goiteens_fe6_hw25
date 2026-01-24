import { NavLink } from "react-router-dom";

import styles from "./Header.module.scss";

export const Header = function () {
	return (
		<>
			<header className="header">
				<nav>
					<NavLink className={({ isActive }) => (isActive ? `${styles.nav__link} ${styles.active}` : styles.nav__link)} to="/">
						HOME
					</NavLink>
					<NavLink className={({ isActive }) => (isActive ? `${styles.nav__link} ${styles.active}` : styles.nav__link)} to="/movies">
						SEARCH MOVIES
					</NavLink>
				</nav>
			</header>
		</>
	);
};
