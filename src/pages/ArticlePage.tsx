import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

import {
	AddCommentForm,
	ArticlesList,
	CommentsList,
	UpvotesSection,
} from '../components';
import { articleContent, Service } from '../data';
import { Article } from '../data';
export const ArticlePage = (): JSX.Element => {
	const { name } = useParams();
	const article: Article | undefined = articleContent.find(
		article => article.name === name,
	);

	const [articleInfo, setArticleInfo] = useState({
		upvotes: 0,
		comments: [],
	});

	useEffect(() => {
		(async () => {
			const articleInfo = await Service.fetchData(
				`${Service.configs.API_BASE_URL}/articles/${name}`,
			);
			setArticleInfo(articleInfo);
		})();
	}, [name]);

	if (article === undefined) {
		return <h1>Article does not exist!</h1>;
	}

	const otherArticles: Article[] = articleContent.filter(
		article => article.name !== name,
	);

	return (
		<>
			<h1>{article.title}</h1>
			<UpvotesSection
				articleName={name ?? ''}
				upvotes={articleInfo.upvotes}
				setArticleInfo={setArticleInfo}
			/>
			{article.content.map((p, key) => (
				<p key={key}>{p}</p>
			))}
			<CommentsList comments={articleInfo.comments} />
			<AddCommentForm
				articleName={name ?? ''}
				setArticleInfo={setArticleInfo}
			/>
			<h3>Other Articles:</h3>
			<ArticlesList articles={otherArticles}></ArticlesList>
		</>
	);
};
