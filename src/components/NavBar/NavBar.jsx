import CartWidget from "../CartWidget/CartWidget"
import './NavBar.css'
import { NavLink, Link } from "react-router-dom"

const NavBar = () => {

    return (
        <header>
            <Link to={"/"}>
                <h2>21 Store</h2>
            </Link>

            <nav>
                <ul>
                    <li>
                        <NavLink to={"/categoria/2"}> GPU </NavLink>
                    </li>

                    <li>
                        <NavLink to={"/categoria/3"}> CPU</NavLink>
                    </li>
                    
                    <li>
                        <NavLink to={"/categoria/4"}> RAM </NavLink>
                    </li>
                </ul>
            </nav>

            <CartWidget />

        </header>
    )
}

export default NavBar