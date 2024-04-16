import Link from "next/link";

export default function NavBar() {
  return (
    <nav className="flex items-center justify-between flex-wrap bg-teal-500 p-6">
      <Link href="/login">Login</Link>
    </nav>
  );
}
