"use client";

import Image from "next/image";
import Link from "next/link";
import { footerData } from "../data/footerData";
import { FaFacebook } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";

export const MainFooter = () => {
  return (
    <>
      <footer>
      {/* ROW 1 */}
      <div className="footer-row1">
        <div className="container">
          <div className="row">
            <div className="col-lg-6">
              <div className="email-subs">
                <h3>Get New Insights Weekly</h3>
                <p>
                  Subscribe to Our Newsletter to stay updated with the latest
                  news and knowledge.
                </p>
              </div>
            </div>

            <div className="col-lg-6 v-center">
              <form className="email-subs-form">
                <input
                  type="email"
                  placeholder="Enter Your Official Email Address"
                  required
                />
                <button type="submit" className="lnk btn-main bg-btn">
                  Subscribe <i className="fas fa-chevron-right fa-icon"></i>
                  <span className="circle"></span>
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>

      {/* ROW 2 */}
      <div className="footer-row2">
      <div className="container">
        <div className="row justify-content-between">

          {/* Brand / About */}
          <div className="col-lg-3 col-sm-6 ftr-brand-pp">
            <Link href="/" className="navbar-brand mt30 mb25">
              <Image
                src="/uploads/2025/01/Work24-PH-Logo-Transparent.png"
                alt="Work24 PH Logo"
                width={100}
                height={50}
                priority
              />
            </Link>

            <p>
              We have stood the test of time, and built some of the finest web and
              mobile apps for clients around the world.
            </p>

            <Link
              href="/contact-us/"
              className="btn-main bg-btn3 lnk mt20"
            >
              Become Partner <i className="fas fa-chevron-right fa-icon"></i>
              <span className="circle"></span>
            </Link>
          </div>

          {/* Contact Info */}
          <div className="col-lg-3 col-sm-6">
            <h5>Contact Us</h5>

            <ul className="footer-address-list ftr-details">
              <li>
                <span><i className="fas fa-envelope"></i></span>
                <p>
                  Email <span>
                    <a href="mailto:info@work24ph.com">info@work24ph.com</a>
                  </span>
                </p>
              </li>

              <li>
                <span><i className="fas fa-phone-alt"></i></span>
                <p>
                  Phone <span>
                    <a href="tel:+639178044284">+639178044284</a>
                  </span>
                </p>
              </li>

              <li>
                <span><i className="fas fa-map-marker-alt"></i></span>
                <p>
                  Address <span>Cainta, Rizal Philippines</span>
                </p>
              </li>
            </ul>
          </div>

          {/* Company Links */}
          <div className="col-lg-2 col-sm-6">
            <h5>Company</h5>

            <ul className="footer-address-list link-hover">
              <li><Link href="/contact-us/">Contact Us</Link></li>
              <li><Link href="/blog/">Blog</Link></li>
              <li><Link href="/customers-faq/">Customer&apos;s FAQ</Link></li>
              <li><Link href="/privacy-policy/">Privacy Policy</Link></li>
              <li><Link href="/terms-and-conditions/">Terms and Conditions</Link></li>
              <li><Link href="/license-copyright/">License &amp; Copyright</Link></li>
            </ul>
          </div>

          {/* Latest Blogs */}
          <div className="col-lg-4 col-sm-6 footer-blog-">
            <h5>Latest Blogs</h5>

            {/* Blog Item */}
            <div className="single-blog-">
              <div className="post-thumb">
                <Link href="/the-truth-about-no-code-low-code-tools-in-todays-workplace/">
                  <Image
                    src="/uploads/2025/04/Filipino-developers-reviewing-no-code-and-custom-code-solutions-in-Manila-coworking-space-150x150.png"
                    alt="Filipino developers reviewing no-code"
                    width={150}
                    height={150}
                  />
                </Link>
              </div>

              <div className="content">
                <p className="post-meta">
                  <span className="post-date">
                    <i className="far fa-clock"></i> April 17, 2025
                  </span>
                </p>

                <h4 className="title">
                  <Link href="/the-truth-about-no-code-low-code-tools-in-todays-workplace/">
                    The Truth About No-Code/Low-Code Tools in Today’s Workplace
                  </Link>
                </h4>
              </div>
            </div>

            {/* Blog Item */}
            <div className="single-blog-">
              <div className="post-thumb">
                <Link href="/chatgpt-5s-transformative-impact-on-modern-business/">
                  <Image
                    src="/uploads/2025/04/AI-in-the-Workplace-150x150.jpg"
                    alt="AI in the Workplace"
                    width={150}
                    height={150}
                  />
                </Link>
              </div>

              <div className="content">
                <p className="post-meta">
                  <span className="post-date">
                    <i className="far fa-clock"></i> April 14, 2025
                  </span>
                </p>

                <h4 className="title">
                  <Link href="/chatgpt-5s-transformative-impact-on-modern-business/">
                    ChatGPT-5’s Transformative Impact on Modern Business
                  </Link>
                </h4>
              </div>
            </div>

          </div>
        </div>
      </div>
    </div>
      <div className="footer-brands">
      <div className="container">
        <div className="row">
          <div className="col-lg-4 v-center">
            <h5 className="mb10">Top App Development Companies</h5>
            <p>
              We have developed over 900+ web and mobile applications for the
              world’s leading Enterprises and Startups
            </p>
          </div>

          <div className="col-lg-8 v-center">
            <ul className="footer-badges-">
              <li>
                <a href="#">
                  <Image
                    src="/uploads/2024/11/badges-a.png"
                    alt="Business logo"
                    width={150}
                    height={100}
                  />
                </a>
              </li>

              <li>
                <a href="#">
                  <Image
                    src="/uploads/2024/11/badges-b.png"
                    alt="Business logo"
                    width={150}
                    height={100}
                  />
                </a>
              </li>

              <li>
                <a href="#">
                  <Image
                    src="/uploads/2024/11/badges-c.png"
                    alt="Business logo"
                    width={150}
                    height={100}
                  />
                </a>
              </li>

              <li>
                <a href="#">
                  <Image
                    src="/uploads/2024/11/badges-d.png"
                    alt="Business logo"
                    width={150}
                    height={100}
                  />
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
      {/* ROW 3 */}
      <div className="footer-row3">
        <div className="container text-center">
          <div className="footer-social-media-icons">
            <a href="https://www.facebook.com/work24philippines" target="_blank">
            <FaFacebook />
            </a>
            <a href="https://www.linkedin.com/company/work24ph-opc" target="_blank">
            <FaLinkedin />
            </a>
          </div>
          <p>© 2024–26 WORK24 PHILIPPINES. All rights reserved.</p>
        </div>
      </div>
    </footer>
    
    </>
  )
}
