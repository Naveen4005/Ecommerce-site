import React from 'react'

function Cart({cartItems}) {
  return (
    <div>
      <div style={{
        fontSize: '100px',
        fontWeight: '900'
      }}><b>Cart Items</b></div>

      {cartItems.length === 0 && (<div>No Items added</div>)}

      <div style={{
        position: 'absolute',
        width: '800px',
        height: '500px',
        top: '20%',
        bottom: '20%',
        left: '30%',
        right: '30%',
        backgroundColor: 'white',
        border: '2px solid black',
        borderRadius: '40px',
        padding: '20px',
        display: 'flex',
        flexDirection: 'column'
      }}>
        {cartItems.map((item=>{
          return(
            <div key={item.id} style={{
              display: 'flex',
              color: 'black'
            }}>
              <img src={item.imgUrl} alt='image' style={{
                width: '100px',
                height: '130px',
                top: '50px',
                margin: '15px'
              }}/>
              <div style={{
                margin: '15px'
              }}>
                  <h2>{item.description}</h2>
                  <p>{item.size}</p>
              </div>
              <h5 style={{
                margin: '15px',
                left: '-250px'
              }}>$ {item.price}</h5>
            </div>
          )
        }))}
      </div>
    </div>
  )
}
export default Cart