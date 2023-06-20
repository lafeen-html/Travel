import React, { useState, useEffect } from 'react';
import "./Item.css";
import { useParams } from "react-router-dom";
import { useFetching } from '../../hooks/useFetching';
import PostService from '../../api/PostService';
import Loader from '../../components/UI/loader/Loader';
import { Link } from "react-router-dom";
import CatalogOfServices from '../../data/CatalogOfServices.js';
import Modal from '../../components/UI/modal/Modal';
import CommentForm from '../../components/CommentForm';
import PrimaryButton from '../../components/UI/buttons/PrimaryButton';

export default function Item() {
  const params = useParams();
  const [item, setItem] = useState(CatalogOfServices);
  const [comments, setComments] = useState([]);
  const [modalActive, setModalActive] = useState(false);

  useEffect(() => {
    let id = Object.values(params).join("");
    let copyItem = [...item];
    copyItem = copyItem.filter(el => el.id === id);
    setItem(copyItem);
  }, [])

  useEffect(() => {
    fetchComments(params.id);
  }, [])

  localStorage.setItem('comments', JSON.stringify({ comments }));

  const [fetchComments, isCommentLoading, commentError] = useFetching(async (id) => {
    const response = await PostService.getCommentsById(params.id);
    setComments(response.data);
  });

  function createComment(newComment) {
    setComments([...comments, newComment]);
    setModalActive(false);

    localStorage.setItem('comments', JSON.stringify(comments));
    console.log(...comments);
  }

  function removeComment(comment) {
    setComments(comments.filter((p) => p.id !== comment.id));
  }

  return (
    <div>
      {isCommentLoading
        ? <Loader />
        :
        <div className="container mb-5 pb-5">
          <Link to="/catalog">
            <span>Назад к турам</span>
          </Link>

          <h2 className="">{item[0].title}</h2>

          <img className="item-img mb-3" src={item[0].img} alt="item-img" />

          <div>
            <span className="fw-bold">Планируемая дата: </span>
            <p>{item[0].date}</p>
          </div>

          <span className="fw-bold">Цена: </span>
          <p>
            {item[0].price.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1 ')} руб.
          </p>

          <span className="fw-bold">Описание: </span>
          <p className="fst-italic bg-light p-3 mb-5 rounded">{item[0].description}</p>

          <PrimaryButton
            style={{ marginBottom: "1rem" }}
            onClick={() => setModalActive(true)}
          >
            Добавить отзыв
          </PrimaryButton>

          <Modal active={modalActive} setActive={setModalActive}>
            <CommentForm create={createComment} />
          </Modal>

          <h3>Отзывы о туре {item[0].title}</h3>

          {!comments.length
            ? <div>
              <h2 className="text-center mt-4 mb-4 pb-5">Пока нет отзывов</h2>
            </div>
            :
            <>
              {comments.map(comm =>
                <div key={comm.id} className="bg-light px-3 py-2 mb-3 rounded">
                  <h6 className="pt-2"><strong>Имя:</strong> {comm.name}</h6>
                  <span><strong>Эл. почта:</strong> {comm.email}</span>
                  <p><strong>Отзыв:</strong> {comm.body}</p>
                  <button className="trash__btn mb-2" onClick={() => removeComment(comm)}>
                  <i className="bi bi-trash3-fill"></i>
                  </button>
                </div>
              )}
            </>
          }


        </div>
      }
    </div >

  )
}
