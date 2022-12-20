import React from 'react';
import { Link, useLocation } from 'react-router-dom';

import { useUserContext } from '../../contexts/userContext';
import logo from '../../assets/images/logo/logo.png';
import interconnect from '../../assets/images/others/interconnect.svg';
import shopeeLogo from '../../assets/images/logo/shopee.svg';
import lazadaLogo from '../../assets/images/logo/lazada.svg';
import tokopediaLogo from '../../assets/images/logo/tokopedia.svg';
import blibliLogo from '../../assets/images/logo/blibli.svg';
import shopifyLogo from '../../assets/images/logo/shopify.svg';

import '../../assets/css/auth-channel.css';

const logos = {
  Tokopedia: tokopediaLogo,
  Shopee: shopeeLogo,
  Lazada: lazadaLogo,
  Blibli: blibliLogo,
  Shopify: shopifyLogo,
};

const prompts = {
  Tokopedia:
    'Please follow the steps below to add a store:\n 1. Ecomm would apply to Tokopedia at 09:30 11:00 14:00 and 16:00 everyday.\n 2. Tokopedia would send an confirmation email to Merchant‘s Tokopedia email.\n 3. Merchants need approve in the confirmation email by themselves. \n 4. Ecomm would receive the confirmation after merchant agreed and would help merchant to do the integration in Ecomm within 1 day.',
};

const after = {
  Tokopedia:
    'After binding the store you can manage products and orders on Ginee and view the daily business reports of all stores.',
};

const Auth = () => {
  const { user } = useUserContext();
  const { pathname } = useLocation();
  const channel = pathname.split('/')[2];

  const renderButtons = () => {
    switch (channel.toLowerCase()) {
      case 'tokopedia': {
        return (
          <a
            href="https://forms.google.com/ecomm"
            target="_blank"
            rel="noreferrer"
            className="btn btn-primary btn-lg px-5"
          >
            Apply Integration
          </a>
        );
      }

      default: {
        return (
          <button className="btn btn-primary btn-lg px-5">Authorize</button>
        );
      }
    }
  };

  return (
    <React.Fragment>
      <div
        className="card"
        style={{ width: 'min(28rem, 90vw)', margin: 'auto', minHeight: '80vh' }}
      >
        <div className="card-body p-3">
          <div style={{ display: 'flex', justifyContent: 'space-between' }}>
            <img src={logos[channel]} alt="-" style={{ width: '33%' }} />

            <img
              src={interconnect}
              style={{ width: '11%', paddingRight: '0.5rem' }}
              alt="connect"
            ></img>

            <img
              src={logo}
              alt="us"
              style={{ width: '33%', paddingRight: '0.5rem' }}
            />
          </div>

          <div
            className="bg-secondary px-3 py-2 fs-9 mt-3 pb-1"
            style={{
              whiteSpace: 'pre-line',
              color: 'var(--bs-primary)',
              borderRadius: '15px',
            }}
          >
            <i
              className="la la-info-circle"
              style={{
                background: 'var(--bs-primary)',
                borderRadius: '50%',
                fontSize: '1.2rem',
                marginRight: '4px',
                color: '#fff',
              }}
            ></i>
            <p style={{ display: 'inline' }}>Prompt</p>

            <p> {prompts[channel]}</p>
          </div>

          <div
            className="bg-light px-3 py-2 fs-9 mt-3"
            style={{
              whiteSpace: 'pre-line',
              borderRadius: '15px',
            }}
          >
            <i
              className="la la-info-circle"
              style={{
                background: 'var(--bs-success)',
                borderRadius: '50%',
                fontSize: '1.2rem',
                marginRight: '4px',
                color: '#fff',
              }}
            ></i>

            <p>{after[channel]}</p>
          </div>
        </div>
      </div>

      <div
        className="bg-white"
        style={{
          position: 'fixed',
          bottom: 0,
          left: 0,
          width: '100vw',
          height: '5rem',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          gap: '1.5rem',
        }}
      >
        {channel.toLowerCase() === 'tokopedia' &&
        user &&
        user.role === 'admin' ? (
          <Link
            to="/auth-channel/Tokopedia/authorize-admin"
            className="btn btn-secondary btn-lg px-5"
          >
            Authorize (Admin)
          </Link>
        ) : null}

        {renderButtons()}
      </div>
    </React.Fragment>
  );
};

export default Auth;
