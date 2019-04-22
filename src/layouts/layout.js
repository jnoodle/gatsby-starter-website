/**
 * Layout component for all page
 */

import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'
import { StaticQuery, graphql } from 'gatsby'

// i18n
import { getCurrentLangKey, getLangs, getUrlForLang } from 'ptz-i18n'
import { IntlProvider } from 'react-intl'
import 'intl'

import Header from '../components/Header'
import Footer from '../components/Footer'
import GlobalStyle from '../global-styles'

// eslint-disable-next-line react/require-default-props, react/prop-types
const Layout = ({ children, i18nMessages }) => (
  <StaticQuery
    query={graphql`
      query SiteTitleQuery {
        site {
          siteMetadata {
            title
            languages {
              defaultLangKey
              langs
            }
          }
        }
      }
    `}
    render={(data) => {
      const windowGlobal = typeof window !== 'undefined' && window
      const url = windowGlobal.location.pathname
      const { langs, defaultLangKey } = data.site.siteMetadata.languages
      const langKey = getCurrentLangKey(langs, defaultLangKey, url)
      const homeLink = `/${langKey}`.replace(`/${defaultLangKey}/`, '/')
      const langsMenu = getLangs(langs, langKey, getUrlForLang(homeLink, url)).map((item) => ({
        ...item,
        link: item.link.replace(`/${defaultLangKey}/`, '/'),
      }))

      return (
        <IntlProvider locale={langKey} messages={i18nMessages}>
          <div>
            <GlobalStyle />
            <Header siteTitle={data.site.siteMetadata.title} langs={langsMenu} />
            <div>
              <main>{children}</main>
            </div>
            <Footer siteTitle={data.site.siteMetadata.title} />
          </div>
        </IntlProvider>
      )
    }}
  />
)

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
