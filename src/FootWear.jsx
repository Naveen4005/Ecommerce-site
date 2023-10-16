import React from 'react'
import Badge from 'react-bootstrap/Badge'

function FootWear(props) {
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
            height: 'calc(100vh - 50px)',
            width: '100vw',
            position: 'absolute',
            top: '50px',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            fontSize: '50px',
            fontWeight: '900',
            backgroundColor: 'white',
            color: 'black'
    }}>Foot Wear</div>
    </>
  )
}

export default FootWear