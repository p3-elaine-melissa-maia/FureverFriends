import React from 'react';

import { Navigate, useParams } from 'react-router-dom';
import { useQuery } from '@apollo/client';

import PostList from '../components/PostList';
// import SkillForm from '../components/SkillForm';

import { QUERY_SINGLE_USER, QUERY_ME } from '../utils/queries';

import Auth from '../utils/auth';

const Profile = () => {
  const { userId } = useParams();

  // If there is no `userId` in the URL as a parameter, execute the `QUERY_ME` query instead for the logged in user's information
  const { loading, data } = useQuery(
    userId ? QUERY_SINGLE_USER : QUERY_ME,
    {
      variables: { userId: userId },
    }
  );

  // Check if data is returning from the `QUERY_ME` query, then the `QUERY_SINGLE_PROFILE` query
  const user =  data?.user || {};

  // Use React Router's `<Redirect />` component to redirect to personal profile page if username is yours
  if (Auth.loggedIn() && Auth.getProfile().data._id === userId) {
    // return <Navigate to={`/profile/${userId}`} />;
    return (
      <div>
        <h2 className="card-header">
          {userId ? `${user.fullname}'s` : 'Your'} friends have endorsed these
          skills...
        </h2>
  
        {user.posts?.length > 0 && (
          <PostList
            posts={user.posts}
            isLoggedInUser={!userId && true}
          />
        )}
  
        {/* <div className="my-4 p-4" style={{ border: '1px dotted #1a1a1a' }}>
          <SkillForm profileId={profile._id} />
        </div> */}
      </div>
    );
  }

  if (loading) {
    return <div>Loading...</div>;
  }

  if (!user?.userId) {
    return (
      <h4>
        You need to be logged in to see your profile page. Use the navigation
        links above to sign up or log in!
      </h4>
    );
  }

  
};

export default Profile;

