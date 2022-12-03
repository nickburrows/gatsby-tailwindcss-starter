import React, { useState, useEffect } from "react"

import { Link } from "gatsby"
import GatsbyLogo from "../images/gatsby-logo.svg"
import GatsbyLogo2 from "../images/gatsby-logo2.svg"
import GatsbyMonogram from "../images/Gatsby_Monogram.svg"

import DarkToggle from "./DarkToggle"

const samplePageLinks = [
  { title: "Home", text: "Home", url: "/" },
  {
    title: "Page 2",
    text: "Page 2",
    url: "/page-2",
    badge: false,
    description:
      "A simple example of linking to another page within a Gatsby site",
  },
  { title: "TypeScript", text: "TypeScript", url: "/using-typescript" },
  { title: "SSR", text: "Server Side Rendering", url: "/ssr" },
  { title: "DSG", text: "Deferred Static Generation", url: "/using-dsg" },
]

const Navbar = ({ siteTitle }) => {
  const [menuOpen, setMenuOpen] = useState(false)
  const [darkMode, setDarkMode] = useState(false)

  const menuClass = !menuOpen ? "hidden" : null

  const arr = ["w-full md:block md:w-auto order-2", menuClass]

  useEffect(() => {
    if (darkMode) {
      document.body.classList.add("dark")
    } else {
      document.body.classList.remove("dark")
    }
  }, [darkMode])

  useEffect(() => {
    if ("theme" in localStorage) {
      if (localStorage.getItem("theme") === "dark") {
        setDarkMode(true)
      } else {
        setDarkMode(false)
      }
    }
  }, [])

  return (
    <>
      <nav className="flex items-center bg-neutral-700 border-b border-gray-200 px-2 sm:px-4 py-2.5 dark:bg-slate-900">
        <div className="container flex flex-wrap items-center justify-between mx-auto">
          <a href="https://flowbite.com/" className="flex items-center order-1">
            <img
              className="hidden h-6 mr-3 sm:h-9 lg:inline-block"
              src={GatsbyMonogram}
              alt="Gatsby Monogram"
            />
            <img
              src={!darkMode ? GatsbyLogo : GatsbyLogo2}
              className="inline-block h-6 mr-3 sm:h-9 lg:hidden"
              alt="Gatsby Logo"
            />
            <span className="self-center hidden text-xl font-semibold lg:inline-block whitespace-nowrap dark:text-white">
              {siteTitle}
            </span>
          </a>
          <div className="order-3">
            <DarkToggle
              toggle={() => setDarkMode(!darkMode)}
              isDark={darkMode}
            />
          </div>
          <button
            data-collapse-toggle="navbar-default"
            type="button"
            className="inline-flex items-center order-4 p-2 ml-3 text-sm text-gray-500 border border-gray-500 rounded-lg md:hidden focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:border-gray-400 dark:hover:bg-gray-700 dark:hover:border-gray-700 dark:focus:ring-gray-600"
            aria-controls="navbar-default"
            aria-expanded="false"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            <span className="sr-only">Open main menu</span>
            <svg
              className="w-6 h-6"
              aria-hidden="true"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                clipRule="evenodd"
              />
            </svg>
          </button>
          <div className={arr.join(" ")} id="navbar-default">
            <ul className="flex flex-col my-4 border border-gray-100 rounded md:my-0 md:px-6 md:py-4 backdrop-blur bg-neutral-700/30 lg:flex-row md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium md:border-0 dark:bg-gray-800 dark:bg-slate-800 dark:border-gray-700">
              {samplePageLinks.map((link, i) => (
                <li className="px-4 py-2 border md:border-0 md:p-0" key={i}>
                  <Link
                    className="nav-link"
                    activeClassName="active"
                    to={link.url}
                  >
                    {link.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </nav>
    </>
  )
}

export default Navbar
