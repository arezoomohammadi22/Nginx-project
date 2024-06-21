// components/Header.js
import Link from 'next/link';

const Header = () => (
  <header>
    <nav>
      <ul>
        <li><Link href="/"><a>Home</a></Link></li>
        <li><Link href="/about"><a>About</a></Link></li>
      </ul>
    </nav>
    <style jsx>{`
      header {
        background: #333;
        color: #fff;
        padding: 1rem;
      }
      nav ul {
        list-style: none;
        display: flex;
        justify-content: space-around;
      }
      nav ul li a {
        color: #fff;
        text-decoration: none;
      }
    `}</style>
  </header>
);

export default Header;
