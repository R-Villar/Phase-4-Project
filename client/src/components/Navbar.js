import { NavLink } from "react-router-dom"


function Navbar() {

    return (
        <div>
            <NavLink to = "/home">
                Home
            </NavLink>
            <NavLink to = "/login">
                Login
            </NavLink>
            <NavLink to = "/signup">
                Signup
            </NavLink>
            <NavLink to = "/cart">
                Cart
            </NavLink>
        </div>
    )
}

export default Navbar