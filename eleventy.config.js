

const govukEleventyPlugin = require('@x-govuk/govuk-eleventy-plugin')

module.exports = function(eleventyConfig) {
  // Register the plugin
  eleventyConfig.addPlugin(govukEleventyPlugin, {
    header: {
        logotype: {
          text: 'Delivery Group Governance'
        }
    },
    titleSuffix: 'Delivery Group Governance',
    icons: {mask: false, shortcut: false, touch: false},
    homeKey: 'Governance model',
    footer: {
        copyright: {
            text: '© Delivery Group Governance'
          }
    }
});

  return {
    dataTemplateEngine: 'njk',
    htmlTemplateEngine: 'njk',
    markdownTemplateEngine: 'njk',
    pathPrefix: process.env.GITHUB_ACTIONS ? '/delivery-group-governance/' : '/',
    dir: {
      // The folder where all your content will live:
      input: 'docs',
      // Use layouts from the plugin
      includes: '_layouts'
    }
    
  }

  };
