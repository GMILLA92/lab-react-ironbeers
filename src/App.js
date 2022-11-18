import logo from './logo.svg';
import './App.css';
import {Routes, Route} from "react-router-dom"
import BeerDetails from './pages/BeerDetails';
import ListBeers from './pages/ListBeers';
import RandomBeer from './pages/RandomBeer';
import { NavLink } from "react-router-dom";
import CreateBeer from './pages/CreateBeer';

function App() {
  return (
    <div className="App">
      <NavLink to={'/'}>Home page</NavLink>
      <br></br>
      <NavLink to={'/listBeers'} >All beers</NavLink>
      <br></br>
      <NavLink to={'/new'}>Add a new beer</NavLink>
      <br></br>
      <NavLink to={'/random'}>Random beer</NavLink>
      <br></br>
      <Routes>
        <Route path="/"/>
        <Route path="/listBeers" element={<ListBeers />}/>
        <Route path="/listBeers/:BeerId" element={<BeerDetails />}/>
        <Route path="/random" element={<RandomBeer />}/>
        <Route path="/new" element={<CreateBeer />}/>
        <Route path="/search?q={query}" element={<ListBeers />}/>
      </Routes>
    </div>
  );
}

export default App;
