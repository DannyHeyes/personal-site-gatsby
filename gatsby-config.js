/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.com/docs/gatsby-config/
 */

module.exports = {
  siteMetadata: {
    title: "Danny Heyes | Web Developer",
    description: "A front-end web develop for hire. Specialised in making sites to bring start-ups to the web.",
    author: "Danny Heyes"
  },
  plugins: [
    'gatsby-plugin-sass',
    {
      resolve: 'gatsby-plugin-google-fonts',
      options: {
        fonts: [
          'Poppins'
        ],
        display: 'swap'
      }
    },
  ],
}
