import React, {useState} from "react"
import { Link } from "gatsby"

import { menuLinks } from "../data/constants"
import './MobileMenu.css'

const MobileMenu = () => {

    const [isOpen, setOpen] = useState(false);

    const handleToggle = () => {
        setOpen(!isOpen);
    }

    const listClass = (isOpen) ? 'open' : '';

  return (
    <div className="MobileMenu">
        <button className="MobileMenu__toggle" onClick={handleToggle}>MENU</button>
      <ul className={listClass}>
        <li key="first"><Link to="/">Home</Link></li>
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
  )
}

export default MobileMenu
