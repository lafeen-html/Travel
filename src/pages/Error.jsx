import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Loader from '../components/UI/loader/Loader';

export default function Error() {
  const navigate = useNavigate();
  useEffect(() => {
    setTimeout(() => {
      navigate('/');
    }, 4000)
  }, [navigate]);

  return (
    <div className='mt-4 pb-5'>
      <h1 className='text-center'>
        Такой страницы не существует<span> </span>
        <i className="bi bi-emoji-frown"></i>
      </h1>
      <h4 className='text-center'>Сейчас вы будете перенаправлены на главную страницу</h4>
      <Loader />
    </div>
  )
}
