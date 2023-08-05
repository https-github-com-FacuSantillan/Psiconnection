import './home.css'
import Cards from '../../components/cards/Card'
import Filters from "../../components/filters/filters"
import Orders from "../../components/orders/orders"
import CardsContainer from '../../components/CardsContainer/CardsContainer'
import 'bootstrap/dist/css/bootstrap.min.css';
import Sidebar from '../../components/sideBar/sideBar'


export default function Home() {
    return (
        <div>
            <div className="row">
                {/* Columna para los filtros */}
                <div className="col-md-3">
                    <Filters />
                </div>

                {/* Columna para los contenedores de tarjetas */}
                <div className="col-md-9">
                    <CardsContainer />
                </div>
            </div>
            <div className="row">
                <div className="col">
                    <Sidebar/>
                </div>
            </div>
        </div>
    )

}