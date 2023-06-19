import React from "react"
import { Link } from "gatsby"

import "./GridList.css"

const GridList = ({ items }) => {
  const gridList = items.map(item => {
    const {
      node: { title, description, fullMockupUrl, featuredImageUrl, pathName },
    } = item

    const backgroundStyle = {
      background: `url(${(fullMockupUrl) ? fullMockupUrl : featuredImageUrl})`,
      backgroundSize: (fullMockupUrl) ? `cover` : `contain`,
      backgroundRepeat: `no-repeat`,
      backgroundPosition: `center 60px`
    }

    return (
      <Link to={`/${pathName}`} className="GridList__item" key={title} style={backgroundStyle}>
      
          <img
            className="GridList__item-image"
            src={featuredImageUrl}
            alt={`mockup of design for ${title}`}
          />
          <h2>{title}</h2>
    
      </Link>
    )
  })

  return <section className="GridList">{gridList}</section>
}

export default GridList
