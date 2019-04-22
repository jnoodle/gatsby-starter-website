import React from 'react'
import { Link } from 'gatsby'

import Layout from '../layouts/layout.en'
import SEO from '../components/SEO'

const IndexPage = () => (
  <Layout>
    <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} lang="en" />
    <h1>English Home</h1>
    <Link to="/technology/">technology</Link>
  </Layout>
)

export default IndexPage
