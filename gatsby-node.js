/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.com/docs/reference/config-files/gatsby-node/
 */

/**
 * @type {import('gatsby').GatsbyNode['createPages']}
 */

const path = require(`path`)

exports.createPages = async gatsbyUtilities => {
  const freelanceSites = await getFreelanceSites(gatsbyUtilities)
  const agencySites = await getAgencySites(gatsbyUtilities)
  const designs = await getDesigns(gatsbyUtilities)
  await createIndividualFreelanceSitePages({ freelanceSites, gatsbyUtilities })
  await createIndividualAgencySitePages({ agencySites, gatsbyUtilities })
  await createIndividualDesignPages({ designs, gatsbyUtilities })
}

async function getFreelanceSites({ graphql, reporter }) {
  const graphqlResult = await graphql(`
    query MyQuery {
      allSiteJson(filter: { type: { eq: "freelance" } }) {
        edges {
          node {
            id
            title
            pathName
          }
        }
      }
    }
  `)

  if (graphqlResult.errors) {
    reporter.panicOnBuild(
      `There was an error loading your blog posts`,
      graphqlResult.errors
    )
    return
  }
  return graphqlResult.data.allSiteJson.edges
}

async function getAgencySites({ graphql, reporter }) {
  const graphqlResult = await graphql(`
    query MyQuery {
      allSiteJson(filter: { type: { eq: "agency" } }) {
        edges {
          node {
            id
            title
            pathName
          }
        }
      }
    }
  `)

  if (graphqlResult.errors) {
    reporter.panicOnBuild(
      `There was an error loading your blog posts`,
      graphqlResult.errors
    )
    return
  }
  return graphqlResult.data.allSiteJson.edges
}

async function getDesigns({ graphql, reporter }) {
  const graphqlResult = await graphql(`
    query MyQuery {
      allDesignJson(sort: { title: DESC }) {
        edges {
          node {
            id
            title
            pathName
          }
        }
      }
    }
  `)

  if (graphqlResult.errors) {
    reporter.panicOnBuild(
      `There was an error loading your blog posts`,
      graphqlResult.errors
    )
    return
  }
  return graphqlResult.data.allDesignJson.edges
}

const createIndividualFreelanceSitePages = async ({
  freelanceSites,
  gatsbyUtilities,
}) => {
  return Promise.all(
    freelanceSites.map(({ node }) => {
      const { id, pathName } = node
      return gatsbyUtilities.actions.createPage({
        path: `${pathName}`,
        component: path.resolve(`./src/templates/site-post.js`),
        context: {
          id: id,
        },
      })
    })
  )
}

const createIndividualAgencySitePages = async ({
  agencySites,
  gatsbyUtilities,
}) => {
  return Promise.all(
    agencySites.map(({ node }) => {
      const { id, pathName } = node
      return gatsbyUtilities.actions.createPage({
        path: `${pathName}`,
        component: path.resolve(`./src/templates/site-post.js`),
        context: {
          id: id,
        },
      })
    })
  )
}

const createIndividualDesignPages = async ({ designs, gatsbyUtilities }) => {
  return Promise.all(
    designs.map(({ node }) => {
      const { id, pathName } = node
      return gatsbyUtilities.actions.createPage({
        path: `${pathName}`,
        component: path.resolve(`./src/templates/design-post.js`),
        context: {
          id: id
        },
      })
    })
  )
}
