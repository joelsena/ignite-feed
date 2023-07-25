import styles from "./styles.module.css";

/* eslint-disable react/prop-types */
export function Avatar({ withBorder = true, ...rest }) {
	return (
		<img
			className={styles.avatar}
			data-border={withBorder ? "with-border" : "none"}
			{...rest}
		/>
	);
}
