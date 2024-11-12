import axios from "axios"
import React, { useEffect, useState } from "react"
function Findyourservices() {
    const [dataUsers, setdata] = useState([])
    useEffect(() => {
        axios.get('https://api.escuelajs.co/api/v1/categories').then((responce) => {
            setdata(responce.data)
        })
    }, [])

    return (
        <div>
            <section className="com-padd com-padd-redu-bot1 pad-bot-red-40">
                <div className="container">
                    <div className="row">
                        <div className="com-title">
                            <h2>Find your <span>Services</span></h2>
                            <p>Explore some of the best business from around the world from our partners and friends.</p>
                        </div>
                        <div className="dir-hli">
                            <ul>
                                {
                                   dataUsers && dataUsers?.map((rows,index) => {
                                        return (                                           
                                            <div key={index}>
                                                <li className="col-md-3 col-sm-6">
                                                    <a href="list.html">
                                                        <div className="dir-hli-5">
                                                            <div className="dir-hli-1">
                                                                <div className="dir-hli-3"><img src={rows?.image} alt="jg" /> </div>
                                                                <div className="dir-hli-4"> </div> <img src={rows?.image} alt="ghg" /> </div>
                                                            <div className="dir-hli-2">
                                                                <h4>{rows?.name} <span className="dir-ho-cat">Show All ({rows?.id})</span></h4> </div>
                                                        </div>
                                                    </a>
                                                </li>
                                            </div>                                          
                                        )
                                    })
                                }
                            </ul>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Findyourservices
