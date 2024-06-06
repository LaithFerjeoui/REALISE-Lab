import React from "react";
import Layout from "@theme/Layout";
import PublicationsIteration from "../components/PublicationsIteration";
const projectDetail1 = () => {
  return (
    <Layout>
      <div className="w-full">
        <div className="w-full md:w-1/3 flex justify-center mx-auto px-3 my-11">
          <img
            src="https://images.unsplash.com/photo-1496128858413-b36217c2ce36?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=3603&q=80"
            alt=""
            className="rounded-xl w-full h-full"
          />
        </div>
        <div className="w-full mx-auto">
          <span className=" text-2xl font-bold flex justify-center ">
            {" "}
            Dependency Management{" "}
          </span>
        </div>
        <span className="mx-auto text-gray-700 text-lg w-full text-center my-10 flex justify-center px-5">
          Illo sint voluptas. Error voluptates culpa eligendi. Hic vel totam
          vitae illo. Non aliquid explicabo necessitatibus unde. Sed
          exercitationem placeat consectetur nulla deserunt vel. Iusto corrupti
          dicta.
        </span>
        <div className=" w-full ">
          <span className=" text-2xl font-bold flex justify-center text-gray-500 ">
            Related Publications:{" "}
          </span>
        </div>
      </div>
      <div className="w-1/2 flex justify-center mx-auto">
        <PublicationsIteration project={"dependency-management"} all={false} />
      </div>
    </Layout>
  );
};

export default projectDetail1;
