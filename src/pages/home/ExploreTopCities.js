import React from 'react'
import { Link } from 'react-router-dom'; 

const ExploreTopCities = () => {
  return (
    <div>
      {/*EXPLORE CITY LISTING*/}
			<section className="com-padd com-padd-redu-top">
				<div className="container">
					<div className="row">
						<div className="com-title">
							<h2>Explore your <span>City Listings</span></h2>
							<p>Explore some of the best business from around the world from our partners and friends.</p>
						</div>
						<div className="col-md-6">
							<Link to="list-lead.html">
								<div className="list-mig-like-com">
									<div className="list-mig-lc-img"> <img src="images/listing/home.jpg" alt /> </div>
									<div className="list-mig-lc-con">
										<div className="list-rat-ch list-room-rati"> <span>4.0</span> <i className="fa fa-star" aria-hidden="true" /> <i className="fa fa-star" aria-hidden="true" /> <i className="fa fa-star" aria-hidden="true" /> <i className="fa fa-star" aria-hidden="true" /> <i className="fa fa-star-o" aria-hidden="true" /> </div>
										<h5>United States</h5>
										<p>21 Cities . 2045 Listings . 3648 Users</p>
									</div>
								</div>
							</Link>
						</div>
						<div className="col-md-3">
							<Link to="list-lead.html">
								<div className="list-mig-like-com">
									<div className="list-mig-lc-img"> <img src="images/listing/home2.jpg" alt /> </div>
									<div className="list-mig-lc-con list-mig-lc-con2">
										<h5>United Kingdom</h5>
										<p>18 Cities . 1454 Listings</p>
									</div>
								</div>
							</Link>
						</div>
						<div className="col-md-3">
							<Link to="list-lead.html">
								<div className="list-mig-like-com">
									<div className="list-mig-lc-img"> <img src="images/listing/home3.jpg" alt /> </div>
									<div className="list-mig-lc-con list-mig-lc-con2">
										<h5>Australia</h5>
										<p>14 Cities . 1895 Listings</p>
									</div>
								</div>
							</Link>
						</div>
						<div className="col-md-3">
							<Link to="list-lead.html">
								<div className="list-mig-like-com">
									<div className="list-mig-lc-img"> <img src="images/listing/home4.jpg" alt /> </div>
									<div className="list-mig-lc-con list-mig-lc-con2">
										<h5>Germany</h5>
										<p>12 Cities . 1260 Listings</p>
									</div>
								</div>
							</Link>
						</div>
						<div className="col-md-3">
							<Link to="list-lead.html">
								<div className="list-mig-like-com">
									<div className="list-mig-lc-img"> <img src="images/listing/home1.jpg" alt /> </div>
									<div className="list-mig-lc-con list-mig-lc-con2">
										<h5>India</h5>
										<p>24 Cities . 4152 Listings</p>
									</div>
								</div>
							</Link>
						</div>
					</div>
				</div>
			</section>
    </div>
  )
}

export default ExploreTopCities
