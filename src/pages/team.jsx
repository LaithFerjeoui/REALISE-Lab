import React from "react";
import "tailwindcss/tailwind.css";
import Layout from "@theme/Layout";
import { members } from "../../content/TeamMembers";

const groupMembersByRole = (members) => {
  return members.reduce((acc, member) => {
    const { role } = member;
    if (!acc[role]) {
      acc[role] = [];
    }
    acc[role].push(member);
    return acc;
  }, {});
};

const groupedMembers = Object.keys(groupMembersByRole(members)).map((role) => ({
  role,
  members: groupMembersByRole(members)[role],
}));

export default function Example() {
  return (
    <Layout>
        <div className="py-14 sm:py-14">
        <div className="mx-auto flex flex-col justify-center max-w-[1400px] px-3 md:px-14  ">
          <div className=" max-w-2xl ">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              Our team
            </h2>
            <p className="mt-8 text-lg leading-8 text-gray-600 whitespace-nowrap">
              Meet the people who make the REALISE lab.
            </p>
          </div>
     
          <ul
            role="list"
            className="mt-20 w-full grid-cols-1 gap-x-8 gap-y-16 flex-col list-none justify-start pr-[32px]"
          >
            {groupedMembers.map((group) => (
              <div key={group.role} className="mb-8">
                <h2 className="text-2xl font-bold my-12">{group.role}s</h2>
                <div className="flex w-full gap-8 flex-wrap">
                  {group.members.map((person) => (
                    <div
                      key={person.name}
                      className="bg-white/10 rounded-lg shadow-md p-6 w-[350px] relative"
                    >
                      {person.imageUrl == "" ? (
                        <img
                          className="aspect-[5/5] w-full rounded-2xl object-cover mb-4"
                          src="Img/default-photo.png"
                          alt=""
                        />
                      ) : (
                        <img
                          className="aspect-[5/5] w-full rounded-2xl object-cover mb-4"
                          src={person.imageUrl}
                          alt=""
                        />
                      )}

                      <h3 className="text-lg font-semibold mb-2">
                        {person.name}
                      </h3>
                      <p className="text-gray-600 mb-4">{person.role}</p>

                      <div className="flex items-center">
                        {person.twitterUrl && (
                          <a href={person.twitterUrl} className="mr-4">
                            <svg
                              className="h-6 w-6 text-blue-500 hover:text-blue-700"
                              aria-hidden="true"
                              fill="currentColor"
                              viewBox="0 0 20 20"
                            >
                              <path d="M6.29 18.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0020 3.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.073 4.073 0 01.8 7.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 010 16.407a11.616 11.616 0 006.29 1.84" />
                            </svg>
                          </a>
                        )}

                        {person.linkedinUrl && (
                          <a href={person.linkedinUrl} className="mr-4">
                            <svg
                              className="h-6 w-6 text-blue-500 hover:text-blue-700"
                              aria-hidden="true"
                              fill="currentColor"
                              viewBox="0 0 20 20"
                            >
                              <path
                                fillRule="evenodd"
                                d="M16.338 16.338H13.67V12.16c0-.995-.017-2.277-1.387-2.277-1.39 0-1.601 1.086-1.601 2.207v4.248H8.014v-8.59h2.559v1.174h.037c.356-.675 1.227-1.387 2.526-1.387 2.703 0 3.203 1.778 3.203 4.092v4.711zM5.005 6.575a1.548 1.548 0 11-.003-3.096 1.548 1.548 0 01.003 3.096zm-1.337 9.763H6.34v-8.59H3.667v8.59zM17.668 1H2.328C1.595 1 1 1.581 1 2.298v15.403C1 18.418 1.595 19 2.328 19h15.34c.734 0 1.332-.582 1.332-1.299V2.298C19 1.581 18.402 1 17.668 1z"
                                clipRule="evenodd"
                              />
                            </svg>
                          </a>
                        )}

                        
                          
                        

                        
                      </div>
                      <a
                          href={person.details}
                          className="text-blue-500 hover:text-blue-700 absolute right-7 bottom-7 "
                        >
                          More details
                        </a>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </ul>
        </div>
      </div>
    </Layout>
  );
}
