import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Transition } from "@headlessui/react";
import WebButton from "./WebButton";

function NavigBar() {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div>
      <nav className=" grid float-right  grid-flow-col auto-cols-max gap-4">
        <div className="max-w-7xl float-right  mx-auto lg:px-8">
          <div className="flex float-right  h-16">
            <div className="flex items-center ">
              <div className="hidden md:block">
                <div className="ml-10 grid grid-flow-col float-right  gap-32 items-baseline ">
                  <nav class="float-right">
                    <ul class="grid grid-flow-col place-content-center gap-8">
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
                  </nav>
                </div>
              </div>
            </div>
            <div className="md:hidden ml-14 w-full float-right">
              <button
                onClick={() => setIsOpen(!isOpen)}
                type="button"
                className=" p-2 mr-0 float-right rounded-md text-gray-700 hover:text-white hover:bg-gray-300 focus:outline-none  "
                aria-controls="mobile-menu"
                aria-expanded="false"
              >
                {!isOpen ? (
                  <svg
                    className=" block h-6 w-6"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M4 6h16M4 12h16M4 18h16"
                    />
                  </svg>
                ) : (
                  <svg
                    className="block h-6 w-6 "
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                )}
              </button>
            </div>
          </div>
        </div>

        <Transition
          show={isOpen}
          enter="transition ease-out duration-100 transform"
          enterFrom="opacity-0 scale-95"
          enterTo="opacity-100 scale-100"
          leave="transition ease-in duration-75 transform"
          leaveFrom="opacity-100 scale-100"
          leaveTo="opacity-0 scale-95"
        >
          {(ref) => (
            <div className="ml-10  float-right md:hidden" id="mobile-menu">
              <div ref={ref} className=" pt-2 float-right pb-3 space-y-1 ">
                <nav>
                  <ul class="-ml-14  text-center">
                    <li class="my-2">
                      <Link to="/">Overview</Link>
                    </li>
                    <li class="my-2">
                      <Link to="/Pricing">Pricing</Link>
                    </li>
                    <li class="my-2">
                      <Link to="/CaseStudies">Case Studies</Link>
                    </li>
                    <li class="my-2">
                      <Link to="/CaseStudiesInner">FAQ</Link>
                    </li>
                  </ul>
                </nav>
              </div>
            </div>
          )}
        </Transition>
      </nav>
    </div>
  );
}

export default NavigBar;
