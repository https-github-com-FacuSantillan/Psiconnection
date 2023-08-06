import React from "react";
import style from "./Pagination.module.css";

const Pagination = ({ currentPage, prevHandler, nextHandler }) => {
  return (
    <div className={style.pagination}>
      <div className={style.handlerCont}>
        <button className={style.btn} onClick={prevHandler}>Prev</button>
        <div className={style.pageIndicator}>
          <span>{currentPage + 1}</span>
        </div>
        <button className={style.btn} onClick={nextHandler}>Next</button>
      </div>
    </div>
  );
};

export default Pagination;
