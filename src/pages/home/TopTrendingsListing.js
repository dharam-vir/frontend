import axios from "axios"
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';

const TopTrendingsListing = () => {
    const [dataUsers, setdata] = useState([])
    useEffect(() => {
        axios.get('https://api.escuelajs.co/api/v1/products').then((responce) => {
            console.log(responce.data)
            setdata(responce.data)
        })
    }, [])
    return (
        <div>
            <section className="com-padd com-padd-redu-top">
                <div className="container dir-hom-pre-tit">
                    <div className="row">
                        <div className="com-title">
                            <h2>Top Trendings Listing for <span>your City</span></h2>
                            <p>Explore some of the best tips from around the world from our partners and friends.</p>
                        </div>
                        <div className="col-md-12">

                            <div>
                                {
                                    dataUsers && dataUsers.map((rows, index) => {
                                        return (
                                            <div className="home-list-pop" key={index}>
                                                {/*POPULAR LISTINGS IMAGE*/}
                                                <div className="col-md-3"> <img src="images/services/tr1.jpg" alt /> </div>
                                                {/*POPULAR LISTINGS: CONTENT*/}
                                                <div className="col-md-9 home-list-pop-desc"> <Link to="automobile-listing-details.html"><h3>{rows.title}</h3></Link>
                                                    <h4>{rows.title}</h4>
                                                    <p>28800 Orchard Lake Road, Suite 180 Farmington Hills, U.S.A.</p> <span className="home-list-pop-rat">4.2</span>
                                                    <div className="hom-list-share">
                                                        <ul>

                                                            <li><Link to="#!"><i className="fa fa-bar-chart" aria-hidden="true" /> 52</Link> </li>
                                                            <li><Link to="#!"><i className="fa fa-heart-o" aria-hidden="true" /> 32</Link> </li>
                                                            <li><Link to="#!"><i className="fa fa-eye" aria-hidden="true" /> 420</Link> </li>
                                                            <li><Link to="#!"><i className="fa fa-share-alt" aria-hidden="true" /> 570</Link> </li>
                                                        </ul>
                                                    </div>
                                                </div>
                                            </div>
                                        )
                                    })
                                }
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default TopTrendingsListing
