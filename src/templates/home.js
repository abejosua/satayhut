import React from 'react'
import { Container, Card, CardText, CardBody, CardTitle, CardSubtitle } from 'reactstrap'
import Link from 'gatsby-link'
import graphql from 'graphql'

import Hero from '../components/hero.js'


const HomeTemplate = ({ data }) => (
  <div>
    <Hero></Hero>
  </div>

)

export default HomeTemplate
