import React, { Component } from 'react';

class Header extends Component {
  render(){
    return (
        <header>
          <div className="container">
            <div className="logo">
              <h1>
                <a href="#" title="Facebook"> Facebook </a>
              </h1>
            </div>
            <div className="profile">
                <a href="#" title="Facebook">
                  <div className="nameprofile">
                    Meu perfil
                  </div>
                  <div className="icon-profile">
                    <div className="head"></div>
                    <div className="body"></div>
                  </div>
                </a>
            </div>
          </div>
        </header>
      );
  }
}

export default Header;
