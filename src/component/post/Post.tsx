/* eslint-disable jsx-a11y/click-events-have-key-events */
import * as React from 'react';
// import { useNavigate, useParams } from 'react-router-dom';
import './post.scss';

type PostProps = {
  clickCallback: (postid: number) => void;
  id: number;
  content: string;
  created: Date;
};

export default function Post({
  id,
  clickCallback,
  content, created,
}: PostProps): JSX.Element {
  return (
    <div
      className="Post__postWrap"
      role="button"
      tabIndex={0}
      onClick={() => clickCallback(id)}
    >
      <header>
        <p>ФОТО, Имя</p>
        <div>{created.toString()}</div>
      </header>
      <div>{content}</div>
    </div>
  );
}
