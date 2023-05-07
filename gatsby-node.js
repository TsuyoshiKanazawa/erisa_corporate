const path = require("path")
const { paginate } = require('gatsby-awesome-pagination')


exports.createPages = async ({ graphql, actions}) => {
    const { createPage } = actions

    //information///////////////////////////////
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
    const postsPerPage = 10
    const numPages = Math.ceil(posts.length / postsPerPage)

    Array.from({ length: numPages }).forEach((_, i) => {
        createPage({
            path: i === 0 ? `/information` : `/information/page/${i + 1}`,
            component: path.resolve("./src/templates/information.js"),
            context: {
                limit: postsPerPage,
                skip: i * postsPerPage,
                numPages,
                currentPage: i + 1,
            },
        })
    })

    
    //information記事///////////////////////////////
    const information_detail = await graphql(
        `
      {
        allMicrocmsInformationDetail {
            edges {
                node {
                    slug
                }
            }
        }
      }
    `
    )

    information_detail.data.allMicrocmsInformationDetail.edges.forEach(({ node }) => { // 修正 
        createPage({
            path: `information/${node.slug}/`,
            component: path.resolve('./src/templates/informationDetail.js'),
            context: {
                slug: node.slug,
            },
        })
    }) 


    //product///////////////////////////////
    const product = await graphql(`
        query {
            allMicrocmsProduct {
                edges {
                    node {
                        slug
                    } 
                } 
            } 
        } 
    `)

    product.data.allMicrocmsProduct.edges.forEach(({ node }) => { // 修正 
        createPage({
            path: `product/${node.slug}/`, // 修正
            component: path.resolve('./src/templates/confirmation.js'),
            context: {
                slug: node.slug, // 修正
            },
        })
    }) 

}

