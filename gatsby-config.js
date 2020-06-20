module.exports = {
  siteMetadata: {
    title: 'Abstract - Creative Agency Personal Portfolio Template',
    description:
      'Abstract is a beautiful template built using React and Gatsby for creative agency or personal projects',
  },
  pathPrefix: '/',
  plugins: [
    {
      resolve: `gatsby-source-buttercms`,
      options: {
        authToken: `943f5908b4f7eaaecea4e0c7f655dc898df8ee99`,
        // Optional. Returns values for the supplied content field keys.
        contentFields: {
          keys: [`test`],
          // Optional. Set to 1 to enable test mode for viewing draft content.
          test: 0,
        },
        // Optional. Array of page types.
        pageTypes: [`page_type_key`],
        // Optional array of locales (if configured in your account)
        locales: [`en`, `es`, `fr`],
        preview: 1 // Return draft content
      }
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        path: `${__dirname}/content/images/`,
        name: 'images',
      },
    },
    {
      resolve: 'gatsby-transformer-remark',
      options: {
        plugins: [
          {
            resolve: 'gatsby-remark-images',
          },
          {
            resolve: 'gatsby-remark-responsive-iframe',
          },
          'gatsby-remark-prismjs',
          'gatsby-remark-copy-linked-files',
          'gatsby-remark-smartypants',
        ],
      },
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        path: `${__dirname}/content/portfolio/`,
        name: 'portfolio',
      },
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        path: `${__dirname}/content/testimonials/`,
        name: 'testimonials',
      },
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        path: `${__dirname}/content/team/`,
        name: 'team',
      },
    },
    {
      resolve: `gatsby-plugin-google-fonts`,
      options: {
        fonts: [
          `Teko`,
          `Poppins\:300,400,500,600,700`
        ],
        display: 'swap'
      }
    },
    {
      resolve: `gatsby-plugin-styled-components`,
      options: {
        minify: false,
        transpileTemplateLiterals: false,
        pure: false,
        ssr: true,
      } 
    },
   
      'gatsby-plugin-react-helmet',
      'gatsby-plugin-sass',
      'gatsby-plugin-sharp',
      'gatsby-transformer-sharp',
    ],
  }