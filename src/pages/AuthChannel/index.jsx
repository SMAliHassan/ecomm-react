import React, { useEffect } from 'react';
import { Routes, Route, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';

import { useUserContext } from '../../contexts/userContext';
import Header from './Header';
import Home from './Home';
import Loader from '../../components/Loader';

import '../../assets/css/auth-channel.css';
import Auth from './AuthPage';
import TokopediaAdminAuth from './TokopediaAdminAuth';

const MainPage = () => {
  const navigate = useNavigate();
  const { user, userFetchStatus } = useUserContext();

  useEffect(() => {
    if (!user && userFetchStatus !== 'loading') {
      toast.error('Please log in to get access.');
      navigate('/login?redirectTo=/erp/dashboard', { replace: true });
    }
  }, [navigate, user, userFetchStatus]);

  if (userFetchStatus === 'loading')
    return (
      <React.Fragment>
        <Header />
        <div
          className="card"
          style={{
            height: '75vh',
            display: 'grid',
            placeContent: 'center',
            marginTop: '5rem',
          }}
        >
          <Loader />
        </div>
      </React.Fragment>
    );

  return (
    <React.Fragment>
      <Header />
      <div style={{ marginTop: '5.5rem' }}>
        <Routes>
          <Route index element={<Home />} />

          <Route
            path="Tokopedia/authorize-admin"
            element={<TokopediaAdminAuth />}
          />

          <Route path="*" element={<Auth />} />
        </Routes>
      </div>
    </React.Fragment>
  );
};

export default MainPage;
