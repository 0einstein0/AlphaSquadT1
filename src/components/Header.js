import React from "react";
import { Link } from "react-router-dom";
export default function Header({ fixed }) {
  const [navbarOpen, setNavbarOpen] = React.useState(false);
  return (
    <>
      <nav className="relative flex h-auto flex-wrap items-center justify-between bg-opacity-80  bg-black mb-3">
        <div className="container  mx-auto flex flex-wrap items-center justify-between">
          <div className="w-full  relative flex justify-between lg:w-auto lg:static lg:block lg:justify-start">
            <img
              class=" -mt-4 mb-2 w-2/6"
              src="https://i.postimg.cc/vZd0rrJD/var1.png"
            />

            <button
              className="text-white cursor-pointer text-xl leading-none px-3 py-1 border border-solid border-transparent rounded bg-transparent block lg:hidden outline-none focus:outline-none"
              type="button"
              onClick={() => setNavbarOpen(!navbarOpen)}
            >
              <svg
                class="fill-current h-3 w-3"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <title>Menu</title>
                <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
              </svg>
            </button>
          </div>
          <div
            className={
              "lg:flex place-content-center flex-grow items-center" +
              (navbarOpen ? " flex" : " hidden")
            }
            id="example-navbar-danger"
          >
            <ul class="grid grid-flow-row mb-8 lg:mb-0 lg:flex lg:flex-wrap gap-4 text-center lg:flex-row list-none lg:ml-auto text-white">
              <li>
                <Link to="/">Overview</Link>
              </li>
              <li>
                <Link to="/Pricing">Pricing</Link>
              </li>
              <li>
                <Link to="/CaseStudies">Case Studies</Link>
              </li>
              <li>
                <Link to="/CaseStudiesInner">FAQ</Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}
