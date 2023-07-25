import { ThumbsUp, Trash } from "phosphor-react";
import { Avatar } from "../Avatar";

import styles from "./styles.module.css";

export function Comment() {
	return (
		<div className={styles.comment}>
			<Avatar
				withBorder={false}
				src="https://github.com/joelsena.png"
				alt="perfil"
			/>

			<div className={styles.commentBox}>
				<div className={styles.commentContent}>
					<header>
						<div className={styles.authorAndTime}>
							<strong>Joel Sena</strong>
							<time title="25 de julho ás 10h" dateTime="2023-07-25 10:00:00">
								há 1h
							</time>
						</div>

						<button title="Deletar comentário">
							<Trash size={24} />
						</button>
					</header>

					<p>Muito bom Devon, parabéns!! 👏👏</p>
				</div>

				<footer>
					<button>
						<ThumbsUp size={20} />
						Aplaudir <span>20</span>
					</button>
				</footer>
			</div>
		</div>
	);
}
