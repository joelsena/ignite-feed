import { PencilLine } from "phosphor-react";

import styles from "./styles.module.css";

export function Sidebar() {
	const bannerUrl =
		"https://images.unsplash.com/photo-1635830625698-3b9bd74671ca?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=50";

	return (
		<aside className={styles.sidebar}>
			<img className={styles.cover} src={bannerUrl} />

			<div className={styles.profile}>
				<img
					className={styles.avatar}
					src="https://github.com/joelsena.png"
					alt="perfil"
				/>

				<strong>Joel Sena</strong>
				<span>Web Developer</span>
			</div>

			<footer>
				<a href="#">
					<PencilLine size={20} />
					Editar seu perfil
				</a>
			</footer>
		</aside>
	);
}
