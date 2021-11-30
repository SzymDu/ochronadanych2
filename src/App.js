import './App.css';
import {BrowserRouter as Router, Link, Route, Switch} from "react-router-dom";
import {Component} from "react";
import PeselComponent from "./PeselComponent";
import LuhnaComponent from "./LuhnaComponent";
import FermatComponent from "./FermatComponent";
import KluczeComponent from "./KluczeComponent";


function App() {
  return (
      <Router>
        <div>
          <ul>
            <li>
              <Link to="/pesel">Pesel</Link>
            </li>
            <li>
              <Link to="/luhna">Luhna</Link>
            </li>
            <li>
              <Link to="/fermat">Test fermata</Link>
            </li>
            <li>
              <Link to="/klucze">Generowanie kluczy</Link>
            </li>
            <li>
              <Link to="/zad5">Zad5</Link>
            </li>
          </ul>
          <hr/>
          <Switch>
            <Route exact path="/pesel">
              <PeselComponent/>
            </Route>
            <Route exact path="/luhna">
              <LuhnaComponent/>
            </Route>
            <Route path="/fermat">
              <FermatComponent/>
            </Route>
            <Route path="/klucze">
              <KluczeComponent/>
            </Route>
            {/*<Route path="/zad5">*/}
            {/*  <PlayfairComponent/>*/}
            {/*</Route>*/}
          </Switch>
        </div>
      </Router>
  )
      ;
}

export default App;
