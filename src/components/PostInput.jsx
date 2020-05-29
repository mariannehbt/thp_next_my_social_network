import React from 'react';
import * as API from '../services/api';
import { useSelector, useDispatch } from 'react-redux';

const PostInput = () => {
	const profile = useSelector(state => state.profile.profile);
	const dispatch = useDispatch();

	const submit = (event) => {
		event.preventDefault();
		const text = document.getElementById('text').value;
		const user = profile.id;
		dispatch(API.postNew(text, user));
	};

	return (
		<form onSubmit={submit}>
			<div className='input-group my-3'>
				<textarea type='text' className='form-control' rows='1' id='text' placeholder='Write something here' />
				<div className='input-group-append'>
					<button className='btn btn-outline-info' type='submit'>Post</button>
				</div>
			</div>
		</form>
	);
};

export default PostInput;
