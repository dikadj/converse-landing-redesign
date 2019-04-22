import React, { Component } from "react"
import Helmet from "react-helmet"
import anime from "animejs"
import { UncontrolledPopover } from "reactstrap"
import { ConverseLogo, ConverseLogoSimple, FaBars, FiShoppingCart, FiSearch, MdClose, FaFacebookF, FaInstagram, FaTwitter } from "./svg/icons"
import $ from "jquery"
import "./App.scss"

class CartButtonMd extends Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      cartOpen: false
    };
  }

  toggle() {
    this.setState({
      cartOpen: !this.state.cartOpen
    });
  }

  render() {
    return (
      <div className="d-none d-md-inline-block">
        <button type="button" id="cartButtonMd" className="btn">
          <FiShoppingCart />
        </button>
        <UncontrolledPopover trigger="legacy" placement="bottom" isOpen={this.state.cartOpen} target="cartButtonMd" toggle={this.toggle}>
          <h5 className="text-center text-uppercase font-weight-bold p-3 border-bottom"
            style={{
              background: "rgb(73, 176, 217)",
              color: "rgb(255,255,255)",
            }}
          >
            Your Shopping Cart
          </h5>
          <p className="px-3 text-center">
            You haven't put anything here. Don't leave it empty
          </p>
          <div id="cartActionMd" className="d-flex justify-content-center pb-3">
            <button type="button" className="c-button-blue-md px-3 py-2 text-uppercase font-weight-bold">Go Shopping</button>
          </div>
        </UncontrolledPopover>
      </div>
    );
  }
}

const Header = () => (
  <div id="header">
    <div className="fixed-top border-bottom"
      style={{
        background: "rgb(255,255,255)",
        borderBottomColor: "rgb(229, 229, 229)",
      }}
    >
      <nav id="nav-bar">
        <div className="d-flex"
          // later: make height 60px on medium view
          style={{ height: "50px", width: "100vw" }}
        >
          {/* toggle button */}
          <div className="col-3 d-flex d-md-none align-items-center justify-content-start">
            <button type="button" className="btn row" style={{ cursor: "pointer" }}
              onClick={() => {
                anime({
                  targets: "#navDrawer",
                  translateX: "100vw",
                })
              }}
            >
              <FaBars />
            </button>
          </div>
          <div className="col-6 col-md-9 col-lg-7 d-flex align-items-center justify-content-center justify-content-md-start">
            <a href="/" id="logo" className="px-2" style={{ maxWidth: "120px", fontSize: ".875rem", lineHeight: "1.15" }}>
              <ConverseLogo id="header-img"/>
            </a>

            {/* nav collapsed on breakpoint */}
            <div id="toggledNavItems" className="d-none d-md-flex">
              <div className="nav-link px-2">
                <a href="#newArrival">New Arrival</a>
              </div>
              <div className="nav-link px-2">
                <a href="#featured">Featured</a>
              </div>
              <div className="nav-link px-2">
                <a href="#showcase">Showcase</a>
              </div>
            </div>

          </div>
          <div className="col-3 col-md-3 col-lg-5 d-flex align-items-center justify-content-end">
            {/* sm view */}
            <button type="button" className="btn d-md-none"
              onClick={() => {
                anime({
                  targets: "#cartDrawer",
                  translateX: "100vw",
                })
              }}
            >
              <FiShoppingCart />
            </button>
            {/* md view */}
            <CartButtonMd />

            {/* sm view */}
            <button type="button" className="btn d-md-none"
              onClick={() => {
                anime({
                  targets: "#searchDrawer",
                  translateX: "100vw",
                })
              }}
            >
              <FiSearch style={{ transform: "scaleX(-1)" }} />
            </button>
            {/* md view */}
            <div>
              {/* later: put on an input group */}
              <input id="searchReveal" type="search" className="d-none px-3 py-2" placeholder="Search..."
                onFocus={() => {
                  anime({
                    targets: "#searchReveal",
                    update: () => {
                      $("#searchReveal").css({ width: "150px" })
                    },
                  })
                  anime({
                    targets: "#searchIconMd",
                    scaleX: "1",
                  })
                }}
                onBlur={(e) => {
                  anime({
                    targets: "#searchReveal",
                    update: () => {
                      $("#searchReveal").css({ width: "0" })
                    },
                  })
                  anime({
                    targets: "#searchIconMd",
                    scaleX: "-1",
                  })
                  $("#searchReveal").toggleClass("d-md-inline-block")
                }}
              />
              <button type="button" id="searchButtonMd" className="btn d-none d-md-inline-block"
                onClick={(e) => {
                  $("#searchReveal").css({ width: "0" })
                  $("#searchReveal").toggleClass("d-md-inline-block")
                  $("#searchReveal").focus()
                }}
              >
                <FiSearch id="searchIconMd" style={{ transform: "scaleX(-1)" }} />
              </button>
            </div>
          </div>
        </div>
      </nav>
    </div>

    <div id="highlightSection" className="d-md-flex flex-column" style={{ marginTop: "50px" }}>

      {/* on small view */}
      <div id="headline-sm" className="py-4 px-3 d-md-none">
        <h2 className="text-uppercase font-weight-bolder">
          Count Down <br />To Summer
        </h2>
      </div>

      {/* on medium view */}
      <div className="d-none d-md-flex flex-row">
        <div style={{ flex: "1" }}>
          <div id="headline-md d-flex flex-column">
            <div className="d-flex" style={{ flex: "1"}}>
              <div style={{ flex: "1" }}>
                <div className="position-relative">
                  <div className="position-absolute d-flex" style={{ width: "100%", height: "100%", color: "rgb(255,255,255)" }}>
                    <div className="p-3">
                      <h1 className="text-uppercase font-weight-bold">
                        Count Down <br />To Summer
                      </h1>
                      <div id="highlightAction-sm" className="d-flex flex-column"
                        style={{
                          width: "200px",
                        }}
                      >
                        <button type="button" className="c-button-light-md border-0 px-3 py-2 mt-3 font-weight-normal c-button-dark">
                           Shop Crochet Styles
                        </button>
                        <button type="button" className="c-button-light-md border-0 px-3 py-2 mt-3 font-weight-normal c-button-dark">
                          Shop New Arrivals
                        </button>
                      </div>
                    </div>
                  </div>
                  <img src={require("./img/highlight.jpg")} alt="highlight" width="100%" />
                </div>
              </div>
            </div>
            <div className="d-flex" style={{ flex: "1" }}>
              <div style={{ flex: "1" }}>
                <div className="position-relative">
                  <span className="position-absolute p-3" style={{ zIndex: "1" }}>Custom Crochet</span>
                  <a href="/" className="position-absolute d-flex highlight-cover px-3 py-2" style={{ width: "100%", height: "101%", zIndex: "2" }}>
                    <h3 className="align-self-end text-uppercase font-weight-bold">
                      Shop <br />Festival By <br />You
                    </h3>
                  </a>
                  <img src={require("./img/highlight2.gif")} alt="highlight2" width="100%" />
                  {/*
                    img src:
                    https://www.converse.com/on/demandware.static/-/Library-Sites-SharedLibrary/default/dwdc094d11/firstspirit/media/homepage_1/2019_summer_1/04_12/dt_79/D-Homepage-4-11-Crochet-Custom_Animation-On-Body.gif
                    */}
                </div>
              </div>
              <div style={{ flex: "1" }}>
                <div className="position-relative">
                  <span className="position-absolute p-3" style={{ zIndex: "1", color: "rgb(255,255,255)" }}>Chuck 70</span>
                  <a href="/" className="position-absolute d-flex highlight-cover px-3 py-2" style={{ width: "100%", height: "100%", zIndex: "2" }}>
                    <h3 className="align-self-end text-uppercase font-weight-bold">
                      Shop <br />Summer <br />Whites
                    </h3>
                  </a>

                  <img src={require("./img/highlight3.jpg")} alt="highlight3" width="100%" />
                  {/*
                    img src:
                    https://www.converse.com/on/demandware.static/-/Library-Sites-SharedLibrary/default/dw70210dd9/firstspirit/media/homepage_1/2019_summer_1/04_12/dt_79/D-Homepage-4-11-P1-Mens-Chuck70-image-3-shoe-SU19.jpg
                  */}
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* md view */}
        <div id="highlight1-md" className="position-relative"
          style={{
            flex: "1",
            backgroundImage: `url(${require("./img/highlight1.jpg")})`,
            backgroundSize: "cover",
            backgroundPosition: "top right",
          }}
        >
          <a href="/" className="position-absolute d-flex highlight-cover px-3 py-2" style={{ width: "100%", height: "100%" }}>
            <h1 className="align-self-end text-uppercase font-weight-bold">
              Shop <br />Crochet Styles
            </h1>
          </a>
          {/* <img src={require("./img/highlight1.jpg")} alt="highlight1" width="100%" /> */}
        </div>
      </div>
    </div>

    {/* sm view */}
    <div id="highlight1-sm" className="d-md-none">
      <img src={require("./img/highlight1.jpg")} className=""
        // img source:
        // https://www.converse.com/on/demandware.static/-/Library-Sites-SharedLibrary/default/dwc7a95fe1/firstspirit/media/homepage_1/2019_summer_1/04_12/mob_78/M-Homepage-4-11-Dashboard1-Crochet-image-1-shoe-SU19.jpg
        alt="highlight1"
        style={{ maxWidth: "100%", objectFit: "cover" }}
      />
    </div>
  </div>
)

const Drawer = ({ el, children }) => (
  <div id={el+"Drawer"} className="fixed-top d-flex flex-column d-md-none"
    style={{
      height: "100vh",
      width: "100vw",
      // background: "rgb(255,255,0)",
      background: "rgb(255,255,255)",
      position: "fixed",
      left: "-100vw",
    }}
  >
    <div id={el+"DrawerHeader"} className="d-flex justify-content-between"
      style={{
        height: "50px",
        fontSize: ".875rem",
        lineHeight: "1.15",
      }}
    >
      <div className="ml-3" style={{ width: "20px" }}>
        <ConverseLogoSimple />
      </div>
      <button type="button" className="btn mr-3"
        onClick={() => {
          anime({
            targets: `#${el}Drawer`,
            translateX: "-100vw",
          })
        }}
      >
        <MdClose />
      </button>
    </div>
    <div className="ml-3">
      {children}
    </div>
  </div>
)

const NavDrawer = () => {
  const el = "nav"
  return (
    <Drawer el={el}>
      <div className="py-1">
        <a href="#newArrival" className="text-uppercase font-weight-bold h3"
          onClick={() => {
            anime({
              targets: `#${el}Drawer`,
              translateX: "-100vw",
            })
          }}
        >
          New Arrival
        </a>
      </div>
      <div className="py-1">
        <a href="#featured" className="text-uppercase font-weight-bold h3"
          onClick={() => {
            anime({
              targets: `#${el}Drawer`,
              translateX: "-100vw",
            })
          }}
        >
          Featured
        </a>
      </div>
      <div className="py-1">
        <a href="#showcase" className="text-uppercase font-weight-bold h3"
          onClick={() => {
            anime({
              targets: `#${el}Drawer`,
              translateX: "-100vw",
            })
          }}
        >
          Showcase
        </a>
      </div>
    </Drawer>
  )
}

const CartDrawer = () => {
  const el = "cart"
  return (
    <Drawer el={el}>
      <div className="py-1 small">
        <h1 className="text-uppercase font-weight-bold h3">
          Your Shopping Cart
        </h1>
        <p>You haven't put anything here. Don't leave it empty</p>
      </div>
    </Drawer>
  )
}

const SearchDrawer = () => {
  const el = "search"
  return (
    <Drawer el={el}>
      <div className="py-1 small">
        <div className="input-group">
          <input type="search" id="searchField" className="px-3 py-2 border-right-0 form-control" placeholder="What are you looking for?"
            onKeyUp={(e) => {
              // onEnterKey
              if (e.keyCode === 13 ) {
                $("#searchButton").click()
              }
            }}
          />
          <button type="button" id="searchButton" className="px-3 py-2 mr-3 font-weight-bold c-button-dark-md input-group-append border-left-0"
            onClick={() => {
              if ($("#searchField")[0].value.length > 0) {
                $("#searchResult").html(`
                  <p>Result for "${$("#searchField")[0].value}":</p>
                  <ul>
                    <li>${$("#searchField")[0].value} 1</li>
                    <li>${$("#searchField")[0].value} 2</li>
                    <li>${$("#searchField")[0].value} 3</li>
                  </ul>
                  `)
              }
              $("#searchField")[0].value = ""
            }}
          >
            <FiSearch style={{ transform: "scaleX(-1)" }} />
          </button>
        </div>
        <div id="searchResult" className="m-3">
          {/* later: clear result when drawer is closed */}

        </div>
      </div>
    </Drawer>
  )
}

const NewArrivalActionSm = () => (
  <div id="newArrivalAction-sm" className="d-flex d-md-none flex-column px-3 py-4">
    <button type="button" className="border-0 px-5 py-3 mt-3 font-weight-bold c-button-dark-sm">
       Shop Crochet Styles
    </button>
    <button type="button" className=" px-5 py-3 mt-3 font-weight-bold c-button-light-sm">
      Shop New Arrivals
    </button>
  </div>
)

const NewArrivalImgSm = () => (
  <div id="NewArrivalImgSm" className="d-md-none">
    <img src={require("./img/highlight4.gif")} alt="highlight4" width="100%" height="100%" />
  </div>
)

const NewArrival = () => (
  <div id="newArrival" className="d-md-flex" style={{ background: "rgb(0,0,0)" }}>
    <div className="px-3 py-5 small"
      style={{ background: "rgb(0,0,0)", flex: "1" }}
    >
      <span style={{ color: "rgb(255,255,255)" }}>Available Now</span>
      <h1>
        <span className="text-uppercase font-weight-bold"
          style={{
            textShadow: "1px 0 rgb(255,255,255), -1px 0 rgb(255,255,255), 0 1px rgb(255,255,255), 0 -1px rgb(255,255,255), 0.65px 0.65px rgb(255,255,255), -0.65px -0.65px rgb(255,255,255), 0.65px -0.65px rgb(255,255,255), -0.65px 0.65px rgb(255,255,255)",
            color: "rgb(0,0,0)"
          }}
        >
          Converse X
        </span>
        <br />
        <span className="text-uppercase font-weight-bold"
          style={{ color: "rgb(255,255,255)" }}
        >
          JW Anderson
        </span>
      </h1>
      <p
        style={{ color: "rgb(255,255,255)" }}
      >
        While existing at different ends of the fashion spectrum,
        Converse x JW Anderson celebrates and explores the
        provocative, daring space of opposing ideas and
        complementary ideals.
      </p>
      {/* sm view */}
      <div id="featuredAction-sm" className="d-flex d-md-none flex-column pb-4">
        <button type="button" className=" px-5 py-3 mt-3 font-weight-bold c-button-light-sm">
          Shop Now
        </button>
        <button type="button" className=" px-5 py-3 mt-3 font-weight-bold c-button-dark-sm">
          See the Story
        </button>
      </div>
      {/* md view */}
      <div id="featuredAction-md" className="d-none d-md-flex">
        <button type="button" className=" px-3 py-2 font-weight-bold c-button-light-sm">
          Shop Now
        </button>
        <button type="button" className=" px-3 py-2 ml-3 font-weight-bold c-button-light-sm">
          See the Story
        </button>
      </div>
    </div>
    <div className="d-none d-md-flex"
      style={{ flex: "1" }}
    >
      {/* md view */}
      <div style={{ height: "auto" }}>
        <img className="d-none d-md-flex img-fluid" src={require("./img/highlight4-md.gif")} alt="highlight4Md" />
      </div>
    </div>
  </div>
)

const FeaturedImgSm = () => (
  <div id="featuredImgSm" className="d-md-none">
    <img className="img-fluid" src={require("./img/highlight5.jpg")} alt="highlight5" width="100%" height="100%"/>
  </div>
)

const Featured = () => (
  <div id="featured" className="d-md-flex" style={{ background: "rgb(0,0,0)" }}>
    {/* md view */}
    <div id="featuredImgMd" className="d-none d-md-flex"
      style={{ flex: "1" }}
    >
      <div style={{ height: "auto" }}>
        <img className="img-fluid" src={require("./img/highlight5-md.jpg")} alt="highlight5Md" />
      </div>
    </div>
    <div className="px-3 py-5 small"
      style={{ background: "rgb(0,0,0)", flex: "1" }}
    >
      <span style={{ color: "rgb(255,255,255)" }}>Available May 2019</span>
      <h1>
        <span className="text-uppercase font-weight-bold"
          style={{
            color: "rgb(255,255,255)"
          }}
        >
          Back to Where
        </span>
        <br />
        <span className="text-uppercase font-weight-bold"
          style={{ color: "rgb(255,255,255)" }}
        >
          It All Started
        </span>
      </h1>
      <p
        style={{ color: "rgb(255,255,255)" }}
      >
        Iconic Converse Basketball design meets the best of Nike innovation in the All Star Pro BB.
      </p>
      {/* sm view */}
      <div id="featuredAction-sm" className="d-flex d-md-none flex-column">
        <button type="button" className=" px-5 py-3 mt-3 font-weight-bold c-button-dark-md">
          Sign Up To Get Notified
        </button>
        <button type="button" className=" px-5 py-3 mt-3 font-weight-bold c-button-dark-md">
          See the Story
        </button>
      </div>
      {/* md view */}
      <div id="featuredAction-md" className="d-none d-md-flex">
        <button type="button" className=" px-3 py-2 font-weight-bold c-button-dark-md">
          Sign Up To Get Notified
        </button>
        <button type="button" className=" px-3 py-2 ml-3 font-weight-bold c-button-dark-md">
          See the Story
        </button>
      </div>
    </div>
  </div>
)

const Showcase = () => (
  <div id="showcase" className="d-md-flex" style={{ background: "rgb(255,255,255)" }}>
    <div className="px-3 py-5 small"
      style={{ background: "rgb(255,255,255)", flex: "1" }}
    >
      {/* sm view */}
      <h1 className="d-md-none" style={{ color: "rgb(0,0,0)" }}>
        <span className="text-uppercase font-weight-bold">
          The Festival
        </span>
        <br />
        <span className="text-uppercase font-weight-bold">
          Line Up
        </span>
      </h1>
      {/* md view */}
      <h1 className="d-none d-md-block" style={{ color: "rgb(0,0,0)" }}>
        <span className="text-uppercase font-weight-bold">
          The
        </span>
        <br />
        <span className="text-uppercase font-weight-bold">
          Festival
        </span>
        <br />
        <span className="text-uppercase font-weight-bold">
          Line Up
        </span>
      </h1>
      <p
        style={{ color: "rgb(0,0,0)" }}
      >
        Because let's face it – your outfit is the main attraction.          </p>
      {/* sm view */}
      <div id="showcaseAction-sm" className="d-flex d-md-none flex-column">
        <button type="button" className=" px-5 py-3 mt-3 font-weight-bold c-button-light-md">
          Shop Festival Styles
        </button>
        <button type="button" className=" px-5 py-3 mt-3 font-weight-bold c-button-light-md">
          Shop All Chucks
        </button>
      </div>
      {/* md view */}
      <div id="showcaseAction-md" className="d-none d-md-flex">
        <button type="button" className=" px-3 py-2 font-weight-bold c-button-light-md">
          Shop Festival Styles
        </button>
        <button type="button" className=" px-3 py-2 ml-3 font-weight-bold c-button-light-md">
          Shop All Chucks
        </button>
      </div>
    </div>
    {/* md view */}
    <div id="showcaseImgMd" className="d-none d-md-flex"
      style={{ flex: "1", background: "rgb(0,0,0)" }}
    >
      <iframe id="video" className="img-fluid" title="Showcase Video" width="100%" height="100%" src="https://www.youtube.com/embed/IoB_hLKxrUw" frameBorder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
    </div>
  </div>
)

const ShowcaseVidSm = () => (
  <div id="showcaseVidSm" className="d-md-none" style={{ background:"rgb(0,0,0)" }}>
    <iframe id="video" title="Showcase Video" width="100%" height="378" src="https://www.youtube.com/embed/IoB_hLKxrUw" frameBorder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
  </div>
)

const Subscribe = () => (
  <div id="subscribe" className="d-md-flex" style={{ background: "rgb(73, 176, 217)" }}>
    {/* md view */}
    <div id="featuredImgMd" className="d-none d-md-flex"
      style={{ flex: "1" }}
    >
      <div style={{ height: "auto" }}>
        <img className="img-fluid pl-3" src={require("./img/highlight6-md.jpg")} alt="highlight6Md" />
      </div>
    </div>
    <div className="px-3 py-4 small"
      style={{ background: "rgb(73, 176, 217)", flex: "1" }}
    >
      <h1>
        <span className="text-uppercase font-weight-bold"
          style={{
            color: "rgb(255,255,255)"
          }}
        >
          News on The New
        </span>
      </h1>
      <p
        style={{ color: "rgb(0,0,0)" }}
      >
        We’ll send you the latest news on deals, product launches, collaborations and more when you sign up for emails.
      </p>
      {/* sm view */}
      <form id="form" className="d-flex d-md-none flex-column"
        action="https://www.freecodecamp.com/email-submit" method="POST"
      >
        <input id="email" type="email" className="px-3 py-3" placeholder="Enter your email address..." required />
        <input id="submit" type="submit" className="px-5 py-3 font-weight-bold c-button-blue-md" value="Sign Up for Emails" />
      </form>
      {/* md view */}
      <form id="form" className="d-none d-md-flex input-group"
        action="https://www.freecodecamp.com/email-submit" method="POST"
      >
        <input id="email" type="email" className="px-3 py-2 border-right-0" placeholder="Enter your email address..." required />
        <input id="submit" type="submit" className="px-3 py-2 font-weight-bold c-button-blue-md input-group-append border-left-0" value="Sign Up for Emails" />
      </form>
    </div>
  </div>
)

const SubscribeImgSm = () => (
  <div id="subscribeImgSm" className="d-md-none">
    <img className="img-fluid" src={require("./img/highlight6.jpg")} alt="highlight6" width="100%" height="100%"/>
  </div>
)

const Social = () => (
  <div id="social" className="px-3 py-5">
    <h1 className="text-center text-md-left font-weight-bold small">
      Follow Us:
    </h1>
    <div className="d-flex justify-content-center justify-content-md-start">
      {/* sm view */}
      <button className="p-3 d-md-none c-button-light-sm" style={{ border: "none" }}>
        <FaFacebookF />
      </button>
      <button className="p-3 d-md-none c-button-light-sm" style={{ border: "none" }}>
        <FaInstagram />
      </button>
      <button className="p-3 d-md-none c-button-light-sm" style={{ border: "none" }}>
        <FaTwitter />
      </button>
      {/* md view */}
      <button type="button" className="px-4 py-3 d-none d-md-flex c-button-light-md" style={{ border: "none" }}>
        <FaFacebookF />
      </button>
      <button type="button" className="px-4 py-3 d-none d-md-flex c-button-light-md" style={{ border: "none" }}>
        <FaInstagram />
      </button>
      <button type="button" className="px-4 py-3 d-none d-md-flex c-button-light-md" style={{ border: "none" }}>
        <FaTwitter />
      </button>
    </div>
  </div>
)

const Footer = () => (
  <div id="footer" className="d-flex justify-content-between small" style={{ height: "50px", background: "rgb(0,0,0)" }}>
    <div className="d-flex align-self-center justify-content-between px-3" style={{ color: "rgba(255,255,255,0.65)" }}>
      <span className="mr-3" style={{ cursor: "pointer" }}>Contact Us</span>
      <span className="mr-3" style={{ cursor: "pointer" }}>Terms of Use</span>
      <span className="mr-3" style={{ cursor: "pointer" }}>Privacy Policy</span>
    </div>
    <span className="align-self-center px-3" style={{ color: "rgba(255,255,255,0.65)" }}>&copy; 2019 Converse</span>
  </div>
)

const App = () => (
  <div>
    <Helmet>
      <title>Converse Official Site. Converse.com</title>
      <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css" integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossOrigin="anonymous" />
    </Helmet>

    <div className="">
      {/* Start content here */}
      <Header />
      <NavDrawer />
      <CartDrawer />
      <SearchDrawer />
      <NewArrivalActionSm />
      <NewArrivalImgSm />
      <NewArrival />
      <FeaturedImgSm />
      <Featured />
      <Showcase />
      <ShowcaseVidSm />
      <Subscribe />
      <SubscribeImgSm />
      <Social />
      <Footer />
      {/* End content here */}
    </div>

    <script src="https://code.jquery.com/jquery-3.3.1.slim.min.js" integrity="sha384-q8i/X+965DzO0rT7abK41JStQIAqVgRVzpbzo5smXKp4YfRvH+8abtTE1Pi6jizo" crossOrigin="anonymous"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.7/umd/popper.min.js" integrity="sha384-UO2eT0CpHqdSJQ6hJty5KVphtPhzWj9WO1clHTMGa3JDZwrnQq4sF86dIHNDz0W1" crossOrigin="anonymous"></script>
    <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/js/bootstrap.min.js" integrity="sha384-JjSmVgyd0p3pXB1rRibZUAYoIIy6OrQ6VrjIEaFf/nJGzIxFDsf4x0xIM+B07jRM" crossOrigin="anonymous"></script>
  </div>
)

export default App

// later:
// * view page source on converse official site
// * look for fade in effect
