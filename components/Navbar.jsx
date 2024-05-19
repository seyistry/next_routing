import Link from "next/link";
import styles from "./navbar.module.css";

const Navbar = () => {
  return (
    <header>
      <nav className={styles.nav}>
        <p>E-Store</p>

        <ul className={styles.links}>
          <Link href="/">
            <li>Home</li>
          </Link>
          <Link href="/products">
            <li>Products</li>
          </Link>
          <Link href="/cart">
            <li>cart</li>
          </Link>
          <Link href="/checkout">
            <li>checkout</li>
          </Link>
          <Link href="/order">
            <li>order</li>
          </Link>
          <Link href="/account">
            <li>account</li>
          </Link>
          <Link href="/login">
            <li>login</li>
          </Link>
          <Link href="/register">
            <li>register</li>
          </Link>
          <li>
            <form action="/search" method="get">
              <input
                className="border-1"
                type="search"
                name="q"
                id="search"
                placeholder="Search"
              />
              <button type="submit">Search</button>
            </form>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Navbar;
