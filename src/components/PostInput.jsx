import React from 'react';

const PostInput = () => {
	return (
		<div>



			<div className='input-group my-3'>
				<textarea type='text' className='form-control' id='text' placeholder='Write something here' />
				<div className='input-group-append'>
					<button className='btn btn-outline-info' type='button'>Post</button>
				</div>
			</div>




		</div>
	);
};

export default PostInput;
