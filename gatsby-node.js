const path = require("path");

exports.createPages = ({ boundActionCreators, graphql }) => {
  const { createPage } = boundActionCreators;

  const mainTemplate = path.resolve(`src/templates/index.js`);

  return graphql(`
    {
      allMarkdownRemark{
        edges {
          node {
            frontmatter {
              path
            }
          }
        }
      }
    }
  `).then(result => {
    if (result.errors) {
      return Promise.reject(result.errors);
    }

    result.data.allMarkdownRemark.edges.forEach(({ node }) => {
      createPage({
        path: node.frontmatter.path,
        component: mainTemplate,
        context: {}, // additional data can be passed via context
      });
    });
  });
};