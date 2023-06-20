import React from 'react';
import "../styles/ServiceItem.css";
import OutlineButton from "./UI/buttons/OutlineButton";
import { NavLink } from 'react-router-dom';

export default function ServiceItem({
  id = "", img = "", title = "", start = "", end = "", date = "", price = "" }) {

  return (
    <div className="col">
      <div className="card shadow-sm bg-light" style={{ height: "100%" }}>
        <img src={img} alt="img" className="bd-placeholder-img card-img-top catalog-card-img" />
        <div className="card-body">
          <p className="card-text mb-2">
            <NavLink to={`${id}`}>
              {title}
            </NavLink>
          </p>
          <small className="text-body-secondary">{date}</small>
          <p className="text-body-secondary">{price} руб.</p>
        </div>
        <div className="card-body pt-0 d-flex justify-content-between align-items-center">
          <div className="btn-group">
            <NavLink to={`${id}`}>
              <OutlineButton>Подробнее</OutlineButton>
            </NavLink>
          </div>
        </div>
      </div>
    </div>
  )
}