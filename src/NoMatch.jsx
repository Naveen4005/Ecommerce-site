import React from 'react'

function NoMatch() {
  return (
    <div style={{
        height: 'calc(100vh - 50px)',
        width: '100vw',
        position: 'absolute',
        top: '50px',
        backgroundColor: 'white',
        fontSize: '50px',
        fontWeight: '900',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center'
    }}>
        Wrong Path
    </div>
  )
}

export default NoMatch