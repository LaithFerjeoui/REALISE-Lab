import React from "react";
import "tailwindcss/tailwind.css";
import Layout from "@theme/Layout";
import PublicationsIteration from "../components/PublicationsIteration";

const Example = () => {
  return (
    <Layout>
      <div className="py-14 sm:py-14">
        <div className="mx-auto flex flex-col justify-center max-w-[1400px]  md:pl-14 px-5">
          <div className="max-w-2xl">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              Our Publications
            </h2>
            <p className="mt-8 text-lg leading-8 text-gray-600 whitespace-nowrap">
              Publications made by REALISE Lab
            </p>
          </div>

          {/* LOGIC FOR ITERATION OVER THE PUBLICATIONS */}
          <ul
            role="list"
            className="mt-20 w-full grid-cols-1 gap-x-8 gap-y-16 flex-col list-none justify-start"
          >
            <PublicationsIteration />
          </ul>
        </div>
      </div>
    </Layout>
  );
};

export default Example;
