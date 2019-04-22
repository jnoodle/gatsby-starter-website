import React from 'react'
import { Link } from 'gatsby'

import Layout from '../layouts/layout.zh'
import SEO from '../components/SEO'

const IndexPage = () => (
  <Layout>
    <SEO title="首页" keywords={[`gatsby`, `application`, `react`]} lang="zh" />
    <h1>中文首页</h1>
    <Link to="/technology/">technology</Link>
  </Layout>
)

export default IndexPage
