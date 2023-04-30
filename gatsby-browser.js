/**
 * Implement Gatsby's Browser APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/browser-apis/
 */
import "@fontsource/roboto/300.css"
import "@fontsource/roboto/400.css"
import "@fontsource/roboto/500.css"
import "@fontsource/roboto/700.css"

import "./src/styles/global.css"
import "./src/styles/index.scss"
import React from "react"
import Layout from "./src/components/Layout"
// import ThemeContextWrapper from "./src/components/ThemeContextWrapper"

// import AuthProvider from "./src/components/Auth/AuthContext";

export const onRouteUpdate = ({ location, prevLocation }) => {
  console.log("new pathname", location.pathname)
  console.log("old pathname", prevLocation ? prevLocation.pathname : null)
}

export const wrapPageElement = ({ element, props }) => {
  return <Layout {...props}>{element}</Layout>
}

//   export const wrapRootElement = ({ element }) => {
//     return <AuthProvider>{element}</AuthProvider>;
//   };
