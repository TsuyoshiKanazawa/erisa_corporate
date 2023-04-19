/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.com/docs/reference/config-files/gatsby-config/
 */

/**
 * @type {import('gatsby').GatsbyConfig}
 */

const path = require('path');

require('dotenv').config({
  path: `.env.${process.env.NODE_ENV}`
});

module.exports = {
  plugins: [
    `gatsby-plugin-sass`,
    `gatsby-transformer-remark`, 
    `gatsby-plugin-image`,
    `gatsby-plugin-netlify`,
    `@netlify/plugin-gatsby`,
    `gatsby-plugin-typescript`,
    {
      resolve: `gatsby-source-microcms`,
      options: {
        apiKey: `4olgSiK40Grms4KjzEQShSPx9LROyCFPNTB8`,
        serviceId: `iaxlerntfh`,
        apis: [
          {
            endpoint: `information`,
          },
        ],
      },
    },
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [`gatsby-remark-responsive-iframe`],
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#663399`,
        // This will impact how browsers show your PWA/website
        // https://css-tricks.com/meta-theme-color-and-trickery/
        // theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/logoColor.svg`, // This path is relative to the root of the site.
      },
    },
  ],
}
