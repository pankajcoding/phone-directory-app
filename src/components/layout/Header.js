import React from 'react';
// import { Link } from 'react-router-dom';

function Header() {
  return (
    <header style={headerStyle}>
      <h1>PHONE DIRECTORY</h1>
 
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