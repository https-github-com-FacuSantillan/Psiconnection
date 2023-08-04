import { useEffect, useState } from "react";
import { useDispatch } from "react-redux"
import { setOrders } from "../../Redux/actions";
import style from "../filters/filters.module.css"
const Orders = () => {
    const dispatch = useDispatch();
    const [order, setOrder] = useState("alf")

    const handleOrder = (event) => {
        const value = event.target.value;
        setOrder(value)
        dispatch(setOrders(value))
    }

    useEffect(() => {
        dispatch(setOrders(order))
    }, [])
    return(
        <div className={style.selectContainer}>
            <label className={style.label}>Ordenar por: </label>
            <select className={style.select} value={order} onChange={handleOrder}>
                <option value= 'alf'>Nombre</option>
                <option value= "ascPr">Mayor precio</option>
                <option value= "desPr">Menor precio</option>
                <option value= "desPu">Mayor puntuación</option>
            </select>
        </div>
    )
}

export default Orders;