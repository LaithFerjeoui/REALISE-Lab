import React from "react";
import Layout from "@theme/Layout";
const posts = [
  {
    id: 1,
    title: "Securing the Software Supply Chain",
    href: "/dependency-management",
    description:
      "How to reduce the risks of developing and reusing open source software components? ",
    imageUrl:
      "https://images.unsplash.com/photo-1496128858413-b36217c2ce36?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=3603&q=80",
    date: "Mar 16, 2020",
    datetime: "2020-03-16",
  },
  {
    id: 1,
    title: "Building the Future of Performance Testing Methods",
    href: "/performance-engineering",
    description:
      "How do we make our Performance Testing more agile?",
    imageUrl:
      "https://images.unsplash.com/photo-1496128858413-b36217c2ce36?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=3603&q=80",
    date: "Mar 16, 2020",
    datetime: "2020-03-16",
  },
  {
    id: 1,
    title: "Reliably Engineering AI Systems",
    href: "/se4ai",
    description:
      "How do we ensure our AI systems are reliable, safe, and secure?",
    imageUrl:
      "https://images.unsplash.com/photo-1496128858413-b36217c2ce36?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=3603&q=80",
    date: "Mar 16, 2020",
    datetime: "2020-03-16",
  },
  // Add more posts here...
];

const projects = () => {
  return (
    <Layout>
      <div className="bg-gray-100/5 py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              Projects
            </h2>
            <p className="mt-2 text-lg leading-8 text-gray-600">
              Learn more about our projects.
            </p>
          </div>
          <div className="mx-auto mt-16 grid max-w-2xl auto-rows-fr grid-cols-1 gap-8 sm:mt-20 lg:mx-0 lg:max-w-none lg:grid-cols-3 ">
            {posts.map((post) => (
              <article
                href={post.href}
                key={post.id}
                className="hover:scale-105 duration-300 relative isolate flex flex-col justify-end overflow-hidden rounded-2xl bg-gray-900 px-8 pb-8 pt-80 sm:pt-48 lg:pt-80"
              >
                <img
                  src={post.imageUrl}
                  alt=""
                  className="absolute inset-0 -z-10 h-full w-full object-cover"
                />
                <div className="absolute inset-0 -z-10 bg-gradient-to-t from-gray-900 via-gray-900/40" />
                <div className="absolute inset-0 -z-10 rounded-2xl ring-1 ring-inset ring-gray-900/10" />

                <div className="flex flex-wrap items-center gap-y-1 overflow-hidden text-lg font-bold leading-6 text-white mb-4">
                  <a href={post.href}>
                    <span className="mr-8 text-white">{post.title}</span>
                  </a>
                </div>
                <span className="text-gray-300 font-normal text-md">
                  {post.description}
                </span>
              </article>
            ))}
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default projects;
