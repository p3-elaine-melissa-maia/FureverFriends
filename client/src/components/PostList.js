import React from 'react';
import { useMutation } from '@apollo/client';

// import { REMOVE_POST } from '../utils/mutations';
import { QUERY_ME } from '../utils/queries';

const PostList = ({ posts, isLoggedInUser = false }) => {
  // const [removePost, { error }] = useMutation(REMOVE_POST, {
  //   update(cache, { data: { removeSkill } }) {
  //     try {
  //       cache.writeQuery({
  //         query: QUERY_ME,
  //         data: { me: removePost },
  //       });
  //     } catch (e) {
  //       console.error(e);
  //     }
  //   },
  // });

  // const handleRemovePost = async (skill) => {
  //   try {
  //     const { data } = await removePost({
  //       variables: { post },
  //     });
  //   } catch (err) {
  //     console.error(err);
  //   }
  // };

  if (!posts.length) {
    return <h3>No Posts Yet</h3>;
  }

  return (
    <div>
      <div className="flex-row justify-space-between my-4">
        {posts &&
          posts.map((post) => (
            <div key={post} className="col-12 col-xl-6">
              <div className="card mb-3">
                <h4 className="card-header bg-dark text-light p-2 m-0 display-flex align-center">
                  <span>{post}</span>
                  {isLoggedInUser && (
                    <button
                      className="btn btn-sm btn-danger ml-auto"
                      // onClick={() => handleRemovePost(post)}
                    >
                      X
                    </button>
                  )}
                </h4>
              </div>
            </div>
          ))}
      </div>
      {/* {error && (
        <div className="my-3 p-3 bg-danger text-white">{error.message}</div>
      )} */}
    </div>
  );
};

export default PostList;