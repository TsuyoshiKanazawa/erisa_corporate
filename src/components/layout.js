import * as React from "react"
import Footer from "./footer"
import "../styles/all.scss"

const Layout = (props) => {
    return (
        <>
            <main>{props.children}</main>
            <Footer />
        </>
    )
}

export default Layout
