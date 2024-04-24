import React from "react";
import Layout from "@theme/Layout";
import PublicationsIteration from "../components/PublicationsIteration";
const publications = [
  {
    id: 1,
    title: "The role of library versions in Developer-ChatGPT conversations",
    description:
      "Illo sint voluptas. Error voluptates culpa eligendi. Hic vel totam vitae illo. Non aliquid explicabo necessitatibus unde. Sed exercitationem placeat consectetur nulla deserunt vel. Iusto corrupti dicta.",
    datetime: "2024-01-29",
    authors: "D. Costa, R. Raj",
  },
  {
    id: 2,
    title: "Predicting the Impact of Crashes Across Release Channels",
    description:
      "Illo sint voluptas. Error voluptates culpa eligendi. Hic vel totam vitae illo. Non aliquid explicabo necessitatibus unde. Sed exercitationem placeat consectetur nulla deserunt vel. Iusto corrupti dicta.",
    datetime: "2024-01-29",
    authors: "D. Costa, S. Mujahid, C. Castelluccio",
  },
];
const projectDetail1 = () => {
  return (
    <Layout>
      <div className="w-[700px] h-[400px] flex justify-center mx-auto my-11">
        <img
          src="https://images.unsplash.com/photo-1496128858413-b36217c2ce36?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=3603&q=80"
          alt=""
          className="rounded-xl w-full h-full"
        />
      </div>
      <div className="w-[900px] mx-auto">
        <span className=" text-2xl font-bold flex justify-center ">
          {" "}
          Dependency Management{" "}
        </span>
      </div>
      <span className="mx-auto text-gray-700 text-lg w-[900px] my-10">
        Illo sint voluptas. Error voluptates culpa eligendi. Hic vel totam vitae
        illo. Non aliquid explicabo necessitatibus unde. Sed exercitationem
        placeat consectetur nulla deserunt vel. Iusto corrupti dicta.
      </span>
      <div className="w-[900px] ">
        <span className=" text-2xl font-bold flex justify-center text-gray-500 ">
          Related Publications:{" "}
        </span>
      </div>
      <PublicationsIteration array={publications} all={false}/>
    </Layout>
  );
};

export default projectDetail1;
