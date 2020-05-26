import React from 'react';
// import { connect } from 'react-redux';
import { useSelector, useDispatch } from 'react-redux';
import { fetchPosts} from '../redux/posts/postsActions';

const Home = (props) => {
	const posts = useSelector(state => state.posts);
	const dispatch = useDispatch();
	return (
		<div>
			<h1>Home</h1>
			<p>{ posts }</p>
			<button onClick={() => dispatch(fetchPosts())}>Buy Pastas !</button>
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
