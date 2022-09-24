import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';

import Header from '../components/Header';
import Footer from '../components/Footer';
import landingImage from '../assets/images/others/landing.png';
import shopeeLogo from '../assets/images/logo/shopee.svg';
import lazadaLogo from '../assets/images/logo/lazada.svg';
import tiktokLogo from '../assets/images/logo/tiktok.svg';
import jdidLogo from '../assets/images/logo/jdid.svg';
import shopifyLogo from '../assets/images/logo/shopify.svg';
import blibliLogo from '../assets/images/logo/blibli.svg';
import tokopediaLogo from '../assets/images/logo/tokopedia.svg';
import woocommerceLogo from '../assets/images/logo/woocommerce.svg';
import '../assets/css/home.css';

const Home = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="layout">
      <div className="horizontal-layout">
        <Header />

        <div className="content container" style={{ minHeight: '100vh' }}>
          <div className="main">
            <div className="landing">
              <div className="landing__container">
                <div className="landing__content">
                  <h1>One Stop Solution For Online Business</h1>
                  <p>
                    Improve your business efficiency and solve your business
                    problem with
                    <span className="text-primary fw-bold">Espire</span>
                  </p>
                  <Link to="/signup" className="btn btn-primary">
                    Try for Free!
                  </Link>
                </div>
                <div className="landing__img-container">
                  <img
                    src={landingImage}
                    alt="growth"
                    className="landing__img"
                  />
                </div>
              </div>
            </div>

            <div className="partners pt-5 mt-5">
              <div className="partners__container">
                <div class="text-center lead mt-4">
                  <h1 class="mb-3">Our Partners</h1>
                  <p class="mx-auto" style={{ maxWidth: '500px' }}>
                    We are partners with leading Ecommerce store services of the
                    world.
                  </p>
                </div>
                <div className="partners__logos">
                  <img src={shopeeLogo} alt="shopee-logo" />
                  <img src={woocommerceLogo} alt="woocommerce-logo" />
                  <img src={shopeeLogo} alt="shopee-logo" />
                  <img src={lazadaLogo} alt="lazada-logo" />
                  <img src={tiktokLogo} alt="tiktok-logo" />
                  <img src={tokopediaLogo} alt="tokopedia-logo" />
                  <img src={blibliLogo} alt="blibli-logo" />
                  <img src={shopifyLogo} alt="shopify-logo" />
                  <img src={shopeeLogo} alt="shopee-logo" />
                  <img src={shopeeLogo} alt="shopee-logo" />
                  <img src={jdidLogo} alt="jdid-logo" />
                </div>
              </div>
            </div>

            {/* Pricing */}
            <div className="pricing pt-5 mt-3" id="pricing">
              <div class="pricing__container container">
                <div class="text-center lead mt-4">
                  <h1 class="mb-3">Pricing Plan</h1>
                  <p class="mx-auto" style={{ maxWidth: '500px' }}>
                    We have sevaral powerful plans for our service, find
                    yourself a suitable plan from the below price list.
                  </p>
                </div>
                <div class="row mt-5">
                  <div class="col-md-4">
                    <div class="card">
                      <div class="card-body">
                        <h2 class="mb-4">
                          <span class="fw-bolder">$0</span>
                          <span class="font-size-base text-muted">
                            / per month
                          </span>
                        </h2>
                        <h4>Free</h4>
                        <p>Free plan suitable for personal use.</p>
                        <ul class="list-unstyled mt-5">
                          <li class="mb-4 fw-bold">
                            <div class="d-inline-block rounded-circle">
                              <i class="mb-0 px-1 feather icon-check"></i>
                            </div>
                            <span class="ms-2">200 MB of Spaces</span>
                          </li>
                          <li class="mb-4 fw-bold">
                            <div class="d-inline-block rounded-circle">
                              <i class="mb-0 px-1 feather icon-check"></i>
                            </div>
                            <span class="ms-2">5 Add on Domains</span>
                          </li>
                          <li class="mb-4 fw-bold">
                            <div class="d-inline-block rounded-circle">
                              <i class="mb-0 px-1 feather icon-check"></i>
                            </div>
                            <span class="ms-2">Chat Support</span>
                          </li>
                        </ul>
                        <div class="mt-5">
                          <button class="btn w-100 btn-outline-primary">
                            Get Started
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="col-md-4">
                    <div class="card">
                      <div class="card-body">
                        <h2 class="mb-4">
                          <span class="fw-bolder">$30</span>
                          <span class="font-size-base text-muted">
                            {' '}
                            / per month
                          </span>
                        </h2>
                        <h4>Standard</h4>
                        <p>Standard plan suitable for most enterprise level</p>
                        <ul class="list-unstyled mt-5">
                          <li class="mb-4 fw-bold">
                            <div class="d-inline-block rounded-circle">
                              <i class="mb-0 px-1 feather icon-check"></i>
                            </div>
                            <span class="ms-2">500 MB of Spaces</span>
                          </li>
                          <li class="mb-4 fw-bold">
                            <div class="d-inline-block rounded-circle">
                              <i class="mb-0 px-1 feather icon-check"></i>
                            </div>
                            <span class="ms-2">10 Add on Domains</span>
                          </li>
                          <li class="mb-4 fw-bold">
                            <div class="d-inline-block rounded-circle">
                              <i class="mb-0 px-1 feather icon-check"></i>
                            </div>
                            <span class="ms-2">Chat Support</span>
                          </li>
                          <li class="mb-4 fw-bold">
                            <div class="d-inline-block rounded-circle">
                              <i class="mb-0 px-1 feather icon-check"></i>
                            </div>
                            <span class="ms-2">Microsoft Office 365</span>
                          </li>
                          <li class="mb-4 fw-bold">
                            <div class="d-inline-block rounded-circle">
                              <i class="mb-0 px-1 feather icon-check"></i>
                            </div>
                            <span class="ms-2">Smart Sync</span>
                          </li>
                        </ul>
                        <div class="mt-5">
                          <button class="btn w-100 btn-primary">
                            Get Started
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="col-md-4">
                    <div class="card">
                      <div class="card-body">
                        <h2 class="mb-4">
                          <span class="fw-bolder">$50</span>
                          <span class="font-size-base text-muted">
                            {' '}
                            / per month
                          </span>
                        </h2>
                        <h4>Premium</h4>
                        <p>Basic plan suitable for large scale business</p>
                        <ul class="list-unstyled mt-5">
                          <li class="mb-4 fw-bold">
                            <div class="d-inline-block rounded-circle">
                              <i class="mb-0 px-1 feather icon-check"></i>
                            </div>
                            <span class="ms-2">Unlimited Spaces</span>
                          </li>
                          <li class="mb-4 fw-bold">
                            <div class="d-inline-block rounded-circle">
                              <i class="mb-0 px-1 feather icon-check"></i>
                            </div>
                            <span class="ms-2">Unlimited Domains</span>
                          </li>
                          <li class="mb-4 fw-bold">
                            <div class="d-inline-block rounded-circle">
                              <i class="mb-0 px-1 feather icon-check"></i>
                            </div>
                            <span class="ms-2">Chat Support</span>
                          </li>
                          <li class="mb-4 fw-bold">
                            <div class="d-inline-block rounded-circle">
                              <i class="mb-0 px-1 feather icon-check"></i>
                            </div>
                            <span class="ms-2">Microsoft Office 365</span>
                          </li>
                          <li class="mb-4 fw-bold">
                            <div class="d-inline-block rounded-circle">
                              <i class="mb-0 px-1 feather icon-check"></i>
                            </div>
                            <span class="ms-2">Smart Sync</span>
                          </li>
                          <li class="mb-4 fw-bold">
                            <div class="d-inline-block rounded-circle">
                              <i class="mb-0 px-1 feather icon-check"></i>
                            </div>
                            <span class="ms-2">Analytic Platform</span>
                          </li>
                          <li class="mb-4 fw-bold">
                            <div class="d-inline-block rounded-circle">
                              <i class="mb-0 px-1 feather icon-check"></i>
                            </div>
                            <span class="ms-2">Amazingness</span>
                          </li>
                          <li class="mb-4 fw-bold">
                            <div class="d-inline-block rounded-circle">
                              <i class="mb-0 px-1 feather icon-check"></i>
                            </div>
                            <span class="ms-2">More Amazingness</span>
                          </li>
                        </ul>
                        <div class="mt-5">
                          <button class="btn w-100 btn-outline-primary">
                            Get Started
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* End Pricing */}
          </div>

          {/* <!-- Footer START --> */}
          <Footer />
          {/* <!-- Footer End --> */}
        </div>
      </div>
    </div>
  );
};

export default Home;
