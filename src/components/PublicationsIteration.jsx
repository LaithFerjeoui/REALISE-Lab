import React from "react";
import { FaGithub, FaRegFilePdf } from "react-icons/fa";
import { GoDatabase } from "react-icons/go";
import { LuPresentation } from "react-icons/lu";
import { useState } from "react";
import { FaQuoteLeft } from "react-icons/fa";
import { DefaultPublications } from "../../Add Publication Or Team Member/Publications";

const preDefinedText = "this a text";

export default function PublicationsIteration({ project, all }) {
  const [showTextAreas, setShowTextAreas] = useState(
    Array(DefaultPublications.length).fill(false)
  );

  // Function to toggle the text area for a specific publication
  const toggleTextArea = (index) => {
    setShowTextAreas((prevState) => {
      const newState = [...prevState];
      newState[index] = !newState[index];
      return newState;
    });
  };
  const groupPublicationsByYearAndType = (publications) => {
    return publications.reduce((acc, publication) => {
      const { year, type } = publication;
      if (!acc[year]) {
        acc[year] = {};
      }
      if (!acc[year][type]) {
        acc[year][type] = [publication];
      } else {
        acc[year][type].push(publication);
      }
      return acc;
    }, {});
  };

  const groupedPublications = Object.keys(groupPublicationsByYearAndType(DefaultPublications))
    .sort((a, b) => b - a)
    .map((year) => ({
      year: parseInt(year),
      types: Object.keys(groupPublicationsByYearAndType(DefaultPublications)[year]).map((type) => ({
        type,
        publications: groupPublicationsByYearAndType(DefaultPublications)[year][type],
      })),
    }));
  const convertToBibTeX = (publication) => {
    const authors = publication.authors
      .split(", ")
      .map((author) => `{${author.trim()}}`)
      .join(", ");
    switch (publication.type) {
      case "Journals":
        return `@article{${publication.title.replace(/[^a-zA-Z0-9]/g, "")},
                  title={${publication.title}},
                  author={${authors}},
                  journal={${publication.venue}}
              }`;
      case "Conferences":
        return `@inproceedings{${publication.title.replace(
          /[^a-zA-Z0-9]/g,
          ""
        )},
                  title={${publication.title}},
                  author={${authors}},
                  booktitle={${publication.venue}}
              }`;
      case "Theses":
        return `@phdthesis{${publication.title.replace(/[^a-zA-Z0-9]/g, "")},
                  title={${publication.title}},
                  author={${authors}},
                  school={${publication.venue}}
              }`;
      default:
        return "";
    }
  };

  const filteredPublications = DefaultPublications.filter(publication => publication.project === project);
  const groupedPublicationsOfProject = Object.keys(groupPublicationsByYearAndType(filteredPublications))
    .sort((a, b) => b - a)
    .map((year) => ({
      year: parseInt(year),
      types: Object.keys(groupPublicationsByYearAndType(filteredPublications)[year]).map((type) => ({
        type,
        publications: groupPublicationsByYearAndType(filteredPublications)[year][type],
      })),
    }));

  const ChosenPublication = all == false? groupedPublicationsOfProject : groupedPublications
  return (
    <div className="mx-auto mt-10 max-w-2xl border-t border-gray-200 pt-4 sm:mt-16  lg:mx-0 lg:max-w-none flex-col justfify-center items-center">
      {ChosenPublication.map((publication, index) => (
        <div key={index}>
          <div className="flex justify-center w-full shadow-2xl mb-3">
            <span className="text-3xl font-bold tracking-tight text-gray-900 gradient mb-5">
              {publication.year}
            </span>
          </div>
          {publication.types.map((typeItem, subIndex) => (
            <div key={subIndex}>
              <h2 className="text-xl font-bold text-gray-900 mb-3 ml-3">
                {typeItem.type}:
              </h2>
              {typeItem.publications.map((pub, innerIndex) => (
                <article
                  key={innerIndex}
                  className="flex max-w-4xl flex-col items-start justify-between mx-auto mb-10"
                >
                  <div className="flex items-center gap-x-4 text-xs">
                    <time
                      dateTime={pub.datetime}
                      className="text-gray-500"
                    >
                      {pub.dateTime}
                    </time>
                  </div>
                  <div className="group relative w-full">
                    <h3 className="mt-3 text-lg font-semibold leading-6 text-gray-900 group-hover:text-gray-600">
                      <div className="text-2xl">
                        <span className="absolute inset-0" />
                        {pub.title}
                      </div>
                    </h3>
                    <h5 style={{ display: "inline" }}>Authors:</h5>
                    <p style={{ display: "inline" }}> {pub.authors}</p>
                    <br />
                    <h5 style={{ display: "inline" }}>Venue:</h5>
                    <p style={{ display: "inline" }}> {pub.venue}</p>
                  </div>
                  <div className="flex justify-end items-center gap-3 w-full mb-3">
                    {pub.pdfPathHref && (
                      <a
                        href={pub.pdfPathHref}
                        className="flex justify-center items-center hover:scale-105 duration-300"
                      >
                        <FaRegFilePdf size={20} /> <span>PDF</span>
                      </a>
                    )}
                    {pub.datasetLink && (
                      <a
                        className="flex justify-center items-center hover:scale-105 duration-300"
                        href={pub.datasetLink}
                      >
                        <GoDatabase size={20} /> <span>Database</span>
                      </a>
                    )}
                    {pub.githubLink && (
                      <a
                        className="flex justify-center items-center hover:scale-105 duration-300"
                        href={pub.githubLink}
                      >
                        <FaGithub size={20} /> <span>Github</span>
                      </a>
                    )}
                    {pub.presentationLink && (
                      <a
                        className="flex justify-center items-center hover:scale-105 duration-300"
                        href={pub.presentationLink}
                      >
                        <LuPresentation size={20} />{" "}
                        <span>Presentation </span>
                      </a>
                    )}
  
                    {/* Toggle Text Area button */}
                    <div
                      className="flex justify-center items-center hover:scale-105 duration-300 text-[#868fa9] cursor-pointer"
                      onClick={() => toggleTextArea(innerIndex)}
                    >
                      <FaQuoteLeft />
                      <span>BibTex</span>
                    </div>
                  </div>
                  {/* Pre-defined text area */}
                  {showTextAreas[innerIndex] && (
                    <textarea
                      className="rounded-[7px] border border-gray-400 flex justify-center w-full"
                      rows={4}
                      cols={50}
                      value={convertToBibTeX(pub)}
                      readOnly
                    />
                  )}
                </article>
              ))}
            </div>
          ))}
        </div>
      ))}
    </div>
  );
}