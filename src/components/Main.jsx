import Layout from "@theme/Layout";
import { ChevronRightIcon } from "@heroicons/react/20/solid";
import Tweet from "../components/Tweet";
import {news} from "../../content/HomeNews";
export default function Example() {
  return (
    <Layout>
      {/* FIRST CONTAINER HERE */}
      <div className="bg-gray-900  h-[420px] shadow-xl">
        <div className="flex flex-col justify-center items-center pt-12">
          <img className="w-[150px]" src="img/logo.png" alt="REALISE" />
          <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl gradient px-36 text-center">
            REsearch on AnaLytics and Intelligence for Software Engineering lab
          </h1>
        </div>
      </div>

      {/* RIGHT AND LEFT CONTAINER HERE */}
      <div className=" flex justify-center  px-[200px] flex-wrap py-12">
        <div className="w-2/3 px-24 h-screen">
          <p className="relative mt-6 text-lg leading-8 text-gray-600 sm:max-w-md lg:max-w-none ">
            Located in Concordia University in the beautiful city of Montréal,{" "}
            <b>RE</b>search on <b>A</b>naLytics and <b>I</b>ntelligence for{" "}
            <b>S</b>oftware <b>E</b>ngineering lab is located in the middle of
            the vibrant downtown. From dependency management to performance
            engineering and building robust AI solutions, we tackle a wide range
            of research topics in aim to enhance software for everyone
          </p>
          <div className=" mt-16 relative">
            <span className="flex justify-center font-bold text-lg bg-white relative mx-auto px-4 w-fit z-50 rounded-lg text-gray-900">
              News
            </span>
            <div className=" border-dashed border-b border-t-0 border-x-0 w-full absolute top-4 z-0">
              {" "}
            </div>
            {news.map((item, index) => (
              <div className="my-4" key={index}>
                <h2>{item.title}</h2>
                <p>{item.description}</p>
                <p>{item.content}</p>
              </div>
            ))}
            
          </div>
        </div>

        <div className="w-1/3 ">
          <span className="text-white text-lg">
            <Tweet />
          </span>
        </div>
      </div>
    </Layout>
  );
}
