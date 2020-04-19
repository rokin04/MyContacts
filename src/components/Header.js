import React from 'react'
import './Header.scss'

const header = (props) => {
    return (
        <>
        <div className="header">
            <a href="#default" className="logo">MyContacts</a>
            <div className="header-right">
                <a className="active" href="#home">Home</a>
                <a href="#contact">Contact</a>
            </div>
        </div>
        </>
    )
}

export default header;