import React from "react";
import PropTypes from "prop-types";
import { ReactComponent as TrueIcon } from "../../icons/check.svg";
import { ReactComponent as FalseIcon } from "../../icons/signal.svg";

import style from "../../App.module.scss";

const Modal = ({ reviewResults, results, onClick }) => {
  const resultItems = results.map(({ id, best, questions }, index) => (
    <div key={id} className={style.modal__result__items}>
      <p>{questions}</p>
      {reviewResults[index].value === best ? (
        <>
          <p> = </p>
          <span>
            {best} <TrueIcon />
          </span>
        </>
      ) : (
        <div>
          <FalseIcon />
          <p>=</p>
          {best}
        </div>
      )}
    </div>
  ));

  return (
    <div className={style.modal} type="button" onClick={onClick}>
      <div className={style.modal__result}>
        <span className={style.modal__result__title}>Results</span>
        {resultItems}
      </div>
    </div>
  );
};

Modal.defaultProps = {
  results: [],
  nextPage: 1,
  onClick: () => {},
  reviewResults: [],
};

Modal.propTypes = {
  onClick: PropTypes.func,
  results: PropTypes.array,
  reviewResults: PropTypes.array,
};

export default Modal;
