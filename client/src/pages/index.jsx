import * as React from "react"
import Main from "../components/main"
import { graphql } from "gatsby"
import { Layout } from "../components/layout"
import { ProductListing } from "../components/product-listing"
import { Seo } from "../components/seo"
import {
  container,
  intro,
  callOut,
  callToAction,
} from "./index.module.css"

export const query = graphql`
  query {
    shopifyCollection(handle: { eq: "frontpage" }) {
      products {
        ...ProductCard
      }
    }
  }
`
function Hero (props) {
  return (
    <div className={container}>
      <h1 className={intro}>Kiyoi Living</h1>
      <p className={callToAction}>Your premier source of Kombucha</p>
    </div>
  )
}

export default function IndexPage({ data }) {
  return (
    <Layout>
      <Main />
      <Hero />
      <section className={container}>
        <h1 className={callOut}>Featured Products</h1>
        <ProductListing products={data?.shopifyCollection?.products} />
      </section>
    </Layout>
  )
}

export const Head = () => <Seo />
