import React from 'react'
import { addLocaleData } from 'react-intl'
import en from 'react-intl/locale-data/en'
import Layout from './layout'

import messages from '../data/messages/en'
import 'intl/locale-data/jsonp/en'

addLocaleData(en)

export default (props) => <Layout {...props} i18nMessages={messages} />
