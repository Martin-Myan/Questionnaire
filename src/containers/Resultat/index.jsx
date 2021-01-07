import React, { useState } from "react";
import { questions } from "../../utils";
import { Modal, Header, Question } from "../../components";

import styles from "../../App.module.scss";

const Resultat = () => {
  const [nextPage, setNextPage] = useState(1);
  const [returnResult, setReturnResult] = useState([]);
  const [modalRender, setModalRender] = useState(false);

  const nextPageClick = (value) => {
    setNextPage(nextPage + 1);
    setReturnResult([...returnResult, { value }]);
    if (nextPage === questions.length) {
      setNextPage(1);
      setModalRender(true);
    }
  };

  const closeModal = () => {
    setReturnResult([]);
    setModalRender(false);
  };
  return (
    <>
      <Header nextPage={nextPage} />
      <Question
        nextPage={nextPage}
        nextPageClick={nextPageClick}
        questions={questions}
      />
      {modalRender ? (
        <div className={styles.modal} type="button" onClick={closeModal}>
          <div className={styles.modal__result}>
            <span className={styles.modal__result__title}>Results</span>

            <Modal results={questions} reviewResults={returnResult} />
          </div>
        </div>
      ) : null}
    </>
  );
};

export default Resultat;
