// yarn install
// yarn add react-router-dom
//yarn add styled-components
// yarn start
import GlobalStyles from './GlobalStyles';
import styled from 'styled-components';
import Header from './components/Header';
import Homepage from './components/Homepage';
// import DropDownMenu from './components/DropDownMenu';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import LogIn from './components/LogIn';

function App() {
  return (
    <Wrapper>
      <BrowserRouter>
        <GlobalStyles />
        <Header />
        {/* <DropDownMenu /> */}
        <RoutesWrapper>
          <Routes>
            <Route path='/' element={<Homepage />} />

            <Route path='/Login' element={<LogIn />} />
          </Routes>
        </RoutesWrapper>
      </BrowserRouter>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  width: 100%;
  height: 100%;
  //max-width:1000px;
`;

const RoutesWrapper = styled.div`
  display: flex;
  /* flex-direction: column; */
  width: 100%;
  height: 100%;
`;

// {/* <Route path="about" element={<About />} /> */}
export default App;
