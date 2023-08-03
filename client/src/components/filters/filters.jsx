import React, { useState } from "react"
import {useDispatch} from "react-redux";
import {setFilter} from "../../Redux/actions"

const Filters = () => {
    const dispatch = useDispatch();

    const [filters, setFilters] = useState({
        gender: 'all',
        country: 'all',
    })

    const handleFilterChange = (event) =>{
        const {name, value} = event.target;
        
        setFilters({...filters, [name]: value})
    }
    //función para controlar filtros
    const handleFilters =  () => {
        dispatch(setFilter(filters))
    }

    return(
        <div>
            <select name="gender" value={filters.gender} onChange={handleFilterChange}>
                <option value="all">ALL</option>
                <option value="female">FEMALE</option>
                <option value="male">MALE</option>
            </select>
            <select name="country" value={filters.country} onChange={handleFilterChange}>
                <option value="all">ALL</option>
                <option value="colombia">COLOMBIA</option>
                <option value="argentina">ARGENTINA</option>
                <option value="venezuela">VENEZUELA</option>
                <option value="mexico">MEXICO</option>
            </select>
            <button onClick={handleFilters}>FILTRAR</button>
        </div>
    )
}
export default Filters

