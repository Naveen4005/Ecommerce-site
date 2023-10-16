import React from 'react'
import Badge from 'react-bootstrap/Badge'
import 'bootstrap/dist/css/bootstrap.css'
// import { Dropdown } from 'react-bootstrap/Dropdown'
import { NavLink, Outlet } from 'react-router-dom'

function Home1(props, {size}) {
  return (
    <div>
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
            }}>{size}</p></Badge></span>
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
          width: '100vw',
          height: '40px',
          backgroundColor: '#162030',
          color: 'white',
          display: 'flex',
          justifyContent: 'space-evenly',
          alignItems: 'center',
          listStyle: 'none'
        }}>
            <p style={{
              marginTop: '14px'
            }}>Category :</p>
            <NavLink to='topwear' style={{
              textDecoration: 'none',
              color: 'white'
            }}>Top Wear</NavLink>
            <NavLink to='bottomwear' style={{
              textDecoration: 'none',
              color: 'white'
            }}>Bottom Wear</NavLink>
            <NavLink to='footwear' style={{
              textDecoration: 'none',
              color: 'white'
            }}>Foot Wear</NavLink>
            <NavLink to='accessories' style={{
              textDecoration: 'none',
              color: 'white'
            }}>Accessories</NavLink>
            <NavLink to='luggage' style={{
              textDecoration: 'none',
              color: 'white'
            }}>Luggage Items</NavLink>
            <NavLink to='summer' style={{
              textDecoration: 'none',
              color: 'white'
            }}>Summer Special</NavLink>
          <Outlet />
        </div>
        <div>
              <img src="https://www.mbaazar.in/wp-content/uploads/2020/10/Blog-1.jpg" alt="image" style={{
                height: '100vh',
                width: '98vw',
                top: '50px',
                left: '0',
                right: '0',
                padding: '10px',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center'
            }}/>
              <img src="https://assetscdn1.paytm.com/images/catalog/view_item/787363/1617369550601.jpg?imwidth=1600&impolicy=hq" alt="image" style={{
                height: '100vh',
                width: '98vw',
                left: '0',
                padding: '10px',
                right: '0',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center'
            }}/>
            <div style={{
              display: 'flex'
            }}>
            <img src="https://img.freepik.com/free-photo/big-sale-discounts-products_23-2150336701.jpg?w=996&t=st=1683452421~exp=1683453021~hmac=e3cd741e7d47acdcb80ed623de7b95bd1a2cd23d25c25e62c352250efb3e9694" alt="image" style={{
                height: '90vh',
                left: '0',
                padding: '10px',
                right: '0',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center'
            }}/>
            <img src="https://creativemachine.co/wp-content/uploads/2020/03/ecommerce_men_s_clothing_banner_template_13_1080x1350.jpg" alt="image" style={{
                height: '90vh',
                left: '0',
                padding: '10px',
                right: '0',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center'
            }}/>
            </div>
            <div style={{
              display: 'flex',
              justifyContent: 'space-around',
              padding: '50px 20px',
              backgroundColor: '#1d2b42',
              color: 'white'
            }}>
              <p><b>Mail us :</b>The Boys Clothing Private Limited,
                                <br/> Buildings Alyssa, Begonia &
                                <br/> Clove Embassy Tech Village,
                                <br/> Outer Ring Road, Devarabeesanahalli Village,
                                <br/> Bengaluru, 560103,
                                <br/> Karnataka, India</p>
              <p><b>Registered office :</b>The Boys Clothing Private Limited,
                                <br/>Buildings Alyssa, Begonia &
                                <br/>Clove Embassy Tech Village,
                                <br/>Outer Ring Road, Devarabeesanahalli Village,
                                <br/>Bengaluru, 560103,
                                <br/>Karnataka, India
                                <br/>Telephone : <a href="#" style={{
                                  textDecoration: 'none',
                                  color: 'white'
                                }}>9987654321</a></p>

    </div>
    </div>
    </div>
  )
}

export default Home1