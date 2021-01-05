import React from "react";
import { ReactComponent as TrueIcon } from "../../icons/check.svg";
import { ReactComponent as FalseIcon } from "../../icons/signal.svg";
import PropTypes from "prop-types";
import style from "../../App.module.scss";

const Modal = ({ reviewResults, onClick, results }) => {
  const resultItems = results.map((item, index) => (
    <div key={item.id} className={style.modal__module_result}>
      <p>{item.questions}</p>
      {reviewResults[index].value === item.best ? (
        <>
          <span> = </span>
          <span>
            {item.best} <TrueIcon />
          </span>
        </>
      ) : (
        <div>
          <FalseIcon />
          <p>=</p>
          {item.best}
        </div>
      )}
    </div>
  ));

  return (
    <main type="button" onClick={onClick}>
      <div className={style.modal}>
        <span className={style.modal__title}>Results</span>
        {resultItems}
      </div>
    </main>
  );
};

Modal.propTypes = {
  reviewResults: PropTypes.array,
  onClick: PropTypes.func,
  results: PropTypes.array,
};

export default Modal;
