import React from 'react';
import "../styles/ServiceItem.css";
import OutlineButton from "./UI/buttons/OutlineButton";
import { Link } from "react-router-dom";

export default function ServiceItem({
  id = "", img = "", title = "", description = "", date = "", price = "" }) {

  return (
    <div className="col">
      <div className="card shadow-sm h-100">
        <img src={img} alt="img" className="bd-placeholder-img card-img-top catalog-card-img" />
        <div className="card-body">
          <p className="card-text mb-2">{title}</p>
          <small className="text-body-secondary">{date}</small>
          <p className="text-body-secondary">{price} руб.</p>
        </div>
        <div className="card-body pt-0 d-flex justify-content-between align-items-center">
          <div className="btn-group">
            <Link to={`${id}`}>
              <OutlineButton>Подробнее</OutlineButton>
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}