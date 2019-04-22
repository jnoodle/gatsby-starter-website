import React from 'react'
import { Link, graphql } from 'gatsby'

import Layout from '../../layouts/layout.zh'
import SEO from '../../components/SEO'

// eslint-disable-next-line react/require-default-props, react/prop-types
const IndexPage = ({ data }) => (
  <Layout>
    <SEO title="博客" lang="zh" />
    <h1>博客</h1>
    <ul>
      {data.allMarkdownRemark.edges.map(({ node }) => (
        <li key={node.id}>
          <h4>{node.frontmatter.title}</h4>
          <small>{node.frontmatter.date}</small>
          <p>{node.excerpt}</p>
          <Link to={node.fields.slug}>more</Link>
        </li>
      ))}
    </ul>
  </Layout>
)

export default IndexPage

export const query = graphql`
  query {
    allMarkdownRemark(filter: { fields: { langKey: { eq: "zh" } } }, sort: { fields: [frontmatter___date], order: DESC }) {
      totalCount
      edges {
        node {
          id
          frontmatter {
            title
            date(formatString: "DD MMMM, YYYY")
          }
          fields {
            slug
          }
          excerpt
          timeToRead
          html
        }
      }
    }
  }
`
