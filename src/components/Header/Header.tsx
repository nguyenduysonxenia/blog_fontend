import React from 'react';
import PropTypes from 'prop-types';
import {Link} from 'react-router-dom'
import './Header.scss';
function Header(props: any) {
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
                  <Link to="/Posts" className="nav-link" href="#">
                    Post
                  </Link>
                </li>
                <li className="nav-item">
                  <Link to="/signin" className="nav-link" href="#">
                    Signin
                  </Link>
                </li>
                <li className="nav-item item_info_user">
                  <Link to="/login" className="nav-link" href="#">
                    <img className="img_info_user" src='/images/hinh3.jpg'  />
                    Duy Sơn
                  </Link>
                  <ul className="User-Dropdown">
                    <li className="dropdown_user-item" ><Link to='profile'>Setting</Link></li>
                    <li className="dropdown_user-item" ><Link to='profile'>Post</Link></li>
                    <li className="dropdown_user-item" ><Link to='profile'>Notifycations</Link><span>40</span></li>
                    <li className="dropdown_user-item" ><Link to='profile'>Log out</Link></li>
                  </ul>
                </li>
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
