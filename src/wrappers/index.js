import React from 'react'

import { MDXProvider } from '@mdx-js/react'
import { preToCodeBlock } from 'mdx-utils'

import Code from '../components/Code'
import { ThemeProvider } from '../context/ThemeContext'

const components = {
  pre: preProps => {
    const props = preToCodeBlock(preProps)
    // if there's a codeString and some props, we passed the test
    if (props) {
      return <Code {...props} />
    }
    // it's possible to have a pre without a code in it
    return <pre {...preProps} />
  },
}

export const wrapRootElement = ({ element }) => (
  <ThemeProvider>
    <MDXProvider components={components}>
      {element}
    </MDXProvider>
  </ThemeProvider>
)

