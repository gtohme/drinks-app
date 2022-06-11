import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

const DropDownMenu = ({ open }) => {
  return (
    <Bar>
      <Ul open={open}>
        <Div>SEARCH</Div>
        <NavigationLink to='/random'>Random</NavigationLink>
        <NavigationLink to='/alphabetical'>A-Z</NavigationLink>
        <NavigationLink to='/ingredients'>Ingredients</NavigationLink>
        <NavigationLink to='/glasses'>Glasses</NavigationLink>
        <NavigationLink to='/name'>Name</NavigationLink>
      </Ul>
    </Bar>
  );
};
const Bar = styled.nav`
  display: flex;
  justify-content: flex-end;
  margin-top: 350px;
  margin-right: -10px;
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
  width: 150px;
  list-style: none;
  display: flex;
  flex-flow: column nowrap;

  transform: ${({ open }) => (open ? 'translateX(0)' : 'translateX(100%)')};
  transition: transform 0.3s ease-in-out;
`;
const NavigationLink = styled(NavLink)`
  cursor: pointer;
  text-decoration: none;
  padding: 15px 10px;
  background-color: transparent;
  font-size: larger;
  font-family: 'Lato', sans-serif;
  color: black;
  &:hover {
    background-color: #f7f5f0;
    border-radius: 5px;
  }
`;

export default DropDownMenu;
