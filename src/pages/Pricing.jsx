import React from 'react';

import Header from '../components/Header';
import Footer from '../components/Footer';

const Pricing = () => {
  return (
    <div className="layout">
      <div className="horizontal-layout">
        <Header />

        <div className="content container" style={{ minHeight: '100vh' }}>
          <div className="main">
            <div className="pricing mt-3">
              <div className="pricing__container container">
                <div className="text-center lead mt-4">
                  <h1 className="mb-3">Pricing Plan</h1>
                  <p className="mx-auto" style={{ maxWidth: '500px' }}>
                    We have sevaral powerful plans for our service, find
                    yourself a suitable plan from the below price list.
                  </p>
                </div>
                <div className="row mt-5">
                  <div className="col-md-4">
                    <div className="card">
                      <div className="card-body">
                        <h2 className="mb-4">
                          <span className="fw-bolder">$0</span>
                          <span className="font-size-base text-muted">
                            / per month
                          </span>
                        </h2>
                        <h4>Free</h4>
                        <p>Free plan suitable for personal use.</p>
                        <ul className="list-unstyled mt-5">
                          <li className="mb-4 fw-bold">
                            <div className="d-inline-block rounded-circle">
                              <i className="mb-0 px-1 feather icon-check"></i>
                            </div>
                            <span className="ms-2">200 MB of Spaces</span>
                          </li>
                          <li className="mb-4 fw-bold">
                            <div className="d-inline-block rounded-circle">
                              <i className="mb-0 px-1 feather icon-check"></i>
                            </div>
                            <span className="ms-2">5 Add on Domains</span>
                          </li>
                          <li className="mb-4 fw-bold">
                            <div className="d-inline-block rounded-circle">
                              <i className="mb-0 px-1 feather icon-check"></i>
                            </div>
                            <span className="ms-2">Chat Support</span>
                          </li>
                        </ul>
                        <div className="mt-5">
                          <button className="btn w-100 btn-outline-primary">
                            Get Started
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-4">
                    <div className="card">
                      <div className="card-body">
                        <h2 className="mb-4">
                          <span className="fw-bolder">$30</span>
                          <span className="font-size-base text-muted">
                            {' '}
                            / per month
                          </span>
                        </h2>
                        <h4>Standard</h4>
                        <p>Standard plan suitable for most enterprise level</p>
                        <ul className="list-unstyled mt-5">
                          <li className="mb-4 fw-bold">
                            <div className="d-inline-block rounded-circle">
                              <i className="mb-0 px-1 feather icon-check"></i>
                            </div>
                            <span className="ms-2">500 MB of Spaces</span>
                          </li>
                          <li className="mb-4 fw-bold">
                            <div className="d-inline-block rounded-circle">
                              <i className="mb-0 px-1 feather icon-check"></i>
                            </div>
                            <span className="ms-2">10 Add on Domains</span>
                          </li>
                          <li className="mb-4 fw-bold">
                            <div className="d-inline-block rounded-circle">
                              <i className="mb-0 px-1 feather icon-check"></i>
                            </div>
                            <span className="ms-2">Chat Support</span>
                          </li>
                          <li className="mb-4 fw-bold">
                            <div className="d-inline-block rounded-circle">
                              <i className="mb-0 px-1 feather icon-check"></i>
                            </div>
                            <span className="ms-2">Microsoft Office 365</span>
                          </li>
                          <li className="mb-4 fw-bold">
                            <div className="d-inline-block rounded-circle">
                              <i className="mb-0 px-1 feather icon-check"></i>
                            </div>
                            <span className="ms-2">Smart Sync</span>
                          </li>
                        </ul>
                        <div className="mt-5">
                          <button className="btn w-100 btn-primary">
                            Get Started
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-4">
                    <div className="card">
                      <div className="card-body">
                        <h2 className="mb-4">
                          <span className="fw-bolder">$50</span>
                          <span className="font-size-base text-muted">
                            {' '}
                            / per month
                          </span>
                        </h2>
                        <h4>Premium</h4>
                        <p>Basic plan suitable for large scale business</p>
                        <ul className="list-unstyled mt-5">
                          <li className="mb-4 fw-bold">
                            <div className="d-inline-block rounded-circle">
                              <i className="mb-0 px-1 feather icon-check"></i>
                            </div>
                            <span className="ms-2">Unlimited Spaces</span>
                          </li>
                          <li className="mb-4 fw-bold">
                            <div className="d-inline-block rounded-circle">
                              <i className="mb-0 px-1 feather icon-check"></i>
                            </div>
                            <span className="ms-2">Unlimited Domains</span>
                          </li>
                          <li className="mb-4 fw-bold">
                            <div className="d-inline-block rounded-circle">
                              <i className="mb-0 px-1 feather icon-check"></i>
                            </div>
                            <span className="ms-2">Chat Support</span>
                          </li>
                          <li className="mb-4 fw-bold">
                            <div className="d-inline-block rounded-circle">
                              <i className="mb-0 px-1 feather icon-check"></i>
                            </div>
                            <span className="ms-2">Microsoft Office 365</span>
                          </li>
                          <li className="mb-4 fw-bold">
                            <div className="d-inline-block rounded-circle">
                              <i className="mb-0 px-1 feather icon-check"></i>
                            </div>
                            <span className="ms-2">Smart Sync</span>
                          </li>
                          <li className="mb-4 fw-bold">
                            <div className="d-inline-block rounded-circle">
                              <i className="mb-0 px-1 feather icon-check"></i>
                            </div>
                            <span className="ms-2">Analytic Platform</span>
                          </li>
                          <li className="mb-4 fw-bold">
                            <div className="d-inline-block rounded-circle">
                              <i className="mb-0 px-1 feather icon-check"></i>
                            </div>
                            <span className="ms-2">Amazingness</span>
                          </li>
                          <li className="mb-4 fw-bold">
                            <div className="d-inline-block rounded-circle">
                              <i className="mb-0 px-1 feather icon-check"></i>
                            </div>
                            <span className="ms-2">More Amazingness</span>
                          </li>
                        </ul>
                        <div className="mt-5">
                          <button className="btn w-100 btn-outline-primary">
                            Get Started
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <Footer />
        </div>
      </div>
    </div>
  );
};

export default Pricing;
