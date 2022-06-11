import styled from 'styled-components';
import { BsSearch } from 'react-icons/bs';
import { TiDeleteOutline } from 'react-icons/ti';
import { useState } from 'react';
import ErrorMessage from '../ErrorMessage';
const SearchBar = () => {
  const [isLoaded, setIsLoaded] = useState(true);
  const [allStores, setAllStores] = useState();
  const [hasError, setHasError] = useState(false);

  // useEffect((name) => {
  //   fetch(`https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${name}`)
  //     .then((res) => res.json())
  //     .then((data) => {});
  // });
  // if (hasError) {
  //   return <ErrorMessage />;
  // }

  return (
    <>
      <Div>
        <Wrapper>
          <Input
            type='text'
            // value={searchItems}
            // onChange={(e) => setSearchItems(e.target.value)}
            // onKeyUp={(e) => {
            //   handleKeyUp(e);
            // }}
          />

          <ButtonDelete>
            <TiDeleteOutline />
          </ButtonDelete>

          <ButtonSearch
          // onClick={() => {
          //   handleFind(searchItems);
          // }}
          >
            <BsSearch />
          </ButtonSearch>
        </Wrapper>
      </Div>
    </>
  );
};

const Div = styled.div`
  display: flex;
  justify-content: center;
  margin-left: auto;
  margin-right: auto;
  margin-top: 60px;
`;
const Wrapper = styled.div`
  display: flex;
  background-color: white;
  border: 1px solid black;
  border-radius: 15px;
  &:hover {
    box-shadow: 0px 5px 16px -5px rgba(0, 0, 0, 0.5);
  }
`;
const Input = styled.input`
  height: 15px;
  width: 600px;
  font-size: 18px;
  position: relative;
  padding: 10px;
  border: none;
  border-radius: 15px;
`;

const ButtonDelete = styled.button`
  background-color: transparent;
  border: none;
  font-size: 16px;
  width: fit-content;
  &:hover {
    transform: scale(1.3);
  }
`;

const ButtonSearch = styled.button`
  background-color: transparent;
  border: none;
  border-radius: 5px;
  font-size: 16px;
  width: fit-content;

  &:hover {
    transform: scale(1.3);
  }
`;

export default SearchBar;
