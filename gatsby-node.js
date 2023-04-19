const path = require("path")
const { paginate } = require('gatsby-awesome-pagination')

exports.createPages = async ({ graphql, actions}) => {
    const { createPage } = actions

    const result = await graphql(
        `
      {
        allMicrocmsInformation(skip: 0, limit: 10000) {
            totalCount
            edges {
                node {
                bodyText
                date(formatString: "YYYY/MM/DD")
                }
            }
        }
      }
    `
    )

    if (result.errors) {
        throw result.errors;
    }

    const posts = result.data.allMicrocmsInformation.edges

    paginate({
        createPage,
        items: posts,
        itemsPerPage: 10,
        component: path.resolve('./src/templates/information.js'),
        pathPrefix: ({ pageNumber }) => (pageNumber === 0 ? "/information" : "/information/page"),
    })

}