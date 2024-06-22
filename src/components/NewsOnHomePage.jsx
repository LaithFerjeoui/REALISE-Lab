import React from "react";
import "tailwindcss/tailwind.css";
import "../css/custom.css";
import { partners } from "../../content/Partners";


const PartnersMainPage = () => {


  return (
      <div className="bg-gray-100/5">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto my-7 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 border-t border-gray-200 pt-10 sm:pt-16 lg:mx-0 lg:max-w-none lg:grid-cols-3">
            {partners.map((partner) => (
              <article key={partner.name} className="flex max-w-xl flex-col items-start justify-between hover:scale-105 duration-200">
                <div className="group relative">
                  <h3 className="mt-3 text-lg font-semibold leading-6 text-gray-900 group-hover:text-gray-600">
                    <a href={partner.link} target="_blank" rel="noopener noreferrer">
                      <span className="absolute inset-0 border" />
                      <img className="mx-auto" src={partner.imagePath} alt=""/>
                    </a>
                  </h3>
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
  );
};

export default PartnersMainPage;
