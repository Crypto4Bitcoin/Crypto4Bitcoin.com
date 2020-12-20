import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <h1>Crypto4Bitcoin</h1>
    <p>To jump right into it, you are here to learn about cryptocurrency and bitcoin.

On this site you'll find everything you need to start using cryptocurrency and bitcoins like paper currency.
Paper currency (aka Cash/Money/fiat currency) is use to exchange for goods and services for hundreds of years now.
We have exchanged all sorts of things for goods and services, now we
have something revolutionary and changing the way we exchange money.
It's called Cryptocurrency.</p>
    <p>We The People, For The People, By The People...</p>
    <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
      <Image />
    </div>
    <Link to="/page-2/">Go to page 2</Link> <br />
    <Link to="https://crypto4bitcoin.app">Blockchain Space</Link>
  </Layout>
)

export default IndexPage
