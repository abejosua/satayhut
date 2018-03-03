import React from 'react'
import { Container, Card, CardText, CardBody, CardTitle, CardSubtitle } from 'reactstrap'
import Link from 'gatsby-link'
import graphql from 'graphql'

import Hero from '../components/hero.js'


const IndexPage = ({ data }) => (
  <div>
    <Hero></Hero>
    {/* <Container>
      {data.allMarkdownRemark.edges.filter(post => post.node.frontmatter.contentType === 'blog').map(({ node: post }) => (
        <Card style={{marginBottom: 10}} key={post.id}>
          <CardBody>
            <CardTitle><Link to={post.frontmatter.path}>{post.frontmatter.title}</Link></CardTitle>
            <CardSubtitle style={{marginBottom: 10}}>{post.frontmatter.date}</CardSubtitle>
            <CardText>{post.excerpt}</CardText>
          </CardBody>
        </Card>
      ))}
    </Container> */}
  </div>

)

export default IndexPage

export const pageQuery = graphql`
  query IndexQuery {
    allMarkdownRemark(sort: { order: DESC, fields: [frontmatter___date] }) {
      edges {
        node {
          excerpt(pruneLength: 400)
          id
          frontmatter {
            title
            contentType
            date(formatString: "MMMM DD, YYYY")
            path
          }
        }
      }
    }
  }
`
