import Nav from './Nav'
import Link from 'next/link'

const Navbar = () => {
  return (
    <div className="Navbar">
      <div className="NavbarDesktop">
        <div className="container d-flex justify-content-between align-items-center">
          <Link href="/">
            <img className="NavbarDesktop__img" src="/glowhub.svg" alt="glowhub logo" />
          </Link>
          <div className="NavbarDesktop__nav d-none d-md-block">
            <Nav />
          </div>
        </div>
      </div>

      <div className="MobileNav d-block d-md-none">
        <div className="container MobileNav__nav">
          <Nav />
        </div>
      </div>
    </div>
  )
}

export default Navbar
