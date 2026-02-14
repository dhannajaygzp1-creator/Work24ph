"use client";

import Link from "next/link";
import Image from "next/image";
import { menuData, contacts, siteAssets } from "../data/siteData";
import { useState, useEffect } from "react";
import { IoIosCall } from "react-icons/io";
import { CiMenuBurger } from "react-icons/ci";
import { BiMessageAltDetail } from "react-icons/bi";


export default function MainHeader() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [openIndex, setOpenIndex] = useState(null);


  const [showContact, setShowContact] = useState(false);
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (!e.target.closest(".contact-show")) {
        setShowContact(false);
      }
    };

    document.addEventListener("click", handleClickOutside);
    return () => document.removeEventListener("click", handleClickOutside);
  }, []);

  const [isSticky, setIsSticky] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsSticky(window.scrollY > 100);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      {/* Preloader */}
      {/* <div className="onloadpage" id="page_loader">
        <div className="pre-content">
          <div className="logo-pre">
            <Image src={siteAssets.footerLogo} alt="Logo" width={160} height={50} />
          </div>
          <div className="pre-text-">
            Top Web & Mobile App Development Company | Work24 PH
          </div>
        </div>
      </div> */}

      {/* Header */}
      <header
        className={`nav-bg-b main-header navfix menu-white header-pr ${isSticky ? "sticky" : ""
          }`}
      >
        <div className="container-fluid m-pad">
          <div className="menu-header">

            {/* Logo */}
            <div className="dsk-logo">
              <Link href="/" className="nav-brand">
                <Image
                  src={siteAssets.headerLogo}
                  alt="Logo"
                  width={90}
                  height={60}
                  className="mega-white-logo"
                />
                <Image
                  src={siteAssets.headerLogo}
                  alt="Logo"
                  width={90}
                  height={60}
                  className="mega-darks-logo"
                />
              </Link>
            </div>

            {/* Desktop Menu */}
            <div className="custom-nav">
              <ul className="nav-list">

                {menuData.map((menu, i) => (
                  <li key={i} className="sbmenu rpdropdown">
                    <Link href={menu.url} className="menu-links">
                      {menu.name}
                    </Link>

                    {menu.dropdown && (
                      <div className="nx-dropdown menu-dorpdown">
                        <div className="sub-menu-section">
                          <div className="sub-menu-center-block">
                            <div className="sub-menu-column smfull">
                              <ul>
                                {menu.dropdown.map((sub, j) => (
                                  <li key={j}>
                                    <Link href={sub.url}>{sub.name}</Link>
                                  </li>
                                ))}
                              </ul>
                            </div>
                          </div>
                        </div>
                      </div>
                    )}
                  </li>
                ))}

                {/* Contact Icon */}
                <li className="contact-show" style={{ padding: "5px" }}>
                  <button
                    className="btn-round- trngl btn-br bg-btn"
                    onClick={() => setShowContact(!showContact)}
                  >
                    <IoIosCall size={20} />
                  </button>

                  <div className={`contact-inquiry ${showContact ? "active" : ""}`}>
                    <div className="contact-info-">
                      <div className="contct-heading">Work24Ph Contacts</div>

                      {/* HR */}
                      <div className="inquiry-card-nn hrbg">
                        <div className="title-inq-c">FOR HR DEPARTMENT</div>
                        <ul>
                          <li>
                            <a href="tel:+639178044284">
                              <img
                                src="https://work24ph.com/wp-content/uploads/2024/12/OIP-removebg-preview.png"
                                alt="HR Flag"
                                className="flags-size"
                              />
                              +639178044284
                            </a>
                          </li>
                        </ul>
                      </div>

                      {/* SALES */}
                      <div className="inquiry-card-nn">
                        <div className="title-inq-c">FOR SALES DEPARTMENT</div>
                        <ul>
                          <li>
                            <a href="tel:+639178044284">
                              <img
                                src="https://work24ph.com/wp-content/uploads/2024/12/OIP-removebg-preview.png"
                                alt="Sales Flag"
                                className="flags-size"
                              />
                              +639178044284
                            </a>
                          </li>

                          <li>
                            <i className="fab fa-skype"></i>
                            <a href="skype:@work24?call">@work24</a>
                          </li>

                          <li>
                            <i className="fas fa-envelope"></i>
                            <a href="mailto:info@work24ph.com">
                              info@work24ph.com
                            </a>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </li>


                {/* CTA */}
                <li>
                  <Link href="/request-a-quote" className="btn-br bg-btn3 btshad-b2 lnk">
                    Request a Quote <span className="circle"></span>
                  </Link>
                </li>

              </ul>
            </div>
            <div className="mobile-menu2">
              <ul className="mob-nav2">

                {/* Message Icon */}
                <li>
                  <button
                    className="btn-round- trngl btn-br bg-btn btshad-b1"
                    
                  >
                    <BiMessageAltDetail size={22} />
                  </button>
                </li>

                {/* Burger Menu */}
                <li className="navm-">
                  <button
                    className="toggle"
                    onClick={() => setMobileOpen(!mobileOpen)}
                  >
                    <CiMenuBurger size={26} />
                  </button>
                </li>

              </ul>
            </div>
          </div>
<nav className={`mobile-nav ${mobileOpen ? "active" : ""}`}>
          <ul className="mobile-menu-list">
            {menuData.map((menu, i) => (
              <li key={i}>

                {/* Main Menu */}
                <div
                  className="mobile-menu-item"
                  onClick={() =>
                    setOpenIndex(openIndex === i ? null : i)
                  }
                >
                  <Link href={menu.url}>{menu.name}</Link>

                  {menu.dropdown && (
                    <span>
                      {openIndex === i ? "−" : "+"}
                    </span>
                  )}
                </div>

                {/* Submenu */}
                {menu.dropdown && (
                  <ul
                    className={`mobile-submenu ${openIndex === i ? "show" : ""
                      }`}
                  >
                    {menu.dropdown.map((sub, j) => (
                      <li key={j}>
                        <Link href={sub.url}>{sub.name}</Link>
                      </li>
                    ))}
                  </ul>
                )}

              </li>
            ))}
          </ul>
        </nav>
          
        </div>
 

         
        

      </header>



    </>
  );
}
