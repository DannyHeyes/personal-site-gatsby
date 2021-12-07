/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.com/docs/gatsby-config/
 */

module.exports = {
  siteMetadata: {
    title: "Danny Heyes | Frontend Developer",
    description: "Portfolio site of Danny Heyes, a Frontend Developer on the look out for exciting new opportunities.",
    author: "Danny Heyes"
  },
  plugins: [
    'gatsby-plugin-smoothscroll',
    {
      resolve: 'gatsby-plugin-google-fonts',
      options: {
        fonts: [
          'Ibarra Real Nova',
          'Public Sans'
        ],
        display: 'swap'
      }
    },
  ],
}
