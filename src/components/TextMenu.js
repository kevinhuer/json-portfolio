import React, { useState } from "react"
import { Link } from "gatsby"

import "./TextMenu.css"

import { menuLinks } from "../data/constants"

const TextMenu = () => {
  return (
    <section className="TextMenu">
      <div>
        <Link to={`/`}><h2>Kevin Huer</h2></Link>
        <ul>
          {menuLinks.map(link => {
            const { id, title, url, type } = link
            return (
              <li key={id}>
                {type === "internal" ? (
                  <Link
                    activeClassName={"active"}
                    partiallyActive={true}
                    to={url}
                  >
                    {title}
                  </Link>
                ) : (
                  <a
                    href={url}
                    target="_blank"
                    rel="nofollow noopener noreferrer"
                  >
                    {title}
                  </a>
                )}
              </li>
            )
          })}
        </ul>
      </div>
    </section>
  )
}

export default TextMenu
