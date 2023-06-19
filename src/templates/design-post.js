import * as React from "react"
import { Link, graphql } from "gatsby"
import parse from "html-react-parser"
import Layout from "../components/layout"
import Seo from "../components/seo"

import "./design-post.css"

const DesignPost = ({ data: { design } }) => {
  const { title, description, fullMockupUrl, featuredImageUrl } = design
  return (
    <Layout>
      <section className="DesignPost">
        <img src={featuredImageUrl} alt="" />
        <h1>{title}</h1>
        <section>
          <h2>About</h2>
          {parse(description)}
          <h2>The design</h2>
          <img src={fullMockupUrl} alt="" />
        </section>
        <Link to="/">Go back to the homepage</Link>
      </section>
    </Layout>
  )
}

export const Head = () => <Seo title="Design" />

export default DesignPost

export const pageQuery = graphql`
  query DesignById($id: String!) {
    design: designJson(id: { eq: $id }) {
      id
      title
      description
      fullMockupUrl
      featuredImageUrl
    }
  }
`
