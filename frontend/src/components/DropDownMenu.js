import styled from 'styled-components';

const DropDownMenu = ({ open }) => {
  return (
    <Bar>
      <Ul open={open}>
        <Div>SEARCH</Div>
        <Li>Random</Li>
        <Li>Ingredients</Li>
        <Li>A-Z</Li>
        <Li>Glasses</Li>
        <Li>Name</Li>
      </Ul>
    </Bar>
  );
};
const Bar = styled.nav`
  display: flex;
  justify-content: flex-end;
`;
const Div = styled.div`
  padding: 15px 15px;
  background-color: transparent;
  font-size: larger;
  font-weight: bold;
  font-family: 'Lato', sans-serif;
  background-color: black;
  color: white;
`;

const Ul = styled.ul`
  width: 125px;
  list-style: none;
  display: flex;
  flex-flow: column nowrap;

  transform: ${({ open }) => (open ? 'translateX(0)' : 'translateX(100%)')};
  transition: transform 0.3s ease-in-out;
`;
const Li = styled.li`
  padding: 15px 10px;
  background-color: transparent;
  font-size: larger;
  font-family: 'Lato', sans-serif;
  &:hover {
    background-color: #f7f5f0;
    border-radius: 5px;
  }
`;

export default DropDownMenu;
