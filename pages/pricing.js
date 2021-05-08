import Head from 'next/head'
import Navbar from '../components/Navbar'
import styles from '../styles/Home.module.css'
import { FaArrowRight } from "react-icons/fa";
import Footer from '../components/Footer';

export default function Pricing() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Plans & pricing - GlowHub</title>
        <meta name="description" content="GlowHub - Plans & pricing - The cookie management, web analytics and customers feedback all in one solution." />

        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#000000" />
        <meta name="msapplication-TileColor" content="#000000" />

        <meta property="og:title" content="Pricing - GlowHub" />
        <meta property="og:description"
          content="GlowHub - Plans & pricing - The cookie management, web analytics and customers feedback all in one solution." />
        <meta property="og:image" content="https://glowhub.dev/glowhub_og_img.jpg" />
        <meta property="og:url" content="https://glowhub.dev" />
        <meta property="og:site_name" content="GlowHub" />
        <meta property="og:locale" content="en_EN" />
        <meta property="og:type" content="website" />

        <meta name="twitter:title" content="Pricing - GlowHub" />
        <meta name="twitter:description"
          content="GlowHub - Plans & pricing - The cookie management, web analytics and customers feedback all in one solution." />
        <meta name="twitter:image" content="https://glowhub.dev/glowhub_og_img.jpg" />
        <meta name="twitter:card" content="website" />
      </Head>

      <Navbar />

      <section className="mx-auto glow__container__sm">
        <div className="text-center mb-5">
          <h1>All in one developers tool</h1>
          <p>Start for free, pay as you go</p>
        </div>

        <div className="mt-4">
          <div className="row g-3 g-lg-4 mb-5 justify-content-center mb-5">
            <div className="col-lg-4 col-xl-3">
              <div className="card__dashboard p-4" style={{ border: '2px solid #1c1c1c' }}>
                <small>For personal use</small>
                <h2>Free plan</h2>
                <p className="glow__muted m-0">Free, forever</p>
                <hr />

                <h6 className="mb-0">Glow Analytics</h6>
                <small className="d-block glow__muted mb-3">Up to 10.000 views/month</small>

                <h6 className="mb-0">Glow Cookies</h6>
                <small className="d-block glow__muted mb-3">Up to 7.500 actions/month</small>

                <h6 className="mb-0">Glow Feedback</h6>
                <small className="d-block glow__muted">Up to 3.000 actions/month</small>
              </div>
            </div>
            <div className="col-lg-8 col-xl-7">
              <div className="card__dashboard p-4 h-100 d-flex flex-column justify-content-between" style={{ border: '2px solid #00ace5' }}>
                <div>
                  <small>Recomended option</small>
                  <div className="d-flex justify-content-between">
                    <div>
                      <h1>Unlimited</h1>
                      <p className="glow__muted m-0">Monthly pricing for projects and teams of all sizes.</p>
                    </div>
                    <div>
                      <h3>9,99€/month</h3>
                    </div>
                  </div>
                  <hr />

                  <p className="mb-1">
                    Enjoy <strong>Glow Analytics</strong>, <strong>Glow Cookies</strong> & <strong>Glow Feedback</strong> without limits.
                </p>
                  <p className="mb-1">
                    Enterprise Support.
                </p>
                </div>

                <a href="https://app.glowhub.dev/register" className="glow__btn__blue mt-3 w-100">
                  Start for free <FaArrowRight className="ms-2" style={{ marginTop: '-4px' }} />
                </a>

              </div>
            </div>
          </div>

          <div className="text-center">
            <p className="mb-0 glow__muted">Each plan corresponds to a single account and resources cannot be shared between them.</p>
            <p className="glow__muted">
              Each plan is subject to our fair use policy and its respective platform limits.
              Free plam are limited to personal, non-commercial use.
            </p>
          </div>

        </div>
      </section>

      <Footer />
    </div>
  )
}
