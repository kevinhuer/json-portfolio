import * as React from "react"
import { Link, graphql } from "gatsby"
import parse from 'html-react-parser'
import Layout from "../components/layout"
import Seo from "../components/seo"


import './site-post.css'

const Site = ({ data: { site }}) => {



  const { title, description, featuredImageUrl, siteUrl } = site
  return (
    <Layout>  
      <section className="SitePost">
        <h1>{title}</h1>
        <span className="SitePost__url"><a target="_blank" rel="nofollow noopener noreferrer" href={siteUrl}>{siteUrl}</a></span>
        <img src={featuredImageUrl} alt={`mockup of website design for ${title}`} />
        {parse(description)}
        <div className="intro"></div>
        <Link to="/">Go back to the homepage</Link>
      </section>
    </Layout>
  )
}

export const Head = () => <Seo title="Site" />

export default Site

export const pageQuery = graphql`
  query SiteById($id: String!) {
    site: siteJson(id: { eq: $id }) {
      id
      title
      description
      featuredImageUrl
      siteUrl
    }
  }
`
