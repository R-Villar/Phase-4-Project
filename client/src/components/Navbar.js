import { NavLink } from "react-router-dom"


function Navbar({currentUser}) {

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
            <NavLink to = "/NewToy">
                {currentUser? <p>New Toy</p>:null}
            </NavLink>
        </div>
    )
}

export default Navbar