import { useEffect, useState } from "react";
import axios from 'axios';
import { useParams } from "react-router-dom";
import s from "./detail.module.css"
//importamos los hooks para el estado global 
import { useSelector } from "react-redux"

const Detail = () => {
    //Estados locales 
    const { detailID } = useParams();
    const [psicologo, setPiscologo] = useState({})
    //Estados globales 
    const allPsyco = useSelector((store) => store.allPshychologists)
    //Useeffect
    useEffect(() => {
        const aux = async () => {
            await setPiscologo(allPsyco.find((psyco) => {
                return psyco.id == detailID

            }))
        }
        aux()
        console.log(psicologo);
    }, [])
    //funciones 

    console.log(detailID);
    console.log(allPsyco);
    console.log(psicologo);
    console.log(psicologo.imagen);
    return (
        <div className={s.detail_conteiner}>
            <div className={s.detail}>
                <div className={s.view_psico}>
                    <div className={s.row1}>
                        <div className={s.foto_conteiner}>
                            <img src={psicologo.imagen} />
                        </div>
                        <div className={s.info_psyco}>

                            <h1 className={s.name}>{psicologo.nombre}</h1>
                            <h2 className={s.especialidad}>{psicologo.especializacion}</h2>
                            <h2 className={s.time}>Cuenta creada el 03/08/23</h2>

                            <div className={s.contactar}>
                                <p>📱</p>
                                <p>Contanctar</p>
                            </div>


                        </div>
                    </div>
                    <div className={s.row2}>
                        <label className={s.label}>Datos del psicologo:</label>
                        <div className={s.info}>
                            <p>Fecha de nacimiento:</p>
                            <p>Pais de origen: <span className={s.negrita}>{psicologo.pais}</span></p>
                            <p>Genero: <span className={s.negrita}>{psicologo.genero}</span></p>
                            <p>Licencia:</p>

                        </div>
                    </div>
                    <div className={s.row3}>
                        <label className={s.label}>Descripción:</label>
                        <div className={s.descripcion}>
                            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eaque quis tempore saepe quia illo suscipit et sequi rerum at deleniti reprehenderit perspiciatis placeat ratione, odit dolore porro deserunt eligendi praesentium!lorem Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt dicta quae vero rerum, alias quibusdam expedita corporis a dolor sunt quidem quia veritatis soluta vitae reiciendis exercitationem aut minima similique?
                        </div>
                    </div>

                </div>


                <div className={s.turno_conteiner}>
                    Suspuesto pedir turno

                </div>

            </div>

        </div>
    )
}

export default Detail;