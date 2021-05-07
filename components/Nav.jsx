import Link from 'next/link'

const Nav = () => {

  return (
    <>
      <Link href="/" className="navLink">Home</Link>
      <Link href="/" className="navLink">Cookies</Link>
      <Link href="/" className="navLink">Analytics</Link>
      <Link href="/" className="navLink">Feedback</Link>
      <Link href="/pricing" className="navLink">Pricing</Link>
      <a href="https://app.glowhub.dev" className="navLink">Login</a>
      <a href="https://app.glowhub.dev/register" className="navLink">Register</a>
    </>
  )
}

export default Nav
