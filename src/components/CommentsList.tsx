import { Comment } from '../data';

export const CommentsList = (props: { comments: Comment[] }): JSX.Element => {
	const { comments } = props;
	return (
		<>
			<h3>Comments:</h3>
			{comments.map((comment, key) => (
				<div className="comment" key={key}>
					<h4>{comment.username}</h4>
					<p>{comment.text}</p>
				</div>
			))}
		</>
	);
};
