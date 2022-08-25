import { useParams } from 'react-router-dom';
import { ArticlesList } from '../components';
import { articleContent } from '../data';
import { Article } from '../data';
export const ArticlePage = (): JSX.Element => {
	const { name } = useParams();
	const article: Article | undefined = articleContent.find(
		article => article.name === name,
	);

	if (article === undefined) {
		return <h1>Article does not exist!</h1>;
	}

	const otherArticles: Article[] = articleContent.filter(
		article => article.name !== name,
	);

	return (
		<>
			<h1>{article.title}</h1>
			{article.content.map((paragraph, key) => (
				<p key={key}>{paragraph}</p>
			))}
			<h2>Other Articles</h2>
			<ArticlesList articles={otherArticles}></ArticlesList>
		</>
	);
};
