import React from "react";
import { Link } from "react-router-dom";

import constructionImg from "../assets/images/others/construction.png";

const UnderContruction = () => {
  return (
    <div className="auth-full-height d-flex flex-row align-items-center">
      <div className="container">
        <div className="row justify-content-md-between align-items-center">
          <div className="col-12 col-md-4 text-center text-md-start">
            <h1 className="fw-bolder mb-4">Under Maintainance</h1>
            <p className="font-size-lg">
              The page you're looking for is currently under maintainance.
              Please come back later.
            </p>
            <Link to="/" className="btn btn-info mb-5">
              Back to home
            </Link>
          </div>
          <div className="col-12 col-md-6">
            <img className="img-fluid" src={constructionImg} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default UnderContruction;
