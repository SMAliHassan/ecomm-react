import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';

import Dropdown from '../../components/Dropdown';
import logo from '../../assets/images/logo/logo.png';
import logoFold from '../../assets/images/logo/logo-fold.png';
import avatar from '../../assets/images/avatars/general.png';

const Header = ({ setHeaderOpen, headerOpen }) => {
  const location = useLocation();

  const [openProfileDropdown, setOpenProfileDropdown] = useState(false);
  const [currPage, setCurrPage] = useState('');
  const [activeDropdown, setActiveDropdown] = useState(null);

  const dropdownMenu = [
    {
      title: 'Master Product',
      icon: 'shopping-bag',
      items: [
        {
          page: 'product-local',
          title: 'Master Product List',
        },
        {
          page: 'product-local-price',
          title: 'Price Management',
        },
        {
          page: 'product-local-settings',
          title: 'Product Settings',
        },
      ],
    },
    {
      title: 'Orders',
      icon: 'shopping-cart',
      items: [
        {
          page: 'order-local',
          title: 'Order List',
        },
      ],
    },
    {
      title: 'Channel Product',
      icon: 'list',
      items: [
        {
          page: 'product-shopee',
          title: 'Shopee',
        },
      ],
    },
    {
      title: 'Stock',
      icon: 'package',
      items: [
        {
          page: 'stock-local',
          title: 'Stock List',
        },
      ],
    },
    {
      title: 'Integration',
      icon: 'link',
      items: [
        {
          page: 'integrations',
          title: 'Store List',
        },
        {
          page: 'integrate',
          title: 'Add Integrations',
        },
      ],
    },
  ];

  useEffect(() => {
    window.scrollTo(0, 0);

    const pathArr = location.pathname.split('/');
    setCurrPage(pathArr[pathArr.length - 1]);
  }, [location]);

  const dropdownMarkup = dropdownMenu.map((el, i) => {
    const open = activeDropdown === i ? true : false;

    return (
      <Dropdown
        openHandler={() =>
          !open ? setActiveDropdown(i) : setActiveDropdown(null)
        }
        activePage={currPage}
        title={el.title}
        items={el.items}
        icon={el.icon}
        open={open}
        key={i}
      />
    );
  });

  const signout = () => {
    console.log('signout');
  };

  return (
    <React.Fragment>
      {/* Start of SIDEBAR */}
      <aside
        className={`side-nav vertical-menu nav-menu-light scrollable ${
          !headerOpen ? 'nav-menu-collapse' : 'is-opened'
        }`}
      >
        <div className="nav-logo">
          <Link to="/erp" className="w-100 logo">
            <img
              className="img-fluid"
              src={!headerOpen ? logoFold : logo}
              style={{ maxHeight: '70px' }}
              alt="logo"
            />
          </Link>

          <div
            className="mobile-close mobile-toggle"
            onClick={() => setHeaderOpen(false)}
          >
            <i className="icon-arrow-left feather"></i>
          </div>
        </div>
        <ul className="nav-menu">
          <li
            className={`nav-menu-item ${
              currPage === 'dashboard' ? 'router-link-active' : ''
            }`}
          >
            <Link to="dashboard">
              <i className="feather icon-home"></i>
              <span className="nav-menu-item-title">Dashboard</span>
            </Link>
          </li>

          <li className="nav-group-title">APPS</li>

          {/* <li className="nav-menu-item">
            <a href="v-mail.html">
              <i className="feather icon-mail"></i>
              <span className="nav-menu-item-title">Mail</span>
            </a>
          </li>
          <li className="nav-menu-item">
            <a href="v-chat.html">
              <i className="feather icon-message-circle"></i>
              <span className="nav-menu-item-title">Chat</span>
            </a>
          </li>
          <li className="nav-menu-item">
            <a href="v-calendar.html">
              <i className="feather icon-calendar"></i>
              <span className="nav-menu-item-title">Calendar</span>
            </a>
          </li> */}

          {dropdownMarkup}
        </ul>
      </aside>
      {/* End of SIDEBAR */}

      {/* Start of NAVBAR */}
      <nav
        className={`header-text-dark header-nav layout-vertical ${
          !headerOpen ? 'is-collapse' : ''
        }`}
      >
        <div className="header-nav-wrap">
          <div className="header-nav-left">
            <div
              className="header-nav-item desktop-toggle"
              onClick={() => setHeaderOpen(!headerOpen)}
            >
              <div className="header-nav-item-select cursor-pointer">
                <i
                  className={`nav-icon feather ${
                    !headerOpen ? 'icon-menu' : 'icon-arrow-left'
                  }`}
                ></i>
              </div>
            </div>
            <div
              className="header-nav-item mobile-toggle"
              onClick={() => setHeaderOpen(true)}
            >
              <div className="header-nav-item-select cursor-pointer">
                <i
                  className={`nav-icon feather ${
                    !headerOpen ? 'icon-menu' : 'icon-arrow-left'
                  }`}
                ></i>
              </div>
            </div>
          </div>
          <div className="header-nav-right">
            {/* <div className="header-nav-item"> */}
            {/* <div className="dropdown header-nav-item-select nav-notification">
                <div
                  className="toggle-wrapper"
                  id="nav-notification-dropdown"
                  data-bs-toggle="dropdown"
                >
                  <i className="header-nav-item-select nav-icon feather icon-bell"></i>
                </div> */}
            {/* <div className="dropdown-menu dropdown-menu-end">
                  <div className="nav-notification-header">
                    <h5 className="mb-0">Notifications</h5>
                    <a href="#0" className="font-size-sm">
                      Mark All as Read
                    </a>
                  </div>
                  <div className="nav-notification-body">
                    <div className="nav-notification-item ">
                      <div
                        className="avatar avatar-circle avatar-image"
                        style={{
                          width: '40px',
                          height: '40px',
                          lineHeight: '40px',
                        }}
                      >
                        <img src="assets/images/avatars/thumb-8.jpg" alt="" />
                      </div>
                      <div className="ms-2">
                        <span>
                          <span className="fw-bolder text-dark">
                            Jean Bowman{' '}
                          </span>
                          <span>invited you to new project.</span>
                        </span>
                        <div className="font-size-sm fw-bold mt-1">
                          <i className="feather icon-clock"></i>
                          <span className="ms-1">4 months ago</span>
                        </div>
                      </div>
                    </div>
                    <div className="nav-notification-item ">
                      <div
                        className="bg-primary feather font-size-lg icon-info avatar avatar-circle"
                        style={{
                          width: '40px',
                          height: '40px',
                          lineHeight: '40px',
                        }}
                      >
                        {' '}
                      </div>
                      <div className="ms-2">
                        <span>
                          <span className="fw-bolder text-dark"> </span>
                          <span>Please submit your daily report.</span>
                        </span>
                        <div className="font-size-sm fw-bold mt-1">
                          <i className="feather icon-clock"></i>
                          <span className="ms-1">4 months ago</span>
                        </div>
                      </div>
                    </div>
                    <div className="nav-notification-item ">
                      <div
                        className="bg-success feather font-size-lg icon-info avatar avatar-circle"
                        style={{
                          width: '40px',
                          height: '40px',
                          lineHeight: '40px',
                        }}
                      ></div>
                      <div className="ms-2">
                        <span>
                          <span className="fw-bolder text-dark"> </span>
                          <span>Your request has been approved.</span>
                        </span>
                        <div className="font-size-sm fw-bold mt-1">
                          <i className="feather icon-clock"></i>
                          <span className="ms-1">4 months ago</span>
                        </div>
                      </div>
                    </div>
                    <div className="nav-notification-item ">
                      <div
                        className="avatar avatar-circle avatar-image"
                        style={{
                          width: '40px',
                          height: '40px',
                          lineHeight: '40px',
                        }}
                      >
                        <img src="assets/images/avatars/thumb-4.jpg" alt="" />
                      </div>
                      <div className="ms-2">
                        <span>
                          <span className="fw-bolder text-dark">
                            Jenifer Ruiz{' '}
                          </span>
                          <span>mentioned you in comment.</span>
                        </span>
                        <div className="font-size-sm fw-bold mt-1">
                          <i className="feather icon-clock"></i>
                          <span className="ms-1">4 months ago</span>
                        </div>
                      </div>
                    </div>
                    <div className="nav-notification-item ">
                      <div
                        className="bg-success feather font-size-lg icon-x-circle avatar avatar-circle"
                        style={{
                          width: '40px',
                          height: '40px',
                          lineHeight: '40px',
                        }}
                      >
                        {' '}
                      </div>
                      <div className="ms-2">
                        <span>
                          <span className="fw-bolder text-dark"> </span>
                          <span>Your request has been rejected.</span>
                        </span>
                        <div className="font-size-sm fw-bold mt-1">
                          <i className="feather icon-clock"></i>
                          <span className="ms-1">4 months ago</span>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="nav-notification-footer">
                    <a href="#0" className="font-size-sm">
                      View All
                    </a>
                  </div>
                </div> */}
            {/* </div> */}
            {/* </div> */}
            <div className="header-nav-item">
              <div className="header-nav-item-select">
                <div
                  className="toggle-wrapper"
                  data-bs-toggle="modal"
                  data-bs-target="#quick-view"
                >
                  <i className="nav-icon feather icon-settings"></i>
                </div>
              </div>
            </div>
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
                      width: '28px',
                      height: '28px',
                      lineHeight: '28px',
                    }}
                  >
                    <img src={avatar} alt="" />
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
                      <i className="font-size-lg me-2 feather icon-settings"></i>
                      <span>Settings</span>
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
          </div>
        </div>
      </nav>
      {/* End of NAVBAR */}
    </React.Fragment>
  );
};

export default Header;
