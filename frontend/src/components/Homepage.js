import { useState } from 'react';
import styled from 'styled-components';
import Footer from './Footer';
import Random from './Random';
import SearchBar from './SearchBar';

const Homepage = () => {
  const [loading, setLoading] = useState(true);

  return (
    <>
      {loading ? (
        <BigDiv>
          <Div>
            <Quote1>Help me help you</Quote1>
            <Quote2>find your next drink</Quote2>

            <SearchBar />
          </Div>
        </BigDiv>
      ) : (
        'loading'
      )}
    </>
  );
};
const BigDiv = styled.div`
  margin: auto;
  margin-top: 100px;
`;
const Div = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;
const Quote1 = styled.div`
  font-family: 'Lato', sans-serif;
  font-weight: 300;
  font-size: 40px;
  margin-right: 100px;
`;
const Quote2 = styled.div`
  font-family: 'Lato', sans-serif;
  font-weight: 300;
  font-size: 40px;
  margin-left: 100px;
`;

// const Body = styled.div`
//   font-family: 'Lato', sans-serif;
//   font-weight: 300;
//   font-size: 20px;

//   background-color: #f8f9fa;
//   width: 100%;
//   height: 700px;
//   margin-top: 20px;
// `;

export default Homepage;
