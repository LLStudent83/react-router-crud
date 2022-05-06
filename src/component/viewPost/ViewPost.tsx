import * as React from 'react';
import Button from '../button/Button';
import './viewPost.scss';

type Posts = {
  id: number;
  content: string;
  created: Date;
};

type Props = {
  deletePost: (postid: number) => void;
  post: Posts;
  goToChangePost: () => void;
};

export default function ViewPost({
  goToChangePost, deletePost, post,
}: Props): JSX.Element {
  return (
    <div className="ViewPost__postWrap">
      <header>
        <p>ФОТО, Имя</p>
        <div>{post?.created.toString()}</div>
      </header>
      <div className="ViewPost__text">
        {post?.content}
      </div>

      <footer className="ViewPost__footer">
        <Button
          className="blueButton"
          nameButon="Изменить"
          action={goToChangePost}
          typeButton="button"
        />
        <Button
          className="redButton"
          nameButon="Удалить"
          action={() => deletePost(post.id)}
          typeButton="button"
        />
      </footer>
    </div>
  );
}
