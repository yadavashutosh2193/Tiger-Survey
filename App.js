import logo from './logo.png';
import './App.css';
import { Button } from 'reactstrap';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import CreateSurvey from './CreateSurvey';

function App(props) {
  return (
    <Router>
    <div className="App">
    <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
    </header>
    <Switch>
    <Route path = "/create"><CreateSurvey/></Route>
    <Route path = "/take">Take Survey</Route>
    <Route path = "/">
      
        <Link to = "/create"><Button className = "Survey-main-btn">Create Survey</Button></Link>
        <Link to = "/take"><Button className = "Survey-main-btn">Take Survey</Button></Link>
      
      </Route>
      </Switch>
</div>
    </Router>
  );
}

export default App;
