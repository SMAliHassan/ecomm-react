import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

import masterApi from '../apis/masterApi';
import FormInput from '../components/FormInput';
import whiteLogoImg from '../assets/images/logo/logo-white.png';
import backgroundDark from '../assets/images/others/bg-dark.jpg';

const Signup = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [signupStatus, setSignupStatus] = useState('');
  const [error, setError] = useState('');

  const handleSigninSubmit = async e => {
    e.preventeDefault();

    try {
      setSignupStatus('loading');
      const { data } = await masterApi.post('/users/signup', {
        email,
        phone,
        password,
        confirmPassword,
      });

      setSignupStatus('success');
    } catch (err) {
      console.log(err);
      setSignupStatus('error');
    }
  };

  return (
    <div class="auth-full-height container d-flex flex-column justify-content-center fs-7">
      <div class="row justify-content-center">
        <div class="col-md-10">
          <div class="card row mx-0 flex-row overflow-hidden">
            <div
              class="col-md-5 bg-size-cover d-flex align-items-center p-4"
              style={{
                backgroundImage: `url(${backgroundDark})`,
              }}
            >
              <div>
                <div class="mb-5">
                  <div class="logo">
                    <img
                      alt="logo"
                      class="img-fluid"
                      src={whiteLogoImg}
                      style={{ height: '50px' }}
                    />
                  </div>
                </div>
                <h3 class="text-white">
                  Manage your online business like a pro
                </h3>
                <p class="text-white mt-4 mb-5 o-75">
                  Signup to improve your business efficiency and solve your
                  business problems with Espire.
                </p>
              </div>
            </div>
            <div class="col-md-7 px-0">
              <div class="card-body">
                <div class="my-5 mx-auto" style={{ maxWidth: '350px' }}>
                  <div class="mb-3">
                    <h3 class="mb-4">Sign Up</h3>
                    <form onSubmit={handleSigninSubmit}>
                      <div class="form-group input-affix flex-column">
                        <FormInput
                          type="text"
                          value={name}
                          required={true}
                          onError={setError}
                          prefixIcon="user"
                          onChange={e => setName(e.target.value)}
                          placeholder="Please enter your name"
                        />
                      </div>

                      <div class="form-group input-affix flex-column">
                        <FormInput
                          type="email"
                          value={email}
                          required={true}
                          onError={setError}
                          prefixIcon="mail"
                          onChange={e => setEmail(e.target.value)}
                          placeholder="Please input your email"
                        />
                      </div>

                      <div class="form-group input-affix flex-column">
                        <FormInput
                          type="tel"
                          value={phone}
                          required={true}
                          onError={setError}
                          prefixIcon="phone"
                          onChange={e => setPhone(e.target.value)}
                          placeholder="Please enter your phone number"
                        />
                      </div>

                      <div class="form-group input-affix flex-column">
                        <FormInput
                          type="password"
                          value={password}
                          required={true}
                          onError={setError}
                          prefixIcon="lock"
                          onChange={e => setPassword(e.target.value)}
                          placeholder="Please enter a password"
                        />
                      </div>

                      <div class="form-group input-affix flex-column">
                        <FormInput
                          type="password"
                          value={confirmPassword}
                          required={true}
                          onError={setError}
                          shouldMatch={{
                            text: password,
                            error: "Passwords don't match",
                          }}
                          prefixIcon="lock"
                          onChange={e => setConfirmPassword(e.target.value)}
                          placeholder="Please confirm your password"
                        />
                      </div>

                      <button
                        type="submit"
                        className={`btn btn-primary w-100 ${
                          signupStatus === 'loading' ? 'disabled' : ''
                        } ${error ? 'disabled' : ''}`}
                      >
                        {signupStatus === 'loading' ? (
                          <span
                            className="spinner-border spinner-border-sm mx-2"
                            style={{ color: 'var(--bs-white)' }}
                          ></span>
                        ) : null}
                        Register
                      </button>

                      <p className="mt-1">
                        Already have an account?{' '}
                        <Link to="/login" className="text-primary">
                          Login
                        </Link>
                      </p>
                    </form>
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

export default Signup;
