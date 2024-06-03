import Layout from "@theme/Layout";
import { ChevronRightIcon } from "@heroicons/react/20/solid";
import Tweet from "../components/Tweet";
import { IoIosReturnRight } from "react-icons/io";
import PartnersMainPage from "./NewsOnHomePage";
import { news } from "../../content/HomeNews";
import { FaNewspaper } from "react-icons/fa";
export default function Example() {
  return (
    <Layout>
      {/* FIRST CONTAINER HERE */}
      <div className="bg-gray-100  h-[420px] shadow-xl">
        <div className="flex flex-col justify-center items-center pt-12">
          <img className="w-[150px]" src="img/logo.png" alt="REALISE" />
          <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl gradient  text-center">
            REALISE
          </h1>
        </div>
      </div>

      {/* RIGHT AND LEFT CONTAINER HERE */}
      <div className="lg:flex lg:justify-center lg:px-[200px] flex-wrap py-12">
        <div className="md:w-2/3 md:px-24 px-5 text-center md:text-left ">
          <p className="relative mt-6 text-lg leading-8 text-gray-600 sm:max-w-md lg:max-w-none mx-auto">
            Located in Concordia University in the beautiful city of Montréal,{" "}
            <b>RE</b>search on <b>A</b>naLytics and <b>I</b>ntelligence for{" "}
            <b>S</b>oftware <b>E</b>ngineering lab is located in the middle of
            the vibrant downtown. From dependency management to performance
            engineering and building robust AI solutions, we tackle a wide range
            of research topics in aim to enhance software for everyone
          </p>
        </div>

        <div className="md:w-1/3 px-7">
          <Tweet />
        </div>
        <div className=" mt-16 relative md:mx-28 mx-5">
          <span className="flex gap-2 justify-center font-bold text-lg bg-white relative mx-auto px-4 w-fit z-50 rounded-lg text-gray-900">
            Latest
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-600  to-red-800 border-b ">
              News{" "}
            </span>
          </span>
          <div className=" border-dashed border-b border-t-0 border-x-0 w-full absolute top-4 z-0">
            {" "}
          </div>
          {news.map((item, index) => (
            <div
              className="my-4 relative pb-6 text-center mb-12 hover:scale-105 duration-150"
              key={index}
            >
              <div className="flex justify-center items-center gap-3 ">
                <div>
                  <FaNewspaper size={25} />
                </div>
                <div className="text-sm">
                  <h2>{item.title}</h2>
                </div>
                <div>
                  <FaNewspaper size={25} />
                </div>
              </div>

              <p>{item.description}</p>
              <div className="absolute -bottom-1 right-3">
                <a
                  href={item.href}
                  type="button"
                  className="rounded bg-indigo-50 px-2 py-1 text-sm font-semibold text-indigo-400 shadow-sm hover:bg-indigo-100 border-0 flex justify-end items-center"
                >
                  Go to News Page
                  <IoIosReturnRight size={20} />
                </a>
              </div>
            </div>
          ))}
          <span className="flex justify-center font-bold text-lg bg-white relative mx-auto px-4 w-fit z-50 rounded-lg text-gray-900 pt-12">
            <div className="flex justify-center gap-2">
              <h1>Our</h1>
              <h1 className=" font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-orange-600  to-red-800 border-b ">
                Partners
              </h1>
            </div>
          </span>
          <PartnersMainPage />
        </div>
      </div>
    </Layout>
  );
}
