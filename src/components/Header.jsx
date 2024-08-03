import React, { useEffect, useState, useContext } from "react";
import { Link } from "react-router-dom";
import { MenuContext } from "../context/menuOpenContext";

export default function Header() {
  const { isMenuOpen, toggleMenu } = useContext(MenuContext);
  const [isPageDown, setIsPageDown] = useState(false);

  function setPageDown() {
    setIsPageDown(true);
  }

  function setPageUp() {
    setIsPageDown(false);
  }

  function handleHamburger(){
    toggleMenu();
  }

  return (
    <div className="header">
      <div className="topHeader sectionPadding">
        <div className="thLocation">
          <img src="\Icons\locationIcon.svg"></img>
          <span>Demo Location</span>
        </div>
        <div className="thPhone">
          <img src="\Icons\callIcon.svg"></img>
          <span>+91 9369151305</span>
        </div>
        <div className="thEmail">
          <img src="\Icons\mailIcon.svg"></img>
          <span>help@footsoldierforhealth.com</span>
        </div>
        <div className="thSocial">
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
      <div className="bottomHeader sectionPadding">
        <div className="bhLeft">
          <img src="\images\FSH Logo Tranparent.png"></img>
        </div>

        <div className="hamburger">
          <img
            onClick={toggleMenu}
            className={isMenuOpen ? "hide" : "show"}
            src="\Icons\hamburger.svg"
          ></img>
          <img
            onClick={toggleMenu}
            className={isMenuOpen ? "show" : "hide"}
            src="\Icons\close.svg"
          ></img>
        </div>

        <div
          className={
            isMenuOpen ? "hamburgerList showFlex" : "hamburgerList hide"
          }
        >
          <div className="hamburgerLinks">
          <Link onClick={{handleHamburger}} className="hlLink" to="/home">
            Home
          </Link>
          <Link onClick={{handleHamburger}} className="hlLink" to="/about-us">
            About
          </Link>
          <Link onClick={{handleHamburger}} className="hlLink" to="/services">
            Services
          </Link>
          <Link onClick={{handleHamburger}} className="hlLink" to="/contact">
            Contact
          </Link>
          <Link onClick={{handleHamburger}} className="hlLink" to="/team">
            Team
          </Link>
          <Link onClick={{handleHamburger}} className="hlLink" to="/blogs">
            Blogs
          </Link>
          <Link onClick={{handleHamburger}} className="hlLink" to="/gallery">
            Gallery
          </Link>
          <Link onClick={{handleHamburger}} className="hlLink" to="/careers">
            Careers
          </Link>

          </div>
          
          <div className="hamburgerSocial">
            <a className="linkType1" href="/">
              <i class="fa-brands fa-facebook"></i>
            </a>
            <a className="linkType1" href="/">
              <i class="fa-brands fa-square-x-twitter"></i>
            </a>
            <a className="linkType1" href="/">
              <i class="fa-brands fa-linkedin"></i>
            </a>
            <a className="linkType1" href="/">
              <i class="fa-brands fa-instagram"></i>
            </a>
          </div>
        </div>

        <div className="bhRight">
          <Link className="linkType1" to="/home">
            Home
          </Link>
          <Link className="linkType1" to="/about-us">
            About
          </Link>
          <Link className="linkType1" to="/services">
            Services
          </Link>
          <Link
            onMouseOver={setPageDown}
            onMouseOut={setPageUp}
            className="linkType1 brPagesParent"
            to="/"
          >
            Pages{" "}
            <i
              class={
                isPageDown
                  ? "fa-solid fa-angle-up hoverEffect"
                  : "fa-solid fa-angle-down"
              }
            ></i>
            <div className={isPageDown ? "showFlex brPages" : "hide brPages"}>
              <Link className="link" to="/team">
                Teams
              </Link>
              <Link className="link" to="/blogs">
                Blogs
              </Link>
              <Link className="link" to="/gallery">
                Gallery
              </Link>
              <Link className="link" to="/careers">
                Careers
              </Link>
            </div>
          </Link>
          <Link className="linkType1 btn" to="/contact">
            Contact
          </Link>
        </div>
      </div>
    </div>
  );
}
