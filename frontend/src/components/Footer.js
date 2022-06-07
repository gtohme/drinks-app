import styled from 'styled-components';
import { BsInstagram } from 'react-icons/bs';
import { FiTwitter } from 'react-icons/fi';
import { RiFacebookCircleLine } from 'react-icons/ri';

const Footer = () => {
  return (
    <Wrapper>
      <Div>
        <BsInstagram />
      </Div>
      <Div>
        <FiTwitter />
      </Div>
      <Div>
        <RiFacebookCircleLine />
      </Div>
      <DivHashtag>#TreatYoSelf</DivHashtag>
    </Wrapper>
  );
};
const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  gap: 30px;
  position: absolute;
  bottom: 0;
  width: 100%;
  height: 75px;
  background-color: black;
`;
const Div = styled.div`
  font-size: 30px;
  color: white;
  margin-top: 18px;
`;
const DivHashtag = styled.div`
  font-family: 'Lato', sans-serif;
  font-size: 18px;
  color: white;
  margin-top: 25px;
`;
export default Footer;
