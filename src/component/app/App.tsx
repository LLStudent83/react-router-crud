/* eslint-disable react-hooks/exhaustive-deps */
import * as React from 'react';
import { useEffect, useState } from 'react';
import {
  Route, Routes, useNavigate,
} from
  'react-router-dom';
import PostsList from '../postList/PostList';
import CreatePost from '../createPost/CreatePost';
import WorkingWithPost from '../workingWithPost/WorkingWithPost';

import './app.scss';

type PostObj = {
  content: string,
  id: number,
};

export default function App(): JSX.Element {
  const [posts, setPosts] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    fetch('http://localhost:7777/posts')
      .then((response) => response.json())
      .then((feychPosts) => {
        setPosts(feychPosts);
        navigate('/');
      });
  }, []);

  const createPost = (postObj: PostObj): void => {
    fetch('http://localhost:7777/posts', {
      method: 'POST',
      body: JSON.stringify(postObj),
    })
      .then((response) => response.json())
      .then((feychPosts) => {
        setPosts(feychPosts);
      });
  };

  const deletePost = (postid: number): void => {
    fetch(`http://localhost:7777/posts/:${postid}`, {
      method: 'DELETE',
    })
      .then((response) => response.json())
      .then((feychPosts) => {
        setPosts(feychPosts);
      });
    navigate('/');
  };

  return (

    <div className="blog">
      <Routes>
        <Route path="/" element={<PostsList posts={posts} />} />
        <Route
          path="/posts/new"
          element={(
            <CreatePost
              createPost={createPost}
            />
)}
        />
        <Route
          path="/posts/:id"
          element={(
            <WorkingWithPost
              createPost={createPost}
              deletePost={deletePost}
              posts={posts}
            />
)}
        />
      </Routes>
    </div>

  );
}
