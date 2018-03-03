import React from 'react'
import { Container, Card, CardText, CardBody, CardTitle, CardSubtitle } from 'reactstrap'
import Link from 'gatsby-link'
import graphql from 'graphql'

import Hero from '../components/hero.js'


const HomePageTemplate = ({ items }) =>{
  return (
    <div>
      <Hero items={items}></Hero>
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
