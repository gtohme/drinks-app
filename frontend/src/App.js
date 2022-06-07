import { BrowserRouter, Routes, Route } from 'react-router-dom';
import GlobalStyles from './GlobalStyles';
import styled from 'styled-components';
import Header from './components/Header';
import Homepage from './components/Homepage';
import Footer from './components/Footer';
// import DropDownMenu from './components/DropDownMenu';
import Random from './components/Random';

function App() {
  return (
    <Wrapper>
      <BrowserRouter>
        <GlobalStyles />
        <Header />
        <RoutesWrapper>
          <Routes>
            <Route path='/' element={<Homepage />} />
            <Route path='/random' element={<Random />} />
            {/* <Route path='/alphabetical' element={<Alphabetical />} />
             <Route path='/ingredients' element={<Ingredients />} />
             <Route path='/glasses' element={<Glasses />} /> */}
          </Routes>
        </RoutesWrapper>
        <Footer />
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
