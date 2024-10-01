import React from "react";
import "tailwindcss/tailwind.css";
import Layout from "@theme/Layout";
import PublicationsIteration from "../components/PublicationsIteration";


const Example = () => {
  return (
    <Layout>
      <div className="py-24 sm:py-16">
        <div className="mx-auto   lg:px-[200px] px-6">
          <div className="mx-auto max-w-2xl lg:mx-0 ">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              Our publications
            </h2>
            <p className="text-lg text-gray-600 mb-2">
              Publications made by REALISE Lab
            </p>
          </div>

{/* LOGIC FOR ITERATION OVER THE PUBLICATIONS HERE */}
          <PublicationsIteration />
        </div>
      </div>
    </Layout>
  );
};

export default Example;
