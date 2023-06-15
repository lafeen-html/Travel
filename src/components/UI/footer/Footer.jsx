import React from 'react';
import "./Footer.css";
import { Link } from "react-router-dom";
import ScrollToTop from '../ScrollToTop/ScrollToTop';

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="container-fluid footer blog-footer mb-2">
      <div className="row">
        <div className="col-4 mx-auto text-center">
          <div className="col mx-auto text-center d-flex justify-content-around mb-2">
            <Link to="#">
              <i className="fab fa-facebook fa-2x fa-solid-facebook"></i>
            </Link>
            <Link to="#">
              <i className="fab fa-twitter fa-2x fa-solid-twitter"></i>
            </Link>
            <Link to="#">
              <i className="fab fa-youtube fa-2x fa-solid-youtube"></i>
            </Link>
            <Link to="#">
              <i className="fab fa-github fa-2x fa-solid-github"></i>
            </Link>
          </div>
          <p>{`© ${year} Travel`}</p>
          <ScrollToTop />
        </div>
      </div>

    </footer>

  )
}
