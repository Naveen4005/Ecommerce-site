import { useState, useEffect } from 'react'
import './App.css'
import Navbar from './Navbar'
import Mainbox from './Mainbox'
import { Routes, Route, useNavigate } from 'react-router-dom'
import Default from './Default'
import Home from './Home'
import Products from './Products'
import About from './About'
import NoMatch from './NoMatch'
import RegForm from './RegForm'
import Login from './Login'
import Home1 from './Home1'
import TopWear from './TopWear'
import BottomWear from './BottomWear'
import FootWear from './FootWear'
import Accessories from './Accessories'
import Luggage from './Luggage'
import Summer from './Summer'
import Cart from './Cart'


function App() {
  const [modal, setModal] = useState(false);
  const[login, setLogin] = useState(false);
  const[loggedIn, setLoggedIn] = useState(false);
  const[currentUser, setCurrentUser] = useState();
  
  function toggleModal(){
      setModal(!modal);
  }
  function toggleLogin(){
      setLogin(!login);
  }
  const navigate = useNavigate()
  useEffect(()=>{
      if(loggedIn == true){
          navigate('homepage')
      }
      else{
          navigate('/')
      }
  },[loggedIn])
  
  return (
    <div>
      <RegForm onClose={toggleModal} condition={modal}/>
      <Login onClose={toggleLogin} condition={login} fun={setLoggedIn} user={setCurrentUser} />
      <Navbar setModal={setModal} setLogin={setLogin}/>
      <Mainbox />
      <Routes>
            <Route path='/' element={<Default />} />
            <Route path='home' element={<Home />}/>
            <Route path='products' element={<Products />}/>
            <Route path='about' element={<About />}/>
            <Route path='*' element={<NoMatch />}/>
            <Route path='homepage' element={<Home1 fun={setLoggedIn} name={currentUser} />}>
                <Route path='bottomwear' element={<BottomWear fun={setLoggedIn} name={currentUser}/>}/>
                <Route path='topwear' element={<TopWear fun={setLoggedIn} name={currentUser} />}>
                    <Route path='cart' element={<Cart/>}/> 
                </Route>
                <Route path='accessories' element={<Accessories fun={setLoggedIn} name={currentUser}/>} />
                <Route path='footwear' element={<FootWear fun={setLoggedIn} name={currentUser}/>}/>
                <Route path='luggage' element={<Luggage fun={setLoggedIn} name={currentUser}/>}/>
                <Route path='summer' element={<Summer fun={setLoggedIn} name={currentUser}/>}/>
            </Route>
            <Route path='register' element={<RegForm />}/>
            <Route path='login' element={<Login />}/>
        </Routes>
    </div>
  )
}

export default App
