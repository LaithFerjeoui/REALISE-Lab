import Layout from "@theme/Layout";
import { ChevronRightIcon } from "@heroicons/react/20/solid";
import Tweet from "../components/Tweet";
import { IoIosReturnRight } from "react-icons/io";
import PartnersMainPage from "./PartnersOnHomePage";
import { news } from "../../content/HomeNews";
import { FaNewspaper } from "react-icons/fa";

export default function Example() {
  return (
    <Layout>
      {/* FIRST CONTAINER HERE */}
      <div className="h-auto gradient-bg-light">
        <div className="flex flex-col justify-center items-center pt-12">
          <img
            className="w-full max-w-[90%] md:max-w-[85%] lg:max-w-[50%] xl:max-w-[50%] px-4"
            src="img/realise-logo.png"
            alt="REALISE"
          />
        </div>
        <div className="extra-black-space"></div>
      </div>

      {/* MAIN CONTENT */}
      <div className=" max-w-[1400px] flex justify-center flex-wrap py-12 mx-auto px-4">
        <div className="w-full flex flex-col md:flex-row md:justify-between mx-auto px-8">
          {/* Left content */}
          <div className="md:w-[60%]">
            <p className="relative mt-6 text-lg leading-8 text-gray-600">
              Located in Concordia University in the beautiful city of Montréal,{" "}
              the <b>RE</b>search on <b>A</b>naLytics and <b>I</b>ntelligence for{" "}
              <b>S</b>oftware <b>E</b>ngineering Lab is a research group that focuses on studying and developing techniques to help software engineers build better software.

              Overall, we use data analytics and artificial intelligence techniques to improve practices related to software maintenance and evolution. We work on the following software engineering areas:

              <ul className="list-disc ml-5">
                <li>Software Performance Testing</li>
                <li>Open-Source Software Development and Dependency Management</li>
                <li>Software Development Assistants</li>
                <li>Maintenance and Reliability of Artificial Intelligence-Based Systems</li>
              </ul>

              This website is a hub for our research activities, publications, and news. We are always looking for new collaborations and partnerships. If you are interested in working with us, please contact us.
            </p>
          </div>
          {/* Right content */}
          <div className="md:w-[40%] flex  mt-8 md:mt-0">
            <Tweet />
          </div>
        </div>

        {/* Meet the Team Section */}
        <div className="block max-w-4xl mx-auto mt-4 mb-6 md:mt-8 md:mb-8 text-center hover:scale-105 duration-150">
          <div className="flex justify-center gap-2">
            <h2 className="text-lg md:text-xl lg:text-2xl font-bold">Meet the Team</h2>
          </div>
        </div>
        <div className="flex justify-center my-4 px-4 md:px-8">
          <img
            src="img/group_picture.jpg"
            alt="Group Picture"
            className="w-full max-w-[90%] md:max-w-[70%] rounded-lg shadow-lg cursor-pointer"
            onClick={() => window.location.href = '/team'}
          />
        </div>

        {/* Latest News Section */}
        <div className="mt-16 relative mx-auto px-4 md:px-8">
          <div className="text-center hover:scale-105 duration-150 mb-8">
            <h2 className="text-lg md:text-xl lg:text-2xl font-bold">Latest News</h2>
          </div>
          {news.map((item, index) => (
            <div
              className="my-4 relative text-left mb-12 hover:scale-105 duration-150"
              key={index}
            >
              <div className="flex items-start gap-3">
                <FaNewspaper size={25} />
                <div className="text-sm">
                  <a href={item.href}>
                    <h2 className="font-semibold">{item.title}</h2>
                  </a>
                </div>
              </div>
              <p className="ml-10 text-gray-600">{item.description}</p>
            </div>
          ))}

          {/* Partners Section */}
          <div className="text-center hover:scale-105 duration-150 mb-8">
            <h2 className="text-lg md:text-xl lg:text-2xl font-bold">Our Partners</h2>
          </div>
          <PartnersMainPage />
        </div>
      </div>
    </Layout>
  );
}
