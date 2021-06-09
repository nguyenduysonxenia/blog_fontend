import React,{useCallback, useEffect} from 'react';
import PropTypes from 'prop-types';
import {Link} from 'react-router-dom'
import './Header.scss';
import apiUser from '../../api/UserAPI'
import {setCurrentUser,logout} from '../../pages/user/UserSlice'
import {useDispatch,useSelector} from 'react-redux'
import {listenNotifycation} from '../../Socket'
import {SocketContext} from '../../Socket'

function Header(props: any) {
  const socket = React.useContext(SocketContext);
  const dispatch = useDispatch();
  const currentUser = useSelector((state: any)=> state.CurrentUser);

  const getCurrentUser = useCallback(async () =>{
    const token = localStorage.getItem('accessToken');
    if(token){
      let response = await apiUser.getCurrentUser()
      .catch((error: any)=>{
        console.log(error);
      })
      dispatch(setCurrentUser(response));
      const windows:any = window;
      windows.currentUser = response
    }
  },[])
  const handleLogout = ()=>{
    const action = logout({
      username: null,
      avatar: null,
      id: null,
      admin: null
    })
    dispatch(action);
  }
  useEffect(()=>{
    getCurrentUser()
    listenNotifycation(socket)
  },[])

  return (
    <div className="header">
      <div className="container">
        <div className="row">
          <nav className="navbar navbar-expand-lg navbar-light navbar_header ">
            <a className="navbar-brand logo_menu" href="#">
              Stein
            </a>
            <button
              className="navbar-toggler"
              type="button"
              data-toggle="collapse"
              data-target="#navbarScroll"
              aria-controls="navbarScroll"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarScroll">
              <ul className="navbar-nav mr-auto my-2 my-lg-0 navbar-nav-scroll"></ul>
              <ul className="list-nav-item">
                <li className="nav-item ">
                  <Link to="/" className="nav-link" >
                    Home <span className="sr-only">(current)</span>
                  </Link>
                </li>
                <li className="nav-item">
                  <Link to="/about" className="nav-link" >
                    About
                  </Link>
                </li>
                <li className="nav-item">
                  <Link to="/Posts/new" className="nav-link" href="#">
                    Post
                  </Link>
                </li>

                {
                  currentUser.username ?
                  (
                    <li className="nav-item item_info_user">
                      <Link to="/login" className="nav-link" href="#">
                        <img className="img_info_user" src='/images/hinh3.jpg'  />
                        {currentUser.username}
                      </Link>
                      <ul className="User-Dropdown">
                        <li className="dropdown_user-item" ><Link to='/profile'>Setting</Link></li>
                        <li className="dropdown_user-item" ><Link to='/posts'>Post</Link></li>
                        <li className="dropdown_user-item" ><Link to='profile'>Notifycations</Link><span>40</span></li>
                        <li onClick={handleLogout} className="dropdown_user-item" ><Link to=''>Log out</Link></li>
                      </ul>
                    </li>
                  )
                  :
                  (
                    <li className="nav-item">
                        <Link to="/signin" className="nav-link" href="#">
                          Signin/Signup
                        </Link>
                    </li>
                  )
                }
              </ul>
            </div>
          </nav>
        </div>
      </div>
    </div>
  );
}

Header.propTypes = {};

export default Header;
