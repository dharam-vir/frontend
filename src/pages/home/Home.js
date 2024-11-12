import React from 'react'
import { Link } from 'react-router-dom'; 
import FindYourServices from './Findyourservices'
import logo from '../../assets/images/logo.png'
import afflogo from '../../assets/images/aff-logo.png'
import image1 from '../../assets/images/icon/1.png';
import image2 from '../../assets/images/icon/2.png';
import image3 from '../../assets/images/icon/3.png';
import image7 from '../../assets/images/icon/7.png';
import mobile from '../../assets/images/mobile.png';
import android from '../../assets/images/android.png';
import apple from '../../assets/images/apple.png';
import Footer from '../../components/footer/Footer';
import ExploreTopCities from './ExploreTopCities';
import TopTrendingsListing from './TopTrendingsListing';
import CreateafreeAccount from './CreateafreeAccount';

function Home() {
	return (
		<div>
			<section id="background" className="dir1-home-head">
				<div className="container">
					<div className="row">
						<div className="col-md-6 col-sm-6 col-xs-12">
							<div className="dir-ho-tl">
								<ul>
									<li>
										<Link to="/"><img src={logo} alt="Logo" className="d-inline-block align-top" /> </Link>
									</li>
								</ul>
							</div>
						</div>
						<div className="col-md-6 col-sm-6">
							<div className="dir-ho-tr">
								<ul>
									<li><Link to="register.html">Register</Link> </li>
									<li><Link to="login.html">Sign In</Link> </li>
									<li><Link to="db-listing-add.html"><i className="fa fa-plus" aria-hidden="true" /> Add Listing</Link></li>
								</ul>
							</div>
						</div>
					</div>
				</div>
				<div className="container dir-ho-t-sp">
					<div className="row">
						<div className="dir-hr1">
							<div className="dir-ho-t-tit">
								<h1>Connect with the right Service Experts</h1>
								<p>Find B2B &amp; B2C businesses contact addresses, phone numbers,<br /> user ratings and reviews.</p>
							</div>
							<form className="tourz-search-form">
								<div className="input-field">
									<input type="text" id="select-city" className="autocomplete" />
									<label htmlFor="select-city">Enter city</label>
								</div>
								<div className="input-field">
									<input type="text" id="select-search" className="autocomplete" />
									<label htmlFor="select-search" className="search-hotel-type">Search your services like hotel, resorts, events and more</label>
								</div>
								<div className="input-field">
									<input type="submit" defaultValue="search" className="waves-effect waves-light tourz-sear-btn" /> </div>
							</form>
						</div>
					</div>
				</div>
			</section>
			{/*TOP SEARCH SECTION*/}
			<section id="myID" className="bottomMenu hom-top-menu">
				<div className="container top-search-main">
					<div className="row">
						<div className="ts-menu">
							{/*SECTION: LOGO*/}
							<div className="ts-menu-1">
								<Link to="index-1.html"><img src={afflogo} alt='afflogo' /> </Link>
							</div>
							{/*SECTION: BROWSE CATEGORY(NOTE:IT'S HIDE ON MOBILE & TABLET VIEW)*/}
							<div className="ts-menu-2"><Link to="#" className="t-bb">All Pages <i className="fa fa-angle-down" aria-hidden="true" /></Link>
								{/*SECTION: BROWSE CATEGORY*/}
								<div className="cat-menu cat-menu-1">
									<div className="dz-menu">
										<div className="dz-menu-inn">
											<h4>Frontend Pages</h4>
											<ul>
												<li><Link to="index-1.html">Home 1</Link></li>
												<li><Link to="index-2.html">Home 2</Link></li>
												<li><Link to="index-3.html">Home 3</Link></li>
												<li><Link to="index-4.html">Home 4</Link></li>
												<li><Link to="list.html">All Listing</Link></li>
												<li><Link to="listing-details.html">Listing Details </Link> </li>
												<li><Link to="price.html">Add Listing</Link> </li>
												<li><Link to="list-lead.html">Lead Listing</Link></li>
												<li><Link to="list-grid.html">Listing Grid View</Link></li>											
											</ul>
										</div>
										<div className="dz-menu-inn">
											<h4>Frontend Pages</h4>
											<ul>
												<li><Link to="new-business.html"> New Listings </Link> </li>
												<li><Link to="nearby-listings.html">Nearby Listings</Link> </li>
												<li><Link to="customer-reviews.html"> Customer Reviews</Link> </li>
												<li><Link to="trendings.html"> Top Trendings</Link> </li>
												<li><Link to="how-it-work.html"> How It Work</Link> </li>
												<li><Link to="advertise.html"> Advertise with us</Link> </li>
												<li><Link to="price.html"> Price Details</Link> </li>
											</ul>
										</div>
										<div className="dz-menu-inn">
											<h4>Frontend Pages</h4>
											<ul>
												<li><Link to="about-us.html"> About Us</Link> </li>
												<li><Link to="customer-reviews.html"> Customer Reviews</Link> </li>
												<li><Link to="contact-us.html"> Contact Us</Link> </li>
												<li><Link to="blog.html"> Blog Post</Link> </li>
												<li><Link to="blog-content.html"> Blog Details</Link> </li>
												<li><Link to="elements.html"> All Elements </Link> </li>
												<li><Link to="shop-listing-details.html"> Shop Details </Link> </li>
												<li><Link to="property-listing-details.html"> Property Details </Link> </li>
											</ul>
										</div>
										<div className="dz-menu-inn">
											<h4>Dashboard Pages</h4>
											<ul>
												<li><Link to="dashboard.html"> Dashboard</Link> </li>
												<li><Link to="db-invoice.html"> Invoice</Link> </li>
												<li><Link to="db-setting.html"> User Setting</Link> </li>
												<li><Link to="db-all-listing.html"> All Listings</Link> </li>
												<li><Link to="db-listing-add.html"> Add New Listing</Link> </li>
												<li><Link to="db-review.html"> Listing Reviews</Link> </li>
												<li><Link to="db-payment.html"> Listing Payments </Link> </li>
											</ul>
										</div>
										<div className="dz-menu-inn">
											<h4>Dashboard Pages</h4>
											<ul>
												<li><Link to="register.html"> User Register</Link> </li>
												<li><Link to="login.html"> User Login</Link> </li>
												<li><Link to="forgot-pass.html"> Forgot Password</Link> </li>
												<li><Link to="db-message.html"> Messages</Link> </li>
												<li><Link to="db-my-profile.html"> Dashboard Profile</Link> </li>
												<li><Link to="db-post-ads.html"> Post Ads </Link> </li>
												<li><Link to="db-invoice-download.html"> Download Invoice </Link> </li>
											</ul>
										</div>
										<div className="dz-menu-inn lat-menu">
											<h4>Admin Panel Pages</h4>
											<ul>
												<li><Link target="_blank" to="admin.html"> Admin</Link> </li>
												<li><Link target="_blank" to="admin-all-listing.html"> All Listing</Link> </li>
												<li><Link target="_blank" to="admin-all-users.html"> All Users</Link> </li>
												<li><Link target="_blank" to="admin-analytics.html"> Analytics</Link> </li>
												<li><Link target="_blank" to="admin-ads.html"> Advertisement</Link> </li>
												<li><Link target="_blank" to="admin-setting.html"> Admin Setting </Link> </li>
												<li><Link target="_blank" to="admin-payment.html"> Payments </Link> </li>
											</ul>
										</div>
									</div>
									<div className="dir-home-nav-bot">
										<ul>
											<li>A few reasons you’ll love Online Business Directory <span>Call us on: +91 8750-299-299</span> </li>
											<li><Link to="/advertise" className="waves-effect waves-light btn-large"><i className="fa fa-bullhorn" /> Advertise with us</Link>
											</li>
											<li><Link to="/db-listing-add" className="waves-effect waves-light btn-large"><i className="fa fa-bookmark" /> Add your business</Link>
											</li>
										</ul>
									</div>
								</div>
							</div>
							{/*SECTION: SEARCH BOX*/}
							<div className="ts-menu-3">
								<div className>
									<form className="tourz-search-form tourz-top-search-form">
										<div className="input-field">
											<input type="text" id="top-select-city" className="autocomplete" />
											<label htmlFor="top-select-city">Enter city</label>
										</div>
										<div className="input-field">
											<input type="text" id="top-select-search" className="autocomplete" />
											<label htmlFor="top-select-search" className="search-hotel-type">Search your services like hotel, resorts, events and more</label>
										</div>
										<div className="input-field">
											<input type="submit" defaultValue className="waves-effect waves-light tourz-top-sear-btn" /> </div>
									</form>
								</div>
							</div>
							{/*SECTION: REGISTER,SIGNIN AND ADD YOUR BUSINESS*/}
							<div className="ts-menu-4">
								<div className="v3-top-ri">
									<ul>
										<li><Link to="/login" className="v3-menu-sign"><i className="fa fa-sign-in" /> Sign In</Link> </li>
										<li><Link to="/add-listing" className="v3-add-bus"><i className="fa fa-plus" aria-hidden="true" /> Add Listing</Link> </li>
									</ul>
								</div>
							</div>
							{/*MOBILE MENU ICON:IT'S ONLY SHOW ON MOBILE & TABLET VIEW*/}
							<div className="ts-menu-5"><span><i className="fa fa-bars" aria-hidden="true" /></span> </div>
							{/*MOBILE MENU CONTAINER:IT'S ONLY SHOW ON MOBILE & TABLET VIEW*/}
							<div className="mob-right-nav" data-wow-duration="0.5s">
								<div className="mob-right-nav-close"><i className="fa fa-times" aria-hidden="true" /> </div>
								<h5>Business</h5>
								<ul className="mob-menu-icon">
									<li><Link to="price">Add Business</Link> </li>
									<li><Link to="/register" data-toggle="modal" data-target="#register">Register</Link> </li>
									<li><Link to="/login" data-toggle="modal" data-target="#sign-in">Sign In</Link> </li>
								</ul>
								<h5>All Categories</h5>
								<ul>
									<li><Link to="/help-services"><i className="fa fa-angle-right" aria-hidden="true" /> Help Services</Link> </li>
									<li><Link to="list.html"><i className="fa fa-angle-right" aria-hidden="true" /> Appliances Repair &amp; Services</Link> </li>
									<li><Link to="list.html"><i className="fa fa-angle-right" aria-hidden="true" /> Furniture Dealers</Link> </li>
									<li><Link to="list.html"><i className="fa fa-angle-right" aria-hidden="true" /> Packers and Movers</Link> </li>
									<li><Link to="list.html"><i className="fa fa-angle-right" aria-hidden="true" /> Pest Control </Link> </li>
									<li><Link to="list.html"><i className="fa fa-angle-right" aria-hidden="true" /> Solar Product Dealers</Link> </li>
									<li><Link to="list.html"><i className="fa fa-angle-right" aria-hidden="true" /> Interior Designers</Link> </li>
									<li><Link to="list.html"><i className="fa fa-angle-right" aria-hidden="true" /> Carpenters</Link> </li>
									<li><Link to="list.html"><i className="fa fa-angle-right" aria-hidden="true" /> Plumbing Contractors</Link> </li>
									<li><Link to="list.html"><i className="fa fa-angle-right" aria-hidden="true" /> Modular Kitchen</Link> </li>
									<li><Link to="list.html"><i className="fa fa-angle-right" aria-hidden="true" /> Internet Service Providers</Link> </li>
								</ul>
							</div>
						</div>
					</div>
				</div>
			</section>
			{/*HOME PROJECTS*/}
			<section className="proj mar-bot-red-m30">
				<div className="container">
					<div className="row">
						{/*HOME PROJECTS: 1*/}
						<div className="col-md-3 col-sm-6">
							<div className="hom-pro"> <img src={image1} alt />
								<h4>24 Million Business</h4>
								<p>Choose from a collection of handpicked luxury villas &amp; apartments</p> <Link to="#!">Explore Now</Link> </div>
						</div>
						{/*HOME PROJECTS: 1*/}
						<div className="col-md-3 col-sm-6">
							<div className="hom-pro"> <img src={image2} alt />
								<h4>1,200 Services Offered</h4>
								<p>Choose from a collection of handpicked luxury villas &amp; apartments</p> <Link to="#!">Explore Now</Link> </div>
						</div>
						{/*HOME PROJECTS: 1*/}
						<div className="col-md-3 col-sm-6">
							<div className="hom-pro"> <img src={image3} alt />
								<h4>05 Million Visitors</h4>
								<p>Choose from a collection of handpicked luxury villas &amp; apartments</p> <Link to="#!">Explore Now</Link> </div>
						</div>
						{/*HOME PROJECTS: 1*/}
						<div className="col-md-3 col-sm-6">
							<div className="hom-pro"> <img src={image7} alt />
								<h4>24 Million Business</h4>
								<p>Choose from a collection of handpicked luxury villas &amp; apartments</p> <Link to="#!">Explore Now</Link> </div>
						</div>
					</div>
				</div>
			</section>
			{/*FIND YOUR SERVICE*/}
			{<FindYourServices />}
			<ExploreTopCities />
			{/*BEST THINGS*/}
			<TopTrendingsListing />
			{/*CREATE FREE ACCOUNT*/}
			<CreateafreeAccount />
			{/*MOBILE APP*/}
			<section className="web-app com-padd com-padd-redu-top">
				<div className="container">
					<div className="row">
						<div className="col-md-6 web-app-img"> <img src={mobile} alt="mobile" /> </div>
						<div className="col-md-6 web-app-con">
							<h2>Looking for the Best Service Provider? <span>Get the App!</span></h2>
							<ul>
								<li><i className="fa fa-check" aria-hidden="true" /> Find nearby listings</li>
								<li><i className="fa fa-check" aria-hidden="true" /> Easy service enquiry</li>
								<li><i className="fa fa-check" aria-hidden="true" /> Listing reviews and ratings</li>
								<li><i className="fa fa-check" aria-hidden="true" /> Manage your listing, enquiry and reviews</li>
							</ul> <span>We'll send you a link, open it on your phone to download the app</span>
							<form>
								<ul>
									<li>
										<input type="text" placeholder="+91" /> </li>
									<li>
										<input type="number" placeholder="Enter mobile number" /> </li>
									<li>
										<input type="submit" defaultValue="Get App Link" /> </li>
								</ul>
							</form>
							<Link to="#"><img src={android} alt="android" /> </Link>
							<Link to="#"><img src={apple} alt="apple" /> </Link>
						</div>
					</div>
				</div>
			</section>
			{/*FOOTER SECTION*/}
			<Footer />

		</div>
	)
}

export default Home
