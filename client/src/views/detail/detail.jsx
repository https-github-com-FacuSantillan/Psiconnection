import { useEffect, useState } from "react";
import axios from 'axios';
import { useParams } from "react-router-dom";
import style from "./detail.module.css"

const Detail = () => {
    const {detailID} = useParams();
    const [psicologo, setPiscologo] = useState()
    // useEffect(()=>{
    //     try{
    //         axios.get(URL/${detailId})
    //     }
    // },[])

    return(
        <div>
            {psicologo.nombre ? 
            (<div className={style.detailContainer}>
                <img src={psicologo.imagen} alt = "Psicologo"/>
                <h2 className={style.title}>{}</h2>
                <div className={style.descriptionContainer}>
                    <p className={style.description}>{psicologo.descripcion}</p>
                </div>
            </div>)
            :<h1> Loading</h1>}
        </div>
    )
}

export default Detail;