import React from 'react'
import Badge from 'react-bootstrap/Badge'

const mainBottomItems = [{
  id: 201,
  imgUrl: "https://images.unsplash.com/photo-1511196044526-5cb3bcb7071b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=464&q=80",
  description: 'Blue dark Jeans',
  price: '10.00',
  size: 'Size: 32-40'
},
{
  id: 202,
  imgUrl: "https://images.unsplash.com/photo-1511105612320-2e62a04dd044?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=465&q=80",
  description: 'Blue Jeans',
  price: '50.00',
  size: 'Size: M,L,XL'
},
{
  id: 203,
  imgUrl: "https://images.unsplash.com/photo-1511105043137-7e66f28270e3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=464&q=80",
  description: 'Light Blue Jeans',
  price: '15.00',
  size: 'Size: 32-40'
},
{
  id: 204,
  imgUrl: "https://images.unsplash.com/photo-1535530705774-695729778c55?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=387&q=80",
  description: 'Formal Pants',
  price: '12.00',
  size: 'Size: 32-40'
},
{
  id: 205,
  imgUrl: "https://images.unsplash.com/photo-1490551632573-78c6c247f5d3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=387&q=80",
  description: 'Formal Pants gray',
  price: '13.00',
  size: 'Size: 32-40'
},
{
  id: 206,
  imgUrl: "https://images.unsplash.com/photo-1492447166138-50c3889fccb1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=387&q=80",
  description: 'Black Jeans',
  price: '20.00',
  size: 'Size: 32-40'
},
{
  id: 207,
  imgUrl: "https://images.unsplash.com/photo-1582552938357-32b906df40cb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=435&q=80",
  description: 'Shaded Jeans',
  price: '10.00',
  size: 'Size: 32-40'
},
{
  id: 208,
  imgUrl: "https://images.unsplash.com/photo-1555689502-c4b22d76c56f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=387&q=80",
  description: 'Blue Shade Jeans',
  price: '18.00',
  size: 'Size: 32-40'
},
{
  id: 209,
  imgUrl: "https://plus.unsplash.com/premium_photo-1673977134363-c86a9d5dcafa?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=388&q=80",
  description: 'Jeans Stretchible',
  price: '10.00',
  size: 'Size: 32-40'
},
{
  id: 210,
  imgUrl: "https://images.unsplash.com/photo-1560454320-fe361c9ec3fa?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=327&q=80",
  description: 'Dual Shade Jeans',
  price: '16.00',
  size: 'Size: 32-40'
}]
function BottomWear(props) {
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
            }}>5</p></Badge></span>
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
        }}><div style={{
            display: 'flex',
            flexWrap: 'wrap',
            margin: '15px'
        }}>
          {mainBottomItems.map((item=>{
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
          }))}
          </div></div>
    </>
  )
}

export default BottomWear