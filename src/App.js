import React from "react"
import Helmet from "react-helmet"
import { FaBars } from "react-icons/fa"
import { FiShoppingCart, FiSearch } from "react-icons/fi"
 import { MdClose } from "react-icons/md"
import anime from "animejs"
// import $ from "jquery"
import "./App.scss"

const ConverseLogo = () => (
  <svg id="header-img" viewBox="0 0 805.4 94" width="100%" height="100%" >
    <path d="M724.9 40.6V20.2l-11.6 16.5-19.3-6.3L706.1 47l-11.9 16.5 19.1-6.3 11.6 16.6V53.3l19.5-6.3-19.5-6.4z">
    </path>
    <path d="M762.6 0h-36.7l42.8 47-42.8 47h36.7l42.8-47-42.8-47zm-721 27.5c5.8 0 11.5 2.8 15.3 7.5l1.4 1.7 17.9-12.3-1.6-2c-7.9-9.9-20-15.6-33-15.6C18.7 6.8 0 24.7 0 46.6s18.7 39.8 41.6 39.8c12.9 0 24.9-5.6 32.8-15.3l1.6-2-17.9-12.3-1.4 1.7c-3.9 4.7-9.4 7.4-15.2 7.4-10.6 0-19.6-8.8-19.6-19.2.1-10.4 9.1-19.2 19.7-19.2zm192.3 23.9L201.5 9h-20.6v75h20V42l30.2 42h22.8V9h-20v42.4zm77 11c0 .6-.8.7-1.2.7-.3 0-.9-.1-1.2-.8L291.9 9h-23l24.5 75h32.7l24.5-75h-23l-16.7 53.4zm186.2-9c8-4.6 12.6-13 11.9-22.2-.9-12.5-11.8-22.1-24.8-22.1h-38.3v75h20v-27h9c.9 0 1.7.1 2.3.9l12.9 26.1h22.5l-15.5-30.7zM483.6 37H466v-8h17.6c2.4 0 4.4 1.6 4.4 4s-2 4-4.4 4zm124.3 47h60V64h-40v-9h36V37h-36v-8h40V9h-60v75zm-45.2-46.7c-10.7-2.4-13.8-4-13.8-7.5v-.2c0-2.8 2.1-5 7.3-5 6.9 0 12.5 2.2 20 6.7l12-14.2c-8.4-6.7-18.5-10.3-31.6-10.3-18.6 0-29.7 10.4-29.7 24.8v.2c0 15.9 13.1 20.6 29.6 24.3 10.5 2.4 13.4 4.2 13.4 7.4v.2c0 3.3-3.7 5.3-9.5 5.3-9 0-17.8-3.2-25.4-9.3L522.9 74c9.5 8.5 23.3 12.8 37 12.8 18.8 0 32-9.4 32-25.2v-.2c0-14.5-11.4-20.2-29.2-24.1zM124.8 6.9c-22.4 0-40.6 17.9-40.6 39.8 0 22 18.2 39.8 40.6 39.8 22.4 0 40.6-17.9 40.6-39.8 0-22-18.2-39.8-40.6-39.8zm0 58.8c-10.5 0-19-8.5-19-19s8.5-19 19-19 19 8.5 19 19-8.5 19-19 19zM364.9 84h60V64h-40v-9h36V37h-36v-8h40V9h-60v75z">
    </path>
  </svg>
)

const Header = () => (
  <div id="header" className="position-fixed">
    <nav id="nav-bar">
      <div className="d-flex"
        style={{ height: "50px", width: "100vw" }}
      >
        {/* toggle button */}
        <div className="col-3 d-flex d-md-none align-items-center justify-content-start">
          <button type="button" className="btn row" style={{ cursor: "pointer" }}
            onClick={() => {
              anime({
                targets: "#drawer",
                translateX: "100vw",
              })
            }}
          >
            <FaBars />
          </button>
        </div>
        <div className="col-6 col-md-9 col-lg-7 d-flex align-items-center justify-content-center justify-content-md-start">
          <div id="logo" className="px-2" style={{ maxWidth: "120px", fontSize: ".875rem", lineHeight: "1.15" }}>
            <ConverseLogo/>
          </div>

          {/* nav collapsed on breakpoint */}
          <div id="toggledNavItems" className="d-none d-md-flex">
            <div className="px-2">
              <span>New Arrival</span>
            </div>
            <div className="px-2">
              <span>Featured</span>
            </div>
            <div className="px-2">
              <span>Showcase</span>
            </div>
          </div>

        </div>
        <div className="col-3 col-md-3 col-lg-5 d-flex align-items-center justify-content-end">
          <div className="" style={{ cursor: "pointer" }}>
            <FiShoppingCart />
          </div>
          <div className="px-3" style={{ cursor: "pointer" }}>
            <FiSearch style={{ transform: "scaleX(-1)" }} />
          </div>
        </div>
      </div>
    </nav>
  </div>
)

const Drawer = () => (
  <div id="drawer" className="d-flex flex-column d-md-none"
    style={{
      height: "100vh",
      width: "100vw",
      // background: "rgb(255,255,0)",
      background: "rgb(255,255,255)",
      position: "fixed",
      left: "-100vw",
    }}
  >
    <div id="drawerHeader" className="d-flex justify-content-end"
      style={{
        height: "50px",
        // background: "pink"
      }}
    >
      <button type="button" className="btn px-3"
        onClick={() => {
          anime({
            targets: "#drawer",
            translateX: "-100vw",
          })
        }}
      >
        <MdClose />
      </button>
    </div>
    <div className="py-1">
      <span className="text-uppercase font-weight-bold h3" style={{ cursor: "pointer" }}>New Arrival</span>
    </div>
    <div className="py-1">
      <span className="text-uppercase font-weight-bold h3" style={{ cursor: "pointer" }}>Featured</span>
    </div>
    <div className="py-1">
      <span className="text-uppercase font-weight-bold h3" style={{ cursor: "pointer" }}>Showcase</span>
    </div>
  </div>
)
const App = () => (
  <div>
    <Helmet>
      <title>Converse Official Site. Converse.com</title>
      <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css" integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossOrigin="anonymous" />
    </Helmet>

    <div className="" style={{ height: "200vh" }}> {/* remove inline style later */}
      {/* Start content here */}
      <Header />
      <Drawer />
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
