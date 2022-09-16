import { graphql, useStaticQuery, Link } from "gatsby"
import * as React from "react"
import slugify from "@sindresorhus/slugify"
import "./navigation.module.css"
import { navStyle, navLink, activeLink, navLeft, navRight } from "./navigation.module.css"

export function Navigation({ className }) {
  const {
    allShopifyProduct: { productTypes },
  } = useStaticQuery(graphql`
    query {
      allShopifyProduct {
        productTypes: distinct(field: productType)
      }
    }
  `)

  return (
    <nav className={[navStyle, className].join(" ")}>
      <section className={navLeft}>
        <Link
          key="All"
          className={navLink}
          to="/products/"
          activeClassName={activeLink}
        >
          All products
        </Link>
        {productTypes.map((name) => (
          <Link
            key={name}
            className={navLink}
            to={`/products/${slugify(name)}`}
            activeClassName={activeLink}
          >
            {name}
          </Link>
        ))}
      </section>
      <section className={navRight}>
        <Link
          key="Learn"
          className={navLink}
          to="/learn/"
          activeClassName={activeLink}
        >
          Learn More
        </Link>
        <Link
          key="Contact"
          className={navLink}
          to="/contact/"
          activeClassName={activeLink}
        >
          Contact
        </Link>
      </section>
    </nav>
  )
}
