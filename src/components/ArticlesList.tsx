import { Link } from 'react-router-dom';

import { Article } from '../data';

export const ArticlesList = (props: { articles: Article[] }): JSX.Element => {
	const { articles } = props;
	return (
		<>
			{articles.map((article, key) => (
				<Link
					className="article-list-item"
					key={key}
					to={`/article/${article.name}`}
				>
					<h3>{article.title}</h3>
					<p>{article.content[0].substring(0, 150)}...</p>
				</Link>
			))}
		</>
	);
};
