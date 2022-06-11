import { useEffect, useState } from 'react';
import { useAuth0 } from '@auth0/auth0-react';
import styled from 'styled-components';
import { MdSaveAlt } from 'react-icons/md';
const Comments = ({ drink }) => {
  const [newComment, setNewComment] = useState('');
  const [commentInput, setCommentInput] = useState('');
  const [loading, setLoading] = useState(false);
  const { loginWithRedirect, isAuthenticated, user } = useAuth0();
  // const [posted, setPosted] = useState(false);

  const handleNewComment = (e) => {
    e.preventDefault();
    setLoading(false);
    fetch('/api/update-comments', {
      body: JSON.stringify({
        email: user.email,
        id: drink.idDrink,
        comment: commentInput,
      }),
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.status === 200) {
          // setPosted((prev) => !prev);
          console.log('comment', data.data);
          setLoading(true);
        }
      })
      .catch((error) => {
        console.log('error');
      });
  };
  // useEffect =
  //   (() => {
  //     setLoading(true);
  //   },
  //   [posted]);
  return (
    <BigDiv>
      <form
        onSubmit={(e) => {
          handleNewComment(e);
        }}
      >
        <Input
          placeholder='Comment'
          value={commentInput}
          onChange={(e) => {
            setCommentInput(e.target.value);
          }}
        ></Input>
        <Button type='submit'>
          <MdSaveAlt />
        </Button>
      </form>
    </BigDiv>
  );
};

const Input = styled.input`
  width: 395px;
  height: 30px;
  font-size: 12px;
  font-family: 'Lato', sans-serif;
  border: none;
`;

const Button = styled.button`
  background-color: white;
  border: none;
  padding: 7px;
  font-size: 25px;
  &:hover {
    /* background-color: #f7f5f0; */
    /* border: 2px solid black; */
    color: orange;
  }
`;
const BigDiv = styled.div`
  background-color: white;
  border: 1px solid black;
`;

export default Comments;
