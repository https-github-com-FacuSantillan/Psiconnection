import { useSelector } from "react-redux"
import Card from "../cards/Card"
import style from "./CardsContainer.module.css"

const CardsContainer = () => {
    const psicologos = useSelector(state => state.recipes);
    if(!Array.isArray(recipes)){
        return <div>No hay recetas disponibles</div>
    }

    return(
        <div className={style.container}>
            
        </div>
    )
}