import React, { useState } from 'react';
import Input from './UI/input/Input';
import TextArea from './UI/textArea/TextArea';
import PrimaryButton from './UI/buttons/PrimaryButton';

export default function CommentForm({ create }) {
  const [comment, setComment] = useState({ name: "", email: "", body: "", });

  function addNewComment(e) {
    e.preventDefault();
    let re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    const newComment = {
      ...comment, id: Date.now()
    }
    if (comment.name === "" || comment.email === "" || comment.body === "") {
      document.querySelector('.message').innerHTML = 'Пожалуйста, заполните все поля!';
    } else if (!re.test(comment.email)) {
      document.querySelector('.message').innerHTML = 'Введите корректную почту!';
    } else {
      document.querySelector('.message').innerHTML = '';
      create(newComment);
      setComment({ name: "", email: "", body: "", });
    }
  };

  const handleKeyPress = (event) => {
    if (event.key !== '') {
      document.querySelector('.message').innerHTML = '';
    }
  };

  return (
    <form>
      <div className='mb-2'>
        <Input
          type="search"
          placeholder="Имя*"
          value={comment.name}
          onChange={(e) => setComment({ ...comment, name: e.target.value })}
          onKeyPress={(e) => handleKeyPress(e)}
        />
      </div>
      <div className='mb-2'>
        <Input
          type="search"
          placeholder="Эл. почта*"
          value={comment.email}
          onChange={(e) => setComment({ ...comment, email: e.target.value })}
          onKeyPress={(e) => handleKeyPress(e)}
        />
      </div>
      <TextArea
        placeholder="Отзыв*"
        value={comment.body}
        onChange={(e) => setComment({ ...comment, body: e.target.value })}
        onKeyPress={(e) => handleKeyPress(e)}
      />
      <strong><div className='message mb-2' style={{ color: "var(--color4)" }}></div></strong>
      <PrimaryButton onClick={addNewComment}>Добавить</PrimaryButton>
    </form>
  )
}