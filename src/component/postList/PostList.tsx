import * as React from 'react';
import { useNavigate } from 'react-router-dom';
import Button from '../button/Button';
import Post from '../post/Post';
import './postList.scss';

type PostProps = {
  clickCallback: (postid: number) => void;
  id: number;
  content: string;
  created: Date;
};
type PostListProps = {
  posts: PostProps[];
};

export default function PostList({ posts }: PostListProps): JSX.Element {
  const navigate = useNavigate();
  const createPost = (): void => {
    navigate('/posts/new');
  };
  // const { postid } = useParams();

  const clickCallback = (postid: number): void => {
    navigate(`/posts/:${postid}`);
  };

  return (
    <div className="PostList__wrap">
      <header className="PostList__head">
        <Button
          className="blueButton"
          nameButon="Создать пост"
          action={createPost}
          typeButton="button"
        />
      </header>
      <main className="PostList__list">
        {posts.map((post) => (
          <Post
            clickCallback={clickCallback}
            key={post.id}
            id={post.id}
            content={post.content}
            created={post.created}
          />
        ))}
      </main>
    </div>
  );
}
