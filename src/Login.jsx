import React from 'react'
import { useNavigate } from 'react-router-dom';

function Login(props) {
    const navigate = useNavigate();
    function Navigate(){
        if(props.onClose){
            navigate(-1)
        }
    }
  if(props.condition){
    return (
        <>
        <div id='Log' style={{
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
                    }
                }>
                    close
                </span>
                <p>Login Here</p>
            <input id='lMail' type="email" placeholder='Usermail' style={{
                    margin: '10px',
                    padding: '10px',
                    outline: 'none',
                    border: 'none',
                    borderBottom: '2px solid black',
                    backgroundColor: '#bff2ff',
                    opacity: '90%'
                }}/>
            <input id='lPass' type="password" placeholder='Password' style={{
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
                borderRadius: '10px',
                cursor: 'pointer'
            }} onClick={()=>{
                let lMail = document.getElementById('lMail');
                let lPass = document.getElementById('lPass');
                let email = lMail.value;
                let pass = lPass.value;
                lMail.value = ""
                lPass.value = ""
                

                if(localStorage.getItem(email) == null){
                    alert("This Email doesn't Exist")
                }
                else{
                    let obj = JSON.parse(localStorage.getItem(email))
                    if(pass == obj.pass){
                        props.user(obj.name)
                        props.fun(true)
                        props.onClose()
                    }
                    
                    else{
                        alert("Wrong Password")
                    }
                }
            }}>Login</button>
        </div>
        
        </>
      )
  }
}

export default Login