import Link from "next/link";
import React from "react";

export default function Home() {
  // const router = useRouter()
  return (
    <>
      <h1>Welcome to AlQuds</h1>
      <Link href={"/login"}>Login</Link>
      <Link href={"/dashboard"}>Dashboard </Link>
    </>
  );
}
