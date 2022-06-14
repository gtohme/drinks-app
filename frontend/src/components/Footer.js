import styled from 'styled-components';
import { BsInstagram } from 'react-icons/bs';
import { FiTwitter } from 'react-icons/fi';
import { RiFacebookCircleLine } from 'react-icons/ri';
import LogoutButton from './LogoutButton';

const Footer = () => {
  return (
    <FooterDiv>
      <Wrapper>
        <Second>
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
        </Second>
        <LogOutDiv>
          <LogoutButton />
        </LogOutDiv>
      </Wrapper>
    </FooterDiv>
  );
};
const FooterDiv = styled.div`
  margin-top: 120px;
  position: relative;
`;

const Wrapper = styled.div`
  position: fixed;
  bottom: 0;
  display: flex;
  justify-content: center;
  width: 100%;
  height: 100px;
  background-color: black;
  margin-top: 100px;
`;
const Div = styled.div`
  font-size: 30px;
  color: white;
  margin-top: 22px;
  &:hover {
    transform: translateY(-5px);
    transition: transform 0.3s ease-in-out;
    cursor: pointer;
    color: orange;
  }
`;
const DivHashtag = styled.div`
  font-family: 'Lato', sans-serif;
  font-size: 18px;
  color: white;
  margin-top: 25px;
`;
const Second = styled.div`
  display: flex;
  gap: 30px;
`;
const LogOutDiv = styled.div`
  margin-top: 20px;
  position: absolute;
  right: 10px;
  bottom: 3 0px;
`;

export default Footer;
