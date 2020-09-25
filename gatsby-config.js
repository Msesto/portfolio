/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.org/docs/gatsby-config/
 */

module.exports = {
  /* Your site config here */
  plugins: [
    {
      resolve: `gatsby-transformer-sharp`,
      options: {
      },
    },
    {
      resolve: `gatsby-plugin-s3`,
      options: {
        bucketName: "mesg-portfolio",
      },
    },
    {
      resolve: `gatsby-plugin-sharp`,
      options: {
      },
    },
    {
      resolve: `gatsby-plugin-postcss`,
      options: {
        // Accepts all options defined by `gatsby-plugin-postcss` plugin.
      },
    },
    {
      resolve: `gatsby-plugin-emotion`,
      options: {
        // Accepts all options defined by `babel-plugin-emotion` plugin.
      },
    },
    {
      resolve: `gatsby-plugin-react-helmet`,
      options: {

      },
    },
    {
      resolve: `gatsby-plugin-mdx`,
      options: {
        defaultLayouts: {
          default: require.resolve('./src/components/layout.js')
        },
        gatsbyRemarkPlugins: ['gatsby-remark-images'],
        plugins: ['gatsby-remark-images'],
      }
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: "posts",
        path: "posts",
      }
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: "images",
        path: "images",
      }
    },
  ],
}
