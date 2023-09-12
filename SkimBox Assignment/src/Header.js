import { Component } from "react";
import { RxHamburgerMenu } from "react-icons/rx";
import { BiChevronDown } from "react-icons/bi";

import "./header.css";

class Header extends Component {
  state = { isShowsMenu: false };

  onClickMenu = () => {
    this.setState((prevState) => ({
      isShowsMenu: !prevState.isShowsMenu
    }));
  };

  menuTabs = () => (
    <>
      <div className="header-container">
        <ul className="menus-container">
          <li className="menus">
            Solutions <BiChevronDown />
          </li>
          <li className="menus">Pricing</li>
          <li className="menus">
            Resources <BiChevronDown />
          </li>
          <li className="menus login-menu">Login</li>
        </ul>

        <div className="login-free-buttons-container">
          <button type="button" className="login-button">
            Login
          </button>
          <button type="button" className="start-free-trail-button">
            Start Free Trail
          </button>
        </div>
      </div>
    </>
  );

  render() {
    const { isShowsMenu } = this.state;
    return (
      <>
        <div className="mobile-header-view-container">
          <div className="nav-container">
            <img
              src="https://res.cloudinary.com/dbyzrfi0m/image/upload/v1694503054/download_1_uv9lyq.png"
              alt="logo"
              className="logo-img"
            />
            <div className="left-container">
              <span className="free-trail">Start Free Trail</span>
              <button
                type="button"
                className="menu-button"
                onClick={this.onClickMenu}
              >
                <RxHamburgerMenu className="menu" font-size={25} />
              </button>
            </div>
          </div>
          {isShowsMenu ? this.menuTabs() : ""}

          <div className="category-container">
            <button type="button" className="category-buttons">
              Basic
            </button>
            <button type="button" className="category-buttons">
              Shopify
            </button>
            <button type="button" className="category-buttons">
              Advanced
            </button>
          </div>
        </div>

        <div className="large-header-view-container">
          <div className="nav-container">
            <img
              src="https://res.cloudinary.com/dbyzrfi0m/image/upload/v1694503054/download_1_uv9lyq.png"
              alt="logo"
              className="logo-img"
            />
            {this.menuTabs()}
          </div>
        </div>
      </>
    );
  }
}
export default Header;
