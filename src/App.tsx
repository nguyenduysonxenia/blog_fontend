import './App.scss';
import Home from '../src/pages/home/index';
import Header from './components/Header/Header';
import DetailPost from '../src/pages/detailPost/index'
import Signup from './components/Signup/Signup'
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
function App() {
  return (
    <Router>
      <div className="App">
        <Header/>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/posts/:id" component={DetailPost} />
          <Route path="/signup" component={Signup} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
