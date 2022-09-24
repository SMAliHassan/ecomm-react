import React, { useState } from 'react';
import Footer from '../components/Footer';

import Header from '../components/Header';

const FaqCard = ({ question, answer }) => {
  const [open, setOpen] = useState(false);

  return (
    <div class="panel card">
      <h2 class="card-header panel-heading">
        <div class="panel-title">
          <div class="accordion-toggle">
            <button
              class="btn btn-link d-block w-100 text-start collapsed"
              type="button"
              onClick={() => setOpen(!open)}
            >
              <i class="feather icon-chevron-right text-primary d-inline-block accordion-icon"></i>
              <span class="ms-2">{question}</span>
            </button>
          </div>
        </div>
      </h2>
      <div class={`collapse ${open ? 'show' : ''}`}>
        <div class="accordion-body panel-body card-body ms-5">{answer}</div>
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

        <div class="content">
          <div class="main">
            <div class="container">
              <div class="text-center mt-4">
                <h1>Frequently Asked Questions</h1>
                <p className="lead">
                  Find the most asked question &amp; their answer right here.
                </p>
              </div>
              <div class="mt-4 mx-auto" style={{ maxWidth: '800px' }}>
                <form
                  onSubmit={e => {
                    e.preventDefault();
                  }}
                >
                  <div class="input-group mb-3">
                    <input
                      type="text"
                      placeholder="Search your question here..."
                      class="form-control form-control-lg"
                    />
                    <button class="btn btn-primary">Search</button>
                  </div>
                </form>
              </div>
              <div class="mt-5">
                <div class="row">
                  <div class="col-md-3" onClick={() => setType('navigation')}>
                    <div class="card card-clickable active">
                      <div class="card-body text-center">
                        <div
                          class="d-inline-block rounded-circle"
                          style={{ backgroundColor: 'rgba(17, 161, 253, 0.1)' }}
                        >
                          <i
                            class="h1 mb-0 p-3 las la-compass"
                            style={{ color: 'rgb(17, 161, 253)' }}
                          ></i>
                        </div>
                        <h5 class="mt-3 mb-0">Navigation</h5>
                      </div>
                    </div>
                  </div>

                  <div class="col-md-3" onClick={() => setType('pricing')}>
                    <div class="card card-clickable">
                      <div class="card-body text-center">
                        <div
                          class="d-inline-block rounded-circle"
                          style={{ backgroundColor: 'rgba(90, 117, 249, 0.1)' }}
                        >
                          <i
                            class="h1 mb-0 p-3 las la-tag"
                            style={{ color: 'rgb(90, 117, 249)' }}
                          ></i>
                        </div>
                        <h5 class="mt-3 mb-0">Price & Plans</h5>
                      </div>
                    </div>
                  </div>

                  <div class="col-md-3">
                    <div class="card card-clickable">
                      <div class="card-body text-center">
                        <div
                          class="d-inline-block rounded-circle"
                          style={{ backgroundColor: 'rgba(255, 152, 66, 0.1)' }}
                        >
                          <i
                            class="h1 mb-0 p-3 las la-user-friends"
                            style={{ color: 'rgb(255, 152, 66)' }}
                          ></i>
                        </div>
                        <h5 class="mt-3 mb-0">Affiliate</h5>
                      </div>
                    </div>
                  </div>
                  <div class="col-md-3">
                    <div class="card card-clickable">
                      <div class="card-body text-center">
                        <div
                          class="d-inline-block rounded-circle"
                          style={{ backgroundColor: 'rgba(0, 197, 105, 0.1)' }}
                        >
                          <i
                            class="h1 mb-0 p-3 las las la-book"
                            style={{ color: 'rgb(0, 197, 105)' }}
                          ></i>
                        </div>
                        <h5 class="mt-3 mb-0">Usage</h5>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div class="mt-4">
                <div class="card">
                  <div class="card-body">
                    <div class="accordion panel-group" id="faqContent">
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
