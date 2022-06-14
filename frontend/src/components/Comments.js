import { useEffect, useState } from 'react';
import { useAuth0 } from '@auth0/auth0-react';
import styled from 'styled-components';
import { MdSaveAlt } from 'react-icons/md';
const Comments = ({ drink }) => {
  // const [newComment, setNewComment] = useState('');
  const [commentInput, setCommentInput] = useState('');
  const [loading, setLoading] = useState(false);
  const { user } = useAuth0();

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
          setLoading(true);
          window.location.reload();
        }
      })
      .catch((error) => {
        console.log('error');
      });
  };

  return (
    <BigDiv>
      <Form
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
      </Form>
    </BigDiv>
  );
};
const Form = styled.form`
  display: flex;
`;

const Input = styled.input`
  width: 100%;
  height: 30px;
  font-size: 15px;
  font-family: 'Lato', sans-serif;
  border: none;

  &:focus {
    outline: none;
  }
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
  width: 100%;
  margin: auto;
`;

export default Comments;
