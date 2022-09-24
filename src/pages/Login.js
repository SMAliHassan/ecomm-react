import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import FormInput from '../components/FormInput';
import backgroundLight from '../assets/images/others/bg-light.jpg';
import logoWhite from '../assets/images/logo/logo-white.png';

const Login = () => {
  const [password, setPassword] = useState('');
  const [email, setEmail] = useState('');
  const [loginStatus, setLoginStatus] = useState('');
  const [error, setError] = useState('');

  const handleLoginSubmit = e => {
    e.preventDefault();
    console.log(e);
  };

  return (
    <div className="auth-full-height container d-flex flex-column justify-content-center">
      <div className="row justify-content-center">
        <div className="col-md-9">
          <div className="card row mx-0 flex-row overflow-hidden">
            <div
              className="col-md-5 bg-size-cover d-flex align-items-center p-4"
              style={{
                background: `url(${backgroundLight})`,
              }}
            >
              <div>
                <div className="mb-5">
                  <div className="logo">
                    <img
                      alt="logo"
                      className="img-fluid"
                      src={logoWhite}
                      style={{ height: '50px' }}
                    />
                  </div>
                </div>
                <h3 className="text-white">
                  Manage your online store efficiently
                </h3>
                <p className="text-white mt-4 mb-5 o-75">
                  Improve your business efficiency and solve your business
                  problem with Espire
                </p>
              </div>
            </div>
            <div className="col-md-7 px-0">
              <div className="card-body">
                <div className="my-5 mx-auto" style={{ maxWidth: '350px' }}>
                  <div className="mb-4">
                    <h3>Login</h3>
                  </div>

                  <form onSubmit={handleLoginSubmit} style={{ padding: 0 }}>
                    <div className="form-group input-affix flex-column">
                      <FormInput
                        type="email"
                        value={email}
                        required={true}
                        prefixIcon="user"
                        onChange={e => setEmail(e.target.value)}
                        onError={setError}
                        placeholder="Please input your email"
                      />
                    </div>

                    <div className="mb-3">
                      <div className="form-group input-affix flex-column">
                        <FormInput
                          type="password"
                          value={password}
                          required={true}
                          onError={setError}
                          prefixIcon="lock"
                          onChange={e => setPassword(e.target.value)}
                          placeholder="Please enter your password"
                        />
                      </div>
                      <p className="text-end mb-1">
                        <Link to="/forgot-password" className="text-info">
                          Forgot Password?
                        </Link>
                      </p>
                    </div>

                    <button
                      type="submit"
                      className={`btn btn-primary w-100 ${
                        loginStatus === 'loading' ? 'disabled' : ''
                      } ${error ? 'disabled' : ''}`}
                    >
                      {loginStatus === 'loading' ? (
                        <span
                          className="spinner-border spinner-border-sm mx-2"
                          style={{ color: 'var(--bs-white)' }}
                        ></span>
                      ) : null}
                      Log In
                    </button>
                  </form>

                  {/* //////// */}
                  {/* <div className="divider">
                    <span className="divider-text text-muted">or login with</span>
                  </div> */}
                  {/* <div className="row">
                    <div className="col px-1">
                      <button className="btn btn-outline-secondary w-100">
                        <img
                          src="assets/images/thumbs/thumb-1.png"
                          alt=""
                          style={{ maxWidth: '20px' }}
                        />
                      </button>
                    </div>
                    <div className="col px-1">
                      <button className="btn btn-outline-secondary w-100">
                        <img
                          src="assets/images/thumbs/thumb-2.png"
                          alt=""
                          style={{ maxWidth: '20px' }}
                        />
                      </button>
                    </div>
                    <div className="col px-1">
                      <button className="btn btn-outline-secondary w-100">
                        <img
                          src="assets/images/thumbs/thumb-3.png"
                          alt=""
                          style={{ maxWidth: '20px' }}
                        />
                      </button>
                    </div>
                  </div> */}

                  <div className="text-center my-2">
                    New Account?{' '}
                    <Link to="/signup" className="text-info">
                      Signup
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
