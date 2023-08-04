import './home.css'
import Cards from '../../components/cards/cards'
import Filters from "../../components/filters/filters"

export default function Home() {
    return (
        <div> 
            <Filters/>
            <Cards/>
        </div>
    )

}