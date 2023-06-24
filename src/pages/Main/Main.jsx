import React from 'react';
import "./Main.css";
import lock from "../../images/lock.svg";
import emojiSmile from "../../images/emoji-smile.svg";
import shieldCheck from "../../images/shield-check.svg";
import geoAlt from "../../images/geo-alt.svg";
import Slider from '../../components/UI/slider/Slider';
import WorldMap from '../../components/WorldMap/WorldMap';

export default function Main() {

  return (
    <div className="container marketing mt-2 mb-5 pb-5">
      <h1 className="pb-4 text-center fw-bold">Авторские туры — новый формат <span style={{ color: "var(--color10)"}}>насыщенных</span> путешествий</h1>

      <Slider />

      <div className="row mt-5 pt-4 bg-white rounded shadow px-2">

        <div className="col-lg-3">
          <img src={lock} alt="lock-icon" className="main-icons mx-auto d-block mb-3 main-img" />
          <h6 className="fw-bold text-center">Безопасная оплата</h6>
          <p className="text-center">Бронируйте туры через нашу надежную платежную систему</p>
        </div>

        <div className="col-lg-3">
          <img src={emojiSmile} alt="shield-check" className="main-icons mx-auto d-block mb-3 main-img" />
          <h6 className="fw-bold text-center">Продуманная спонтанность</h6>
          <p className="text-center">Маршруты могут адаптироваться под пожелания группы</p>
        </div>

        <div className="col-lg-3">
          <img src={shieldCheck} alt="lock-icon" className="main-icons mx-auto d-block mb-3 main-img" />
          <h6 className="fw-bold text-center">Проверенные тревел-эксперты</h6>
          <p className="text-center">В нашей базе 10 522 гида, которые прошли тщательный отбор</p>
        </div>

        <div className="col-lg-3">
          <img src={geoAlt} alt="lock-icon" className="main-icons mx-auto d-block mb-3 main-img" />
          <h6 className="fw-bold text-center">Гарантированные туры</h6>
          <p className="text-center">У нас вы найдете более 127 297 туров с гарантированным отправлением</p>
        </div>

      </div>

      <WorldMap />

    </div>
  )
}
