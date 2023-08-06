import React from "react";
import style from "./Pagination.module.css";
import CardsContainer from "../CardsContainer/CardsContainer";

const Pagination = ({ currentPage, prevHandler, nextHandler }) => {
  return (
    <div className={style.pagination}>
      <div className={style.handlerCont}>
        <button className={style.btn}onClick={() => console.log("HOLA")}>Prev</button>
        {/* <h5>Page: 2</h5> */}
        <button className={style.btn} onClick={() => console.log("HOLA")}>Next</button>
      </div>
      {/* <div className={style.handlerCont}>
        <button className={style.btn}onClick={() => console.log("HOLA")}>Prev</button>
        {/* <h5>Page: 2</h5> */}
        {/* <button className={style.btn} onClick={() => console.log("HOLA")}>Next</button>
      </div> */} 
    </div>
  );
};

export default Pagination;
