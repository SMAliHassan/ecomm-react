import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

import Dropdown from './Dropdown';
import logo from '../assets/images/logo/logo.png';
import logoFold from '../assets/images/logo/logo-fold.png';
import avatar from '../assets/images/avatars/general.png';
import masterApi from '../apis/masterApi';

const Header = () => {
  const [openProfileDropdown, setOpenProfileDropdown] = useState(false);
  const [userStatus, setUserStatus] = useState('loading');
  const [user, setUser] = useState(null);
  const [sidebarActive, setSidebarActive] = useState(false);
  const [scrolledHeaderActive, setScrolledHeaderActive] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);

  // const dropdownMenu = [
  //   {
  //     title: 'Master Product',
  //     icon: 'shopping-bag',
  //     items: [
  //       {
  //         page: 'product-local',
  //         title: 'Mast Product List',
  //         active: true,
  //       },
  //       {
  //         page: 'product-local',
  //         title: 'Mast Product List',
  //       },
  //       {
  //         page: 'product-local',
  //         title: 'Mast Product List',
  //       },
  //     ],
  //   },
  //   {
  //     title: 'Orders',
  //     icon: 'shopping-cart',
  //     items: [
  //       {
  //         page: 'order-local',
  //         title: 'Order List',
  //       },
  //     ],
  //   },
  //   {
  //     title: 'Master Product',
  //     icon: 'shopping-bag',
  //     items: [
  //       {
  //         page: 'product-local',
  //         title: 'Mast Product List',
  //       },
  //       {
  //         page: 'product-local',
  //         title: 'Mast Product List',
  //       },
  //       {
  //         page: 'product-local',
  //         title: 'Mast Product List',
  //       },
  //     ],
  //   },
  //   {
  //     title: 'Master Product',
  //     icon: 'shopping-bag',
  //     items: [
  //       {
  //         page: 'product-local',
  //         title: 'Mast Product List',
  //       },
  //       {
  //         page: 'product-local',
  //         title: 'Mast Product List',
  //       },
  //       {
  //         page: 'product-local',
  //         title: 'Mast Product List',
  //       },
  //     ],
  //   },
  // ];

  // const dropdownMarkup = dropdownMenu.map((el, i) => {
  //   const open = activeDropdown === i ? true : false;

  //   return (
  //     <Dropdown
  //       openHandler={() =>
  //         !open ? setActiveDropdown(i) : setActiveDropdown(null)
  //       }
  //       title={el.title}
  //       items={el.items}
  //       icon={el.icon}
  //       open={open}
  //       key={i}
  //     />
  //   );
  // });

  const getUser = async () => {
    try {
      setUserStatus('loading');
      const { data } = await masterApi.get('/users/me');
      setUser(data.data.user);
      setUserStatus('loaded');
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    window.scrollTo(0, 0);
    getUser();

    setInterval(() => {
      setScrolledHeaderActive(window.scrollY >= 170);
    }, 200);
  }, []);

  const signout = () => {
    console.log('signout');
  };

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
        <li className="nav-submenu">
          <Dropdown
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
          />
        </li>
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

  const scrolledHeader = (
    <nav
      className="header-text-dark header-nav"
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        transition: 'all 300ms !important',
        transform: `translateY(${!scrolledHeaderActive ? '-100%' : '0'})`,
        opacity: scrolledHeaderActive ? 1 : 0,
      }}
    >
      <div className="header-nav-wrap container">
        <div className="header-nav-left">
          <div className="header-nav-item desktop-toggle">
            <div
              className="header-navbar nav-menu-light"
              style={{ all: 'unset' }}
            >
              <div className="container">
                <ul className="nav-menu nav-menu-horizontal">
                  <li className="nav-menu-item">
                    <a href="h-index.html">
                      <i className="feather icon-home"></i>
                      <span className="nav-menu-item-title">Dashboard</span>
                    </a>
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
              </div>
            </div>
          </div>

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
                onClick={() => setOpenProfileDropdown(!openProfileDropdown)}
                onMouseEnter={() => setOpenProfileDropdown(true)}
                onMouseLeave={() => setOpenProfileDropdown(false)}
              >
                <div className="toggle-wrapper" id="nav-profile-dropdown">
                  <div
                    className="avatar avatar-circle avatar-image"
                    style={{
                      width: '35px',
                      height: '35px',
                      lineHeight: '35px',
                    }}
                  >
                    <img src={avatar} alt="avatar" />
                  </div>
                  <span className="fw-bold mx-1">SM Ali Hassan</span>
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
                        <span className="fw-bold text-dark">SM Ali Hassan</span>
                        <span className="font-size-sm">
                          syedalihassan6651@gmail.com
                        </span>
                      </div>
                    </div>
                  </div>
                  <button className="dropdown-item">
                    <div className="d-flex align-items-center">
                      <i className="font-size-lg me-2 feather icon-user"></i>
                      <span>Profile</span>
                    </div>
                  </button>
                  <button className="dropdown-item">
                    <div className="d-flex align-items-center">
                      <i className="font-size-lg me-2 feather icon-life-buoy"></i>
                      <span>Support</span>
                    </div>
                  </button>
                  <button className="dropdown-item" onClick={signout}>
                    <div className="d-flex align-items-center">
                      <i className="font-size-lg me-2 feather icon-power"></i>
                      <span>Sign Out</span>
                    </div>
                  </button>
                </div>
              </div>
            </div>
          ) : (
            <React.Fragment>
              <div className="header-nav-item mx-2">
                <Link to="/login" className="btn btn-success">
                  Login
                </Link>
              </div>
              <div className="header-nav-item mx-2">
                <Link to="/signup" className="btn btn-primary">
                  Register
                </Link>
              </div>
            </React.Fragment>
          )}
        </div>
      </div>
    </nav>
  );

  return (
    <React.Fragment>
      {/* Activates after scrolled 170px */}
      {scrolledHeader}

      {/* Only for Mobile screen */}
      {sidebar}

      <header
        className="header-text-dark header-nav layout-horizon"
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          display: scrolledHeaderActive ? 'none' : 'flex',
        }}
      >
        <div className="header-nav-wrap container">
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
                  onClick={() => setOpenProfileDropdown(!openProfileDropdown)}
                  onMouseEnter={() => setOpenProfileDropdown(true)}
                  onMouseLeave={() => setOpenProfileDropdown(false)}
                >
                  <div className="toggle-wrapper" id="nav-profile-dropdown">
                    <div
                      className="avatar avatar-circle avatar-image"
                      style={{
                        width: '35px',
                        height: '35px',
                        lineHeight: '35px',
                      }}
                    >
                      <img src={avatar} alt="avatar" />
                    </div>
                    <span className="fw-bold mx-1">SM Ali Hassan</span>
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
                          <span className="fw-bold text-dark">
                            SM Ali Hassan
                          </span>
                          <span className="font-size-sm">
                            syedalihassan6651@gmail.com
                          </span>
                        </div>
                      </div>
                    </div>
                    <button className="dropdown-item">
                      <div className="d-flex align-items-center">
                        <i className="font-size-lg me-2 feather icon-user"></i>
                        <span>Profile</span>
                      </div>
                    </button>
                    <button className="dropdown-item">
                      <div className="d-flex align-items-center">
                        <i className="font-size-lg me-2 feather icon-life-buoy"></i>
                        <span>Support</span>
                      </div>
                    </button>
                    <button className="dropdown-item" onClick={signout}>
                      <div className="d-flex align-items-center">
                        <i className="font-size-lg me-2 feather icon-power"></i>
                        <span>Sign Out</span>
                      </div>
                    </button>
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
      </header>

      {/* <!-- Header Navbar START --> */}
      <nav
        className="header-navbar nav-menu-light"
        style={{ position: 'absolute', top: '4.375rem', left: 0 }}
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
              <Link to="/pricing">
                <i className="feather icon-dollar-sign"></i>
                <span className="nav-menu-item-title">Pricing</span>
              </Link>
            </li>
          </ul>
        </div>
      </nav>
      {/* <!-- Header Navbar END --> */}
    </React.Fragment>
  );
};

export default Header;
