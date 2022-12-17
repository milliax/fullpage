// import Link from "next/link"
import React from "react"

// import "fullpage.css"
import '../styles/globals.css'
import "../styles/custom.css"

function MyApp({ Component, pageProps }) {
    return (
        <React.Fragment>
            <Component {...pageProps} />
            {/* <Link rel="stylesheet"/> */}
        </React.Fragment>
    )
}

export default MyApp
