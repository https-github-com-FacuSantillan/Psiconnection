//importamos el logo
import logo from "../../Images/Screenshot_7.jpg"
//importamos el estilo 
import s from "../landing/landing.module.css"
//importamos componentes 
import Carrusul from "../../components/carrusel/Carrusel"
import { Link } from "react-router-dom"
import 'bootstrap/dist/css/bootstrap.min.css';



export default function Landing() {
    return (
        <div className={s.landing}>
            <div className={s.row1}>
                <img src={logo} alt="" />
            </div>
            <div className={s.row2}>
                <Carrusul></Carrusul>
            </div> 
            <div className={s.row3}>
                <Link to="/home">
                    <button>GET IN</button>
                </Link>
            </div>
        </div>
    )
}