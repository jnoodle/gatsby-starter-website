import React from 'react'
import { addLocaleData } from 'react-intl'
import zh from 'react-intl/locale-data/zh'
import Layout from './layout'

import messages from '../data/messages/zh'
import 'intl/locale-data/jsonp/zh'

addLocaleData(zh)

export default (props) => <Layout {...props} i18nMessages={messages} />
