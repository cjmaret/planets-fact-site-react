import React from 'react';
import { Route, Switch } from 'react-router-dom';
import './App.css';
import Header from './header/Header';
import PlanetsData from '../databases/planets-array';
import Footer from './footer/Footer';
import Lead from './lead/Lead';

function App() {
  return (
    <div className="page">
      <Header />
      <Switch>
        {PlanetsData.map((planet) => { 
          return (
            <Route exact path={`/${planet.id}`} >
             <Lead key={planet.id} data={planet} />
            </Route>
        )
        })}
      </Switch>
      <Footer />
    </div>
  );
}

export default App;
