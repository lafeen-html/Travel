import React from 'react';
import "./InfoNavbar.css";
import infoImg01 from "./info-img01.jpg";
import infoImg02 from "./info-img02.jpg";
import infoImg03 from "./info-img03.jpg";

export default function InfoNavbar() {
  return (
    <div className="container-fluid py-3 bg-white rounded">
      <h5 className="text-center fw-bold info-navbar-text">Что такое авторские туры?</h5>
      <h6 className="text-center fw-bold">Это новый формат необычных путешествий в уникальные места</h6>
      <div className="row align-items-start">

        <div className="col-lg-4 ">
          <img src={infoImg01} alt="lock-icon" className="main-icons mx-auto d-block mb-3 info-navbar-img" />
          <h6 className="fw-bold text-center info-navbar-text">Безопасная оплата</h6>
          <p className="text-center info-navbar-text">Бронируйте туры через нашу надежную платежную систему</p>
        </div>

        <div className="col-lg-4">
          <img src={infoImg02} alt="shield-check" className="main-icons mx-auto d-block mb-3 info-navbar-img" />
          <h6 className="fw-bold text-center info-navbar-text">Продуманная спонтанность</h6>
          <p className="text-center info-navbar-text">Маршруты могут адаптироваться под пожелания группы</p>
        </div>

        <div className="col-lg-4">
          <img src={infoImg03} alt="lock-icon" className="main-icons mx-auto d-block mb-3 info-navbar-img" />
          <h6 className="fw-bold text-center info-navbar-text">Проверенные тревел-эксперты</h6>
          <p className="text-center info-navbar-text">В нашей базе 10 522 гида, которые прошли тщательный отбор</p>
        </div>
      </div>
    </div>
  )
}
