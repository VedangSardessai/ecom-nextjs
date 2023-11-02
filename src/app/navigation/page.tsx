"use client";
import Link from "next/link";
import React from "react";
import { useState, useEffect } from "react";
import OverlayComponent from "../overlay/page";

export default function NavigationComponent() {
  const [isWomenNavOpen, setIsWomenNavOpen] = useState(false);
  const [isMenNavOpen, setIsMenNavOpen] = useState(false);
  const [isNavOpen, setIsNavOpen] = useState(false);

  const toggleWomenNav = () => {
    setIsWomenNavOpen(!isWomenNavOpen);
    setIsMenNavOpen(false);
  };

  const toggleMenNav = () => {
    setIsMenNavOpen(!isMenNavOpen);
    setIsWomenNavOpen(false);
  };

  const toggleMobileMenu = () => {
    setIsNavOpen(!isNavOpen);
    console.log(isNavOpen);
  };

  return (
    <div className="bg-white">
      <div className="relative  lg:hidden" role="dialog" aria-modal="true">
        <div
          className={`fixed bg-black bg-opacity-75 z-30 ${
            isNavOpen ? "inset-0" : "inset-none"
          }`}
        ></div>
        {/* This is the mobile menu */}
        {isNavOpen && (
          <div className="fixed inset-0 z-30 flex">
            <div className="relative flex w-full max-w-xs flex-col overflow-y-auto bg-white pb-12 shadow-xl">
              <div className="flex px-4 pb-2 pt-5">
                <button
                  onClick={toggleMobileMenu}
                  type="button"
                  className="relative -m-2 inline-flex items-center justify-center rounded-md p-2 text-gray-400"
                >
                  <span className="absolute -inset-0.5"></span>
                  <span className="sr-only">Close menu</span>
                  <svg
                    className="h-6 w-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                </button>
              </div>

              <div className="mt-2">
                <div className="border-b border-gray-200">
                  <div
                    className="-mb-px flex space-x-8 px-4"
                    aria-orientation="horizontal"
                    role="tablist"
                  >
                    <button
                      id="tabs-1-tab-1"
                      className={`border-transparent bg-${
                        isWomenNavOpen ? "black" : "white"
                      } text-${
                        isWomenNavOpen ? "white" : "gray - 900"
                      } flex-1 whitespace-nowrap border-b-2 px-1 py-4 text-base font-medium`}
                      aria-controls="tabs-1-panel-1"
                      role="tab"
                      type="button"
                      onClick={toggleWomenNav}
                    >
                      Women
                    </button>
                    <button
                      id="tabs-1-tab-2"
                      className={`border-transparent bg-${
                        isMenNavOpen ? "black" : "white"
                      } text-${
                        isMenNavOpen ? "white" : "gray - 900"
                      } flex-1 whitespace-nowrap border-b-2 px-1 py-4 text-base font-medium`}
                      aria-controls="tabs-1-panel-2"
                      role="tab"
                      type="button"
                      onClick={toggleMenNav}
                    >
                      Men
                    </button>
                  </div>
                </div>

                {isWomenNavOpen && (
                  <div
                    id="tabs-1-panel-1"
                    className="space-y-0 px-4 pb-8 pt-10"
                    aria-labelledby="tabs-1-tab-2"
                    role="tabpanel"
                    tabIndex={0}
                  >
                    <div className="grid grid-cols-2 gap-x-4"></div>
                    <div>
                      <ul
                        role="list"
                        aria-labelledby="women-clothing-heading-mobile"
                        className="mt-6 flex flex-col space-y-6"
                      >
                        <li className="flow-root">
                          <Link
                            onClick={() => {
                              setIsNavOpen(false);
                            }}
                            href="/products/tops"
                            className="-m-2 block p-2 text-gray-500"
                          >
                            Tops
                          </Link>
                        </li>
                        <li className="flow-root">
                          <Link
                            onClick={() => {
                              setIsNavOpen(false);
                            }}
                            href="/products/womens-dresses"
                            className="-m-2 block p-2 text-gray-500"
                          >
                            Dresses
                          </Link>
                        </li>
                        <li className="flow-root">
                          <Link
                            onClick={() => {
                              setIsNavOpen(false);
                            }}
                            href="/products/womens-shoes"
                            className="-m-2 block p-2 text-gray-500"
                          >
                            Shoes
                          </Link>
                        </li>
                        <li className="flow-root">
                          <Link
                            onClick={() => {
                              setIsNavOpen(false);
                            }}
                            href="womens-watches"
                            className="-m-2 block p-2 text-gray-500"
                          >
                            Watches
                          </Link>
                        </li>
                        <li className="flow-root">
                          <Link
                            onClick={() => {
                              setIsNavOpen(false);
                            }}
                            href="/products/womens-bags"
                            className="-m-2 block p-2 text-gray-500"
                          >
                            Bags
                          </Link>
                        </li>
                        <li className="flow-root">
                          <Link
                            onClick={() => {
                              setIsNavOpen(false);
                            }}
                            href="/products/womens-jewellery"
                            className="-m-2 block p-2 text-gray-500"
                          >
                            Jewellery
                          </Link>
                        </li>
                      </ul>
                    </div>
                  </div>
                )}

                {isMenNavOpen && (
                  <div
                    id="tabs-1-panel-2"
                    className="space-y-10 px-4 pb-8 pt-10"
                    aria-labelledby="tabs-1-tab-2"
                    role="tabpanel"
                    tabIndex={0}
                  >
                    <div>
                      <ul
                        role="list"
                        aria-labelledby="men-clothing-heading-mobile"
                        className="mt-6 flex flex-col space-y-6"
                      >
                        <li className="flow-root">
                          <Link
                            onClick={() => {
                              setIsNavOpen(false);
                            }}
                            href="/products/mens-shirts"
                            className="-m-2 block p-2 text-gray-500"
                          >
                            Shirts
                          </Link>
                        </li>
                        <li className="flow-root">
                          <Link
                            onClick={() => {
                              setIsNavOpen(false);
                            }}
                            href="/products/mens-shoes"
                            className="-m-2 block p-2 text-gray-500"
                          >
                            Shoes
                          </Link>
                        </li>
                        <li className="flow-root">
                          <Link
                            onClick={() => {
                              setIsNavOpen(false);
                            }}
                            href="/products/mens-watches"
                            className="-m-2 block p-2 text-gray-500"
                          >
                            Watches
                          </Link>
                        </li>
                        <li className="flow-root">
                          <Link
                            onClick={() => {
                              setIsNavOpen(false);
                            }}
                            href="/products/sunglasses"
                            className="-m-2 block p-2 text-gray-500"
                          >
                            Sunglasses
                          </Link>
                        </li>
                      </ul>
                    </div>
                  </div>
                )}
              </div>

              <div className="space-y-6 border-t border-gray-200 px-4 py-6">
                <div className="flow-root">
                  <Link
                    onClick={() => {
                      setIsNavOpen(false);
                    }}
                    href="/"
                    className="-m-2 block p-2 font-medium text-gray-900"
                  >
                    Home
                  </Link>
                </div>
                <div className="flow-root">
                  <Link
                    onClick={() => {
                      setIsNavOpen(false);
                    }}
                    href="/login"
                    className="-m-2 block p-2 font-medium text-gray-900"
                  >
                    Log in
                  </Link>
                </div>
                <div className="flow-root">
                  <Link
                    onClick={() => {
                      setIsNavOpen(false);
                    }}
                    href="/signup"
                    className="-m-2 block p-2 font-medium text-gray-900"
                  >
                    Create account
                  </Link>
                </div>
              </div>

              <div className="border-t border-gray-200 px-4 py-6">
                <Link
                  onClick={() => {
                    setIsNavOpen(false);
                  }}
                  href="#"
                  className="-m-2 flex items-center p-2"
                >
                  <img
                    src="https://duckduckgo.com/i/69626059.png"
                    alt=""
                    className="block h-auto w-5 flex-shrink-0"
                  />
                  <span className="ml-3 block text-base font-medium text-gray-900">
                    INR
                  </span>
                  <span className="sr-only">, change currency</span>
                </Link>
              </div>
            </div>
          </div>
        )}
      </div>

      <header className="relative bg-white">
        <p className="flex h-10 items-center justify-center bg-indigo-600 px-4 text-sm font-medium text-white sm:px-6 lg:px-8">
          Get free delivery on orders over ₹1999
        </p>

        <nav
          aria-label="Top"
          className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8"
        >
          {/* This is the large screen menu */}
          <div className="border-b border-gray-200">
            <div className="flex h-16 items-center">
              <button
                type="button"
                className="relative rounded-md bg-white p-2 text-gray-400 lg:hidden"
                onClick={toggleMobileMenu}
              >
                <span className="absolute -inset-0.5"></span>
                <span className="sr-only">Open menu</span>
                <svg
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
                  />
                </svg>
              </button>

              <div className="hidden lg:ml-8 lg:block lg:self-stretch">
                <div className="flex h-full space-x-8">
                  <div className="flex">
                    <div className="relative flex">
                      <button
                        type="button"
                        className={`border-transparent bg-${
                          isWomenNavOpen ? "black" : "white"
                        } text-${
                          isWomenNavOpen ? "white" : "gray - 900"
                        } flex-1 whitespace-nowrap border-b-2 px-4 py-1 text-base font-medium m-2  rounded-sm`}
                        aria-expanded="false"
                        onClick={toggleWomenNav}
                      >
                        Women
                      </button>
                    </div>

                    <div className="absolute inset-x-0 top-full text-sm text-gray-500">
                      <div
                        className="absolute inset-0 top-1/2 bg-white shadow"
                        aria-hidden="true"
                      ></div>

                      {isWomenNavOpen && (
                        <>
                          <div
                            // className={`fixed bg-black bg-opacity-25 ${
                            //     isNavOpen ? "inset-0" : "inset-none"
                            //   }`}
                            className="relative bg-white z-30"
                          >
                            <div className="mx-auto max-w-7xl px-8">
                              <div className="grid grid-cols-2 gap-x-8 gap-y-10 py-16">
                                <div className="row-start-1 grid grid-cols-3 gap-x-8 gap-y-10 text-sm">
                                  <div>
                                    <ul
                                      role="list"
                                      aria-labelledby="Clothing-heading"
                                      className="mt-6 space-y-6 sm:mt-4 sm:space-y-4"
                                    >
                                      <li className="flex">
                                        <Link
                                          onClick={() => {
                                            setIsMenNavOpen(false);
                                            setIsWomenNavOpen(false);
                                          }}
                                          href="/products/tops"
                                          className="hover:text-gray-800"
                                        >
                                          Tops
                                        </Link>
                                      </li>
                                      <li className="flex">
                                        <Link
                                          onClick={() => {
                                            setIsMenNavOpen(false);
                                            setIsWomenNavOpen(false);
                                          }}
                                          href="/products/womens-dresses"
                                          className="hover:text-gray-800"
                                        >
                                          Dresses
                                        </Link>
                                      </li>
                                      <li className="flex">
                                        <Link
                                          onClick={() => {
                                            setIsMenNavOpen(false);
                                            setIsWomenNavOpen(false);
                                          }}
                                          href="/products/womens-shoes"
                                          className="hover:text-gray-800"
                                        >
                                          Shoes
                                        </Link>
                                      </li>
                                      <li className="flex">
                                        <Link
                                          onClick={() => {
                                            setIsMenNavOpen(false);
                                            setIsWomenNavOpen(false);
                                          }}
                                          href="/products/womens-watches"
                                          className="hover:text-gray-800"
                                        >
                                          Watches
                                        </Link>
                                      </li>
                                      <li className="flex">
                                        <Link
                                          onClick={() => {
                                            setIsMenNavOpen(false);
                                            setIsWomenNavOpen(false);
                                          }}
                                          href="/products/womens-bags"
                                          className="hover:text-gray-800"
                                        >
                                          Bags
                                        </Link>
                                      </li>
                                      <li className="flex">
                                        <Link
                                          onClick={() => {
                                            setIsMenNavOpen(false);
                                            setIsWomenNavOpen(false);
                                          }}
                                          href="/products/womens-jewellery"
                                          className="hover:text-gray-800"
                                        >
                                          Jewellery
                                        </Link>
                                      </li>
                                    </ul>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                          <OverlayComponent />
                        </>
                      )}
                    </div>
                  </div>
                  <div className="flex">
                    <div className="relative flex">
                      <button
                        type="button"
                        className={`border-transparent bg-${
                          isMenNavOpen ? "black" : "white"
                        } text-${
                          isMenNavOpen ? "white" : "gray - 900"
                        } flex-1 whitespace-nowrap border-b-2 px-4 py-1 text-base font-medium m-2 pl-10 pr-10 rounded-sm`}
                        aria-expanded="false"
                        onClick={toggleMenNav}
                      >
                        Men
                      </button>
                    </div>

                    <div className="absolute inset-x-0 top-full text-sm text-gray-500">
                      {isMenNavOpen && (
                        <>
                          <div className="relative bg-white h-80 z-30">
                            <div className="mx-auto max-w-7xl px-8">
                              <div className="grid grid-cols-2 gap-x-8 gap-y-10 py-16">
                                <div className="row-start-1 grid grid-cols-3 gap-x-8 gap-y-10 text-sm">
                                  <div>
                                    <ul
                                      role="list"
                                      aria-labelledby="Clothing-heading"
                                      className="mt-6 space-y-6 sm:mt-4 sm:space-y-4"
                                    >
                                      <li className="flex">
                                        <Link
                                          onClick={() => {
                                            setIsMenNavOpen(false);
                                            setIsWomenNavOpen(false);
                                          }}
                                          href="/products/mens-shirts"
                                          className="hover:text-gray-800"
                                        >
                                          Shirts
                                        </Link>
                                      </li>
                                      <li className="flex">
                                        <Link
                                          onClick={() => {
                                            setIsMenNavOpen(false);
                                            setIsWomenNavOpen(false);
                                          }}
                                          href="/products/mens-shoes"
                                          className="hover:text-gray-800"
                                        >
                                          Shoes
                                        </Link>
                                      </li>
                                      <li className="flex">
                                        <Link
                                          onClick={() => {
                                            setIsMenNavOpen(false);
                                            setIsWomenNavOpen(false);
                                          }}
                                          href="/products/mens-watches"
                                          className="hover:text-gray-800"
                                        >
                                          Watches
                                        </Link>
                                      </li>
                                      <li className="flex">
                                        <Link
                                          onClick={() => {
                                            setIsMenNavOpen(false);
                                            setIsWomenNavOpen(false);
                                          }}
                                          href="/products/sunglasses"
                                          className="hover:text-gray-800"
                                        >
                                          Sunglasses
                                        </Link>
                                      </li>
                                    </ul>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                          <OverlayComponent />
                        </>
                      )}
                    </div>
                  </div>
                </div>
              </div>

              <div className="ml-auto flex items-center">
                <div className="hidden lg:flex lg:flex-1 lg:items-center lg:justify-end lg:space-x-6">
                  <Link
                    onClick={() => {
                      setIsNavOpen(false);
                    }}
                    href="/"
                    className="text-sm font-medium text-gray-700 hover:text-gray-800"
                  >
                    Home
                  </Link>
                  <span
                    className="h-6 w-px bg-gray-200"
                    aria-hidden="true"
                  ></span>
                  <Link
                    onClick={() => {
                      setIsNavOpen(false);
                    }}
                    href="/login"
                    className="text-sm font-medium text-gray-700 hover:text-gray-800"
                  >
                    Log in
                  </Link>
                  <span
                    className="h-6 w-px bg-gray-200"
                    aria-hidden="true"
                  ></span>
                  <Link
                    onClick={() => {
                      setIsNavOpen(false);
                    }}
                    href="/signup"
                    className="text-sm font-medium text-gray-700 hover:text-gray-800"
                  >
                    Create account
                  </Link>
                </div>

                <div className="hidden lg:ml-8 lg:flex">
                  <Link
                    onClick={() => {
                      setIsNavOpen(false);
                    }}
                    href="#"
                    className="flex items-center text-gray-700 hover:text-gray-800"
                  >
                    <img
                      src="https://duckduckgo.com/i/69626059.png"
                      alt=""
                      className="block h-auto w-5 flex-shrink-0"
                    />
                    <span className="ml-3 block text-sm font-medium">INR</span>
                    <span className="sr-only">, change currency</span>
                  </Link>
                </div>

                <div className="flex lg:ml-6">
                  <Link
                    onClick={() => {
                      setIsNavOpen(false);
                    }}
                    href="#"
                    className="p-2 text-gray-400 hover:text-gray-500"
                  >
                    <span className="sr-only">Search</span>
                    <svg
                      className="h-6 w-6"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth="1.5"
                      stroke="currentColor"
                      aria-hidden="true"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
                      />
                    </svg>
                  </Link>
                </div>

                <div className="ml-4 flow-root lg:ml-6">
                  <Link
                    onClick={() => {
                      setIsNavOpen(false);
                    }}
                    href="#"
                    className="group -m-2 flex items-center p-2"
                  >
                    <svg
                      className="h-6 w-6 flex-shrink-0 text-gray-400 group-hover:text-gray-500"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth="1.5"
                      stroke="currentColor"
                      aria-hidden="true"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M15.75 10.5V6a3.75 3.75 0 10-7.5 0v4.5m11.356-1.993l1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 01-1.12-1.243l1.264-12A1.125 1.125 0 015.513 7.5h12.974c.576 0 1.059.435 1.119 1.007zM8.625 10.5a.375.375 0 11-.75 0 .375.375 0 01.75 0zm7.5 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z"
                      />
                    </svg>
                    <span className="ml-2 text-sm font-medium text-gray-700 group-hover:text-gray-800">
                      0
                    </span>
                    <span className="sr-only">items in cart, view bag</span>
                  </Link>
                </div>
              </div>
            </div>
            {/* <div
              className={`absolute  bg-black bg-opacity-25 ${
                isNavOpen ? "inset-0" : "inset-none"
              }`}
            ></div>
             */}
          </div>
        </nav>
      </header>
    </div>
  );
}
