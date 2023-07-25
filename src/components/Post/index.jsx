import { Avatar } from "../Avatar";
import { Comment } from "../Comment";

import styles from "./styles.module.css";

/* eslint-disable react/prop-types */
export function Post() {
	return (
		<article className={styles.post}>
			<header>
				<div className={styles.author}>
					<Avatar src="https://github.com/joelsena.png" alt="perfil" />
					<div className={styles.authorInfo}>
						<strong>Joel Sena</strong>
						<span>Web Developer</span>
					</div>
				</div>

				<time title="25 de julho ás 10h" dateTime="2023-07-25 10:00:00">
					Publicado há 1h
				</time>
			</header>

			<div className={styles.content}>
				<p>Fala galeraa 👋</p>

				<p>
					Acabei de subir mais um projeto no meu portifa. É um projeto que fiz
					no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀
				</p>

				<p>
					👉 <a href="#">jane.design/doctorcare</a>
				</p>

				<p>
					<a href="#">#novoprojeto</a> <a href="#">#nlw</a>{" "}
					<a href="#">#rocketseat</a>
				</p>
			</div>

			<form className={styles.commentForm}>
				<strong>Deixe seu feedback</strong>

				<textarea placeholder="Deixe um comentário" />

				<footer>
					<button type="submit">Publicar</button>
				</footer>
			</form>

			<div className={styles.commetnList}>
				<Comment />
				<Comment />
				<Comment />
			</div>
		</article>
	);
}
