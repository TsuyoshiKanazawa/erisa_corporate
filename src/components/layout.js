import * as React from "react" 
import "../styles/all.scss"

const Layout = (props) => { 
    return (
        <> 
            <main>{props.children}</main>
        </>
    ) 
}

export default Layout
