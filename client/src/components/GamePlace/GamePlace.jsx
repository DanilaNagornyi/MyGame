import React, { useState } from 'react';
import ModalWindow from '../ModalWindow/ModalWindow';
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { allTopics } from "../../redux/actionsCreate/gameActions";
import { setCurrentQuestionID } from '../../redux/actionsCreate/currentQuestion';
import Answer from '../Answer/Answer';


const BUTTON_WRAPPER_STYLES = {
  position: 'relative',
  zIndex: 1
}

const GamePlace = () => {
  const [isOpen, setIsOpen] = useState(false)

  const topics = useSelector(state => state.topics);

  const dispatch = useDispatch();
  useEffect(() => {
    // получаем topics с бэка
    fetch("http://localhost:3000/api/v1/alTitle")
      .then(response => response.json())
      .then(topics => dispatch(allTopics(topics)))

  }, []);

  const clickHandler = (id) => {
    setIsOpen(true)
    dispatch(setCurrentQuestionID(id))
  }
  console.log(topics);
  return (
    <>
      {/* <!-- ======= ONE LINE ======= --> */}

      <>
        <div style={BUTTON_WRAPPER_STYLES} onClick={() => console.log('clicked')}>


          <ModalWindow open={isOpen} onClose={() => setIsOpen(false)}>
            <Answer />
          </ModalWindow>
        </div>


      </>

      <div className="row gy-4 mt-5 justify-content-center" data-aos="zoom-in" data-aos-delay="250">
        {
          topics.length ?
            topics.map(el => {
              return (
                <>
                  {/* <title></title> */}
                  <div key={el._id} className="col-xl-2 col-md-4">
                    <div className="icon-box box-box">
                      <i className="ri-store-line"></i>
                      <h3><a href="">{el.title}</a></h3>
                    </div>
                  </div>
                  {/* <title></title> */}
                  {
                    el.questions?.map(el => {
                      return (
                        <div onClick={() => clickHandler(el._id)} className="col-xl-2 col-md-4">
                          <div className="icon-box">
                            <i className="ri-store-line"></i>
                            <h3><a href="">{el.score}</a></h3>
                          </div>
                        </div>
                        
                      )
                    })


                  }
                </>
              )
            }) : <p>nothing</p>

        }


        <div onClick={() => setIsOpen(true)} className="col-xl-2 col-md-4">
          <div className="icon-box">
            <i className="ri-store-line"></i>
            <h3><a href="">Lorem Ipsum</a></h3>
          </div>
        </div>

        {/*         
        <div className="col-xl-2 col-md-4">
          <div className="icon-box">
            <i className="ri-bar-chart-box-line"></i>
            <h3><a href="">Dolor Sitema</a></h3>
          </div>
        </div> */}

        {/* <div className="col-xl-2 col-md-4">
          <div className="icon-box">
            <i className="ri-calendar-todo-line"></i>
            <h3><a href="">Sedare Perspiciatis</a></h3>
          </div>
        </div>
        <div className="col-xl-2 col-md-4">
          <div className="icon-box">
            <i className="ri-paint-brush-line"></i>
            <h3><a href="">Magni Dolores</a></h3>
          </div>
        </div>
        <div className="col-xl-2 col-md-4">
          <div className="icon-box">
            <i className="ri-database-2-line"></i>
            <h3><a href="">Nemos Enimade</a></h3>
          </div>
        </div>
      </div> */}

        {/* <!-- ======= TWO LINE ======= --> */}
        {/* 
      <div className="row gy-4 mt-5 justify-content-center" data-aos="zoom-in" data-aos-delay="250">
        <div className="col-xl-2 col-md-4">
          <div className="icon-box box-box">
            <i className="ri-store-line"></i>
            <h3><a href="">Lorem Ipsum</a></h3>
          </div>
        </div>

        <div className="col-xl-2 col-md-4">
          <div className="icon-box">
            <i className="ri-store-line"></i>
            <h3><a href="">Lorem Ipsum</a></h3>
          </div>
        </div>

        
        <div className="col-xl-2 col-md-4">
          <div className="icon-box">
            <i className="ri-bar-chart-box-line"></i>
            <h3><a href="">Dolor Sitema</a></h3>
          </div>
        </div>
        <div className="col-xl-2 col-md-4">
          <div className="icon-box">
            <i className="ri-calendar-todo-line"></i>
            <h3><a href="">Sedare Perspiciatis</a></h3>
          </div>
        </div>
        <div className="col-xl-2 col-md-4">
          <div className="icon-box">
            <i className="ri-paint-brush-line"></i>
            <h3><a href="">Magni Dolores</a></h3>
          </div>
        </div>
        <div className="col-xl-2 col-md-4">
          <div className="icon-box">
            <i className="ri-database-2-line"></i>
            <h3><a href="">Nemos Enimade</a></h3>
          </div>
        </div>
      </div>
 */}

        {/* <!-- ======= THREE LINE ======= --> */}

        {/* <div className="row gy-4 mt-5 justify-content-center" data-aos="zoom-in" data-aos-delay="250"> */}
        {/* <div className="col-xl-2 col-md-4">
          <div className="icon-box box-box">
            <i className="ri-store-line"></i>
            <h3><a href="">Lorem Ipsum</a></h3>
          </div>
        </div>

        <div className="col-xl-2 col-md-4">
          <div className="icon-box">
            <i className="ri-store-line"></i>
            <h3><a href="">Lorem Ipsum</a></h3>
          </div>
        </div>

        
        <div className="col-xl-2 col-md-4">
          <div className="icon-box">
            <i className="ri-bar-chart-box-line"></i>
            <h3><a href="">Dolor Sitema</a></h3>
          </div>
        </div>
        <div className="col-xl-2 col-md-4">
          <div className="icon-box">
            <i className="ri-calendar-todo-line"></i>
            <h3><a href="">Sedare Perspiciatis</a></h3>
          </div>
        </div>
        <div className="col-xl-2 col-md-4">
          <div className="icon-box">
            <i className="ri-paint-brush-line"></i>
            <h3><a href="">Magni Dolores</a></h3>
          </div>
        </div>
        <div className="col-xl-2 col-md-4">
          <div className="icon-box">
            <i className="ri-database-2-line"></i>
            <h3><a href="">Nemos Enimade</a></h3>
          </div>
        </div> */}
      </div>


    </>
  );
}

export default GamePlace;
