import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import Home from './Components/Home/Home';
import NoMatch from './Components/NoMatch/NoMatch';
import LeagueDetail from './Components/LeagueDetail/LeagueDetail';

function App() {
  return (
    <div>
      <Router>
        <Switch>
          <Route path="/home">
            <Home/>
          </Route>
          <Route path="/league/:idLeague">
            <LeagueDetail/>
          </Route>
          <Route exact path="/">
            <Home/>
          </Route>
          <Route>
            <NoMatch/>
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
