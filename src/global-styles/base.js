/**
 * Global Base Styles
 */

import { css } from 'styled-components'
import media from './media'

const BaseStyle = css`
  html {
    box-sizing: border-box;
    overflow-y: auto;
    -ms-text-size-adjust: 100%;
    -webkit-text-size-adjust: 100%;
  }

  * {
    box-sizing: inherit;
  }
  *:before {
    box-sizing: inherit;
  }
  *:after {
    box-sizing: inherit;
  }

  body {
    font-family: georgia, serif;
    font-size: 14px;
    line-height: 1.6;
    font-weight: normal;
    word-wrap: break-word;
    font-kerning: normal;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }
`
export default BaseStyle
