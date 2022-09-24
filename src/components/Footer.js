import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <div class="footer">
      <div class="footer-content">
        <p class="mb-0">Copyright © 2023 Twilight Dev. All rights reserved.</p>
        <span>
          <Link to="terms-conditions" class="text-gray me-3">
            Term &amp; Conditions
          </Link>
          <Link to="privacy-policy" class="text-gray">
            Privacy &amp; Policy
          </Link>
        </span>
      </div>
    </div>
  );
};

export default Footer;
