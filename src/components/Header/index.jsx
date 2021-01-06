import React from "react";
import PropTypes from "prop-types";

const Header = ({ nextPage }) => {
  return (
    <header>
      <h1>Questionnaire</h1>
      <h2>Question {nextPage}</h2>
    </header>
  );
};

Header.defaultProps = {
  nextPage: 1,
};

Header.propTypes = {
  nextPage: PropTypes.number,
};

export default Header;
