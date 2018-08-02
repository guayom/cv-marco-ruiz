import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'

import './index.css'

const TemplateWrapper = ({ children }) => (
  <div>
    <Helmet
      title="Eduardo Mena"
      meta={[
        { name: 'description', content: 'Eduardo Mena professional profile' },
        { name: "msapplication-TileColor", content: "#46464f" },
        { name: "theme-color", content: "#ffffff" }
      ]}
    />
    {children()}
  </div>
)

TemplateWrapper.propTypes = {
  children: PropTypes.func,
}

export default TemplateWrapper
