import React, { useState } from 'react';
// import Popup from 'reactjs-popup';
import { Link, useNavigate } from 'react-router-dom';

// import masterApi from '../../apis/masterApi';
import { useUserContext } from '../../contexts/userContext';
import Loader from '../../components/Loader';

import avatar from '../../assets/images/avatars/general.png';

const Header = () => {
  const navigate = useNavigate();
  const { user /*setUser*/ } = useUserContext();

  const [openProfileDropdown, setOpenProfileDropdown] = useState(false);

  // const logout = async () => {
  //   // Optimistic approach
  //   setUser(undefined);
  //   await masterApi.delete('/users/logout');
  // };

  // const logoutPopup = (
  //   <Popup
  //     trigger={
  //       <button className="dropdown-item">
  //         <div className="d-flex align-items-center">
  //           <i className="font-size-lg me-2 feather icon-power"></i>
  //           <span>Sign Out</span>
  //         </div>
  //       </button>
  //     }
  //     modal
  //     contentStyle={{
  //       borderRadius: '0.5rem',
  //       display: 'flex',
  //       width: 'min(30rem, 90vw',
  //       flexDirection: 'column',
  //       justifyContent: 'space-around',
  //       minHeight: '13rem',
  //       padding: '2rem',
  //     }}
  //   >
  //     {close => (
  //       <>
  //         <h3 style={{ textAlign: 'center' }}>
  //           Are you sure you want to Logout?
  //         </h3>
  //         <div
  //           style={{
  //             margin: '0 auto',
  //             width: '70%',
  //             display: 'flex',
  //             justifyContent: 'space-between',
  //           }}
  //         >
  //           <button className="btn btn-success" onClick={close}>
  //             Cancel
  //           </button>
  //           <button className="btn btn-danger" onClick={logout}>
  //             Logout
  //           </button>
  //         </div>
  //       </>
  //     )}
  //   </Popup>
  // );

  return (
    <nav className={`header-text-dark header-nav`} style={{ zIndex: 99 }}>
      <div className="header-nav-wrap">
        <div className="header-nav-left">
          <Link
            className="header-nav-item"
            to="#"
            onClick={() => navigate(-1)}

            // style={{ background: 'none', border: 'none' }}
          >
            <i className="feather icon-arrow-left la-lg"></i>
          </Link>
          {/* <div className="header-nav-item-select cursor-pointer">
              <i
                className={`nav-icon feather ${
                  !headerOpen ? 'icon-menu' : 'icon-arrow-left'
                }`}
              ></i>
            </div> */}
          {/* <div
            className="header-nav-item mobile-toggle"
            onClick={() => setHeaderOpen(!headerOpen)}
          >
            <div className="header-nav-item-select cursor-pointer">
              <i
                className={`nav-icon feather ${
                  !headerOpen ? 'icon-menu' : 'icon-arrow-left'
                }`}
              ></i>
            </div>
          </div> */}
        </div>
        <div className="header-nav-right">
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
                  {/* {logoutPopup} */}
                </div>
              </div>
            </div>
          ) : (
            <div className="header-nav-item">
              <Loader classes="loader--sm" />
            </div>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Header;
