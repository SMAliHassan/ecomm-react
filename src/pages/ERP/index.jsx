import React, { useState, useEffect } from 'react';
import { Routes, Route, Navigate, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';

import { useUserContext } from '../../contexts/userContext';
import Header from './Header';
import Dashboard from './Dashboard';
import LocalProduct from './LocalProduct';
import LocalProductEdit from './LocalProductEdit';
import LocalPrice from './LocalPrice';
import StoreList from './StoreList';
// import Integrate from './Integrate';
import StockList from './StockList';
import LoaderErp from './LoaderErp';
// import AuthChannel from '../AuthChannel';
import TokopediaProduct from './TokopediaProduct';
import LocalProductCreate from './LocalProductCreate';
import LocalProductPublish from './LocalProductPublish';

const ERP = () => {
  const navigate = useNavigate();
  const [headerOpen, setHeaderOpen] = useState(window.innerWidth >= 992);
  // const [pageTitle, setPageTitle] = useState('dashboard');
  const { user, userFetchStatus } = useUserContext();

  useEffect(() => {
    if (!user && userFetchStatus !== 'loading') {
      toast.error('Please log in to get access.');
      navigate('/login?redirectTo=/erp/dashboard', { replace: true });
    }
  }, [navigate, user, userFetchStatus]);

  return (
    <div className="layout">
      <div className="vertical-layout">
        <Header headerOpen={headerOpen} setHeaderOpen={setHeaderOpen} />

        <div className={`content ${!headerOpen ? 'is-collapse' : ''}`}>
          <div className="main" style={{ padding: '1rem' }}>
            {userFetchStatus === 'loading' ? (
              <LoaderErp />
            ) : (
              <Routes>
                <Route index element={<Navigate to={'dashboard'} />} />
                <Route path="dashboard" element={<Dashboard />} />
                <Route path="product-local" element={<LocalProduct />} />
                <Route
                  path="product-local-edit/:productId"
                  element={<LocalProductEdit />}
                />
                <Route
                  path="product-local-add"
                  element={<LocalProductCreate />}
                />
                <Route
                  path="product-local-publish/:productId"
                  element={<LocalProductPublish />}
                />
                <Route path="product-local-price" element={<LocalPrice />} />
                <Route path="integrations" element={<StoreList />} />
                {/* <Route path="integrate" element={<AuthChannel />} /> */}
                {/* <Route path="auth-channel" element={<AuthChannel />} /> */}
                <Route path="stock-local" element={<StockList />} />
                <Route
                  path="product-tokopedia"
                  element={<TokopediaProduct />}
                />

                <Route path="*" element={<Navigate to={'dashboard'} />} />
              </Routes>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ERP;
