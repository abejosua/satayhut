import React from 'react'
import { Container, Card, CardText, CardBody, CardTitle, CardSubtitle } from 'reactstrap'
import Link from 'gatsby-link'
import graphql from 'graphql'

import Hero from '../components/hero.js'


const HomePageTemplate = ({ items }) =>{
  return (
    <div className="homepage">
      <Hero items={items}></Hero>
      <div>
        <Container>
          <h2>Upcoming Events</h2>
          <Card>
            <CardBody>
              <h4>Cottonwood Festival, May 5-6 2018</h4>
              <p>lorem ipsum dolor</p>
            </CardBody>
          </Card>
          <br/>
          <Card>
            <CardBody>
              <h4>Cottonwood Festival, May 5-6 2018</h4>
              <p>lorem ipsum dolor</p>
            </CardBody>
          </Card>
        </Container>
      </div>
      <div className="menu">
        <Container>
          <h2>Our Kebabs</h2>
          <div className="menu-item">
            <h4>Original Chicken Kebab</h4>
            <p>$9</p>
            <p>Peanut sauce description</p>
          </div>
          <div className="menu-item">
            <h4>Fire Chicken Kebab</h4>
            <p>$9</p>
            <p>Peanut sauce description</p>
          </div>
          <div className="menu-item">
            <h4>Beef Kebab</h4>
            <p>$9</p>
            <p>Peanut sauce description</p>
          </div>
          <div className="menu-item">
            <h4>Pork Kebab</h4>
            <p>$9</p>
            <p>Peanut sauce description</p>
          </div>
          <div className="menu-item">
            <h4>Shrimp Kebab</h4>
            <p>$9</p>
            <p>Peanut sauce description</p>
          </div>
        </Container>
      </div>
    </div>
  );
}

export default ({ data }) => {
  const { frontmatter } = data.markdownRemark
  return (
    <HomePageTemplate
      items={frontmatter.hero.items}
    />
  );
};

export const homePageQuery = graphql`
  query HomePage($path: String!) {
    markdownRemark(frontmatter: { path: { eq: $path } }) {
      frontmatter {
        path
        hero {
          items {
            title
            description
            image
          }
        }
      }
    }
  }
`
