import React from 'react'
import './RegForm.css'
import { useNavigate } from 'react-router-dom';

function RegForm(props) {
  if(props.condition){
    const navigate = useNavigate();
    function Navigate(){
        if(props.onClose){
            navigate(-1)
        }
    }
    return (
        <div id='Reg' style={{
            height: '100vh',
            width: '100vw',
            position: 'absolute',
            top: '0',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
            backgroundColor: '#bff2ff',
            opacity: '90%'
        }}>
            <span class="material-symbols-outlined" style={{
                position: 'absolute',
                top: '0',
                right: '0',
                padding: '8px',
                backgroundColor: 'red',
                borderRadius: '0 0 0 8px',
                cursor: 'pointer'
            }} onClick={()=>{
                props.onClose(),
                Navigate()
            }}>
                close
            </span>
            <p>Register Here</p>
            <input id='rName' type="text" placeholder='Username' style={{
                margin: '10px',
                padding: '10px',
                outline: 'none',
                border: 'none',
                borderBottom: '2px solid black',
                backgroundColor: '#bff2ff',
                opacity: '90%'
            }}/>
            <input id='rMail' type="email" placeholder='Usermail' style={{
                margin: '10px',
                padding: '10px',
                outline: 'none',
                border: 'none',
                borderBottom: '2px solid black',
                backgroundColor: '#bff2ff',
                opacity: '90%'
            }}/>
            <input id='rPass' type="password" placeholder='Create Password' style={{
                margin: '10px',
                padding: '10px',
                outline: 'none',
                border: 'none',
                borderBottom: '2px solid black',
                backgroundColor: '#bff2ff',
                opacity: '90%'
            }}/>
            <button style={{
                padding: '8px',
                cursor: 'pointer',
                borderRadius: '10px'
            }} onClick={()=>{
                let rName = document.getElementById('rName');
                let rMail = document.getElementById('rMail');
                let rPass = document.getElementById('rPass');
                let obj = {
                    name: rName.value,
                    email: rMail.value,
                    pass: rPass.value,
                    intocart: [{
                        id: 101,
                        imgUrl: "https://plus.unsplash.com/premium_photo-1671135590215-ded219822a44?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=473&q=80",
                        description: 'Sweat T-shirt',
                        price: '$10.00',
                        size: 'Size: M,L,XL',
                        cart: false
                      }]
                }
                localStorage.setItem(rMail.value, JSON.stringify(obj));
                rName.value = ""
                rMail.value = ""
                rPass.value = ""
                props.onClose();
                navigate('/')
            }}>Submit</button>
        </div>
      )
  }
}


export default RegForm