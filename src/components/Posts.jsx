import React from 'react';
import { useSelector } from 'react-redux';
import moment from 'moment';

const Posts = () => {
	const log = useSelector(state => state.log.login);
	const posts = useSelector(state => state.posts.posts);
	const register = useSelector(state => state.register.registration);

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

	const postsListVisitor = posts.sort((a,b) => new Date(b.updated_at).getTime() - new Date(a.updated_at).getTime()).map((post, key) => (
		<div key={key}>
			<div className='card mb-3'>
				<div className='card-body'>
					<p className='card-text'>{post.text}</p>
				</div>
				<div className='card-footer'>
					<p className='card-text'><small className='text-muted'>Last updated {moment(post.updated_at).fromNow()}</small></p>
				</div>
			</div>
		</div>
	));

	if (log == null && register == null) {
		return (
			<section className='mt-5'>
				<div className='container'>
					<div className='row'>
						<div className='col-md-8 mx-auto'>
							{postsListVisitor}
						</div>
					</div>
				</div>
			</section>
		);
	} else {
		return (
			<section className='mt-5'>
				<div className='container'>
					<div className='row'>
						<div className='col-md-8 mx-auto'>
							{postsList}
						</div>
					</div>
				</div>
			</section>
		);
	};
};

export default Posts;
