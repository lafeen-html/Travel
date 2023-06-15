import React from 'react';
import "./Contacts.css";
import YMap from '../../components/YMap';

export default function Contacts() {
  const sendMail = () => {
    const mailto =
      "mailto:hotline@eduprof.ru?subject=Вопрос&body=Здравствуйте!";
    window.location.href = mailto;
  }

  return (
    <div className="container mb-5 pb-5">

      <div className="row justify-content-center mb-4">
        <h2 className="text-center">Связаться с нами</h2>
      </div>

      <div className="row justify-content-center mb-3">

          <div className="col-md-6">
            <form action="" className="mt-3">
              <div className="form-group">
                <input type="text" className="form-control mb-4" placeholder="Ваше имя" />
              </div>
              <div className="form-group">
                <input type="email" className="form-control mb-4" placeholder="Email" />
              </div>
              <div className="form-group">
                <textarea rows="2" className="form-control mb-4" placeholder="Ваше сообщение"></textarea>
              </div>
              <div className="form-group">
                <input type="submit" className="btn btn-sm btn-primary" value="Отправить сообщение" />
              </div>
            </form>
          </div>

          <div className="col-md-6">
            <h4>Адрес:</h4>
            <p>г. Москва, ул. Академика Скрябина, д. 9, стр. 4</p>
            <h4>График работы:</h4>
            <p>Пн. – Чт.: с 9:00 до 17:45, Пт.: с 9:00 до 16:30</p>
            <h4>Телефон:</h4>
            <p><a href="tel:+74952605289">+7 (495) 260-52-89</a></p>
            <h4>Email:</h4>
            <p className="contact__email" onClick={sendMail}>hotline@eduprof.ru</p>
          </div>

      </div>

      <YMap />
    </div>
  )
}
