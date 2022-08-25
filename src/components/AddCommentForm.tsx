import { useState } from 'react';
import { Service } from '../data';

export const AddCommentForm = (props: {
	articleName: string;
	setArticleInfo: Function;
}) => {
	const [username, setUsername] = useState('');
	const [commentText, setCommentText] = useState('');

	const { articleName, setArticleInfo } = props;

	const addComment = async () => {
		const body = await Service.postData(
			`${Service.configs.API_BASE_URL}/articles/${articleName}/add-comment`,
			{
				body: JSON.stringify({ username, text: commentText }),
				headers: {
					'Content-Type': 'application/json',
				},
			},
		);

		setArticleInfo(body);
		setUsername('');
		setCommentText('');
	};

	return (
		<div id="add-comment-form">
			<h3>Add a Comment</h3>
			<label>
				Name:
				<input
					type="text"
					value={username}
					onChange={event => setUsername(event.target.value)}
				/>
			</label>
			<label>
				Comment:
				<textarea
					rows={4}
					cols={50}
					value={commentText}
					onChange={event => setCommentText(event.target.value)}
				/>
			</label>
			<button onClick={() => addComment()}>Add Comment</button>
		</div>
	);
};
