import React, { useState } from 'react';
import Input from '../components/UI/input/Input';
import TextArea from '../components/UI/textArea/TextArea';
import PrimaryButton from '../components/UI/buttons/PrimaryButton';
import Modal from '../components/UI/modal/Modal';

const INITIAL_STATE = {
  name: '',
  email: '',
  message: '',
};

export default function LoginForm() {
  const [form, setForm] = useState(INITIAL_STATE);
  const [modalActive, setModalActive] = useState(false);

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.id]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setForm(INITIAL_STATE);
    setModalActive(true);
  };

  return (
    <>
      <form action="" className="mt-3" onSubmit={handleSubmit}>
        <div className="form-group mb-3">
          <Input
            type="search"
            id="name"
            placeholder="Ваше имя*"
            value={form.name}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group mb-3">
          <Input
            type="search"
            id="email"
            placeholder="Ваш Email*"
            value={form.email}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group mb-3">
          <TextArea
            id="message"
            placeholder="Сообщение"
            value={form.message}
            onChange={handleChange}
          />
        </div>
        <div className="form-group">
          <PrimaryButton
            type="submit"
          >Отправить
          </PrimaryButton>
        </div>
      </form>

      <Modal active={modalActive} setActive={setModalActive}>
        <div className="rounded pb-4">
          <p className="text-center fs-1"><i className="bi bi-emoji-smile"></i></p>
          <p className="text-center fs-4 text-uppercase fw-bold">Спасибо за сообщение!</p>
          <p className="text-center">Мы свяжемся с Вами в ближайшее время.</p>
        </div>
      </Modal>
    </>
  )
}
