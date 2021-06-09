import {Route,useHistory} from 'react-router-dom';
import React from 'react'
function PrivateRoute({isAuth: isAuth, component: Component,...rest}: any){
  const history = useHistory();
  const routeComponent = (props: any) => (
           isAuth
            ? React.createElement(Component, props)
            : history.replace('/signin')
    );
  return <Route {...rest} render={routeComponent}/>
}
export default PrivateRoute;