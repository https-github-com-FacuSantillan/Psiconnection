import { useEffect, useState } from "react";
import axios from 'axios';
import { useParams } from "react-router-dom";
import s from "./detail.module.css"

const Detail = () => {
    const {detailID} = useParams();
    const [psicologo, setPiscologo] = useState()
    
    // useEffect(()=>{
    //     try{
    //         axios.get(URL/${detailId})
    //     }
    // },[])
    console.log(detailID);
    return(
        <div className={s.detail}>
            <div className={s.view_psico}>
                <div className={s.image_conteiner}>
                    <img src="#"/>
                </div>
                <div>
                    <h1>NOmbre y apellido</h1>
                    <h2>Cuenta creada en </h2>
                    <button>Contanctar</button>
                </div>
                <div>
                    <h1>Especialidad</h1>
                </div>
                <div>
                    <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eaque quis tempore saepe quia illo suscipit et sequi rerum at deleniti reprehenderit perspiciatis placeat ratione, odit dolore porro deserunt eligendi praesentium!lorem Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt dicta quae vero rerum, alias quibusdam expedita corporis a dolor sunt quidem quia veritatis soluta vitae reiciendis exercitationem aut minima similique?</p>
                </div>

            </div>
            <div>
                Suspuesto pedir turno

            </div>
            
        </div>
    )
}

export default Detail;