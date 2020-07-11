const path = require("path")

const makeRequest = (graphql, request) =>
  new Promise((resolve, reject) => {
    resolve(
      graphql(request).then(result => {
        if (result.errors) {
          reject(result.errors)
        }
        return result
      })
    )
  })

exports.createPages = ({ actions, graphql }) => {
  const { createPage } = actions

  const getEcho = makeRequest(
    graphql,
    `
      {
        allStrapiEcho {
          edges {
            node {
              id
            }
          }
        }
        allStrapiArticle {
          edges {
            node {
              id
              echo {
                id
              }
            }
          }
        }
      }
    `
  ).then(result => {
    result.data.allStrapiEcho.edges.forEach(({ node }) => {
      createPage({
        path: `echos/${node.id}`,
        component: path.resolve("src/templates/echo.js"),
        context: {
          id: node.id,
        },
      })
    })
    result.data.allStrapiArticle.edges.forEach(({ node }) => {
      createPage({
        path: `echos/Echo_${node.echo.id}/${node.id}`,
        component: path.resolve("src/templates/article.js"),
        context: {
          id: node.id,
        },
      })
    })
  })
  return getEcho
}
