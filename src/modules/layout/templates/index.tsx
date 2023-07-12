import Footer from "@modules/layout/templates/footer"
import Nav from "@modules/layout/templates/nav"
import React from "react"
import HeaderInfo from "../components/header-info"
import NavNavigation from "../components/nav-navigation"

const Layout: React.FC = ({ children }) => {
  return (
    <div>
      <Nav />
      <HeaderInfo />
      <NavNavigation />
      <main className="relative">{children}</main>
      <Footer />
    </div>
  )
}

export default Layout
