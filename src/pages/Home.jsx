import React from 'react';
// import { connect } from 'react-redux';
import { useSelector, useDispatch } from 'react-redux';
import { fetchPosts} from '../redux/posts/postsActions';

const Home = (props) => {
	const posts = useSelector(state => state.posts);
	const dispatch = useDispatch();
	const postsList = posts.map((post, key) =>(
		<div key={key}>
			<h5>{post.text} ({post.updated_at})</h5>
		</div>
	));

	return (
		<div>
			<h1>Home</h1>
			<h2>Welcome on My Social Network.</h2>
			<h3>This website is a training to Redux and React.</h3>
			<h4>We use auth and routing to create a small social media website.</h4>
			<button onClick={() => dispatch(fetchPosts())}>Voir les posts !</button>
			{postsList}
		</div>
	);
};

// const mapStateToProps = (state) => {
// 	return {
// 		posts: state.posts
// 	};
// };

// const mapDispatchToProps = (dispatch) => {
// 	return {
// 		fetchPosts: () => (dispatch(fetchPosts()))
// 	};
// };

// export default connect(mapStateToProps, mapDispatchToProps)(Home);

export default Home;
