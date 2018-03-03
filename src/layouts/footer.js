import React from 'react'
import { Container, Row, Col } from 'reactstrap'
import Link from 'gatsby-link'

const Footer = ({ tagline }) => {
  return (
    <footer>
      <Container>
        <Row>
          <Col>
            <h5>Satay Hut</h5>
            <p>Plano, Texas and surrounding areas</p>
            <p>For catering call 903-272-4591</p>
            <p>For orders call 903-272-0956</p>
          </Col>
          <Col>
            <p className="text-muted">
              <small>© 2018 Satay Hut Inc.</small>
            </p>
          </Col>
        </Row>

      </Container>
    </footer>
  )
}

export default Footer
