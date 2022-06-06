import styled from 'styled-components';

const DropDownMenu = () => {
  return (
    <Bar>
      <Ul>
        <li>Ingredients</li>
        <li>A-Z</li>
        <li>random</li>
        <li>glasses</li>
        <li>name</li>
        <li>idk</li>
      </Ul>
    </Bar>
  );
};
const Bar = styled.nav`
  display: flex;
  justify-content: flex-end;
  margin-right: 10px;
`;
const Ul = styled.ul`
  display: flex;
  flex-flow: column nowrap;
  background-color: orange;
  position: fixed;
  /* transform:  */
`;
export default DropDownMenu;
