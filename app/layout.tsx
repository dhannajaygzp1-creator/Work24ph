import type { Metadata } from "next";
import Script from "next/script";
import "./css/style.css";
import "./css/responsive.css";
import "./css/bootstrap.min.css";
import "./css/plugin.min.css";
// import "./css/demo-css.css";
import MainHeader from "./components/MainHeader";
import { MainFooter } from "./components/MainFooter";

 

export const metadata = {
  title: "Work24",
  description: "Top Web & Mobile App Development Company | Work24 PH",
  themeColor: "#2e2a8f",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  console.log("RootLayout imports:", { MainHeaderType: typeof MainHeader, MainFooterType: typeof MainFooter });

  return (
    <html lang="en">
      <body>
        <MainHeader />
        {children}
        <MainFooter/>
        {/* <Script src="./js/modernizr-3.5.0.min.js" strategy="beforeInteractive" />
        <Script src="./js/jquery.min.js" strategy="beforeInteractive" />
        <Script src="./js/bootstrap.bundle.min.js" strategy="afterInteractive" />
        <Script src="./js/plugin.min.js" strategy="afterInteractive" />
        <Script src="./js/preloader.js" strategy="afterInteractive" />
        <Script src="./js/dark-mode.js" strategy="afterInteractive" />
        <Script src="./js/main.js" strategy="afterInteractive" />
        <Script src="./js/progress-bar.js" strategy="afterInteractive" />
        <Script id="lead-modal-script" strategy="afterInteractive">
          {`
            window.addEventListener('load', function () {
              setTimeout(function () {
                const modal = document.getElementById('leadModal');
                if (modal && window.bootstrap) {
                  new bootstrap.Modal(modal).show();
                }
              }, 4000);
            });
          `}
        </Script> */}
      </body>
    </html>
  );
}
