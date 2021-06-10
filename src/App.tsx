import './App.scss';
import Home from './pages/home/Index';
import Header from './components/Header/Header';
import DetailPost from './pages/detailPost/Index'
import Signup from './components/Signup/Signup'
import Signin from './components/Signin/Signin'
import AddPost from './pages/addPost/Index'
import ListPost from './pages/listPost/Index'
import EditPost from './pages/editPost/Index'
import {SocketContext, socket } from "./Socket";
import PrivateRoute from './PrivateRouter'
import {useSelector} from 'react-redux'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
function App() {
  return (
    <Router>
     <SocketContext.Provider value={socket}>
     <div className="App">
        <Header/>
        <Switch>
          <Route exact path="/" component={Home} />
          {/* <Route path="/posts/new" exact component={AddPost} /> */}
          <PrivateRoute path="/posts/new" exact component={AddPost}   />
          <PrivateRoute path="/posts/:postId/edit" exact component={EditPost} />
          <Route path="/posts/:postId" exact component={DetailPost} />
          <PrivateRoute path="/posts" exact component={ListPost} />
          <Route path="/signup" component={Signup} />
          <Route path="/signin" component={Signin} />

        </Switch>
      </div>
     </SocketContext.Provider>
    </Router>
  );
}

export default App;
