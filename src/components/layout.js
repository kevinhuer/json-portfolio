/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.com/docs/how-to/querying-data/use-static-query/
 */

import * as React from "react"
import { useStaticQuery, graphql } from "gatsby"

import Header from "./header"
import TextMenu from "./TextMenu"
import MobileMenu from "./MobileMenu"
import "./layout.css"

const Layout = ({ children, withPadding = true }) => {

  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  const mainChildrenClass = withPadding
    ? `Main__Children with-padding`
    : `Main__Children`

  return (
    <>
      {/* <Header siteTitle={data.site.siteMetadata?.title || `Title`} /> */}
      <main>
        <section className="Main">
          <TextMenu />
          <MobileMenu />
          <section className={mainChildrenClass}>{children}</section>
        </section>
      </main>
      {/* <footer
        style={{
          marginTop: `var(--space-5)`,
          fontSize: `var(--font-sm)`,
        }}
      >
        © {new Date().getFullYear()} &middot; Built with
        {` `}
        <a href="https://www.gatsbyjs.com">Gatsby</a>
      </footer> */}
    </>
  )
}

export default Layout
