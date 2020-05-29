import React from 'react';
import { Link } from 'react-router-dom';
import * as API from '../services/api';
import { useSelector, useDispatch } from 'react-redux';
import moment from 'moment';

const Posts = () => {
	const log = useSelector(state => state.log.login);
	const posts = useSelector(state => state.posts.posts);
	const register = useSelector(state => state.register.registration);

	const dispatch = useDispatch();
	const postsList = posts.sort((a,b) => new Date(b.updated_at).getTime() - new Date(a.updated_at).getTime()).map((post, key) => (
		<div key={key}>
			<div className='card mb-3'>
				<div className='card-body'>
					<h5 className='card-title' onClick={() => dispatch(API.fetchUsers(post.user.id))}>{ (post.user) ? <Link to={`/user/${post.user.id}`}>{post.user.username}</Link> : null }</h5>
					<p className='card-text'>{post.text}</p>
					<button className='btn btn-info mr-2'>
						Like
						<span className='badge badge-light badge-pill mr-2'>{post.like}</span>
					</button>
					<button className='btn btn-outline-warning mr-2'>Info</button>
					<button className='btn btn-outline-danger mr-2' onClick={() => dispatch(API.postDelete(post.id))}>Delete</button>
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
			<div className='mt-3'>
				{postsListVisitor}
			</div>
		);
	} else {
		return (
			<div className='mt-3'>
				{postsList}
			</div>
		);
	};
};

export default Posts;
