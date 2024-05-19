import Link from "next/link";
import styles from "./projects.module.css";

export default function ProjectList() {
  return (
    <main>
      <h1>Product List</h1>
      <ul className={styles.ul}>
        <Link href="/products/1">
          <li>product 1</li>
        </Link>
        <Link href="/products/2">
          <li>product 2</li>
        </Link>
        <Link href="/products/3">
          <li>product 3</li>
        </Link>
        <Link href="/products/4">
          <li>product 4</li>
        </Link>
        <Link href="/products/5">
          <li>product 5</li>
        </Link>
      </ul>
    </main>
  );
}
