import React from "react";
import PageTop from "../components/pageTop";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { Link } from "react-router-dom";

export default function Contact() {
  return (
    <div>
      <Header />
      <PageTop title="Contact Us" breadcrum="Home > Contact Us" />
      <div className="contactUsContent sectionPadding">
        <div className="top">
          <div className="left">
            <div>
              <p className="secDes1">Contact Us</p>
              <h1 className="secTitle">Get In Touch</h1>
              <p className="secDes2 contactDes">
                We'd love to hear from you! For any inquiries, feedback, or
                assistance, please reach out through the form on the right or
                visit us at our location below. Our team is here to help!
              </p>{" "}
            </div>
            <div className="contactUsElemContainer">
              <div className="contactUsElem">
                <img src="/Icons/callIcon.svg"></img>
                <a className="linkType1" href="tel:+91 8967856746">
                  8967856746
                </a>
              </div>
              <hr></hr>
              <div className="contactUsElem">
                <img src="/Icons/mailIcon.svg"></img>
                <a
                  className="linkType1"
                  href="mailto:help@footsoldierforhealth"
                >
                  help@footsoldierforhealth
                </a>
              </div>
              <hr></hr>
              <div className="contactUsElem">
                <img src="/Icons/locationIcon.svg"></img>
                <span>Bengalore, India</span>
              </div>
              <hr></hr>
              <div className="contactUsElem">
                <div className="contactUsSocial">
                  <Link className="linkType1" to="/">
                    <i class="fa-brands fa-facebook"></i>
                  </Link>
                  <Link className="linkType1" to="/">
                    <i class="fa-brands fa-square-x-twitter"></i>
                  </Link>
                  <Link className="linkType1" to="/">
                    <i class="fa-brands fa-linkedin"></i>
                  </Link>
                  <Link className="linkType1" to="/">
                    <i class="fa-brands fa-instagram"></i>
                  </Link>
                </div>
              </div>
            </div>
          </div>

          <div className="contact-form right">
            <form>
              <div className="form-group">
                <div className="form-field">
                  <label htmlFor="full-name">
                    Full Name <span>*</span>
                  </label>
                  <input
                    type="text"
                    id="full-name"
                    name="full-name"
                    placeholder="John Doe"
                    required
                  />
                </div>
                <div className="form-field">
                  <label htmlFor="number">
                    Number <span>*</span>
                  </label>
                  <input
                    type="tel"
                    id="number"
                    name="number"
                    placeholder="+91 1234567890"
                    required
                  />
                </div>
              </div>
              <div className="form-group">
                <div className="form-field">
                  <label htmlFor="email">
                    Email <span>*</span>
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    placeholder="you@example.com"
                    required
                  />
                </div>
                <div className="form-field">
                  <label htmlFor="subject">
                    Subject <span>*</span>
                  </label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    placeholder="Subject of Your Message"
                    required
                  />
                </div>
              </div>
              <div className="form-field">
                <label htmlFor="message">
                  Message <span>*</span>
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows="4"
                  placeholder="Type your message here..."
                  required
                ></textarea>
              </div>
              <button type="submit">Submit</button>
            </form>
          </div>
        </div>
        <div className="bottom">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d497698.77492875466!2d77.30126945310809!3d12.95445953149592!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae1670c9b44e6d%3A0xf8dfc3e8517e4fe0!2sBengaluru%2C%20Karnataka!5e0!3m2!1sen!2sin!4v1722633949302!5m2!1sen!2sin"
            className="googleMap"
            height="450"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Google Maps Location"
          ></iframe>
        </div>
      </div>
      <Footer />
    </div>
  );
}
