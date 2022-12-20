import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <div className="footer">
      <div className="footer-content">
        <p className="mb-0">
          Copyright © 2023 Twilight Dev. All rights reserved.
        </p>
        <span>
          <Link to="terms-conditions" className="text-gray me-3">
            Term &amp; Conditions
          </Link>
          <Link to="privacy-policy" className="text-gray">
            Privacy &amp; Policy
          </Link>
        </span>
      </div>
    </div>
  );
};

export default Footer;
