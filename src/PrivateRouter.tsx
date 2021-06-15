import {Route,Redirect} from 'react-router-dom';
import React from 'react'
import {checkLogin} from './Authen'
function PrivateRoute({ component: Component,...rest}: any){
  const isLogin: any = checkLogin()
  const routeComponent = (props: any) => (
            isLogin
            ? React.createElement(Component, props)
            :  <Redirect to="/signin" />
    );
  return <Route {...rest} render={routeComponent}/>
}
export default PrivateRoute;