import React from 'react'
import { Link } from 'gatsby'

import Layout from '../../layouts/layout.en'
import SEO from '../../components/SEO'

const IndexPage = () => (
  <Layout>
    <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} lang="en" />
    <h1>技术</h1>
  </Layout>
)

export default IndexPage
