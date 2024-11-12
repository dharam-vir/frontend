import React from 'react'
import Header from '../header/Header'
import Sidebar from '../sidebar/Sidebar'
import Footer from '../footer/Footer'

function Layout({ children }) {
    return (
        <div className="layout">
            <Header />
            <div className="main-content">
                <Sidebar />
                <main>{children}</main>
            </div>
            <Footer />
        </div>
    )
}

export default Layout