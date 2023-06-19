import React from 'react';
import Seo from "../components/seo"
import Layout from '../components/layout';
import GridList from '../components/GridList';
import { graphql, useStaticQuery } from 'gatsby';

const Agency = ({}) => {

    const {
        allSiteJson: { edges },
      } = useStaticQuery(QUERY)
    
      if (!edges) return

    return (
        <Layout withPadding={false}>
          <h1 style={{visibility:'hidden', margin:'0', height:'0'}}>Agency</h1>
        <GridList items={edges} />
        </Layout>
    )
}

export const Head = () => <Seo title="Agency" />

export default Agency;

const QUERY = graphql`
  query allAgency {
   allSiteJson(filter: { type: { eq: "agency" } }) {
      edges {
        node {
          id
          title
          featuredImageUrl
          description
          pathName
        }
      }
    }
  }
`
