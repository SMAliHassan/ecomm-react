import React from 'react';

const Dashboard = () => {
  return (
    <div className="row">
      <div className="col-lg-3">
        <div className="card">
          <div className="card-body">
            <div className="d-flex align-items-center justify-content-between">
              <div>
                <h3>$168.90</h3>
                <span className="text-muted fw-semibold">This Month</span>
              </div>
              <div className="text-success fw-bold font-size-lg">+18%</div>
            </div>
            <div
              className="mt-4"
              id="monthly-revenue"
              style={{ maxWidth: '250px' }}
            ></div>
          </div>
        </div>
        <div className="card">
          <div className="card-body">
            <div className="text-muted mb-2">This Quarter</div>
            <h3>$3,936.80</h3>
            <span className="text-muted fw-semibold">Total Revenue</span>
            <div className="mt-4">
              <h4 className="mb-1">88</h4>
              <div className="text-muted d-flex justify-content-between mb-2">
                <span>Online Revenue</span>
                <span>70%</span>
              </div>
              <div className="progress-sm progress">
                <div
                  className="progress-bar bg-info"
                  style={{ width: '70%' }}
                ></div>
              </div>
            </div>
            <div className="mt-4">
              <h4 className="mb-1">69</h4>
              <div className="text-muted d-flex justify-content-between mb-2">
                <span>Offline Revenue</span>
                <span>50%</span>
              </div>
              <div className="progress-sm progress">
                <div
                  className="progress-bar bg-success"
                  style={{ width: '50%' }}
                ></div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="col-lg-9">
        <div className="card">
          <div className="row">
            <div className="col-md-8 border-end">
              <div className="p-3">
                <div
                  id="region-data-map"
                  style={{ width: '100%', height: '535px' }}
                ></div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="d-flex justify-content-center mt-5 pt-3">
                <div id="region-data-chart"></div>
              </div>
              <div className="mt-5 mx-auto" style={{ maxWidth: '200px' }}>
                <div className="mt-5 mx-auto" style={{ maxWidth: '200px' }}>
                  <div className="d-flex align-item-center justify-content-between mb-3">
                    <div>
                      <span
                        className="badge-dot"
                        style={{ backgroundColor: 'rgb(17, 161, 253)' }}
                      ></span>
                      <span className="text-dark fw-bolder ms-2">Texas</span>
                    </div>
                    <span>4447100</span>
                  </div>
                  <div className="d-flex align-item-center justify-content-between mb-3">
                    <div>
                      <span
                        className="badge-dot"
                        style={{ backgroundColor: 'rgb(0, 197, 105)' }}
                      ></span>
                      <span className="text-dark fw-bolder ms-2">Georgia</span>
                    </div>
                    <span>626932</span>
                  </div>
                  <div className="d-flex align-item-center justify-content-between mb-3">
                    <div>
                      <span
                        className="badge-dot"
                        style={{ backgroundColor: 'rgb(255, 200, 51)' }}
                      ></span>
                      <span className="text-dark fw-bolder ms-2">Utah</span>
                    </div>
                    <span>5130632</span>
                  </div>
                  <div className="d-flex align-item-center justify-content-between mb-3">
                    <div>
                      <span
                        className="badge-dot"
                        style={{ backgroundColor: 'rgb(90, 117, 249)' }}
                      ></span>
                      <span className="text-dark fw-bolder ms-2">Nebraska</span>
                    </div>
                    <span>5130632</span>
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

export default Dashboard;
