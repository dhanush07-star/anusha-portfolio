import React from "react";
import { Link } from "react-scroll";
import {
  FacebookShareButton,
  FacebookIcon,
  TwitterShareButton,
  TwitterIcon,
  RedditShareButton,
  RedditIcon,
  LinkedinShareButton,
  LinkedinIcon
} from "react-share";

const Footer = () => {
  return (
    <div className="footer">
      <div className="container">
        <div className="row">
          <div className="col-lg-4 col-md-6 col-sm-6">
            <div className="d-flex">
              <p>Sayoojyam Pallickal Naduvilemuri P.O. Pallickal, Mavelikara Taluk,
                  Alappuzha District, Kerala. 690503</p>
            </div>
            <div className="d-flex">
              <p>example@gmail.com</p>
            </div>
          </div>
          <div className="col-lg-3 col-md-2 col-sm-6">
            <div className="row">
              <div className="col">
                <Link smooth={true} to="home">Home <span className="sr-only">(current)</span></Link>
                <br />
                <Link smooth={true} to="about">about me</Link>
                <br />
                <Link smooth={true} to="services">works</Link>
              </div>
              <div className="col">
              <Link smooth={true} to="experience" >experience</Link>
                <br />
                <Link smooth={true} to="portfolio" >portfolio</Link>
                <br />
                <Link smooth={true} to="contacts">contacts</Link>
              </div>
            </div>
          </div>
          <div className="col-lg-5 col-md-5 col-sm-6 align-items-center">
            <div className="d-flex justify-content-center">
              <FacebookShareButton
                url={"https://www.facebook.com/anusha.sdas"}
                quote={"Chemist"}
                hashtag="#Chemist"
              >
                <FacebookIcon className="mx-3" size={36} />
              </FacebookShareButton>
              <TwitterShareButton
                url={""}
                quote={""}
                hashtag=""
              >
                <TwitterIcon className="mx-3" size={36} />
              </TwitterShareButton>
              {/* <RedditShareButton
                url={"https://www.youtube.com/8020coding"}
                quote={"FullStack Developer"}
                hashtag="#javascript"
              >
                <RedditIcon className="mx-3" size={36} />
              </RedditShareButton> */}
              <LinkedinShareButton
                url={""}
                quote={""}
                hashtag=""
              >
                <LinkedinIcon className="mx-3" size={36} />
              </LinkedinShareButton>
            </div>
            <p className="pt-3 text-center">
              Copyright&copy;
              {new Date().getFullYear()}&nbsp;| All Rights Reserved
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Footer;
