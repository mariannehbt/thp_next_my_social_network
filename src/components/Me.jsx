import React from 'react';
import { Link } from 'react-router-dom';
import * as API from '../services/api';
import { useSelector, useDispatch } from 'react-redux';
import moment from 'moment';

const Profile = () => {
	const profile = useSelector(state => state.profile.profile);
	const posts = useSelector(state => state.posts.posts);

	const dispatch = useDispatch();

	const submit = (event) => {
		event.preventDefault();
		const user = profile.id;
		const username = document.getElementById('username').value;
		const description = document.getElementById('description').value;
		dispatch(API.profileUpdate(user, username, description));
	};

	const myPostsList = posts.filter(elem => elem.user != null && elem.user.id === profile.id).sort((a,b) => new Date(b.updated_at).getTime() - new Date(a.updated_at).getTime()).map((post, key) => (
		<div key={key}>
			<div className='card my-3'>
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

	return (
		<div>
			<form onSubmit={submit}>
				<div className='form-row'>
					<div className='col-md-4 mb-3'>
						<label>Username</label>
						<div className='input-group'>
							<div className='input-group-prepend'>
								<span className='input-group-text'>@</span>
							</div>
							<input type='text' className='form-control' id='username' placeholder={(profile.username != null) ? profile.username : ''} />
						</div>
					</div>
					<div className='col-md-8 mb-3'>
						<label>Email</label>
						<p className='form-control'>{(profile.email != null) ? profile.email : 'Email'}</p>
					</div>
				</div>
				<div className='form-row'>
					<div className='col-md-12 mb-3'>
						<label>Description</label>
						<textarea type='text' className='form-control' id='description' placeholder={(profile.description != null) ? profile.description : ''} />
					</div>
				</div>
				<div className='form-row'>
					<div className='col-md-6 mb-3'>
						<label>Last profile update :</label>
						<p className='form-control'>{moment(profile.updated_at).calendar()}</p>
					</div>
					<div className='col-md-6 mb-3'>
						<label>Member since :</label>
						<p className='form-control'>{moment(profile.created_at).calendar()}</p>
					</div>
				</div>
				<button className='btn btn-info mr-3' type='submit'>Confirm changes</button>
			</form>
			<button className='btn btn-outline-info mt-3' onClick={() => dispatch(API.fetchPosts())}>See posts</button>
			{myPostsList}
		</div>
	);
};

export default Profile;
