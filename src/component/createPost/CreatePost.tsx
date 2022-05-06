/* eslint-disable @typescript-eslint/no-shadow */
/* eslint-disable jsx-a11y/control-has-associated-label */
import * as React from 'react';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import Button from '../button/Button';
import './createPost.scss';

type PostObj = {
  content: string,
  id: number,
};

type CreatePostProps = {
  createPost: (postObj: PostObj)=> void,
};

export default function CreatePost({ createPost }:
CreatePostProps): JSX.Element {
  const [postText, setPostText] = useState('');
  const navigate = useNavigate();

  const hendelChangeInput = (value: string): void => {
    setPostText(value);
  };

  const hendelExitCreatePost = (): void => {
    setPostText('');
    navigate('/');
  };

  const hendelPublish = (
    event: React.MouseEvent<HTMLButtonElement>,
  ): void => {
    event.preventDefault();
    const postObj = {
      content: postText,
      id: 0,
    };
    createPost(postObj);
    setPostText('');
    navigate('/');
  };

  return (
    <form className="CreatePost__wrap">
      <header className="CreatePost__head">
        <button
          type="button"
          className="CreatePost__exit"
          onClick={hendelExitCreatePost}
        >
          Назад
        </button>
      </header>
      <div className="CreatePost__content">
        <input
          type="text"
          value={postText}
          onChange={(e) => hendelChangeInput(e.target.value)}
        />
      </div>
      <footer className="CreatePost__footer">
        <Button
          className="blueButton"
          nameButon="Опубликовать"
          action={(event): void => hendelPublish(event)}
          typeButton="submit"
        />
      </footer>
    </form>
  );
}
