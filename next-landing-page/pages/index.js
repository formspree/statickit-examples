import React from "react";
import Head from "next/head";
import { useForm } from "@statickit/react";

const OptInForm = () => {
  const [state, submit] = useForm("optInForm");

  if (state.succeeded) {
    return (
      <p className="pb-3 font-bold text-gray-800 text-lg">
        Thank you for signing up!
      </p>
    );
  }

  return (
    <form onSubmit={submit}>
      <p className="pb-3 font-bold text-gray-800 text-lg">
        Sign up to be notified when we launch.
      </p>

      <div className="flex flex-wrap items-center">
        <label htmlFor="email" className="hidden">
          Email Address
        </label>

        <input
          id="email"
          type="email"
          name="email"
          className="flex-grow mr-3 mb-3 p-3 rounded-lg bg-gray-200 text-gray-700 text-lg border border-gray-200 focus:outline-none focus:border-gray-500 focus:bg-white"
          placeholder="Your email address"
          required
        />

        <button
          type="submit"
          className="mb-3 px-5 py-3 rounded-lg border border-purple-700 bg-purple-700 text-lg font-bold text-white"
          disabled={state.submitting}
        >
          Notify me
        </button>
      </div>
    </form>
  );
};

const Home = () => (
  <div>
    <Head>
      <title>Vaporware</title>
      <link
        href="https://unpkg.com/tailwindcss@^1.0/dist/tailwind.min.css"
        rel="stylesheet"
      />
    </Head>

    <div className="mx-auto container px-8 py-16 sm:py-32 antialiased">
      <div className="max-w-lg mx-auto">
        <div className="flex flex-wrap items-center pb-4 text-5xl font-bold text-gray-800">
          <h1 className="mr-3">Vaporware</h1>
          <div className="mt-2 px-3 py-1 text-sm font-bold bg-orange-300 text-orange-800 rounded-full">
            Coming Soon
          </div>
        </div>

        <p className="pb-6 text-gray-700 text-lg">
          Vaporware is a fictitious app that does not yet exist. This is where
          you&rsquo;d make a compelling pitch for your new product.
        </p>

        <OptInForm />
      </div>
    </div>
  </div>
);

export default Home;
