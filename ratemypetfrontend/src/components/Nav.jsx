// import { Link } from "react-router-dom";

// const Nav = () => {

//     return (
//         <nav className="nav-bar">
//             <h3>RateMyPet</h3>
//             <Link to='/dashboard'>Dashboard</Link>
//             <Link to='/ratedpets'>To The Pets</Link>
//             <Link to='/userprofile'>User Profile</Link>
//             <Link to='logout'>Log Out</Link>
//         </nav>
//     )
// }

// export default Nav

import { Link } from 'react-router-dom'

const Nav = ({ authenticated, user, handleLogOut }) => {
  let authenticatedOptions
  if (user) {
    authenticatedOptions = (
      <nav className='nav-bar'>
        <h3>Welcome {user.username}!</h3>
        <Link to="/dashboard">Dashboard</Link>
		<Link to="/userprofile">My Profile</Link>
		<Link to="/pets">Show Me The Pets!</Link>
        <Link onClick={handleLogOut} to="/">Sign Out</Link>
      </nav>
    )
  }

  const publicOptions = (
    <nav className='nav-bar'>
      <Link to="/">Home</Link>
      <Link to="/register">Register</Link>
      <Link to="/signin">Sign In</Link>
    </nav>
  )


  return (
    <header>
      <Link to="/">
        <div className="logo-wrapper" alt="logo">
          {/* <img
            className="logo"
            alt='logo'
            src="https://i.imgur.com/UuiW73M.png"
          /> */}
        </div>
      </Link>
      {authenticated && user ? authenticatedOptions : publicOptions}
    </header>
  )
}

export default Nav