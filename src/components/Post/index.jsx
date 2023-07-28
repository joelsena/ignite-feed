import { format, formatDistanceToNow } from "date-fns";
import ptBR from "date-fns/locale/pt-BR";

import { Avatar } from "../Avatar";
import { Comment } from "../Comment";

import styles from "./styles.module.css";
import { useState } from "react";

/* eslint-disable react/prop-types */
export function Post({ author, publishedAt, content, postComments = [] }) {
	const [comments, setComments] = useState(postComments);
	const [newCommentText, setNewCommentText] = useState("");

	const formattedPublishedDate = format(publishedAt, "d 'de' LLLL 'às' HH:mm", {
		locale: ptBR,
	});

	function handleCreateComment(e) {
		e.preventDefault();

		if (!newCommentText) {
			return;
		}

		setComments((prevComments) => [
			...prevComments,
			{ id: prevComments.length * 3 + 1, content: newCommentText, likes: 0 },
		]);
		setNewCommentText("");
	}

	function handleCommentTextChange(e) {
		e.target.setCustomValidity("");
		setNewCommentText(e.target.value);
	}

	function handleDeleteComment(id) {
		setComments((prevComments) =>
			prevComments.filter((comment) => comment.id !== id)
		);
	}

	function handleNewInvalidComment(e) {
		e.target.setCustomValidity("Esse campo é obrigatório");
	}

	function handleAddLikeComment(id) {
		setComments((prevComments) =>
			prevComments.map((comment) =>
				comment.id === id ? { ...comment, likes: comment.likes + 1 } : comment
			)
		);
	}

	return (
		<article className={styles.post}>
			<header>
				<div className={styles.author}>
					<Avatar src={author.avatarUrl} alt="perfil" />
					<div className={styles.authorInfo}>
						<strong>{author.name}</strong>
						<span>{author.role}</span>
					</div>
				</div>

				<time
					title={formattedPublishedDate}
					dateTime={publishedAt.toISOString()}
				>
					{formatDistanceToNow(publishedAt, {
						addSuffix: true,
						locale: ptBR,
					})}
				</time>
			</header>

			<div className={styles.content}>
				{content.map((line, lineIdx) => {
					if (line.type === "paragraph") {
						return <p key={lineIdx * 3 + 1}>{line.content}</p>;
					} else if (line.type === "link") {
						return (
							<p key={lineIdx * 3 + 1}>
								<a href="#">{line.content}</a>
							</p>
						);
					}
				})}
			</div>

			<form onSubmit={handleCreateComment} className={styles.commentForm}>
				<strong>Deixe seu feedback</strong>

				<textarea
					value={newCommentText}
					placeholder="Deixe um comentário"
					onChange={handleCommentTextChange}
					onInvalid={handleNewInvalidComment}
					required
				/>

				<footer>
					<button type="submit">Publicar</button>
				</footer>
			</form>

			<div className={styles.commetnList}>
				{comments.map((comment) => (
					<Comment
						key={comment.id}
						deleteComment={() => handleDeleteComment(comment.id)}
						likeComment={() => handleAddLikeComment(comment.id)}
						{...comment}
					/>
				))}
			</div>
		</article>
	);
}
