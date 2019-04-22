import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { FormattedMessage } from 'react-intl'

import Link from './Link'
import SelectLanguage from './SelectLanguage'

const Wrapper = styled.header`
  padding: 10px 20px;
  border-bottom: 1px solid #ccc;
`
const Container = styled.div`
  display: flex;
  font-size: 12px;

  ul {
    margin: 0;
    padding: 0;
  }
  & > ul {
    display: flex;

    li {
      margin-left: 30px;
    }
  }
`

const Logo = styled.span``

// eslint-disable-next-line react/require-default-props, react/prop-types
const Header = ({ siteTitle, langs }) => {
  return (
    <Wrapper>
      <Container>
        <Logo>
          <Link to="/">{siteTitle}</Link>
        </Logo>
        <ul>
          <li>
            <Link to="/technology/">
              <FormattedMessage id="menu.technology" />
            </Link>
          </li>
          <li>
            <Link to="/about/">
              <FormattedMessage id="menu.about" />
            </Link>
            <ul>
              <li>
                <Link to="/about/">
                  <FormattedMessage id="menu.about.aboutus" />
                </Link>
              </li>
              <li>
                <Link to="/about/team">
                  <FormattedMessage id="menu.about.team" />
                </Link>
              </li>
              <li>
                <Link to="/about/join">
                  <FormattedMessage id="menu.about.join" />
                </Link>
              </li>
              <li>
                <Link to="/about/contact">
                  <FormattedMessage id="menu.about.contact" />
                </Link>
              </li>
            </ul>
          </li>
          <li>
            <Link to="/developer/">
              <FormattedMessage id="menu.developer" />
            </Link>
          </li>
          <li>
            <Link to="/media/">
              <FormattedMessage id="menu.media" />
            </Link>
            <ul>
              <li>
                <Link to="/media/">
                  <FormattedMessage id="menu.media.report" />
                </Link>
              </li>
              <li>
                <Link to="/media/blog">
                  <FormattedMessage id="menu.media.blog" />
                </Link>
              </li>
            </ul>
          </li>
          <li>
            <Link to="/community/">
              <FormattedMessage id="menu.community" />
            </Link>
          </li>
          <li>
            <FormattedMessage id="menu.utilities" />
            <ul>
              <li>
                <a href="#">
                  <FormattedMessage id="menu.utilities.confluxscan" />
                </a>
              </li>
              <li>
                <a href="#">
                  <FormattedMessage id="menu.utilities.wallet" />
                </a>
              </li>
            </ul>
          </li>
          <SelectLanguage langs={langs} />
        </ul>
      </Container>
    </Wrapper>
  )
}

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
