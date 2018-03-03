import React from 'react'
import { Container, Row, Col } from 'reactstrap'
import Link from 'gatsby-link'

const Navbar = ({ title }) => {
  return (
    <div className='navbar navbar-expand-lg'>
      <Container>
        <Link to='/' className='navbar-brand'>{title}</Link>
        <ul className='nav navbar-nav'>
          <li className='nav-item'>
            <Link to='/about' className='nav-link'>About</Link>
          </li>
        </ul>
      </Container>
    </div>
  )
}

export default Navbar
