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

  const [fetchComments, isCommentLoading, commentError] = useFetching(async (id) => {
    const response = await PostService.getCommentsById(params.id);
    setComments(response.data);
  });

  useEffect(() => {
    fetchComments(params.id);
  }, [])

  function createComment(newComment) {
    setComments([...comments, newComment]);
    setModalActive(false);
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

          <img className="item-img" src={item[0].img} alt="item-img" />
          <p style={{ marginTop: "1rem" }}>Планируемая дата: {item[0].date}</p>
          <p>Цена: {item[0].price.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1 ')} руб.</p>
          <p>Описание: {item[0].description}</p>

          <PrimaryButton
            style={{ marginTop: "1rem", marginBottom: "1rem" }}
            onClick={() => setModalActive(true)}
          >
            Добавить отзыв
          </PrimaryButton>

          <Modal active={modalActive} setActive={setModalActive}>
            <CommentForm create={createComment} />
          </Modal>

          <h3>Отзывы о туре {item[0].title}</h3>

          {comments.map(comm =>
            <div key={comm.id}>
              <h6><strong>Имя:</strong> {comm.name}</h6>
              <span><strong>Эл. почта:</strong> {comm.email}</span>
              <p><strong>Отзыв:</strong> {comm.body}</p>
            </div>
          )}
        </div>
      }
    </div >

  )
}
