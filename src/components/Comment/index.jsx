import { ThumbsUp, Trash } from "phosphor-react";
import { Avatar } from "../Avatar";

import styles from "./styles.module.css";
import { useState } from "react";

/* eslint-disable react/prop-types */
export function Comment({ id, content, deleteComment, likeComment, likes }) {
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

						<button onClick={deleteComment} title="Deletar comentário">
							<Trash size={24} />
						</button>
					</header>

					<p>{content}</p>
				</div>

				<footer>
					<button onClick={likeComment}>
						<ThumbsUp size={20} />
						Aplaudir <span>{likes}</span>
					</button>
				</footer>
			</div>
		</div>
	);
}
