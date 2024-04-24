import React from "react";
import "tailwindcss/tailwind.css";
import Layout from'@theme/Layout';
import "../css/custom.css";
const features = [
    { name: 'Your CV', description: 'Highlight all your achievements'},
    { name: 'Cover Letter', description: 'include your research interests, outline of previous research experience, preferred start date. You get a bonus point if you include which research topic you are interested on, or which papers from our group has caught your attention' },
    { name: 'Unofficial transcripts', description: 'Include them in one file' },
    { name: '(Optional) Sample of your papers', description: 'if you have any' },
  ]
  
  export default function Example() {
    return (
      <Layout>

      <div className="bg-gray-900/5">
        <div aria-hidden="true" className="relative">
          <img
            src="img/concordia.jpg"
            alt=""
            className="h-[500px] w-full object-cover object-center "
          />
          <div className="absolute inset-0 bg-gradient-to-t from-white" />
        </div>
  
        <div className="relative mx-auto -mt-12 max-w-7xl px-4 pb-16 sm:px-6 sm:pb-24 lg:px-8">
          <div className="mx-auto max-w-2xl text-center lg:max-w-4xl">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl no">Join the Team And Apply Now</h2>
            <p className="mt-4 text-gray-500">
             send the requirements bellow on our email 
             lab@gmail.com
            </p>


            <div style={{ textAlign: 'left' }}>
            <h2>Prospective Students</h2>

            <p className="mt-4 text-gray-500">We are always on the lookout for hiring self-motivated MSc and PhD students to work on topics related to software engineering. You can see our research in detail in the <a href="/publications">Publications</a>. Currently, I am focused on three major research topics:
            <ul>
            <li><b>Dependency Management.</b> How to help software maintainers at reusing open source libraries without risking the quality, security and stability of their systems?</li>
            <li><b>Performance Regression Testing.</b> How can we help software developers identify when their systems are slower, consume more energy, or use more memory than before?</li>
            <li><b>Engineering AI systems.</b> AI systems are increasingly becoming part of our daily lives. How can we help software developers to build more reliable AI systems?</li>
            </ul>
            <b>Disclaimer</b> In our research we do use AI methods to understand large amounts of data, propose intelligent solutions, or as an application for software engineering techniques. However, our research is not focused in developping AI methods. We use AI/ML/LLMs to help software developpers at delivering better quality software. If you are looking for a group that is specialized in AI research, this is not the right research group for you.
            <h2>Why join?</h2>
            A few good reasons to join our lab:
            <ul>
            <li>You will be working on indutry-relevant problems that have a direct impact on the software industry.</li>
            <li>Montreal is one of the best cities to <a href="https://www.topuniversities.com/city-rankings/2023">study</a> in the world.</li>
            <li>Concordia University is one of the <a href="https://www.concordia.ca/news/stories/2022/02/25/concordia-remains-tops-under-50-in-canada.html?c=/news/archive">top young universities (under 50 years old) in North America..</a></li>
            </ul>
            <h2>How to apply?</h2>
            <b>Qualifications:</b> Strong programming, problem-solving and communication skills.

            A degree in computer science, computer engineering or software engineering is expected. However, if you have a major in adjacent areas (e.g., electrical engineering, mathematics, physics) and have a strong programming background, you are also encouraged to apply. If you come from a completely different area, you should justify (with strong arguments) in your cover letter why you want to switch to software engineering.
            If you are interested in joining my research group, please contact (diego.costa [at] concordia.ca) and include:
            <ul>
            <li>Your CV</li>
            <li>Brief cover letter including: your research interests, outline of previous research experience, preferred start date. You get a bonus point if you include which research topic you are interested on, or which papers from our group has caught your attention (see <a href="/publications">Publications</a>).</li>
            <li>Unofficial transcripts</li>
            <li>(Optional) Sample of your papers (if you have any)</li>
            </ul>
            <h2>Important tips:</h2>
            <ul>
            <li>Make sure to show in your email that you are actually interested in our work. Generic application e-mails (especially those that are addressed to multiple professors!) <b>will be ignored</b>.</li>
            <li>Take a look at the <a href="https://www.concordia.ca/gradstudies/future-students.html">Concordia University website</a> for information on graduate admissions, tuitions, scholarships and the programs.</li>
            <li>Check out Dr. Evan’s advice for <a href="https://uvasrg.github.io/prospective/">prospective research students</a> when contacting us (or any professor).</li>
            </ul>
          </p>
          </div>
          </div>
          {/*
          <dl className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 sm:gap-y-16 lg:max-w-none lg:grid-cols-3 lg:gap-x-8">
            {features.map((feature) => (
              <div key={feature.name} className="border-t border-gray-200 pt-4">
                <dt className="font-medium text-gray-900">{feature.name}</dt>
                <dd className="mt-2 text-sm text-gray-500">{feature.description}</dd>
              </div>
            ))}
          </dl>
          */}
        </div>
      </div>
      </Layout>
    )
  }
  