import React from 'react';

function Header() {
  return (
    <header style={headerStyle}>
      <h3>PHONE DIRECTORY</h3>
    </header>
  )
}

const headerStyle = {
  background: '#000',
  color: '#fff',
  textAlign: 'center',
  padding: '10px',
  marginBottom:'20px'
}

const linkStyle = {
  color: '#fff',
  textDecoration: 'none'
}

export default Header;