import React from "react";
import style from "./Pagination.module.css";

const Pagination = ({ currentPage, prevHandler, nextHandler }) => {
  return (
    <div className={style.handlerCont}>
      <button className={style.btn} onClick={prevHandler}>Prev</button>
      <span>{currentPage + 1}</span>
      <button className={style.btn} onClick={nextHandler}>Next</button>
    </div>

  );
};

export default Pagination;
