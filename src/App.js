import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import Home from './pages/Home';
import ERP from './pages/ERP';
import Signup from './pages/Signup';
import Login from './pages/Login';
import NotFound from './pages/NotFound';
import Pricing from './pages/Pricing';
import FAQ from './pages/FAQ';
import UnderContruction from './pages/UnderContruction';
import './assets/css/global.css';

function App() {
  // The pages which are under construction. (Set in ".env" file. Restart every time you change .env).
  const renderConstructionRoutes = () => {
    const routes = process.env.REACT_APP_CONSTRUCTION_ROUTES.split(',');

    return routes.map(route => (
      <Route path={route} key={route} element={<UnderContruction />} />
    ));
  };

  return (
    <div className="App">
      <ToastContainer
        containerId="main-toast-container"
        autoClose={4500}
        position="top-center"
      />

      <BrowserRouter>
        <Routes>
          <Route index element={<Home />} />
          <Route path="signup" element={<Signup />} />
          <Route path="login" element={<Login />} />
          <Route path="faq" element={<FAQ />} />
          <Route path="pricing" element={<Pricing />} />

          <Route path="erp" element={<ERP />}>
            <Route path="*" element={<ERP />} />
            {/* <Route path="header" element={<ERP />} />
            <Route path="dashboard" element={<ERP />} />
            <Route path="product-local" element={<ERP />} /> */}
          </Route>

          {renderConstructionRoutes()}

          <Route path="/*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
