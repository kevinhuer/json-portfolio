import * as React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Seo from "../components/seo"
import * as style from '../components/index.module.css'
import "./main.css"

const IndexPage = () => (
  
  <Layout withPadding={false}>     
      <section className="FrontPageMain__VisualMenu">
        <Link className="FrontPageMain__Designs" to="/design">
      
          <h2>Designs</h2>
       
        </Link>
        <div className="FrontPageMain__Sites">
          <Link to="/freelance">
            <h2>Recent freelance work</h2>
          </Link>
          <Link to="/agency">
            <h2>Past agency work</h2>
          </Link>
        </div>
      </section>
  </Layout>
)

/**
 * Head export to define metadata for the page
 *
 * See: https://www.gatsbyjs.com/docs/reference/built-in-components/gatsby-head/
 */
export const Head = () => <Seo title="Home" />

export default IndexPage
