import React, { useState } from 'react';
import { Routes, Route } from 'react-router-dom';

import Header from './Header';
import Dashboard from './Dashboard';
import LocalProduct from './LocalProduct';
import LocalPrice from './LocalPrice';
import StoreList from './StoreList';
import Integrate from './Integrate';
import StockList from './StockList';

const ERP = () => {
  const [headerOpen, setHeaderOpen] = useState(window.innerWidth >= 992);

  return (
    <div className="layout">
      <div className="vertical-layout">
        <Header headerOpen={headerOpen} setHeaderOpen={setHeaderOpen} />

        <div className={`content ${!headerOpen ? 'is-collapse' : ''}`}>
          <div className="main">
            <Routes>
              <Route path="header" element={<Header />} />
              <Route path="dashboard" element={<Dashboard />} />
              <Route path="product-local" element={<LocalProduct />} />
              <Route path="product-local-price" element={<LocalPrice />} />
              <Route path="integrations" element={<StoreList />} />
              <Route path="integrate" element={<Integrate />} />
              <Route path="stock-local" element={<StockList />} />
            </Routes>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ERP;
