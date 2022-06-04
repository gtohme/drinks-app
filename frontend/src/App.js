// yarn install
// yarn add react-router-dom
//yarn add styled-components
// yarn start
import GlobalStyles from './GlobalStyles';
import styled from 'styled-components';
import Header from './components/Header';
import Homepage from './components/Homepage';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import SignIn from './components/SignIn';

function App() {
  return (
    <Wrapper>
      <BrowserRouter>
        <GlobalStyles />
        <Header />
        <RoutesWrapper>
          <Routes>
            <Route path='/' element={<Homepage />} />

            <Route path='/Signin' element={<SignIn />} />
          </Routes>
        </RoutesWrapper>
      </BrowserRouter>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  width: 100%;
  height: 100%;
`;

const RoutesWrapper = styled.div`
  display: flex;
  /* flex-direction: column; */
  width: 100%;
  height: 100%;
`;

// {/* <Route path="about" element={<About />} /> */}
export default App;
