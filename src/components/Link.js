// use to all components for i18n

import React from 'react'
import { Link } from 'gatsby'
import { getCurrentLangKey, getLangs, getUrlForLang } from 'ptz-i18n'
import { Location } from '@reach/router'

// eslint-disable-next-line react/require-default-props, react/prop-types
export default ({ to, ...props }) => {
  return (
    <Location>
      {({ location }) => {
        const url = location.pathname
        const langKey = getCurrentLangKey(['en', 'zh'], 'en', url)
        const linkPrefix = langKey === 'en' ? '' : '/' + langKey

        // add i18n prefix to link url
        return <Link to={linkPrefix + to} {...props} />
      }}
    </Location>
  )
}
