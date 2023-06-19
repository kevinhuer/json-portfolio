import React from 'react';
import Seo from "../components/seo"
import Layout from '../components/layout';
import { useStaticQuery, graphql} from 'gatsby'
import GridList from '../components/GridList';

const Freelance = ({}) => {

    const {
        allSiteJson: { edges },
      } = useStaticQuery(QUERY)
    
      if (!edges) return
    return (
        <Layout withPadding={false}>
          <h1 style={{visibility:'hidden', margin:'0', height:'0'}}>Freelance</h1>
          <GridList items={edges} />
        </Layout>
    )
}

export const Head = () => <Seo title="Freelance" />

export default Freelance;

const QUERY = graphql`
  query allFreelance {
   allSiteJson(filter: { type: { eq: "freelance" } }) {
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