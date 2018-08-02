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
      link={[
        {rel:"apple-touch-icon", sizes: "180x180", href: "/apple-touch-icon.png"},
        { rel: "icon", type: "image/png", sizes: "192x192", href: "/android-icon-192x192.png"},
        { rel: "icon", type: "image/png", sizes: "96x96", href: "/favicon-96x96.png"},
        {rel:"icon", type: "image/png", sizes:"32x32", href:"/favicon-32x32.png"},
        {rel:"icon", type:"image/png", sizes:"16x16", href:"/favicon-16x16.png"},
        {rel:"manifest", href:"/site.webmanifest"},
        {rel:"mask-icon", href:"/safari-pinned-tab.svg", color:"#46464f"},
        {rel:"shortcut icon", href: "/favicon-16x16.png", type: "image/x-icon"},
        {rel:"icon", href: "/favicon-16x16.png", type: "image/x-icon" }
      ]}
    />
    {children()}
  </div>
)

TemplateWrapper.propTypes = {
  children: PropTypes.func,
}

export default TemplateWrapper
