import React from 'react'
import { NavLink } from 'react-router-dom'

function Navbar(props) {
    
  return (
    <div style={{
        width: '100vw',
        height: '50px',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        backgroundColor: '#7de5ff',
        color: 'black'
    }}>
        <h1 style={{
            fontFamily: 'Russo One',
            cursor: 'pointer',
            margin: '10px',
            color: 'black'
        }}>The BOYS</h1>
        
        <div style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center'
        }}>
            <NavLink to="home" style={{
                margin: '0 10px',
                textDecoration: 'none',
                color: 'black'
            }}>Home</NavLink>
            <NavLink to="products" style={{
                margin: '0 10px',
                textDecoration: 'none',
                color: 'black'
            }}>Products</NavLink>
            <NavLink to="about" style={{
                margin: '0 10px',
                textDecoration: 'none',
                color: 'black'
            }}>About Us</NavLink>
        </div>
        <ul style={{
            margin: '0',
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            listStyle: 'none'
        }}>
            <li style={{
                marginRight: '20px',
                cursor: 'pointer',
                textAlign: 'center'
            }} onClick={()=>props.setModal(true)}><NavLink to='register' style={{
                textDecoration: 'none',
                color: 'black'
            }}>Register</NavLink></li>
            <li style={{
                marginRight: '20px',
                cursor: 'pointer'
            }} onClick={()=>props.setLogin(true)}><NavLink to='login' style={{
                textDecoration: 'none',
                color: 'black'
            }}>Login</NavLink></li>
        </ul>
    </div>
  )
}

export default Navbar