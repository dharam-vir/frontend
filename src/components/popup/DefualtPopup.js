import React from 'react'
import { Link } from 'react-router-dom'; 
import Thankyou from '../../assets/images/thank-you.png'
import d1 from '../../assets/images/icon/d1.png'
import d2 from '../../assets/images/icon/d2.png'
import d3 from '../../assets/images/icon/d3.png'

function DefualtPopup() {
  return (
    <>
    {/*QUOTS POPUP*/}
		<section>
            {/* GET QUOTES POPUP */}
            <div className="modal fade dir-pop-com" id="list-quo" role="dialog">
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header dir-pop-head">
                            <button type="button" className="close" data-dismiss="modal">×</button>
                            <h4 className="modal-title">Get a Quotes</h4>
                            {/*<i className="fa fa-pencil dir-pop-head-icon" aria-hidden="true"></i>*/}
                        </div>
                        <div className="modal-body dir-pop-body">
                            <form method="post" className="form-horizontal">
                                {/*LISTING INFORMATION*/}
                                <div className="form-group has-feedback ak-field">
                                    <label className="col-md-4 control-label">Full Name *</label>
                                    <div className="col-md-8">
                                        <input type="text" className="form-control" name="fname" placeholder required /> </div>
                                </div>
                                {/*LISTING INFORMATION*/}
                                <div className="form-group has-feedback ak-field">
                                    <label className="col-md-4 control-label">Mobile</label>
                                    <div className="col-md-8">
                                        <input type="text" className="form-control" name="mobile" placeholder /> </div>
                                </div>
                                {/*LISTING INFORMATION*/}
                                <div className="form-group has-feedback ak-field">
                                    <label className="col-md-4 control-label">Email</label>
                                    <div className="col-md-8">
                                        <input type="text" className="form-control" name="email" placeholder /> </div>
                                </div>
                                {/*LISTING INFORMATION*/}
                                <div className="form-group has-feedback ak-field">
                                    <label className="col-md-4 control-label">Message</label>
                                    <div className="col-md-8 get-quo">
                                        <textarea className="form-control" defaultValue={""} />
                                    </div>
                                </div>
                                {/*LISTING INFORMATION*/}
                                <div className="form-group has-feedback ak-field">
                                    <div className="col-md-6 col-md-offset-4">
                                        <input type="submit" defaultValue="SUBMIT" className="pop-btn" /> </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
            {/* GET QUOTES Popup END */}
            {/* REQUIREMENT Popup END */}
            <div className="req-pop">
                <div className="req-pop-in">
                    <div className="req-pop-lhs">
                        <h4>Why should I fill this?</h4>
                        <ul>
                            <li>
                                <img src={d1} alt="d1" />
                                <p>Receive advertiser details instantly</p>
                            </li>
                            <li>
                                <img src={d2} alt="d2" />
                                <p>Discover new projects/properties to <br />your liking via email/sms</p>
                            </li>
                            <li>
                                <img src={d3} alt="d3" />
                                <p>Our experts will get in touch to help<br /> you out when required</p>
                            </li>
                        </ul>
                    </div>
                    <div className="req-pop-rhs">
                        <i className="fa fa-times req-pop-clo" />
                        {/*-===SECTION 1===-*/}
                        <div className="req-pop-sec-1">
                            <h2>What you looking for?</h2>
                            <p>Choose your category what you looking for</p>
                            <div className="v8-chbox">
                                <form>
                                    <ul>
                                        <li>
                                            <input type="checkbox" id="look-1" />
                                            <label htmlFor="look-1">Hotel room booking</label>
                                        </li>
                                        <li>
                                            <input type="checkbox" id="look-2" />
                                            <label htmlFor="look-2">Realestates</label>
                                        </li>
                                        <li>
                                            <input type="checkbox" id="look-3" />
                                            <label htmlFor="look-3">Hospitals</label>
                                        </li>
                                        <li>
                                            <input type="checkbox" id="look-4" />
                                            <label htmlFor="look-4">Property buy, sell &amp; rent</label>
                                        </li>
                                        <li>
                                            <input type="checkbox" id="look-5" />
                                            <label htmlFor="look-5">Automobiles</label>
                                        </li>
                                        <li>
                                            <input type="checkbox" id="look-6" />
                                            <label htmlFor="look-6">Tution centeres</label>
                                        </li>
                                        <li>
                                            <input type="checkbox" id="look-7" />
                                            <label htmlFor="look-7">Spa and massage centeres</label>
                                        </li>
                                        <li>
                                            <input type="checkbox" id="look-8" />
                                            <label htmlFor="look-8">IT training centers</label>
                                        </li>
                                        <li>
                                            <input type="checkbox" id="look-9" />
                                            <label htmlFor="look-9">Sports training</label>
                                        </li>
                                        <li>
                                            <input type="checkbox" id="look-10" />
                                            <label htmlFor="look-10">Cab booking services</label>
                                        </li>
                                        <li>
                                            <input type="checkbox" id="look-11" />
                                            <label htmlFor="look-11">Bike and car mechanics</label>
                                        </li>
                                        <li>
                                            <input type="checkbox" id="look-12" />
                                            <label htmlFor="look-12">Home appliances</label>
                                        </li>
                                    </ul>
                                </form>
                            </div>
                            <span className="req-nxt req-nxt-1">Next</span>
                        </div>

                        <div className="req-pop-sec-2">
                            <h2>Fill this form</h2>
                            <p>Choose your category what you looking for</p>
                            <div className="v8-inputs">
                                <form>
                                    <ul>
                                        <li>
                                            <input type="textbox" placeholder="Enter your name" required />
                                        </li>
                                        <li>
                                            <input type="textbox" placeholder="Enter your email" />
                                        </li>
                                        <li>
                                            <input type="textbox" placeholder="Enter your mobile number" />
                                        </li>
                                        <li>
                                            <span className="rer-sub-btn">Submit</span>
                                        </li>
                                    </ul>
                                </form>
                            </div>
                            <span className="req-nxt req-nxt-1">Next</span>
                        </div>
                        <div className="req-pop-sec-3">
                            <div>
                                <h2>Success!</h2>
                                <p>Thanks for contacting us! We will get in touch with you shortly</p>
                                <img src={Thankyou} />
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </section>
        </>
  )
}

export default DefualtPopup
