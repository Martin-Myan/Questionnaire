import React from "react";
import PropTypes from "prop-types";

import { ReactComponent as TrueIcon } from "../../icons/check.svg";
import { ReactComponent as FalseIcon } from "../../icons/signal.svg";

import styles from "../../App.module.scss";

const Modal = ({ reviewResults, results /*, onClick*/ }) => {
  const resultItems = results.map(({ id, best, questions }, index) => (
    <div key={id} className={styles.modal__result__items}>
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

  return <>{resultItems}</>;
};

Modal.defaultProps = {
  results: [],
  nextPage: 1,
  reviewResults: [],
};

Modal.propTypes = {
  results: PropTypes.array,
  nextPage: PropTypes.number,
  reviewResults: PropTypes.array,
};

export default Modal;
