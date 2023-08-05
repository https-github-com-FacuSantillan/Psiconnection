import Cards from '../../components/cards/Card';
import Filters from "../../components/filters/filters";
import Orders from "../../components/orders/orders";
import CardsContainer from '../../components/CardsContainer/CardsContainer';
import 'bootstrap/dist/css/bootstrap.min.css';
import Sidebar from '../../components/sideBar/sideBar';
import style from "./home.module.css"

export default function Home() {
    return (
    
        <div className="full-width-container" id={style.home}> {/* Agrega la clase "full-width-container" */}
        <div className="row">
          {/* Columna para los filtros */}
          <div className="col-md-2">
            <Filters />
          </div>
  
          {/* Columna para los contenedores de tarjetas */}
          <div className={`col-md-10 ${style.container}`}>
            <CardsContainer />
          </div>
        </div>
        
      </div>

          );
  }
  
