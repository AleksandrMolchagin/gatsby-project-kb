const path = require('path')

const pathPrefix = process.env.KB_BASE_PATH || '/'

module.exports = {
  pathPrefix,
  siteMetadata: {
    title: `Aleksandr Molchagin`,
    description: `Public knowledge base by Aleksandr Molchagin`,
    author: `@AleksandrMolchagin`,
  },
  plugins: [
    {
      resolve: 'gatsby-theme-kb',
      options: {
        contentPath: path.resolve(__dirname, 'content'),
        wikiLinkLabelTemplate: '[[{{ title }}]]',
        getPluginMdx(defaultPluginMdx) {
          defaultPluginMdx.options.gatsbyRemarkPlugins.push({
            resolve: 'gatsby-remark-prismjs',
            options: {
              noInlineHighlight: true,
            },
          })
          return defaultPluginMdx
        },
      },
    },
    'gatsby-plugin-no-sourcemaps',
  ],
}
