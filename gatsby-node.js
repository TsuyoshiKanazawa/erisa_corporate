const path = require(`path`)
const { createFilePath } = require(`gatsby-source-filesystem`)

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions

  const result = await graphql(` 
        query { 
            allMicrocmsBlog { 
                edges { 
                    node { 
                        slug 
                    } 
                } 
            } 
        } 
    `)

}