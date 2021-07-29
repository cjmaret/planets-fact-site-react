import React from 'react';
import { Route, Switch } from 'react-router-dom';
import './App.css';
import Header from './header/Header';
import LeadMercury from './lead-mercury/LeadMercury';
import LeadVenus from './lead-venus/LeadVenus';
import LeadEarth from './lead-earth/LeadEarth';
import LeadMars from './lead-mars/LeadMars';
import LeadJupiter from './lead-jupiter/LeadJupiter';
import LeadSaturn from './lead-saturn/LeadSaturn';
import LeadUranus from './lead-uranus/LeadUranus';
import LeadNeptune from './lead-neptune/LeadNeptune';
import Footer from './footer/Footer';

function App() {
  return (
    <div className="page">
      <Header />
      <Switch>
        <Route exact path="/">
          <LeadMercury />
        </Route>
        <Route path="/venus">
          <LeadVenus />
        </Route>
        <Route path="/earth">
          <LeadEarth />
        </Route>
        <Route path="/mars">
          <LeadMars />
        </Route>
        <Route path="/jupiter">
          <LeadJupiter />
        </Route>
        <Route path="/saturn">
          <LeadSaturn />
        </Route>
        <Route path="/uranus">
          <LeadUranus />
        </Route>
        <Route path="/neptune">
          <LeadNeptune />
        </Route>
      </Switch>
      <Footer />
    </div>
  );
}

export default App;
