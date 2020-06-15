/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.org/docs/gatsby-config/
 */

;(module.exports = {
  /* Your site config here */
  plugins: []
}),
  {
    resolve: `gatsby-plugin-prefetch-google-fonts`,
    options: {
      fonts: [
        {
          family: `Mirza`,
          variants: [`400`]
        },
        {
          family: `Roboto`,
          variants: [`300`, `300i`, `400`, `400i`, `500`, `800`]
        }
      ]
    }
  },
  {
    resolve: 'gatsby-source-graphql',
    options: {
      typeName: 'Fauna',
      fieldName: 'fauna',
      url: 'https://graphql.fauna.com/graphql',
      headers: {
        Authorization: 'Bearer <FAUNA_KEY>'
      }
    }
  }
