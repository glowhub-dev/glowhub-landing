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
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
        {/* <script src="https://cdn.jsdelivr.net/gh/glowhub-dev/glowhub-scripts@1.0.1/glowHub.min.js"></script>
        <script dangerouslySetInnerHTML={{ __html: `glowHubScript.init('GH-TN5OWTTEOVH')` }} /> */}
      </Head>

      <Navbar />

      <div className="overflowX__hidden">
        <section className="d-flex flex-column justify-content-center" style={{ minHeight: '55vh' }}>
          <div className="text-center hero">
            <h1 className="hero__h1">The ultimate tool for developers</h1>
            <p className="hero__desc mt-4">Lorem impsul dolor sit ament ruka no se que más se puede poner en esta línea.</p>
            <button className="glow__btn px-5 mx-auto mt-4">Get started</button>
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
                  <p>Lorem impsul dolor sit ament ruka no se que más se puede poner</p>
                </div>
              </div>
              <div className="col-md-4 d-flex flex-column text-center">
                <div className="mb-3">
                  <img src="/icons/icon-2.svg" className="service__icon" height="60px" />
                </div>
                <div className="features">
                  <h3>Analytics</h3>
                  <p>Lorem impsul dolor sit ament ruka no se que más se puede poner</p>
                </div>
              </div>
              <div className="col-md-4 d-flex flex-column text-center">
                <div className="mb-3">
                  <img src="/icons/icon-3.svg" className="service__icon" height="60px" />
                </div>
                <div className="features">
                  <h3>Feedback</h3>
                  <p>Lorem impsul dolor sit ament ruka no se que más se puede poner</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="mx-auto glow__container">
          <div className="text-center">
            <h1>All in one developers tool</h1>
            <p className="subtitle__p">A single script for 3 powerful tools</p>
          </div>

          <div className="mt-2 mt-lg-5 row gx-5 align-items-center">
            <div className="col-md-6 mb-3 mb-md-0">
              <img src="/script.png" className="w-100" />
            </div>
            <div className="col-md-6">
              <h5><FaCheckCircle className="me-1" style={{ marginTop: '-3px' }} /> Single Script</h5>
              <p>Lorem impsul dolor sit ament ruka no se que más se puede poner</p>
              <br />
              <h5><FaCheckCircle className="me-1" style={{ marginTop: '-3px' }} /> Zero config</h5>
              <p>Lorem impsul dolor sit ament ruka no se que más se puede poner</p>
              <br />
              <h5><FaCheckCircle className="me-1" style={{ marginTop: '-3px' }} /> Single Script</h5>
              <p>Lorem impsul dolor sit ament ruka no se que más se puede poner</p>
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
              <p>Lorem impsul dolor sit ament ruka no se que más se puede poner, Lorem impsul dolor sit ament ruka no se que más se puede poner</p>

              <h5>or not?</h5>
              <p>Lorem impsul dolor sit ament ruka no se que más se puede poner, Lorem impsul dolor sit ament ruka no se que más se puede poner</p>
            </div>
          </div>
        </section>

        <section className="mx-auto glow__container" id="analytics">
          <div className="text-center">
            <h1>Designed for <span className="underline__analytics">real data</span></h1>
            <p className="subtitle__p">The most powerful and customizable cookie banner</p>
          </div>

          <div className="mt-2 mt-lg-5 row gx-5 align-items-center justify-content-center">
            <div className="col-md-5 mb-3 mb-md-0">
              <img src="/data.png" className="w-100" />
            </div>
            <div className="col-md-6">
              <h5>Do you accept cookies?</h5>
              <p>Lorem impsul dolor sit ament ruka no se que más se puede poner, Lorem impsul dolor sit ament ruka no se que más se puede poner</p>

              <h5>or not?</h5>
              <p>Lorem impsul dolor sit ament ruka no se que más se puede poner, Lorem impsul dolor sit ament ruka no se que más se puede poner</p>
            </div>
          </div>
        </section>

        <section className="mx-auto glow__container" id="feedback">
          <div className="text-center">
            <h1>Designed for <span className="underline__feedback">real, real data</span></h1>
            <p className="subtitle__p">The most powerful and customizable cookie banner</p>
          </div>

          <div className="mt-2 mt-lg-5 row gx-5 align-items-center justify-content-center">
            <div className="col-md-5 mb-3 mb-md-0">
              <img src="/feedback.png" className="w-100" />
            </div>
            <div className="col-md-6">
              <h5>Do you accept cookies?</h5>
              <p>Lorem impsul dolor sit ament ruka no se que más se puede poner, Lorem impsul dolor sit ament ruka no se que más se puede poner</p>

              <h5>or not?</h5>
              <p>Lorem impsul dolor sit ament ruka no se que más se puede poner, Lorem impsul dolor sit ament ruka no se que más se puede poner</p>
            </div>
          </div>
        </section>

      </div>
      <br /><br />


      <Footer />
    </div>
  )
}
