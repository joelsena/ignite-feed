/* eslint-disable react/prop-types */
export function Post({ title, content }) {
	return (
		<div>
			<strong>{title}</strong>
			<p>{content}</p>
		</div>
	);
}
