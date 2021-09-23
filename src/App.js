import React from 'react';
import './App.css';
import { Switch, Route } from "react-router-dom";
import Navbar from './components/Navbar';
import countries from './countries.json'
import CountriesList from './components/CountriesList';
import CountryDetails from './components/CountryDetails';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <div className="container">
        <div className="row">
          <div className="col-md-5" style={{"max-height": "90vh", "overflow": "scroll"}}>
          <CountriesList countries={countries} />
          </div>

          <div className="col-md-7">
          <Switch>
            <Route exact path="/:alpha3Code" component={CountryDetails}/>
          </Switch>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
