import Link from "next/link";

export default function Home() {
  return (
    <main>
      <Link href={"products"}>See Products</Link>
      <h1>Home</h1>
    </main>
  );
}
