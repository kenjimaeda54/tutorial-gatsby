import React from "react"
import ComponentCssModule from "../components/example-css-modules"
import ComponentStyledComponente from "../components/example-style-components"
import Layout from "../components/layout"

//foi construído com hello world
//https://www.gatsbyjs.com/starters/
export default function Home() {
  return (
    <Layout>
      <div>Hello world!</div>
      <ComponentCssModule />
      <ComponentStyledComponente />
    </Layout>
  )
}
