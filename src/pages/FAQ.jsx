import React, { useState } from 'react';
import Footer from '../components/Footer';

import Header from '../components/Header';

const FaqCard = ({ question, answer }) => {
  const [open, setOpen] = useState(false);

  return (
    <div className="panel card">
      <h2 className="card-header panel-heading">
        <div className="panel-title">
          <div className="accordion-toggle">
            <button
              className="btn btn-link d-block w-100 text-start collapsed"
              type="button"
              onClick={() => setOpen(!open)}
            >
              <i className="feather icon-chevron-right text-primary d-inline-block accordion-icon"></i>
              <span className="ms-2">{question}</span>
            </button>
          </div>
        </div>
      </h2>
      <div className={`collapse ${open ? 'show' : ''}`}>
        <div className="accordion-body panel-body card-body ms-5">{answer}</div>
      </div>
    </div>
  );
};

const FAQ = () => {
  const [type, setType] = useState('navigation');

  return (
    <div className="layout">
      <div className="horizontal-layout">
        <Header />

        <div className="content">
          <div className="main">
            <div className="container">
              <div className="text-center mt-4">
                <h1>Frequently Asked Questions</h1>
                <p className="lead">
                  Find the most asked question &amp; their answer right here.
                </p>
              </div>
              <div className="mt-4 mx-auto" style={{ maxWidth: '800px' }}>
                <form
                  onSubmit={e => {
                    e.preventDefault();
                  }}
                >
                  <div className="input-group mb-3">
                    <input
                      type="text"
                      placeholder="Search your question here..."
                      className="form-control form-control-lg"
                    />
                    <button className="btn btn-primary">Search</button>
                  </div>
                </form>
              </div>
              <div className="mt-5">
                <div className="row">
                  <div
                    className="col-md-3"
                    onClick={() => setType('navigation')}
                  >
                    <div className="card card-clickable active">
                      <div className="card-body text-center">
                        <div
                          className="d-inline-block rounded-circle"
                          style={{ backgroundColor: 'rgba(17, 161, 253, 0.1)' }}
                        >
                          <i
                            className="h1 mb-0 p-3 las la-compass"
                            style={{ color: 'rgb(17, 161, 253)' }}
                          ></i>
                        </div>
                        <h5 className="mt-3 mb-0">Navigation</h5>
                      </div>
                    </div>
                  </div>

                  <div className="col-md-3" onClick={() => setType('pricing')}>
                    <div className="card card-clickable">
                      <div className="card-body text-center">
                        <div
                          className="d-inline-block rounded-circle"
                          style={{ backgroundColor: 'rgba(90, 117, 249, 0.1)' }}
                        >
                          <i
                            className="h1 mb-0 p-3 las la-tag"
                            style={{ color: 'rgb(90, 117, 249)' }}
                          ></i>
                        </div>
                        <h5 className="mt-3 mb-0">Price & Plans</h5>
                      </div>
                    </div>
                  </div>

                  <div className="col-md-3">
                    <div className="card card-clickable">
                      <div className="card-body text-center">
                        <div
                          className="d-inline-block rounded-circle"
                          style={{ backgroundColor: 'rgba(255, 152, 66, 0.1)' }}
                        >
                          <i
                            className="h1 mb-0 p-3 las la-user-friends"
                            style={{ color: 'rgb(255, 152, 66)' }}
                          ></i>
                        </div>
                        <h5 className="mt-3 mb-0">Affiliate</h5>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-3">
                    <div className="card card-clickable">
                      <div className="card-body text-center">
                        <div
                          className="d-inline-block rounded-circle"
                          style={{ backgroundColor: 'rgba(0, 197, 105, 0.1)' }}
                        >
                          <i
                            className="h1 mb-0 p-3 las las la-book"
                            style={{ color: 'rgb(0, 197, 105)' }}
                          ></i>
                        </div>
                        <h5 className="mt-3 mb-0">Usage</h5>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="mt-4">
                <div className="card">
                  <div className="card-body">
                    <div className="accordion panel-group" id="faqContent">
                      <FaqCard
                        question="What are the benefits of a navigation system?"
                        answer="So how did the classical Latin become so incoherent?
                            According to McClintock, a 15th century typesetter
                            likely scrambled part of Cicero's De Finibus in
                            order to provide placeholder text to mockup various
                            fonts for a type specimen book. Aldus Corporation,
                            which later merged with Adobe Systems, ushered lorem
                            ipsum into the information age with its desktop
                            publishing software Aldus PageMaker. The program
                            came bundled with lorem ipsum dummy text for laying
                            out page content, and other word processors like
                            Microsoft Word followed suit."
                      />
                      <FaqCard
                        question="What are the benefits of a navigation system?"
                        answer="So how did the classical Latin become so incoherent?
                            According to McClintock, a 15th century typesetter
                            likely scrambled part of Cicero's De Finibus in
                            order to provide placeholder text to mockup various
                            fonts for a type specimen book. Aldus Corporation,
                            which later merged with Adobe Systems, ushered lorem
                            ipsum into the information age with its desktop
                            publishing software Aldus PageMaker. The program
                            came bundled with lorem ipsum dummy text for laying
                            out page content, and other word processors like
                            Microsoft Word followed suit."
                      />
                      <FaqCard
                        question="What are the benefits of a navigation system?"
                        answer="So how did the classical Latin become so incoherent?
                            According to McClintock, a 15th century typesetter
                            likely scrambled part of Cicero's De Finibus in
                            order to provide placeholder text to mockup various
                            fonts for a type specimen book. Aldus Corporation,
                            which later merged with Adobe Systems, ushered lorem
                            ipsum into the information age with its desktop
                            publishing software Aldus PageMaker. The program
                            came bundled with lorem ipsum dummy text for laying
                            out page content, and other word processors like
                            Microsoft Word followed suit."
                      />
                      <FaqCard
                        question="What are the benefits of a navigation system?"
                        answer="So how did the classical Latin become so incoherent?
                            According to McClintock, a 15th century typesetter
                            likely scrambled part of Cicero's De Finibus in
                            order to provide placeholder text to mockup various
                            fonts for a type specimen book. Aldus Corporation,
                            which later merged with Adobe Systems, ushered lorem
                            ipsum into the information age with its desktop
                            publishing software Aldus PageMaker. The program
                            came bundled with lorem ipsum dummy text for laying
                            out page content, and other word processors like
                            Microsoft Word followed suit."
                      />
                      <FaqCard
                        question="What are the benefits of a navigation system?"
                        answer="So how did the classical Latin become so incoherent?
                            According to McClintock, a 15th century typesetter
                            likely scrambled part of Cicero's De Finibus in
                            order to provide placeholder text to mockup various
                            fonts for a type specimen book. Aldus Corporation,
                            which later merged with Adobe Systems, ushered lorem
                            ipsum into the information age with its desktop
                            publishing software Aldus PageMaker. The program
                            came bundled with lorem ipsum dummy text for laying
                            out page content, and other word processors like
                            Microsoft Word followed suit."
                      />
                      <FaqCard
                        question="What are the benefits of a navigation system?"
                        answer="So how did the classical Latin become so incoherent?
                            According to McClintock, a 15th century typesetter
                            likely scrambled part of Cicero's De Finibus in
                            order to provide placeholder text to mockup various
                            fonts for a type specimen book. Aldus Corporation,
                            which later merged with Adobe Systems, ushered lorem
                            ipsum into the information age with its desktop
                            publishing software Aldus PageMaker. The program
                            came bundled with lorem ipsum dummy text for laying
                            out page content, and other word processors like
                            Microsoft Word followed suit."
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* <!-- Footer START --> */}
          <Footer />
          {/* <!-- Footer End --> */}
        </div>
      </div>
    </div>
  );
};

export default FAQ;
