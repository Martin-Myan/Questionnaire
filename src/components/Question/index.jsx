import React, { useState } from "react";
import { questions } from "../../utils/index";
import Modal from "../Modal";
import style from "../../App.module.scss";

const Question = () => {
  const [nextPage, setNextPage] = useState(1);
  const [modalRender, setModalRender] = useState(false);
  const [returnResult, setReturnResult] = useState([]);

  const nextPageClick = (value) => {
    setNextPage(nextPage + 1);
    setReturnResult([...returnResult, { value }]);
    if (nextPage === questions.length) {
      return (
        <>
          {setNextPage(1)}
          {setModalRender(true)}
        </>
      );
    }
  };

  const closeModal = () => {
    setReturnResult([]);
    setModalRender(false);
  };

  const renderItem = questions.slice(nextPage - 1, nextPage).map((item) => (
    <section key={item.id}>
      <h2>{item.questions} = ?</h2>
      <form onClick={(e) => e.preventDefault()}>
        <div role="button" onClick={() => nextPageClick(item.one)}>
          <button className={style.__lastBtn} type="radio" />
          <p>{item.one}</p>
        </div>
        <div role="button" onClick={() => nextPageClick(item.two)}>
          <input type="radio" />
          <p>{item.two}</p>
        </div>
        <div role="button" onClick={() => nextPageClick(item.three)}>
          <button className={style.__btn} type="radio" />
          <p>{item.three}</p>
        </div>
      </form>
    </section>
  ));

  return (
    <>
      <header>
        <h1>Questionnaire</h1>
        <h2>Question {nextPage}</h2>
      </header>
      {modalRender ? (
        <Modal
          reviewResults={returnResult}
          onClick={() => closeModal()}
          results={questions}
        />
      ) : null}
      {renderItem}
    </>
  );
};

export default Question;
