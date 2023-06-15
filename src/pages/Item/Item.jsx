import React, { useState, useEffect } from 'react';
import "./Item.css";
import { useParams } from "react-router-dom";
import { useFetching } from '../../hooks/useFetching';
import PostService from '../../api/PostService';
import Loader from '../../components/UI/loader/Loader';
import { Link } from "react-router-dom";

export default function Item() {
  const params = useParams();
  const [comments, setComments] = useState([]);

  const [fetchComments, isCommentLoading, commentError] = useFetching(async (id) => {
    const response = await PostService.getCommentsById(params.id);
    setComments(response.data);
  });

  useEffect(() => {
    fetchComments(params.id);
  }, [])



  return (
    <div>
      <Link to="/catalog">
        <button>Назад</button>
      </Link>
      {isCommentLoading
        ? <Loader />
        : <div className="container my-5 pb-5">
          <div className="row justify-content-center">
            <div className="col-md-8">
              <h3>Отзывы наших клиентов</h3>
              {comments.map(comm =>
                <div key={comm.id}>
                  <h5>{comm.name}</h5>
                  <div>{comm.email}</div>
                  <div>{comm.body}</div>
                </div>
              )}
            </div>
          </div>
        </div>
      }
    </div>
  )
}
