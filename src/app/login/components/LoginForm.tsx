import Link from "next/link";
import Button from "@/components/global/button/Button";

function LoginForm() {
  async function handleLogin(formData: FormData) {
    "use server";

    const email = formData.get("email");
    const password = formData.get("password");

    console.log(email, password);
  }

  return (
    <section className="bg-white min-h-screen ">
      <form
        action={handleLogin}
        className="max-w-md w-4/5 mx-auto min-h-screen bg-white flex flex-col justify-center align-middle"
      >
        <h6 className="text-sm" style={{ color: "#757575" }}>
          Welcome back! 👋
        </h6>
        <h2 className="font-bold text-2xl mb-10">Sign in to your account</h2>
        <div className="flex flex-col">
          <label className="mb-2" htmlFor="email">
            Your Email
          </label>
          <input
            className="border border-black px-4 py-3 rounded-lg"
            type="email"
            name="email"
            id="email"
          />
        </div>

        <div className="flex flex-col">
          <label className="mb-2" htmlFor="password">
            Your Password
          </label>
          <input
            className="border border-black px-4 py-3 rounded-lg"
            type="password"
            name="password"
            id="password"
          />
        </div>

        <Link
          className="text-blue font-bold text-sm text-center mt-10 mb-5"
          href="#"
        >
          Forgot your password?
        </Link>
        <Button btnText="CONTINUE" />
      </form>
    </section>
  );
}

export default LoginForm;
