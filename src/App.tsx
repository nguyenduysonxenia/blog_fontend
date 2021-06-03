import './App.css';
import Container from './components/Container/Container';
import Home from './pages/home/index';
import Header from './components/Header/Header';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useParams
} from "react-router-dom";
function App() {
  return (
    <div className="App">
      <Header />
      <Router>
      <Switch>
          <Route exact path="/">
            <Home />
          </Route>
        </Switch>
      </Router>
    </div>

  );
}

export default App;
