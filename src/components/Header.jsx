import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Popup from 'reactjs-popup';
import 'reactjs-popup/dist/index.css';
// import { toast } from 'react-toastify';

import { useUserContext } from '../contexts/userContext';
import Dropdown from './Dropdown';
import logo from '../assets/images/logo/logo.png';
import logoFold from '../assets/images/logo/logo-fold.png';
import avatar from '../assets/images/avatars/general.png';
import masterApi from '../apis/masterApi';

const Header = () => {
  const { user, setUser } = useUserContext();
  // const [user, setUser] = useState(null);
  // const [userStatus, setUserStatus] = useState('loading');

  const [openProfileDropdown, setOpenProfileDropdown] = useState(false);

  const [headerScrolled, setHeaderScrolled] = useState(false);
  const [lastScroll, setLastScroll] = useState(0);
  const [navActive, setNavActive] = useState(true);

  const [sidebarActive, setSidebarActive] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);

  const logout = async () => {
    // Optimistic approach
    setUser(undefined);
    await masterApi.delete('/users/logout');
  };

  // const getUser = async () => {
  //   try {
  //     // setUserStatus('loading');

  //     const { data } = await masterApi.get('/users/me');
  //     setUser(data.data.user);

  //     // setUserStatus('loggedIn');
  //   } catch (err) {
  //     // setUserStatus('loggedOut');
  //     console.log(err);
  //   }
  // };

  useEffect(() => {
    window.scrollTo(0, 0);
    // getUser();
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      setHeaderScrolled(window.scrollY >= 80);

      setLastScroll(window.scrollY);

      setNavActive(window.scrollY < lastScroll || !headerScrolled);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [lastScroll, headerScrolled]);

  const logoutPopup = (
    <Popup
      trigger={
        <button className="dropdown-item">
          <div className="d-flex align-items-center">
            <i className="font-size-lg me-2 feather icon-power"></i>
            <span>Sign Out</span>
          </div>
        </button>
      }
      modal
      contentStyle={{
        borderRadius: '0.5rem',
        display: 'flex',
        width: 'min(30rem, 90vw',
        flexDirection: 'column',
        justifyContent: 'space-around',
        minHeight: '13rem',
        padding: '2rem',
      }}
    >
      {close => (
        <>
          <h3 style={{ textAlign: 'center' }}>
            Are you sure you want to Logout?
          </h3>
          <div
            style={{
              margin: '0 auto',
              width: '70%',
              display: 'flex',
              justifyContent: 'space-between',
            }}
          >
            <button className="btn btn-success" onClick={close}>
              Cancel
            </button>
            <button className="btn btn-danger" onClick={logout}>
              Logout
            </button>
          </div>
        </>
      )}
    </Popup>
  );

  const sidebar = (
    <aside
      className={`side-nav vertical-menu nav-menu-light scrollable ${
        !sidebarActive ? 'nav-menu-collapse' : 'is-opened'
      }`}
    >
      <div className="nav-logo">
        <Link to="/erp" className="w-100 logo">
          <img
            className="img-fluid"
            src={!sidebarActive ? logoFold : logo}
            style={{ maxHeight: '70px' }}
            alt="logo"
          />
        </Link>

        <div
          className="mobile-close mobile-toggle"
          onClick={() => setSidebarActive(false)}
        >
          <i className="icon-arrow-left feather"></i>
        </div>
      </div>
      <ul className="nav-menu">
        <li className="nav-menu-item">
          <Link to="/erp/dashboard">
            <i className="feather icon-home"></i>
            <span className="nav-menu-item-title">Dashboard</span>
          </Link>
        </li>

        {/* {dropdownMarkup} */}

        <li className="nav-menu-item">
          <a href="h-index.html">
            <i className="feather icon-home"></i>
            <span className="nav-menu-item-title">Dashboard</span>
          </a>
        </li>
        {/* <li className="nav-submenu"> */}
        {/* <Dropdown
          openHandler={() =>
            activeDropdown !== 1
              ? setActiveDropdown(1)
              : setActiveDropdown(null)
          }
          title={'Apps'}
          icon={'grid'}
          open={activeDropdown === 1}
          key={1}
          items={[
            {
              page: '/mail',
              title: 'Mail',
            },
            {
              page: '/mail',
              title: 'Mail',
            },
            {
              page: '/mail',
              title: 'Mail',
            },
          ]} 
        /> */}
        {/* </li> */}
        {/* <li className="nav-submenu">
                    <div className="nav-submenu-title">
                      <span>
                        <i className="feather icon-package"></i>
                        <span>User Interface</span>
                      </span>
                      <i className="nav-submenu-arrow caret-bottom"></i>
                    </div>
                    <ul className="nav-menu">
                      <li className="nav-submenu">
                        <div className="nav-submenu-title">
                          <span>
                            <i className="feather icon-box"></i>
                            <span>UI Elements</span>
                          </span>
                        </div>
                      </li>
                      <li className="nav-submenu">
                        <div className="nav-submenu-title">
                          <span>
                            <i className="feather icon-package"></i>
                            <span>Components</span>
                          </span>
                        </div>
                      </li>
                      <li className="nav-submenu">
                        <div className="nav-submenu-title">
                          <span>
                            <i className="feather icon-file-text"></i>
                            <span>Forms</span>
                          </span>
                        </div>
                      </li>
                      <li className="nav-submenu">
                        <div className="nav-submenu-title">
                          <span>
                            <i className="feather icon-grid"></i>
                            <span>Tables</span>
                          </span>
                        </div>
                      </li>
                    </ul>
                  </li> */}

        <li className="nav-menu-item">
          <Link to="/faq">
            <i className="feather icon-help-circle"></i>
            <span className="nav-menu-item-title">FAQ</span>
          </Link>
        </li>

        <li className="nav-menu-item">
          <Link to="/#pricing">
            <i className="feather icon-dollar-sign"></i>
            <span className="nav-menu-item-title">Pricing</span>
          </Link>
        </li>
      </ul>
    </aside>
  );

  return (
    <React.Fragment>
      {/* Only for Mobile screen */}
      {sidebar}
      {/* Only for Mobile screen */}

      <header
        className={`header-text-dark header-nav layout-horizon ${
          headerScrolled ? 'shadow-md' : ''
        }`}
      >
        <div className="header-nav-wrap container bg-white">
          <div className="header-nav-left">
            <Link to="/" className="nav-logo">
              <div className="w-100 logo">
                <img
                  className="img-fluid"
                  src={logo}
                  style={{ maxHeight: '75px' }}
                  alt="logo"
                />
              </div>
            </Link>

            <div
              className="header-nav-item mobile-toggle"
              onClick={() => setSidebarActive(true)}
            >
              <div className="header-nav-item-select cursor-pointer">
                <i className="nav-icon feather icon-menu icon-arrow-right"></i>
              </div>
            </div>
          </div>

          <div className="header-nav-right">
            {user ? (
              <div className="header-nav-item">
                <div
                  className="dropdown header-nav-item-select nav-profile"
                  tabIndex={0}
                  onBlur={() => setOpenProfileDropdown(false)}
                  onFocus={() => setOpenProfileDropdown(true)}
                >
                  <div className="toggle-wrapper" id="nav-profile-dropdown">
                    <div
                      className="avatar avatar-circle avatar-image"
                      style={{
                        width: '37px',
                        height: '37px',
                        lineHeight: '37px',
                      }}
                    >
                      <img src={avatar} alt="avatar" />
                    </div>
                    <span className="fw-bold mx-1" style={{ fontSize: '1rem' }}>
                      {user.name}
                    </span>
                    <i
                      className={`feather icon-chevron-${
                        openProfileDropdown ? 'up' : 'down'
                      }`}
                    ></i>
                  </div>
                  <div
                    className={`dropdown-menu dropdown-menu ${
                      openProfileDropdown ? 'show' : ''
                    }`}
                    style={{ transform: 'translateX(-31%)' }}
                  >
                    <div className="nav-profile-header disable">
                      <div className="d-flex align-items-center">
                        <div className="avatar avatar-circle avatar-image">
                          <img src={avatar} alt="" />
                        </div>
                        <div className="d-flex flex-column ms-1">
                          <span className="fw-bold text-dark">{user.name}</span>
                          <span className="font-size-sm">{user.email}</span>
                        </div>
                      </div>
                    </div>
                    <Link to="/profile" className="dropdown-item">
                      <div className="d-flex align-items-center">
                        <i className="font-size-lg me-2 feather icon-user"></i>
                        <span>Profile</span>
                      </div>
                    </Link>
                    <Link to="/support" className="dropdown-item">
                      <div className="d-flex align-items-center">
                        <i className="font-size-lg me-2 feather icon-life-buoy"></i>
                        <span>Support</span>
                      </div>
                    </Link>
                    {/* <button className="dropdown-item" onClick={signout}>
                      <div className="d-flex align-items-center">
                        <i className="font-size-lg me-2 feather icon-power"></i>
                        <span>Sign Out</span>
                      </div>
                    </button> */}

                    {logoutPopup}
                  </div>
                </div>
              </div>
            ) : (
              <>
                <div className="header-nav-item mx-2">
                  <Link to="/login" className="btn btn-success">
                    Login
                  </Link>
                </div>
                <div className="header-nav-item mx-2">
                  <Link to="/signup" className="btn btn-primary">
                    Start for Free
                  </Link>
                </div>
              </>
            )}
          </div>
        </div>

        <nav
          className="header-navbar nav-menu-light"
          style={{
            transition: 'all 0.3s',
            visibility: navActive ? 'visible' : 'hidden',
            translate: navActive ? '0' : '0 -100%',
            zIndex: -1,
          }}
        >
          <div className="container" style={{ height: '100%' }}>
            <ul className="nav-menu nav-menu-horizontal">
              <li className="nav-menu-item">
                <Link to="/erp/dashboard">
                  <i className="feather icon-home"></i>
                  <span className="nav-menu-item-title">Dashboard</span>
                </Link>
              </li>
              {/* <li className="nav-submenu">
                <div className="nav-submenu-title">
                  <span>
                    <i className="feather icon-grid"></i>
                    <span>Apps</span>
                  </span>
                  <i className="nav-submenu-arrow caret-bottom"></i>
                </div>
                <ul className="nav-menu">
                  <li className="nav-menu-item">
                    <a href="h-mail.html">
                      <i className="feather icon-mail"></i>
                      <span>Mail</span>
                    </a>
                  </li>
                  <li className="nav-menu-item">
                    <a href="h-chat.html">
                      <i className="feather icon-message-circle"></i>
                      <span>Chat</span>
                    </a>
                  </li>
                  <li className="nav-menu-item">
                    <a href="h-calendar.html">
                      <i className="feather icon-calendar"></i>
                      <span>Calendar</span>
                    </a>
                  </li>
                </ul>
              </li> */}
              <li className="nav-menu-item">
                <Link to="/faq">
                  <i className="feather icon-help-circle"></i>
                  <span className="nav-menu-item-title">FAQ</span>
                </Link>
              </li>

              <li className="nav-menu-item">
                <Link to="/pricing">
                  <i className="feather icon-dollar-sign"></i>
                  <span className="nav-menu-item-title">Pricing</span>
                </Link>
              </li>
            </ul>
          </div>
        </nav>
      </header>

      {/* <!-- Header Navbar START --> */}
      {/*  <nav
        className="header-navbar nav-menu-light"
        style={{
          position: 'absolute',
          top: '4.375rem',
          left: 0,
          visibility: navActive ? 'hidden' : 'visible',
        }}
      >
        <div className="container">
          <ul className="nav-menu nav-menu-horizontal">
            <li className="nav-menu-item">
              <Link to="/erp/dashboard">
                <i className="feather icon-home"></i>
                <span className="nav-menu-item-title">Dashboard</span>
              </Link>
            </li>
            <li className="nav-submenu">
              <div className="nav-submenu-title">
                <span>
                  <i className="feather icon-grid"></i>
                  <span>Apps</span>
                </span>
                <i className="nav-submenu-arrow caret-bottom"></i>
              </div>
              <ul className="nav-menu">
                <li className="nav-menu-item">
                  <a href="h-mail.html">
                    <i className="feather icon-mail"></i>
                    <span>Mail</span>
                  </a>
                </li>
                <li className="nav-menu-item">
                  <a href="h-chat.html">
                    <i className="feather icon-message-circle"></i>
                    <span>Chat</span>
                  </a>
                </li>
                <li className="nav-menu-item">
                  <a href="h-calendar.html">
                    <i className="feather icon-calendar"></i>
                    <span>Calendar</span>
                  </a>
                </li>
              </ul>
            </li>
             // <li className="nav-submenu">
              <div className="nav-submenu-title">
                <span>
                  <i className="feather icon-package"></i>
                  <span>User Interface</span>
                </span>
                <i className="nav-submenu-arrow caret-bottom"></i>
              </div>
              <ul className="nav-menu">
                <li className="nav-submenu">
                  <div className="nav-submenu-title">
                    <span>
                      <i className="feather icon-box"></i>
                      <span>UI Elements</span>
                    </span>
                  </div>
                </li>
                <li className="nav-submenu">
                  <div className="nav-submenu-title">
                    <span>
                      <i className="feather icon-package"></i>
                      <span>Components</span>
                    </span>
                  </div>
                </li>
                <li className="nav-submenu">
                  <div className="nav-submenu-title">
                    <span>
                      <i className="feather icon-file-text"></i>
                      <span>Forms</span>
                    </span>
                  </div>
                </li>
                <li className="nav-submenu">
                  <div className="nav-submenu-title">
                    <span>
                      <i className="feather icon-grid"></i>
                      <span>Tables</span>
                    </span>
                  </div>
                </li>
              </ul>
            </li> // 

            <li className="nav-menu-item">
              <Link to="/faq">
                <i className="feather icon-help-circle"></i>
                <span className="nav-menu-item-title">FAQ</span>
              </Link>
            </li>

            <li className="nav-menu-item">
              <Link to="/pricing">
                <i className="feather icon-dollar-sign"></i>
                <span className="nav-menu-item-title">Pricing</span>
              </Link>
            </li>
          </ul>
        </div>
      </nav> */}

      {/* <!-- Header Navbar END --> */}
    </React.Fragment>
  );
};

export default Header;
