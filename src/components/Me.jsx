import React from 'react';
import { useSelector } from 'react-redux';
import moment from 'moment';

const Profile = () => {
	const profile = useSelector(state => state.profile.profile);

	return (
		<section className='mt-5'>
			<div className='container'>
				<div className='row'>
					<div className='col-md-8 mx-auto'>
						<form>
							<div className='form-row'>
								<div className='col-md-4 mb-3'>
									<label>Username</label>
									<div className='input-group'>
										<div className='input-group-prepend'>
											<span className='input-group-text'>@</span>
										</div>
										<input type='text' className='form-control' id='username' placeholder='Username' value={profile.username} />
										<div className='valid-feedback'>
											Looks good!
										</div>
										<div className='invalid-feedback'>
											Please choose a username.
										</div>
									</div>
								</div>
								<div className='col-md-8 mb-3'>
									<label>Email</label>
									<p className='form-control disabled'>{(profile.email != null) ? profile.email : 'Email'}</p>
								</div>
							</div>
							<div className='form-row'>
								<div className='col-md-12 mb-3'>
									<label>Description</label>
									<textarea type='text' className='form-control' id='description' placeholder='Description' value={(profile.description != null) ? profile.description : ''} />
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
							<button className='btn btn-primary' type='submit'>Submit</button>
						</form>
					</div>
				</div>
			</div>
		</section>
	);
};

export default Profile;
