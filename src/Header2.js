import React from 'react'

// !Outra forma de aplicar o CSS inline no componente
const Header2 = ({title}) => {

  const headerStyle = {
    backgroundColor: 'royalblue',
      color: '#fff'
    
  }
  return (
    <header style={headerStyle}>
      <h1>G{ title}</h1>
    </header>
  )
}

export default Header2