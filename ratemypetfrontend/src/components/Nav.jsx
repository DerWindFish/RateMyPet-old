import { Link } from "react-router-dom";

const Nav = () => {

    return (
        <nav className="nav-bar">
            <h3>RateMyPet</h3>
            <Link to='/dashboard'>Dashboard</Link>
            <Link to='/ratedpets'>To The Pets</Link>
            <Link to='/userprofile'>User Profile</Link>
            <Link to='logout'>Log Out</Link>
        </nav>
    )
}

export default Nav