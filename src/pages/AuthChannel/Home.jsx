import React from 'react';
import { Link } from 'react-router-dom';

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

const PartnerCard = ({ name }) => {
  return (
    <Link to={`/auth-channel/${name}`} className="partner-card">
      <div className="partner-card__img">
        <img src={logos[name]} alt={name} />
      </div>
      <div className="partner-card__title">{name}</div>
    </Link>
  );
};

const Main = () => {
  return (
    <div className="card mx-3">
      <div className="card-body">
        <h5 className="mb-3">Marketplace Integration</h5>

        <div className="partner-container">
          {Object.keys(logos).map(logo => (
            <PartnerCard name={logo} key={logo} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Main;
