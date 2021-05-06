import Link from 'next/link'

const Nav = () => {

  return (
    <>
      <Link href="/" className="navLink">Home</Link>
      <Link href="/" className="navLink">Overview</Link>
      <Link href="/" className="navLink">Pricing</Link>
      <Link href="/" className="navLink">Faq</Link>
      <Link href="https://app.glowhub.dev" className="navLink">Login</Link>
      <a href="https://app.glowhub.dev/register" className="navLink">Register</a>
    </>
  )
}

export default Nav
