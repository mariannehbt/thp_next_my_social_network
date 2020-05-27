import React from 'react';
// import { connect } from 'react-redux';
import * as API from '../services/api';
import { useSelector, useDispatch } from 'react-redux';
import moment from 'moment';

const Home = (props) => {
	const posts = useSelector(state => state.posts);
	const dispatch = useDispatch();
	const postsList = posts.sort((a,b) => new Date(b.updated_at).getTime() - new Date(a.updated_at).getTime()).map((post, key) => (
		<div key={key}>
			<div className='card mb-3'>
				<div className='card-body'>
					<h5 className='card-title'>{(post.user) ? post.user.username : null}</h5>
					<p className='card-text'>{post.text}</p>
					<button className='btn btn-outline-info mr-2'>Info</button>
					<button className='btn btn-info'>
						Like
						<span className='badge badge-light badge-pill ml-2'>{post.like}</span>
					</button>
				</div>
				<div className='card-footer'>
					<p className='card-text'><small className='text-muted'>Last updated {moment(post.updated_at).fromNow()}</small></p>
				</div>
			</div>
		</div>
	));

	return (
		<div>
			<header>
				<div className='overlay'></div>
					<video playsInline='playsinline' autoPlay='autoplay' muted='muted' loop='loop'>
						<source src='https://storage.googleapis.com/coverr-main/mp4/Mt_Baker.mp4' type='video/mp4' />
					</video>
					<div className='container h-100'>
						<div className='d-flex h-100 text-center align-items-center'>
							<div className='w-100 text-white'>
								<h1 className='display-3'>My Social Network</h1>
								<p className='lead mb-0'>Welcome on My Social Network</p>
								<button className='btn btn-outline-info mt-3' onClick={() => dispatch(API.fetchPosts())}>See posts</button>
							</div>
						</div>
					</div>
			</header>
			<section className='my-5'>
				<div className='container'>
					<div className='row'>
						<div className='col-md-8 mx-auto'>
							{postsList}
							<p>This website is a training to <code>Redux</code> and <code>React</code>.</p>
							<p>We use auth and routing to create a small social media website.</p>
							<p className='mb-0'>Video header created by <a href='https://startbootstrap.com'>Start Bootstrap</a>.</p>
						</div>
					</div>
				</div>
			</section>
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
