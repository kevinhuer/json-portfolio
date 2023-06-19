import React, { useState } from "react"
import Seo from "../components/seo"
import Layout from "../components/layout"
import { graphql, useStaticQuery, Link } from "gatsby"
import GridList from "../components/GridList"

const Design = ({}) => {
  const {
    allDesignJson: { edges },
  } = useStaticQuery(QUERY)

  if (!edges) return

  return (
    <Layout withPadding={false}>
      <h1 style={{visibility:'hidden', margin:'0', height:'0'}}>Design</h1>
      <GridList items={edges} />     
    </Layout>
  )
}

export const Head = () => <Seo title="Design" />

export default Design

const QUERY = graphql`
  query allDesigns {
    allDesignJson {
      edges {
        node {
          id
          title
          fullMockupUrl
          featuredImageUrl
          description
          pathName
        }
      }
    }
  }
`
