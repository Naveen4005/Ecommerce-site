import React, { useState } from 'react'
import Badge from 'react-bootstrap/Badge'
import './Hover.css'
import { Link,Routes,Route } from 'react-router-dom';
import Cart from './Cart';

const mainTopItems = [{
        id: 101,
        imgUrl: "https://plus.unsplash.com/premium_photo-1671135590215-ded219822a44?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=473&q=80",
        description: 'Sweat T-shirt',
        price: '10.00',
        size: 'Size: M,L,XL',
        cart: false
      },
      {
        id: 102,
        imgUrl: "https://images.unsplash.com/photo-1516431762806-5a41e2353ae4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=435&q=80",
        description: 'Full Length Blazer',
        price: '50.00',
        size: 'Size: M,L,XL',
        cart: false
      },
      {
        id: 103,
        imgUrl: "https://images.unsplash.com/photo-1602693808153-4c5c694afee1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=387&q=80",
        description: 'T-Shirts with Cap',
        price: '15.00',
        size: 'Size: M,L,XL',
        cart: false
      },
      {
        id: 104,
        imgUrl: "https://images.unsplash.com/photo-1580367108064-89c21f659c81?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=386&q=80",
        description: 'Full Sleeve T-Shirt',
        price: '12.00',
        size: 'Size: M,L,XL',
        cart: false
      },
      {
        id: 105,
        imgUrl: "https://images.unsplash.com/photo-1662145349402-f78c521eccb0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=384&q=80",
        description: 'V-neck T-shirt',
        price: '13.00',
        size: 'Size: M,L,XL',
        cart: false
      },
      {
        id: 106,
        imgUrl: "https://plus.unsplash.com/premium_photo-1661627681947-4431c8c97659?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
        description: 'Formal Shirt',
        price: '20.00',
        size: 'Size: M,L,XL',
        cart: false
      },
      {
        id: 107,
        imgUrl: "https://images.unsplash.com/photo-1496346236646-50e985b31ea4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=387&q=80",
        description: 'Round neck T-Shirt',
        price: '10.00',
        size: 'Size: M,L,XL',
        cart: false
      },
      {
        id: 108,
        imgUrl: "https://plus.unsplash.com/premium_photo-1675129779319-c143513b39a1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=387&q=80",
        description: 'Round neck Fullsleeve',
        price: '18.00',
        size: 'Size: M,L,XL',
        cart: false
      },
      {
        id: 109,
        imgUrl: "https://images.unsplash.com/photo-1502389614483-e475fc34407e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=387&q=80",
        description: 'Round neck halfsleeve',
        price: '10.00',
        size: 'Size: M,L,XL',
        cart: false
      },
      {
        id: 110,
        imgUrl: "https://images.unsplash.com/photo-1536766820879-059fec98ec0a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=387&q=80",
        description: 'Half sleeve shirt Printed',
        price: '16.00',
        size: 'Size: M,L,XL',
        cart: false
      }]
    localStorage.setItem('Topwears', JSON.stringify(mainTopItems));
    
function TopWear(props) {
const [cartItems, setCartItems] = useState([]);
const addProduct=(item)=>{
    setCartItems([...cartItems,item]);
}
  return (
    <>
    <div style={{
          height: '50px',
          width: '99vw',
          position: 'absolute',
          top: '0',
          left: '0',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          backgroundColor: 'aqua'
        }}>
          <p style={{
            fontFamily: 'Russo One',
            cursor: 'pointer',
            margin: '10px',
            color: 'black',
            fontSize: '30px'
        }}>The Boys</p>
          <div style={{
            padding: '3px 10px',
            backgroundColor: 'white',
            borderRadius: '40px',
            display: 'flex',
            alignItems: 'center'
          }}>
              <input type="text" placeholder='Search' size="30" style={{
                border: 'none',
                outline: 'none'
              }}/>
              <span class="material-symbols-outlined" style={{
                cursor: 'pointer'
              }}>
                search
              </span>
          </div>
          <div style={{
            display: 'flex',
            alignItems: 'center'
          }}>
            <Link to='cart'>
            <span className="material-symbols-outlined" style={{
              padding: '0 10px',
              cursor: 'pointer'
            }}>shopping_cart <Badge pill bg='danger' style={{
              height: '7px',
              width: '5px',
              position: 'relative',
              right: '50%',
              top: '-12px',
              padding: '7px 7px'
            }}><p style={{
              position: 'relative',
              fontSize: '10px',
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'flex-start',
              top: '-3px'
            }}>{cartItems.length}</p></Badge></span></Link>
            <p style={{
              padding: '15px',
              margin: '0',
              color: 'black'
            }}>welcome {props.name}</p>
            <p style={{
              padding: '15px',
              cursor: 'pointer',
              margin: '0',
              color: 'black'
            }} onClick={()=>{props.fun(false)}}>Logout</p>
          </div>
        </div>
        
    <div style={{
        height: 'auto',
        width: '100vw',
        position: 'absolute',
        top: '50px',
        display: 'flex',
        backgroundColor: 'lightgrey',
        color: 'black'
    }}>
      
      <div style={{
        display: 'flex',
        flexWrap: 'wrap',
        margin: '15px'
      }}>
        {mainTopItems.map(item=>{
          return(
            <div key={item.id} id='Item_list' style={{
              margin: '10px',
              padding: '13px',
              border: '2px solid white',
              borderRadius: '10px',
              backgroundColor: 'white',
              boxShadow: 'rgba(100, 100, 111, 0.2) 0px 7px 29px 0px'
            }}>
              <img src={item.imgUrl} alt="Image" style={{
                width: '200px',
                height: '250px'
              }}/>
              <p style={{
                margin: '0'
              }}><b>{item.description}</b></p>
              <p style={{
                margin: '0'
              }}>${item.price}</p>
              <p style={{
                margin: '0'
              }}>{item.size}</p>
              <div style={{
                display: 'flex',
                justifyContent: 'space-around',
                marginTop: '20px'
              }}>
              <button style={{
                padding: '5px',
                borderRadius: '5px',
                border: 'none'
              }} onClick={()=>addProduct(item)}>Add to cart</button>
              <button style={{
                padding: '5px',
                borderRadius: '5px',
                border: 'none'
              }}>Buy Now</button>
              </div>
            </div>
          )
        })}
      </div>
      </div>
      <Cart cartItems={cartItems}/>
      </>
  )
}

export default TopWear