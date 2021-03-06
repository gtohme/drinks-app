import { BrowserRouter, Routes, Route } from 'react-router-dom';
import GlobalStyles from './GlobalStyles';
import styled from 'styled-components';
import Header from './components/Header';
import Homepage from './components/Homepage';
import Footer from './components/Footer';
// import DropDownMenu from './components/DropDownMenu';
import Random from './components/Random';
import Alphabetical from './components/DrinkDetails/Alphabetical';
import Ingredients from './components/DrinkDetails/Ingredients';
import Glasses from './components/DrinkDetails/Glasses';
import NameOfDrinks from './components/DrinkDetails/NamesOfDrinks';
import Profile from './components/Profile';
import ListOfDrinks from './components/ListOfDrinks';
import DrinkCard from './components/DrinkDetails/DrinkCard';

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
            <Route path='/alphabetical' element={<Alphabetical />} />
            <Route path='/ingredients' element={<Ingredients />} />
            <Route path='/glasses' element={<Glasses />} />
            <Route path='/name/:value' element={<NameOfDrinks />} />
            <Route path='/result/:drink' element={<ListOfDrinks />} />
            <Route path='/profile' element={<Profile />} />
            <Route path='/drink/:idDrink' element={<DrinkCard />} />
          </Routes>
        </RoutesWrapper>
        <Footer />
      </BrowserRouter>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  /* width: 100vw;
  height: 100vh;
  overflow: hidden; */
  //max-width:1000px;
`;

const RoutesWrapper = styled.div`
  padding: 120px 0 150px;
`;

// {/* <Route path="about" element={<About />} /> */}
export default App;
