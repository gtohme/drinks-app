import styled from 'styled-components';
import { BsInstagram } from 'react-icons/bs';
import { FiTwitter } from 'react-icons/fi';
import { RiFacebookCircleLine } from 'react-icons/ri';
import LogoutButton from './LogoutButton';

const Footer = () => {
  return (
    <div>
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
        <div>
          <LogoutButton />
        </div>
      </Wrapper>
    </div>
  );
};
const Wrapper = styled.div`
  position: fixed;
  bottom: 0;
  display: flex;
  justify-content: center;
  flex: 1; ///not sure....
  gap: 30px;

  width: 100%;
  height: 100px;
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
