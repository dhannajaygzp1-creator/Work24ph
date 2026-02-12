"use client";

import Link from "next/link";
import Image from "next/image";
import { menuData, contacts, siteAssets } from "../data/siteData";

export default function MainHeader() {


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
      <header className="nav-bg-b main-header navfix fixed-top menu-white header-pr">
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
                <li className="contact-show">
                  <a href="#" className="btn-round trngl btn-br bg-btn">
                    <i className="fas fa-phone-alt"></i>
                  </a>

                  <div className="contact-inquiry">
                    <div className="contact-info-">
                      <div className="contct-heading">Work24 Contacts</div>

                      {/* HR */}
                      <div className="inquiry-card-nn hrbg">
                        <div className="title-inq-c">FOR HR DEPARTMENT</div>
                        <ul>
                          {contacts.hr.map((c, i) => (
                            <li key={i}>
                              <a href={`tel:${c.number}`}>
                                <Image src={c.flag} alt="flag" width={20} height={14} />
                                {c.number}
                              </a>
                            </li>
                          ))}
                        </ul>
                      </div>

                      {/* Sales */}
                      <div className="inquiry-card-nn">
                        <div className="title-inq-c">FOR SALES DEPARTMENT</div>
                        <ul>
                          <li><a href={`tel:${contacts.sales.primary}`}>{contacts.sales.primary}</a></li>
                          <li><a href={`tel:${contacts.sales.secondary}`}>{contacts.sales.secondary}</a></li>
                          <li>
                            <i className="fab fa-skype"></i>
                            <a href={`skype:${contacts.sales.skype}?call`}>
                              {contacts.sales.skype}
                            </a>
                          </li>
                          <li>
                            <i className="fas fa-envelope"></i>
                            <a href={`mailto:${contacts.sales.email}`}>
                              {contacts.sales.email}
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
          </div>
        </div>
      </header>
    </>
  );
}
