import React from 'react';
import slide01 from "./slide01.webp";
import slide02 from "./slide02.webp";
import slide03 from "./slide03.webp";
import slide04 from "./slide04.webp";
import slide05 from "./slide05.webp";
import slide06 from "./slide06.webp";

export default function Slider() {
  return (

    <div id="myCarousel" className="carousel slide mb-6" data-bs-ride="carousel" data-bs-theme="light">
      
      <div className="carousel-indicators">
        <button type="button" data-bs-target="#myCarousel" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
        <button type="button" data-bs-target="#myCarousel" data-bs-slide-to="1" aria-label="Slide 2"></button>
        <button type="button" data-bs-target="#myCarousel" data-bs-slide-to="2" aria-label="Slide 3"></button>
        <button type="button" data-bs-target="#myCarousel" data-bs-slide-to="3" aria-label="Slide 4"></button>
        <button type="button" data-bs-target="#myCarousel" data-bs-slide-to="4" aria-label="Slide 5"></button>
        <button type="button" data-bs-target="#myCarousel" data-bs-slide-to="5" aria-label="Slide 6"></button>
      </div>

      <div className="carousel-inner">

        <div className="carousel-item active">
          <img src={slide01} class="d-block mx-auto rounded w-75" alt="абстракция" />
          <div className="container">
            <div className="carousel-caption text-start">
              <h4 className="fw-bold text-center">Окунитесь в таинственную культуру Востока</h4>
            </div>
          </div>
        </div>

        <div className="carousel-item">
          <img src={slide02} class="d-block mx-auto rounded w-75" alt="абстракция" />
          <div className="container">
            <div className="carousel-caption text-start">
              <h4 className="fw-bold text-center">Прикоснитесь к великой природе Алтая</h4>
            </div>
          </div>
        </div>

        <div className="carousel-item">
          <img src={slide03} class="d-block mx-auto rounded w-75" alt="абстракция" />
          <div className="container">
            <div className="carousel-caption text-start">
              <h4 className="fw-bold text-center">Вырвитесь из города на выходные</h4>
            </div>
          </div>
        </div>

        <div className="carousel-item">
          <img src={slide04} class="d-block mx-auto rounded w-75" alt="абстракция" />
          <div className="container">
            <div className="carousel-caption text-start">
              <h4 className="fw-bold text-center">Погрузитесь в мир дикой природы</h4>
            </div>
          </div>
        </div>

        <div className="carousel-item">
          <img src={slide05} class="d-block mx-auto rounded w-75" alt="абстракция" />
          <div className="container">
            <div className="carousel-caption text-start">
              <h4 className="fw-bold text-center">Сделайте фото уникальных мест</h4>
            </div>
          </div>
        </div>

        <div className="carousel-item">
          <img src={slide06} class="d-block mx-auto rounded w-75" alt="абстракция" />
          <div className="container">
            <div className="carousel-caption text-start">
              <h4 className="fw-bold text-center">Исследуйте морские глубины и отдохните на пляже</h4>
            </div>
          </div>
        </div>

      </div>

      <button className="carousel-control-prev" type="button" data-bs-target="#myCarousel" data-bs-slide="prev">
        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Previous</span>
      </button>
      <button className="carousel-control-next" type="button" data-bs-target="#myCarousel" data-bs-slide="next">
        <span className="carousel-control-next-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Next</span>
      </button>

    </div>

  )
}
