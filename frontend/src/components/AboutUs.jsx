import React from "react";

const AboutUs = () => {
  return (
    <section className="text-gray-600 body-font">
      <div className="px-5 py-24 mx-auto flex flex-col">
        <div className="lg:w-4/6 mx-auto">
          <div className="rounded-lg h-64 overflow-hidden">
            <img
              alt="content"
              className="object-cover object-center h-full w-full"
              src="https://img.freepik.com/free-photo/learn-learning-education-studying-concept_53876-120494.jpg?w=900&t=st=1688369033~exp=1688369633~hmac=e363f26a7750fb2ad3c466eeccffacf955cfefd745d9488164a7cf3656ed4f08"
            />
          </div>
          <div className="flex flex-col sm:flex-row mt-10">
            <div className="sm:w-1/3 text-center sm:pr-8 sm:py-8">
              {/* <div className="w-20 h-20 rounded-full inline-flex items-center justify-center bg-gray-200 text-gray-400">
                                <svg
                                    fill="none"
                                    stroke="currentColor"
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                    stroke-width="2"
                                    className="w-10 h-10"
                                    viewBox="0 0 24 24"
                                >
                                    <path d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2"></path>
                                    <circle cx="12" cy="7" r="4"></circle>
                                </svg>
                            </div> */}
              <div className="flex flex-col items-center text-center justify-center">
                <h2 className="font-medium title-font mt-4 text-gray-900 text-lg">
                  Intuitive Course Management
                </h2>
                <div className="w-12 h-1 bg-blue-500 rounded mt-2 mb-4"></div>
                <p className="text-base">
                  Odyssey offers a user-friendly interface for managing and
                  organizing your courses. You can easily navigate through your
                  enrolled courses, track your progress, and access relevant
                  materials and resources.
                </p>
              </div>
            </div>
            <div className="sm:w-2/3 sm:pl-8 sm:py-8 sm:border-l border-gray-200 sm:border-t-0 border-t mt-4 pt-4 sm:mt-0 text-center sm:text-left">
              <p className="leading-relaxed text-lg text-justify mb-4">
                Welcome to Odyssey, a revolutionary learning management system
                designed to transform the way you acquire knowledge and enhance
                your educational journey. Whether you're a student, a
                professional, or an organization, Odyssey provides you with the
                tools and resources you need to excel in your learning
                endeavors. At Odyssey, we believe that education is a lifelong
                pursuit, and our platform is designed to empower learners of all
                ages and backgrounds. We understand that each learner is unique,
                with different goals, learning styles, and preferences. That's
                why we have built a flexible and inclusive platform that caters
                to individual needs and supports diverse learning methods. Our
                mission is to foster a vibrant online learning community where
                knowledge is accessible, interactive, and engaging. We are
                committed to providing a seamless and intuitive learning
                experience, making education accessible to anyone, anywhere, at
                any time.
              </p>
              <a className="text-blue-500 inline-flex items-center">
                Learn More
                <svg
                  fill="none"
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  className="w-4 h-4 ml-2"
                  viewBox="0 0 24 24"
                >
                  <path d="M5 12h14M12 5l7 7-7 7"></path>
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
