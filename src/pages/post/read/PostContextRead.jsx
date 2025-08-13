import React, { useContext } from 'react';
import { PostsContext } from '../../../context/PostsContext';
import { useParams } from 'react-router-dom';

const PostContextRead = () => {

  const {postId} = useParams()
  const {state , actions,error, loading } = useContext(PostsContext)


  console.log(id)
  console.log(state.posts.find((post) => post.id === Number(id)))
  if(!loading) return <p>로딩중</p>
  const {title, body, id} = state.posts.find((post) => post.id === Number(id))

  return (
    <div>
      <p>제목: </p>
      <p>내용:  </p>
    </div>
  );
};

export default PostContextRead;