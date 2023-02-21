import React from 'react'
import { NavLink } from 'react-router-dom'
import { useAuthContext } from '../../hooks/useAuthContext'
import './navbar.scss'
import { useLogout } from "../../hooks/useLogout"

const Navbar = () => {

    const { logout } = useLogout()

    const handleClick = (e) => {
        e.preventDefault();
        logout();
    }

    const { user } = useAuthContext()

    const capitalize = (str) => {
        return str[0].toUpperCase() + str.slice(1);
    }


    return (
        <div className='navbar'>
            <div className="container nav">
                <div className="left"><NavLink to="/">MERN AUTH</NavLink></div>
                <div className="right">
                    {!user && (
                        <div className='login-signup'>
                            <NavLink to="/login">Login</NavLink>
                            <NavLink to="/signup">Signup</NavLink>
                        </div>
                    )}
                    {user && (
                        <div className="logout">
                            <span style={{ color: "#555" }}>Welcome {capitalize(user.firstname)}</span>
                            <button className='logout-button' style={{ marginLeft: '20px' }} onClick={handleClick}>Logout</button>
                        </div>
                    )}
                </div>
            </div>

        </div>
    )
}

export default Navbar
