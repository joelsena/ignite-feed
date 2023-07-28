import { Sidebar } from "./components/Sidebar";
import { Header } from "./components/Header";
import { Post } from "./components/Post";

import styles from "./App.module.css";
import "./global.css";

const posts = [
	{
		id: 1,
		author: {
			avatarUrl: "http://github.com/joelsena.png",
			name: "Joel Sena",
			role: "Web Developer",
		},
		content: [
			{
				type: "paragraph",
				content:
					"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
			},
			{ type: "paragraph", content: "Lorem ipsum dolor" },
			{ type: "link", content: "👉 jane.design/doctorcare" },
		],
		publishedAt: new Date("2023-06-24 10:00:00"),
	},
	{
		id: 2,
		author: {
			avatarUrl: "http://github.com/SnowsToledo.png",
			name: "Felipe Toledo",
			role: "Data Analyst",
		},
		content: [
			{
				type: "paragraph",
				content:
					"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
			},
			{ type: "paragraph", content: "Lorem ipsum dolor" },
		],
		publishedAt: new Date("2023-06-27 10:00:00"),
	},
];

function App() {
	return (
		<div>
			<Header />

			<div className={styles.wrapper}>
				<Sidebar />
				<main>
					{posts.map((post) => (
						<Post key={post.id} {...post} />
					))}
				</main>
			</div>
		</div>
	);
}

export default App;
