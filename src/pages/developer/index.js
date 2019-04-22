import React from 'react'
import { Link } from 'gatsby'

import Layout from '../../layouts/layout'
import SEO from '../../components/SEO'

const SecondPage = () => (
  <Layout>
    <SEO title="title" />
    <h1>title</h1>
    <Link to="/">Go back to the homepage</Link>
  </Layout>
)

export default SecondPage
