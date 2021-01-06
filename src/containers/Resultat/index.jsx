import React, { useState } from "react";
import { questions } from "../../utils";
import { Header, Modal, Question } from "../../components";

const Resultat = () => {
  const [nextPage, setNextPage] = useState(1);
  const [returnResult, setReturnResult] = useState([]);
  const [modalRender, setModalRender] = useState(false);

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

  const returnResultModal = () => {
    return (
      <>
        {modalRender ? (
          <Modal
            onClick={closeModal}
            results={questions}
            reviewResults={returnResult}
          />
        ) : null}
      </>
    );
  };

  return (
    <>
      <Header nextPage={nextPage} />
      <Question
        nextPage={nextPage}
        nextPageClick={nextPageClick}
        questions={questions}
      />
      {returnResultModal()}
    </>
  );
};

export default Resultat;
