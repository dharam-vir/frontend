import React from 'react'
import { Link } from 'react-router-dom'; 
import DefualtPopup from '../popup/DefualtPopup'
import FooterLogo from '../../assets/images/foot-logo.png'
import Payment from '../../assets/images/payment.png'

function Footer() {
  return (
    <div>
      <footer id="colophon" className="site-footer clearfix">
				<div id="quaternary" className="sidebar-container " role="complementary">
					<div className="sidebar-inner">
						<div className="widget-area clearfix">
							<div id="azh_widget-2" className="widget widget_azh_widget">
								<div data-section="section">
									<div className="container">
										<div className="row">
											<div className="col-sm-4 col-md-3 foot-logo"> <img src={FooterLogo} alt="logo" />
												<p className="hasimg">Worlds's No. 1 Local Business Directory Website.</p>
												<p className="hasimg">It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. </p>
											</div>
											<div className="col-sm-4 col-md-3">
												<h4>Support &amp; Help</h4>
												<ul className="two-columns">
													<li> <Link to="advertise.html">Advertise us</Link> </li>
													<li> <Link to="about-us.html">About Us</Link> </li>
													<li> <Link to="customer-reviews.html">Review</Link> </li>
													<li> <Link to="how-it-work.html">How it works </Link> </li>
													<li> <Link to="add-listing.html">Add Business</Link> </li>
													<li> <Link to="#!">Register</Link> </li>
													<li> <Link to="#!">Login</Link> </li>
													<li> <Link to="#!">Quick Enquiry</Link> </li>
													<li> <Link to="#!">Ratings </Link> </li>
													<li> <Link to="trendings.html">Top Trends</Link> </li>
												</ul>
											</div>
											<div className="col-sm-4 col-md-3">
												<h4>Popular Services</h4>												
												<ul className="two-columns">
													<li> <Link to="#!">Hotels</Link> </li>
													<li> <Link to="#!">Hospitals</Link> </li>
													<li> <Link to="#!">Transportation</Link> </li>
													<li> <Link to="#!">Real Estates </Link> </li>
													<li> <Link to="#!">Automobiles</Link> </li>
													<li> <Link to="#!">Resorts</Link> </li>
													<li> <Link to="#!">Education</Link> </li>
													<li> <Link to="#!">Sports Events</Link> </li>
													<li> <Link to="#!">Web Services </Link> </li>
													<li> <Link to="#!">Skin Care</Link> </li>
												</ul>
											</div>
											<div className="col-sm-4 col-md-3">
												<h4>Cities Covered</h4>
												<ul className="two-columns">
													<li> <Link to="#!">Atlanta</Link> </li>
													<li> <Link to="#!">Austin</Link> </li>
													<li> <Link to="#!">Baltimore</Link> </li>
													<li> <Link to="#!">Boston </Link> </li>
													<li> <Link to="#!">Chicago</Link> </li>
													<li> <Link to="#!">Indianapolis</Link> </li>
													<li> <Link to="#!">Las Vegas</Link> </li>
													<li> <Link to="#!">Los Angeles</Link> </li>
													<li> <Link to="#!">Louisville </Link> </li>
													<li> <Link to="#!">Houston</Link> </li>
												</ul>
											</div>
										</div>
									</div>
								</div>
								<div data-section="section" className="foot-sec2">
									<div className="container">
										<div className="row">
											<div className="col-sm-3">
												<h4>Payment Options</h4>
												<p className="hasimg"> <img src={Payment} alt="payment" /> </p>
											</div>
											<div className="col-sm-4">
												<h4>Address</h4>
												<p>28800 Orchard Lake Road, Suite 180 Farmington Hills, U.S.A. Landmark : Next To Airport</p>
												<p> <span className="strong">Phone: </span> <span className="highlighted">+91-8750-299-299</span> </p>
											</div>
											<div className="col-sm-5 foot-social">
												<h4>Follow with us</h4>
												<p>Join the thousands of other There are many variations of passages of Lorem Ipsum available</p>
												<ul>
													<li><Link to="#!"><i className="fa fa-facebook" aria-hidden="true" /></Link> </li>
													<li><Link to="#!"><i className="fa fa-google-plus" aria-hidden="true" /></Link> </li>
													<li><Link to="#!"><i className="fa fa-twitter" aria-hidden="true" /></Link> </li>
													<li><Link to="#!"><i className="fa fa-linkedin" aria-hidden="true" /></Link> </li>
													<li><Link to="#!"><i className="fa fa-youtube" aria-hidden="true" /></Link> </li>
													<li><Link to="#!"><i className="fa fa-whatsapp" aria-hidden="true" /></Link> </li>
												</ul>
											</div>
										</div>
									</div>
								</div>
							</div>
						</div>
						{/* .widget-area */}
					</div>
					{/* .sidebar-inner */}
				</div>
				{/* #quaternary */}
			</footer>
			{/*COPY RIGHTS*/}
			<section className="copy">
				<div className="container">
					<p>copyrights © <span id="cryear">{Date('Y')}</span>Logiquesoft. &nbsp;&nbsp;All rights reserved.</p>
				</div>
			</section>	
      <DefualtPopup />
    </div>
  )
}

export default Footer
