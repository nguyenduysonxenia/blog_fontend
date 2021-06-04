import './App.scss';
import Home from '../src/pages/home/index';
import Banner from './components/Banner/Banner';
import Header from './components/Header/Header';
import DetailPost from '../src/pages/detailPost/index'
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
        <Banner/>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/posts/:id" component={DetailPost} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
