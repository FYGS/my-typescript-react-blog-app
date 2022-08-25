import { ArticlesList } from '../components';
import { articleContent } from '../data';

export const ArticlesListPage = (): JSX.Element => {
	return (
		<>
			<h1>Articles</h1>
			<ArticlesList articles={articleContent}></ArticlesList>
		</>
	);
};
