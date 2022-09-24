import React from 'react';

import shopeeLogo from '../../assets/images/logo/shopee.svg';
import lazadaLogo from '../../assets/images/logo/lazada.svg';

const Integrate = () => {
  return (
    <>
      <div class="card mt-3">
        <div class="card-body" style={{ minHeight: '40vh' }}>
          <h5>Marketplace Integration</h5>

          <div
            className="partners__container my-3"
            style={{ display: 'flex', gap: '1rem' }}
          >
            <div
              className="partner-card"
              style={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                flexDirection: 'column',
                cursor: 'pointer',
                width: '10rem',
                height: '6rem',
                border: '1px solid var(--bs-light)',
              }}
            >
              <img
                src={shopeeLogo}
                alt="shopee-logo"
                style={{ width: '80%', height: '4rem', marginTop: '2rem' }}
              />
              <p
                className="partner-name bg-light p-1 w-100 py-2"
                style={{ margin: 0, translate: '0 1.4rem' }}
              >
                Shopee
              </p>
            </div>

            <div
              className="partner-card"
              style={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                flexDirection: 'column',
                cursor: 'pointer',
                width: '10rem',
                height: '6rem',
                border: '1px solid var(--bs-light)',
              }}
            >
              <img
                src={lazadaLogo}
                alt="lazada-logo"
                style={{ width: '80%', marginTop: '2rem' }}
              />
              <p
                className="partner-name bg-light p-1 w-100 py-2"
                style={{ margin: 0, translate: '0 1rem' }}
              >
                Lazada
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Integrate;
