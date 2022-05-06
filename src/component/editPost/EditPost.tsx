import * as React from 'react';
import { useState } from 'react';
import Button from '../button/Button';
import './editPost.scss';

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
  savePostAndGoToViewingPost: (postObj: PostObj) => void;
  post: Posts;
  goToViewingPost: () => void;
};

export default function EditPost({
  post,
  savePostAndGoToViewingPost, goToViewingPost,
}: Props): JSX.Element {
  const [inputvalue, setInputvalue] = useState(post.content);

  const postObj = {
    content: inputvalue,
    id: post?.id,
  };

  return (
    <div className="EditPost__postWrap">
      <header className="EditPost__header">
        <Button
          className="blueButton"
          nameButon="Назад к просмотру"
          action={goToViewingPost}
          typeButton="button"
        />

      </header>
      <div className="EditPost__content">
        <p>ФОТО, Имя</p>
        <div>{post?.created.toString()}</div>
        <input
          className="EditPost__input"
          value={inputvalue}
          onChange={(e) => setInputvalue(e.target.value)}
        />
      </div>

      <footer className="EditPost__footer">
        <Button
          className="blueButton"
          nameButon="Сохранить"
          action={() => savePostAndGoToViewingPost(postObj)}
          typeButton="button"
        />
      </footer>
    </div>
  );
}
