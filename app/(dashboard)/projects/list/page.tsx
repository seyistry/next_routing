import Link from "next/link";
import styles from "./projects.module.css";

export default function ProjectList() {
  return (
    <main>
      <h1>Project List</h1>
      <ul className={styles.ul}>
        <Link href="/projects/jobit">
          <li>Jobit</li>
        </Link>
        <Link href="/projects/carrent">
          <li>Car Rent</li>
        </Link>
        <Link href="/projects/hipnode">
          <li>Hip Node</li>
        </Link>
      </ul>
    </main>
  );
}
