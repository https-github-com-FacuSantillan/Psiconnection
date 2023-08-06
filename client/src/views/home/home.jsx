import Cards from '../../components/cards/Card';
import Filters from "../../components/filters/filters";
import Orders from "../../components/orders/orders";
import CardsContainer from '../../components/CardsContainer/CardsContainer';
import Sidebar from '../../components/sideBar/sideBar';
import style from "./home.module.css"
import Pagination from '../../components/Pagination/Pagination';

export default function Home() {
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
  
