import styled from 'styled-components';
import errorImage from '../src/images/stg.png';

const ErrorMessage = () => {
  return (
    <Wrapper>
      <Img src={errorImage} alt='Error' />
    </Wrapper>
  );
};

const Wrapper = styled.div`
  width: 100%;
  height: 100%;
`;
const Img = styled.img`
  width: 100%;
  height: 100%;
`;

export default ErrorMessage;
