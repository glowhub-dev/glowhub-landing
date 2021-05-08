import Link from 'next/link'
import React from 'react'

const Footer = () => {
  return (
    <footer className="mt-5">
      <div className="container py-5">
        <div className="row d-flex justify-content-center align-items-center">
          <div className="col-6 col-md text-center">
            <img src="/glowhub.svg" height="25" alt="logo" className="mb-2" />
            <p className="m-0"><small>&copy;2021 All rights reserved.</small></p>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
