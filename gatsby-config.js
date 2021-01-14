module.exports = {
  pathPrefix: 'gatsby-portfolio',
  siteMetadata: {
    title: 'gatsby-portfolio',
    siteUrl: 'https://aleksey-kuznetsov.github.io/gatsby-portfolio',
  },
  plugins: [
    'gatsby-plugin-sass',
    'gatsby-plugin-sharp',
    'gatsby-plugin-react-helmet',
    'gatsby-plugin-sitemap',
    {
      resolve: 'gatsby-plugin-manifest',
      options: {
        icon: 'src/images/icon.png',
      },
    },
    'gatsby-transformer-sharp',
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'images',
        path: './src/images/',
      },
      __key: 'images',
    },
  ],
};
