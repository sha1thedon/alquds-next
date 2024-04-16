// check out these docs https://nextjs.org/docs/app/building-your-application/rendering
// would be better if we make this page a server component
// then we can handle the login logic serverside
// and use forms to handle the login
// import Button from "@/components/global/button/Button";
import React from "react";
import LoginForm from "./components/LoginForm";
import Image from "next/image";

const Login = () => {
  return (
    <section className="grid grid-cols-1 md:grid-cols-2">
      <LoginForm />

      <div className="relative bg-gradient-to-r from-blue to-blue2">
        <Image
          className="object-contain"
          src="/logos/alquds.svg"
          fill={true}
          alt="Al Quds Logo"
        />
      </div>
    </section>
  );
};

export default Login;
