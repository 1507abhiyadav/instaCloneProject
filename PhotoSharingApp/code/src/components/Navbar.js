import {Link} from "react-router-dom"
import '../styles/nav.css';


const Navbar = () =>{
    return <nav className="navbar">
        <Link className="link" to ="/login">Login</Link>
        <Link className="link" to ="/Register">Register</Link>
    </nav>;
}

export default Navbar;