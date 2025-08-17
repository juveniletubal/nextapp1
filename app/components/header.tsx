"use client";
import React, { useEffect, useRef, useState } from "react";
import Link from "next/link";

const Header = () => {
  const [navState, setNavState] = useState("visible");
  const lastScrollY = useRef(0);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;

      if (scrollY < 50) {
        setNavState("visible");
      } else {
        if (scrollY > lastScrollY.current) {
          setNavState("hidden");
        } else {
          setNavState("visible");
        }
      }

      lastScrollY.current = scrollY <= 0 ? 0 : scrollY;
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`nav_bg ${
        navState === "visible" ? "sticky-nav" : "hidden-nav"
      }`}
    >
      <div className="navbar px-3 w-full lg:w-300 mx-auto">
        <div className="flex-1">
          <Link
            href="/"
            className="text-2xl font-bold tracking-wide text-blue-700"
          >
            LOGO NAME
          </Link>
        </div>

        {/* Mobile Burger Icon */}
        <div className="flex-none lg:hidden">
          <div className="dropdown dropdown-end">
            <label tabIndex={0} className="btn btn-ghost btn-circle">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            </label>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content mt-3 p-2 shadow-lg bg-base-100 w-60 space-y-2"
            >
              {[
                "HOME",
                "ABOUT",
                "ACADEMICS",
                "ADMISSION",
                "CAMPUS",
                "NEWS",
                "VIDEO",
                "CONTACT US",
              ].map((item) => (
                <li key={item}>
                  <Link
                    href={item === "HOME" ? "/" : `/${item.toLowerCase()}`}
                    className="hover:text-blue-700 hover:bg-base-200 px-4 py-1 font-semibold text-[14px] transition-all duration-200"
                  >
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Desktop Menu */}
        <div className="flex-none hidden lg:block">
          <ul className="menu menu-horizontal gap-2">
            {[
              "HOME",
              "ABOUT",
              "ACADEMICS",
              "ADMISSION",
              "CAMPUS",
              "NEWS",
              "VIDEO",
              "CONTACT US",
            ].map((item) => (
              <li key={item}>
                <Link
                  href={item === "HOME" ? "/" : `/${item.toLowerCase()}`}
                  className="hover:bg-transparent hover:text-blue-700 py-2 px-2 font-semibold transition-all duration-200"
                >
                  {item}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </header>
  );
};

export default Header;
