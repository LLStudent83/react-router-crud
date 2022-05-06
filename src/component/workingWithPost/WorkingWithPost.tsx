import * as React from 'react';
import { useState } from 'react';
import { useParams } from 'react-router-dom';
import EditPost from '../editPost/EditPost';
import ViewPost from '../viewPost/ViewPost';

type Posts = {
  id: number;
  content: string;
  created: Date;
};

  type PostObj = {
    content: string,
    id: number,
  };

  type Props = {
    createPost: (postObj: PostObj) => void;
    deletePost: (postid: number) => void;
    posts: Posts[];
  };

export default function WorkingWithPost({
  createPost, deletePost, posts,
}: Props): JSX.Element {
  const [working, setWorking] = useState('view');
  const { id: rawId } = useParams();
  const id = Number(rawId?.replace(/:/, ''));
  const post = posts.find((obj) => obj.id === Number(id));

  const goToChangePost = (): void => setWorking('edit');

  const savePostAndGoToViewingPost = (postObj: PostObj):void => {
    createPost(postObj);
    setWorking('view');
  };
  const goToViewingPost = (): void => setWorking('view');

  return (
    working === 'view'
      ? (
        <ViewPost
          deletePost={deletePost}
          post={post!}
          goToChangePost={goToChangePost}
        />
      )
      : (
        <EditPost
          goToViewingPost={goToViewingPost}
          post={post!}
          savePostAndGoToViewingPost={savePostAndGoToViewingPost}
        />
      )

  );
}
