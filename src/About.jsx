import React from 'react'

function About() {
  return (
    <div style={{
        height: 'calc(100vh - 50px)',
        width: '100vw',
        position: 'absolute',
        top: '50px',
        backgroundColor: 'white'
    }}><div style={{
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'space-around',
      padding: '50px 20px',
      backgroundColor: '#1d2b42',
      color: 'white',
      justifyContent: 'center',
      alignItems: 'center'
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

  </div></div>
  )
}

export default About