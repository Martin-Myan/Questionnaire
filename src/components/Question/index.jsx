import React from "react";
import PropTypes from "prop-types";
import style from "../../App.module.scss";

const Question = ({ nextPage, nextPageClick, questions }) => {
  const renderItem = questions
    .slice(nextPage - 1, nextPage)
    .map(({ id, one, two, three, questions }) => (
      <section className={style.questions} key={id}>
        <h2 className={style.questions__title}>{questions} = ?</h2>
        <form
          className={style.questions__options}
          onClick={(e) => e.preventDefault()}
        >
          <div role="button" onClick={() => nextPageClick(one)}>
            <input type="radio" />
            <p>{one}</p>
          </div>
          <div role="button" onClick={() => nextPageClick(two)}>
            <input type="radio" />
            <p>{two}</p>
          </div>
          <div role="button" onClick={() => nextPageClick(three)}>
            <input type="radio" />
            <p>{three}</p>
          </div>
        </form>
      </section>
    ));

  return renderItem;
};

Question.defaultProps = {
  nextPage: 1,
  questions: [],
  nextPageClick: () => {},
};

Question.propTypes = {
  nextPage: PropTypes.number,
  questions: PropTypes.array,
  nextPageClick: PropTypes.func,
};

export default Question;
