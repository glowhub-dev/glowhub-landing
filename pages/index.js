import Head from 'next/head'
import Navbar from '../components/Navbar'
import styles from '../styles/Home.module.css'
import { FaCheckCircle } from "react-icons/fa";
import Footer from '../components/Footer';

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>GlowHub - The ultimate tool for developers</title>
        <meta name="description" content="The cookie management, web analytics and customers feedback all in one solution." />

        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#000000" />
        <meta name="msapplication-TileColor" content="#000000" />

        <meta property="og:title" content="GlowHub - The ultimate tool for developers" />
        <meta property="og:description"
          content="The cookie management, web analytics and customers feedback all in one solution." />
        <meta property="og:image" content="https://glowhub.dev/glowhub_og_img.jpg" />
        <meta property="og:url" content="https://glowhub.dev" />
        <meta property="og:site_name" content="GlowHub" />
        <meta property="og:locale" content="en_EN" />
        <meta property="og:type" content="website" />

        <meta name="twitter:title" content="GlowHub - The ultimate tool for developers" />
        <meta name="twitter:description"
          content="The cookie management, web analytics and customers feedback all in one solution." />
        <meta name="twitter:image" content="https://glowhub.dev/glowhub_og_img.jpg" />
        <meta name="twitter:card" content="website" />

        {/* <script src="https://cdn.jsdelivr.net/gh/glowhub-dev/glowhub-scripts@1.0.1/glowHub.min.js"></script>
        <script dangerouslySetInnerHTML={{ __html: `glowHubScript.init('GH-TN5OWTTEOVH')` }} /> */}
      </Head>

      <Navbar />

      <div className="overflowX__hidden">
        <section className="d-flex flex-column justify-content-center" style={{ minHeight: '55vh' }}>
          <div className="text-center hero">
            <h1 className="hero__h1">The ultimate tool for developers</h1>
            <p className="hero__desc mt-4">The cookie management, web analytics and customers feedback all in one solution.</p>
            <a
              href="https://app.glowhub.dev/register"
              className="glow__btn px-5 mx-auto mt-4"
              style={{ maxWidth: '200px' }}
            >Get started</a>
          </div>
        </section>

        <section className="text-center">
          <div className="mx-auto img__hero__animated" style={{ maxWidth: '1000px' }}>
            <img src="/blur.svg" className="blur__img" />
            <img src="/captura-1.png" width="100%" />
          </div>
        </section>

        <section className="zTop mb-5">
          <div className="mx-auto" style={{ maxWidth: '1000px' }}>
            <div className="row g-4 g-md-3 align-items-center justify-content-between">
              <div className="col-md-4 d-flex flex-column text-center">
                <div className="mb-3">
                  <img src="/icons/icon-1.svg" className="service__icon" height="60px" />
                </div>
                <div className="features">
                  <h3>Cookies</h3>
                  <p>Easy, beautiful, customizable and advanced cookie management</p>
                </div>
              </div>
              <div className="col-md-4 d-flex flex-column text-center">
                <div className="mb-3">
                  <img src="/icons/icon-2.svg" className="service__icon" height="60px" />
                </div>
                <div className="features">
                  <h3>Analytics</h3>
                  <p>Powerful web analytics with improved users privacy</p>
                </div>
              </div>
              <div className="col-md-4 d-flex flex-column text-center">
                <div className="mb-3">
                  <img src="/icons/icon-3.svg" className="service__icon" height="60px" />
                </div>
                <div className="features">
                  <h3>Feedback</h3>
                  <p>Get easy and personalized feedback from your customers</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="mx-auto glow__container">
          <div className="text-center">
            <h1>All in one developers tool</h1>
            <p className="subtitle__p">A single script for three powerful tools</p>
          </div>

          <div className="mt-2 mt-lg-5 row gx-5 align-items-center">
            <div className="col-md-6 mb-3 mb-md-0">
              <img src="/script.png" className="w-100" />
            </div>
            <div className="col-md-6">
              <h5><FaCheckCircle className="me-1" style={{ marginTop: '-3px' }} /> Single Script</h5>
              <p>You will only need to install a script on your website.</p>
              <br />
              <h5><FaCheckCircle className="me-1" style={{ marginTop: '-3px' }} /> Zero config</h5>
              <p>Register your website and start collecting information from your users without configuration.</p>
              <br />
              <h5><FaCheckCircle className="me-1" style={{ marginTop: '-3px' }} /> Privacy based</h5>
              <p>User privacy is one of the most important parts of glowhub.</p>
            </div>
          </div>
        </section>

        <section className="mx-auto glow__container" id="cookies">
          <div className="text-center">
            <h1>Designed for <span className="underline__cookies">privacy</span></h1>
            <p className="subtitle__p">The most powerful and customizable cookie banner</p>
          </div>

          <div className="mt-2 mt-lg-5 row gx-5 align-items-center justify-content-center">
            <div className="col-md-5 mb-3 mb-md-0">
              <img src="/banner.png" className="w-100" />
            </div>
            <div className="col-md-6">
              <h5>Do you accept cookies?</h5>
              <p>Only if the user accepts cookies we will install our tracking cookie to remember the user.</p>

              <h5>or not?</h5>
              <p>If the user chooses not to accept cookies, we will track them in a more moderate way and respect their privacy 100%.</p>
            </div>
          </div>
        </section>

        <section className="mx-auto glow__container" id="analytics">
          <div className="text-center">
            <h1>Designed for <span className="underline__analytics">real data</span></h1>
            <p className="subtitle__p">Powerful web analytics with improved users privacy</p>
          </div>

          <div className="mt-2 mt-lg-5 row gx-5 align-items-center justify-content-center">
            <div className="col-md-5 mb-3 mb-md-0">
              <img src="/data.png" className="w-100" />
            </div>
            <div className="col-md-6">
              <h5>Web views tracking</h5>
              <p>Get filtered and curated information about users' visits to your website and the time they spend on your site.</p>

              <h5>Users online</h5>
              <p>Advanced online user tracking with visit information, referring domains, location, browsers, os, etc.</p>
            </div>
          </div>
        </section>

        <section className="mx-auto glow__container" id="feedback">
          <div className="text-center">
            <h1>Designed for <span className="underline__feedback">real, real data</span></h1>
            <p className="subtitle__p">Powerful and customizable feedback banner</p>
          </div>

          <div className="mt-2 mt-lg-5 row gx-5 align-items-center justify-content-center">
            <div className="col-md-5 mb-3 mb-md-0">
              <img src="/feedback.png" className="w-100" />
            </div>
            <div className="col-md-6">
              <h5>you like the experience?</h5>
              <p>know at a glance if your product is making a good impression on your customers.</p>

              <h5>or not?</h5>
              <p>It is also important to know the negative opinions in order to be able to solve the errors.</p>
            </div>
          </div>
        </section>

      </div>
      <br /><br />


      <Footer />
    </div>
  )
}
