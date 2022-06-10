import { useState } from 'react';
import { useAuth0 } from '@auth0/auth0-react';

const Comments = ({ drink }) => {
  const [newComment, setNewComment] = useState('');
  const [commentInput, setCommentInput] = useState('');
  const { loginWithRedirect, isAuthenticated, user } = useAuth0();

  const handleNewComment = (e) => {
    e.preventDefault();
    fetch('/api/update-comments', {
      body: JSON.stringify({
        email: user.email,
        id: idDrink,
        comment: newComment,
      }),
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
    })
      .then((res) => res.json())
      .then((data) => {
        console.log('comment', data);
        setNewComment(commentInput);
      })
      .catch((error) => {
        console.log('error');
      });
  };

  return (
    <form
      onSubmit={() => {
        handleNewComment();
      }}
    >
      <input
        placeholder='Comment'
        value={commentInput}
        onChange={(e) => {
          setNewComment(e.target.value);
        }}
      ></input>
      <button
        onClick={() => {
          handleNewComment(commentInput);
        }}
      ></button>
    </form>
  );
};

export default Comments;
