import { Service } from '../data';

export const UpvotesSection = (props: {
	articleName: string;
	upvotes: number;
	setArticleInfo: Function;
}): JSX.Element => {
	const { articleName, upvotes, setArticleInfo } = props;

	const upvoteArticle = async () => {
		const body = await Service.postData(
			`${Service.configs.API_BASE_URL}/articles/${articleName}/upvote`,
		);
		setArticleInfo(body);
	};

	return (
		<div id="upvotes-section">
			<button onClick={() => upvoteArticle()}>Add Upvote</button>
			<p>This post has been upvoted {upvotes} times</p>
		</div>
	);
};
