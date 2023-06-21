import React from 'react';
import "./Contacts.css";
import YMap from '../../components/YMap';
import Input from '../../components/UI/input/Input';
import TextArea from '../../components/UI/textArea/TextArea';

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
          <form action="" className="mt-3">
            <div className="form-group mb-3">
              <Input type="search" placeholder="Ваше имя*" required />
            </div>
            <div className="form-group mb-3">
              <Input type="search" placeholder="Ваш Email*" required />
            </div>
            <div className="form-group mb-3">
              <TextArea placeholder="Сообщение" />
            </div>
            <div className="form-group">
              <input type="submit" className="btn btn-sm btn-primary" value="Отправить" />
            </div>
          </form>
        </div>

        <div className="col-md-6">
          <h4>Мы находимся по адресу:</h4>
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
