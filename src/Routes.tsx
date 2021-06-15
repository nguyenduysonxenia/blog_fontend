import React from 'react'
import PropTypes from 'prop-types'
import {SocketContext, socket } from "./Socket";
import Home from './pages/home/Index';
import Header from './components/Header/Header';
import DetailPost from './pages/detailPost/Index'
import Signup from './components/Signup/Signup'
import Signin from './components/Signin/Signin'
import AddPost from './pages/addPost/Index'
import ListPost from './pages/listPost/Index'
import EditPost from './pages/editPost/Index'
import PrivateRoute from './PrivateRouter'
import PrivateAdminRoute from './PrivateAdminRouter'
import Profile from './pages/profile/Index'
import EditPassword from './pages/editPassword/index'
import AdminHome from './pages/adminHome/Index'
import NotFound from './components/Notfound/NotFound'
import AdminUser from './pages/adminUser/Index'
import {checkShowHeader} from "./utils/CheckShow";
import {useLocation} from 'react-router-dom'
import {checkAdmin,checkLogin} from './Authen'
import{
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  withRouter,
} from "react-router-dom";
function Routes(props: any) {
  const pathname: any = useLocation().pathname;
  const isLogin = checkLogin();
  const isAdim = checkAdmin();
  return (
     <SocketContext.Provider value={socket}>
         {checkShowHeader(pathname) && <Header/>}
        <Switch>
          <Route exact path="/" component={Home} />
          <PrivateRoute isAuth={isLogin} path="/posts/new" exact component={AddPost} />
          <PrivateRoute isAuth={isLogin} path="/posts/:postId/edit" exact component={EditPost} />
          <Route path="/posts/:postId" exact component={DetailPost} />
          <PrivateRoute isAuth={isLogin} path="/posts" exact component={ListPost} />
          <PrivateRoute isAuth={isLogin} path="/profile" exact component={Profile} />
          <PrivateRoute isAuth={isLogin} path="/editPassword" exact component={EditPassword}   />
          <Route path="/signup" component={Signup} />
          <Route path="/signin" component={Signin} />
          <PrivateAdminRoute isAuth={isAdim} path="/admin/users" exact component={AdminUser} />
          <PrivateAdminRoute isAuth={isAdim} path="/admin" exact component={AdminHome} />
          <Route path='*' exact={true} component={NotFound} />
        </Switch>
     </SocketContext.Provider>
  )
}

Routes.propTypes = {

}

export default withRouter(Routes)

