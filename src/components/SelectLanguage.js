import React from 'react'
import PropTypes from 'prop-types'
import Link from 'gatsby-link'
import { FormattedMessage } from 'react-intl'

// eslint-disable-next-line react/require-default-props, react/prop-types
const SelectLanguage = ({ langs }) => {
  console.log(langs)
  const links = langs.map((lang) => (
    <Link to={lang.link} key={lang.langKey}>
      <li selected={lang.selected}>
        <FormattedMessage id={'menu.selectLanguage.' + lang.langKey} />
      </li>
    </Link>
  ))

  return (
    <ul>
      <li>
        <FormattedMessage id="menu.selectLanguage" />
        <ul>{links}</ul>
      </li>
    </ul>
  )
}

export default SelectLanguage
