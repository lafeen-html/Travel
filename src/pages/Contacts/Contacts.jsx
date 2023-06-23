import React from 'react';
import "./Contacts.css";
import YMap from '../../components/YMap';
import LoginForm from '../../components/LoginForm';

export default function Contacts() {
  const sendMail = () => {
    const mailto =
      "mailto:hotline@eduprof.ru?subject=Вопрос&body=Здравствуйте!";
    window.location.href = mailto;
  }

  return (
    <div className="container mb-5 pb-5">

      <div className="row justify-content-center">
        <h2 className="text-center fw-bold">Забронируйте тур прямо сейчас!</h2>
        <p className="text-center">Свяжитесь с нами или оставьте свои контакты, мы свяжемся с вами и всё расскажем.</p>
      </div>

      <div className="row justify-content-center mb-3">

        <div className="col-md-5">
        <h5 className="fw-bold">Форма обратной связи:</h5>
          <LoginForm />
        </div>

        <div className="col-md-6">
          <h5 className="fw-bold">Мы находимся по адресу:</h5>
          <p>г. Москва, ул. Академика Скрябина, д. 9, стр. 4</p>
          <h5 className="fw-bold">График работы:</h5>
          <p>Пн. – Чт.: с 9:00 до 17:45, Пт.: с 9:00 до 16:30</p>
          <h5 className="fw-bold">Телефон:</h5>
          <p><a href="tel:+74952605289">+7 (495) 260-52-89</a></p>
          <h5 className="fw-bold">Email:</h5>
          <p className="contact__email" onClick={sendMail}>hotline@eduprof.ru</p>
        </div>

      </div>

      <YMap />
    </div>
  )
}
