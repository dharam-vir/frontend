import React from 'react'
import { Link } from 'react-router-dom';
import images5 from '../../assets/images/icon/5.png' 
import images6 from '../../assets/images/icon/6.png' 
import images7 from '../../assets/images/icon/7.png' 

const CreateafreeAccount = () => {
  return (
    <div>
      <section className="com-padd sec-bg-white com-padd-redu-top">
				<div className="container">
					<div className="row">
						<div className="com-title">
							<h2>Create a free <span>Account</span></h2>
							<p>Explore some of the best tips from around the world from our partners and friends.</p>
						</div>
						<div className="col-md-6">
							<div className="hom-cre-acc-left">
								<h3>A few reasons you’ll love Online <span>Business Directory</span></h3>
								<p>5 Benefits of Listing Your Business to a Local Online Directory</p>
								<ul>
									<li> <img src={images7} alt="images7" />
										<div>
											<h5>Enhancing Your Business</h5>
											<p>Imagine you have made your presence online through a local online directory, but your competitors have..</p>
										</div>
									</li>
									<li> <img src={images5} alt={images5} />
										<div>
											<h5>Advertising Your Business</h5>
											<p>Advertising your business to area specific has many advantages. For local businessmen, it is an opportunity..</p>
										</div>
									</li>
									<li> <img src={images6} alt="images6" />
										<div>
											<h5>Develop Brand Image</h5>
											<p>Your local business too needs brand management and image making. As you know the local market..</p>
										</div>
									</li>
								</ul>
							</div>
						</div>
						<div className="col-md-6">
							<div className="hom-cre-acc-left hom-cre-acc-right">
								<form>
									<div className="row">
										<div className="input-field col s12">
											<input id="acc-name" type="text" className="validate" />
											<label htmlFor="acc-name">Name</label>
										</div>
									</div>
									<div className="row">
										<div className="input-field col s12">
											<input id="acc-mob" type="number" className="validate" />
											<label htmlFor="acc-mob">Mobile</label>
										</div>
									</div>
									<div className="row">
										<div className="input-field col s12">
											<input id="acc-mail" type="email" className="validate" />
											<label htmlFor="acc-mail">Email</label>
										</div>
									</div>
									<div className="row">
										<div className="input-field col s12">
											<input id="acc-pass" type="password" className="validate" />
											<label htmlFor="acc-pass">Password</label>
										</div>
									</div>
									<div className="row">
										<div className="col s12 hom-cr-acc-check">
											<input type="checkbox" id="test5" />
											<label htmlFor="test5">By signing up, you agree to the Terms and Conditions and Privacy Policy. You also agree to receive product-related emails.</label>
										</div>
									</div>
									<div className="row">
										<div className="input-field col s12"> <Link className="waves-effect waves-light btn-large full-btn" to="#!">Submit Now</Link> </div>
									</div>
								</form>
							</div>
						</div>
					</div>
				</div>
			</section>
    </div>
  )
}

export default CreateafreeAccount
