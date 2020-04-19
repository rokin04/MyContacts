import React from 'react'
import './sidebar.scss'

const sidebar = (props) => {

    return (
        <>
            <div className="sidenav">
                <a href="#about">About</a>
                <a href="#services">Services</a>
                <a href="#clients">Clients</a>
            </div>
        </>
    )
}

export default sidebar;