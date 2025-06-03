

const govukEleventyPlugin = require('@x-govuk/govuk-eleventy-plugin')

module.exports = function(eleventyConfig) {
  // Register the plugin
  eleventyConfig.addPlugin(govukEleventyPlugin, {
    header: {
        logotype: {
          text: 'Delivery group governance'
        }
    },
    titleSuffix: 'Delivery group governance',
    icons: {mask: false, shortcut: false, touch: false},
    homeKey: 'Governance model',
    footer: {
        copyright: {
            text: '© Delivery group governance'
          }
    }
});

  // Pass through
  eleventyConfig.addPassthroughCopy('./docs/assets')

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
