import React from 'react';
import "./Footer.css";
import { Link } from "react-router-dom";
import ScrollToTop from '../scrollToTop/ScrollToTop';

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="container-fluid footer blog-footer mb-4">

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

          <ScrollToTop />
        </div>

        <div className="text-center">
          {`© ${year} Travel | `}<Link to="#">Политика конфиденциальности</Link>
        </div>

      </div>

    </footer>

  )
}
