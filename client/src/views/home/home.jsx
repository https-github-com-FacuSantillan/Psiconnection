import './home.css'
import Cards from '../../components/cards/Card'
import Filters from "../../components/filters/filters"
import Orders from "../../components/orders/orders"

export default function Home() {
    return (
        <div> 
            <Filters/>
            <Cards/>
        </div>
    )

}