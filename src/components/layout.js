import * as React from "react" 
import "../styles/all.scss"
import Header from "./Header"
import Footer from "./footer" 

const Layout = (props) => { 
    return (
        <> 
            <Header />
            <main>{props.children}</main>
            <Footer />
        </>
    ) 
}

export default Layout
