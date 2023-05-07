import * as React from "react"
import Header from "./header"
import Footer from "./footer"
import "../styles/all.scss"

const Layout = ({ children, hideFooter, hideHeader }) => {
    return (
        <>
            {hideHeader ? null : <Header />}
            <main>{children}</main>
            {hideFooter ? null : <Footer />}
        </>
    )
}

export default Layout
