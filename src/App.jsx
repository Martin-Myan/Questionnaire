import React from "react";
import { Question } from "./components";
import style from "./App.module.scss";

const App = () => {
  return (
    <div className={style.container}>
      <Question />
    </div>
  );
};

export default App;
