import './App.scss';
import Home from './pages/home/Index';
import Header from './components/Header/Header';
import DetailPost from './pages/detailPost/Index'
import Signup from './components/Signup/Signup'
import Signin from './components/Signin/Signin'
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
          <Route path="/posts/:postId" component={DetailPost} />
          <Route path="/signup" component={Signup} />
          <Route path="/signin" component={Signin} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
