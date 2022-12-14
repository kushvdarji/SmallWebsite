import React from 'react'
import { Link, NavLink } from 'react-router-dom';
// import Cardi from './Cardi';
import "./App.css";

function About() {
  const handleSubmit=()=>
  {
    alert("Do You Really Want To Pay")
    //  {<Cardi/> }
  }
  return (
    <>
      {/* <h1>Hello</h1> */}
    
<div className="container-fluid">
    <NavLink to="/login/home"><button id='but' style={{borderRadius:"15%",padding:"5px 5px 5px 5px",textAlign:"left",display:'flex',margin:"left"}}>Back</button></NavLink>
  <div className="row justify-content-center">
    <div className="col-12 col-lg-11">
      <div className="card card0 rounded-0">
        <div className="row">
          <div className="col-md-5 d-md-block d-none p-0 box">
            <div className="card rounded-0 border-0 card1" id="bill">
              <h3 id="heading1">Payment Summary </h3>
              <div className="row">
                <div className="col-lg-7 col-8 mt-4 line pl-4">
                  <h2 className="bill-head">Electronics</h2>
                  <small className="bill-date">2017 Feb 10 at 10:30 PM</small>
                </div>
                <div className="col-lg-5 col-4 mt-4">
                  <h2 className="bill-head px-xl-5 px-lg-4">CAF</h2>
                </div>
              </div>
              <div className="row">
                <div className="col-lg-7 col-8 mt-4 line pl-4">
                  <h2 className="bill-head">Food</h2>
                  <small className="bill-date">2017 Feb 25 at 11:30 PM</small>
                </div>
                <div className="col-lg-5 col-4 mt-4">
                  <h2 className="bill-head px-xl-5 px-lg-4">JFK</h2>
                </div>
              </div>
              <div className="row">
                <div className="col-lg-7 col-8 mt-4 line pl-4">
                  <h2 className="bill-head">Grocery</h2>
                  <small className="bill-date">2017 Mar 17 at 10:45 PM</small>
                  {/* <br />
                   */}
                  <small className="bill-date">2017 Mar 18 at 11:45 PM</small>
                </div>
                <div className="col-lg-5 col-4 mt-4">
                  <h2 className="bill-head px-xl-5 px-lg-4">LHR</h2>
                </div>
              </div>
              <div className="row">
                <div className="col-lg-7 col-8 mt-4 line pl-4">
                  <h2 className="bill-head">Accessories</h2>
                  <small className="bill-date">2017 Apr 13 at 05:30 PM</small>
                </div>
                <div className="col-lg-5 col-4 mt-4">
                  <h2 className="bill-head px-xl-5 px-lg-4">JFK</h2>
                </div>
              </div>
              <div className="row">
                <div className="col-md-12 red-bg">
                  <p className="bill-date" id="total-label">
                    Total Price
                  </p>
                  <h2 className="bill-head" id="total">
                    $ 523.65
                  </h2>
                  <small className="bill-date" id="total-label">
                    Price includes all taxes
                  </small>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-7 col-sm-12 p-0 box">
            <div className="card rounded-0 border-0 card2" id="paypage">
              <div className="form-card">
                <h2 id="heading2" className="text-danger">
                  Payment Method & Anyone Can Transfer The MOney
                </h2>
                <div className="radio-group">
                  <div className="radio" data-value="credit">
                    <img
                      src="https://i.imgur.com/28akQFX.jpg"
                      width="200px"
                      height="60px" alt='...'
                    />
                  </div>
                  <div className="radio" data-value="paypal">
                    <img
                      src="https://i.imgur.com/5QFsx7K.jpg"
                      width="200px"
                      height="60px"
                      alt='...'
                    />
                  </div>
                  {/* <br /> */}
                </div>
                <label className="pay">Name on Card</label>
                <input type="text" name="holdername" placeholder="Darji Kush" />
                <div className="row">
                  <div className="col-8 col-md-6">
                    <label className="pay">Card Number</label>
                    <input
                      type="text"
                      name="cardno"
                      id="cr_no"
                      placeholder="0000-0000-0000-0000"
                      minLength={19}
                      maxLength={19}
                    />
                  </div>
                  <div className="col-4 col-md-6">
                    <label className="pay">CVV</label>
                    <input
                      type="password"
                      name="cvcpwd"
                      placeholder="●●●"
                      className="placeicon"
                      minLength={3}
                      maxLength={3}
                    />
                  </div>
                </div>
                <div className="row">
                  <div className="col-md-12">
                    <label className="pay">Expiration Date</label>
                  </div>
                  <div className="col-md-12">
                    <input
                      type="text"
                      name="exp"
                      id="exp"
                      placeholder="MM/YY"
                      minLength={5}
                      maxLength={5}
                    />
                  </div>
                </div>
                <div className="row">
                  <div className="col-md-6">
                   <Link to="login/home/cardi">
                   <button>Hello</button></Link>
                    <input
                      type="submit"
                      defaultValue="MAKE A PAYMENT   "
                      className="btn btn-success"
                      onClick={handleSubmit}
                      style={{borderRadius:"15px"}}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>
    </>
  )
}
export default About
