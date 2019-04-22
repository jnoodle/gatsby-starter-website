import React from 'react'
import styled from 'styled-components'
import { FormattedMessage } from 'react-intl'

import Link from './Link'

const Wrapper = styled.footer`
  padding: 10px 20px;
  border-top: 1px solid #ccc;
`
const Container = styled.div`
  font-size: 12px;
`

const Logo = styled.p``

// eslint-disable-next-line react/require-default-props, react/prop-types
export default ({ siteTitle }) => (
  <Wrapper>
    <Container>
      <Logo>
        <Link to="/">{siteTitle}</Link>
      </Logo>
      <p>
        Copyright © 2019 All Rights Reserved.
        <Link to="/terms/">
          <FormattedMessage id="menu.terms" />
        </Link>{' '}
        |{' '}
        <Link to="/policy/">
          <FormattedMessage id="menu.policy" />
        </Link>
      </p>
    </Container>
  </Wrapper>
)
