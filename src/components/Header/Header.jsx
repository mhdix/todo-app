import React from 'react'
import './Header.css'
import logo from '../../assets/logo.png'
const Header = ({todos}) => {
    return (
        <div className='header'>
            <div>
                <p>Your todo count : {todos.length}</p>
            </div>
            <div className='header-search'>
                <p>search your todo</p>
                <input type="text" placeholder='search ...' />
            </div>
            <div><img src={logo} alt="" /></div>
        </div>
    )
}

export default Header