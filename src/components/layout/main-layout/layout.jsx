import { Fragment } from "react"
import { Outlet } from "react-router-dom"

import Header from "../header/header"
import Footer from "../footer/footer"

import "./layout.scss"
import Menu from "../menu/menu"

const Layout = () => {
  return (
    <Fragment>
      <Header />
      <main >
        <Menu/>
        <Outlet />
      </main>
      <Footer />
    </Fragment>
  )
}

export default Layout