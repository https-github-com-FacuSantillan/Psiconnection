import Cards from '../../components/cards/Card';
import Filters from "../../components/filters/filters";
import Orders from "../../components/orders/orders";
import CardsContainer from '../../components/CardsContainer/CardsContainer';
import Sidebar from '../../components/sideBar/sideBar';
import style from "./home.module.css"
import Pagination from '../../components/Pagination/Pagination';
import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';

export default function Home() {
  const ITEMS_PER_PAGE = 9;
  const [items, setItems] = useState([])
  const [currentPage, setCurrentPage] = useState(0)
  const piscologos = useSelector(state => state.psychologists)
  useEffect(() =>{
    if(piscologos.length === 0){
      //dispatch(getPsicologos())
    }
    const slicedPsic =  piscologos.slice(0, ITEMS_PER_PAGE) 
  }, [])

    return (
    
        <div>
        
          {/* Columna para los filtros */}
            <Filters />
        
          
          {/* Columna para los contenedores de tarjetas */}
          <CardsContainer/>
          <Pagination/>
         
         
            {/* <Pagination/> */}

          
        
      </div>

          );
  }
  
