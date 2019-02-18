import React, { Component } from 'react';
class Header extends Component {
  openNav = () => {
    document.getElementById("mySlideNav").style.width = "250px";
  }
  closeNav = () => {
    document.getElementById("mySlideNav").style.width = "0";
  }
  render() {
    return (
      <div>
        <div id="mySlideNav" className="sidenav">
          <a href="javascript:void(0)" onClick={this.closeNav} className="cb">&times;</a>
          <a href="#">This's link</a>
          <a href="#">This's link</a>
          <a href="#">This's link</a>
          <a href="#">This's link</a>
        </div>
        <nav className="navbar bg-dark navbar-dark">
          <div>
            <span className="m-r-5 bo1" onClick={this.openNav}>&#9776;</span>
            <a className="navbar-brand" href="#">Trang chủ</a>
          </div>
          <div className="nav-item dropdown">
            <a className="nav-link h-a dropdown-toggle" data-toggle="dropdown" href="#">Tài Khoản</a>
            <div className="dropdown-menu">
              <a className="dropdown-item" href="#">Link 1</a>
              <a className="dropdown-item" href="#">Link 2</a>
              <a className="dropdown-item" href="#">Link 3</a>
            </div>
          </div>
        </nav>
      </div>
    );
  }
}

export default Header;
