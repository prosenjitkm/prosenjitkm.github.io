'use client';

import { useState } from 'react';

export default function Resume() {
  const [activeTab, setActiveTab] = useState('education');

  const tabs = [
    { id: 'education', label: 'Education' },
    { id: 'skills', label: 'Professional Skills' },
    { id: 'experience', label: 'Experience' },
    { id: 'contribution', label: 'Signature Contribution' },
  ];

  return (
    <section id="resume" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className="text-[#ff014f] text-sm font-semibold uppercase tracking-wider">
            8+ Years of Experience
          </span>
          <h2 className="text-4xl font-bold text-gray-900 mt-4">My Resume</h2>
        </div>

        {/* Tabs */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`px-6 py-3 rounded-lg font-medium transition-all duration-200 ${
                activeTab === tab.id
                  ? 'bg-[#ff014f] text-white shadow-lg'
                  : 'bg-white text-gray-700 hover:bg-gray-100'
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Tab Content */}
        <div className="max-w-6xl mx-auto">
          {/* Education Tab */}
          {activeTab === 'education' && (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 animate-fadeIn">
              <div className="space-y-6">
                <h3 className="text-2xl font-bold text-gray-900 mb-6">Educational Qualifications</h3>
                
                <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow">
                  <div className="flex justify-between items-start mb-2">
                    <div>
                      <h4 className="text-lg font-bold text-gray-900">Bachelor of Science, Computer Science</h4>
                      <p className="text-gray-600">Lehman College</p>
                    </div>
                    <span className="text-[#ff014f] font-semibold">Present</span>
                  </div>
                </div>

                <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow">
                  <div className="flex justify-between items-start mb-2">
                    <div>
                      <h4 className="text-lg font-bold text-gray-900">Associate of Science, Computer Science</h4>
                      <p className="text-gray-600">LaGuardia Community College</p>
                    </div>
                    <span className="text-[#ff014f] font-semibold">2021</span>
                  </div>
                </div>
              </div>

              <div className="space-y-6">
                <h3 className="text-2xl font-bold text-gray-900 mb-6">&nbsp;</h3>
                
                <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow">
                  <div className="flex justify-between items-start mb-2">
                    <div>
                      <h4 className="text-lg font-bold text-gray-900">Training on Software Development</h4>
                      <p className="text-gray-600">IBCS PRIMAX, Bangladesh</p>
                    </div>
                    <span className="text-[#ff014f] font-semibold">2013</span>
                  </div>
                </div>

                <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow">
                  <div className="flex justify-between items-start mb-2">
                    <div>
                      <h4 className="text-lg font-bold text-gray-900">Bachelor of Science, Electrical & Electronic Engineering</h4>
                      <p className="text-gray-600">Independent University of Bangladesh</p>
                    </div>
                    <span className="text-[#ff014f] font-semibold">2013</span>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Skills Tab */}
          {activeTab === 'skills' && (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 animate-fadeIn">
              <div className="bg-white p-8 rounded-xl shadow-md">
                <h3 className="text-2xl font-bold text-gray-900 mb-6">Areas Of Expertise</h3>
                <ul className="space-y-3 text-gray-700">
                  <li><span className="font-semibold text-[#ff014f]">Java Design Patterns:</span> MVC, DAO, Singleton, Factory, Session Facade, Adapter, Bridge</li>
                  <li><span className="font-semibold text-[#ff014f]">Operating Systems:</span> Windows, Unix/Linux</li>
                  <li><span className="font-semibold text-[#ff014f]">Frameworks:</span> Spring Framework, MVC, Hibernate 3.0/4.0, Struts 2.0, Spring Boot, JPA</li>
                  <li><span className="font-semibold text-[#ff014f]">IDEs:</span> Eclipse, IntelliJ, Visual Studio Code</li>
                  <li><span className="font-semibold text-[#ff014f]">Programming Languages:</span> Java, JavaScript, C++, SQL, PL/SQL</li>
                  <li><span className="font-semibold text-[#ff014f]">Web Technologies:</span> HTML5, CSS3, jQuery, Bootstrap, Angular, Node.JS, Express.JS, React</li>
                  <li><span className="font-semibold text-[#ff014f]">Defect Tracking Tools:</span> Rally, JIRA, VSTS</li>
                  <li><span className="font-semibold text-[#ff014f]">Version Control:</span> GIT, TFS, CVS, SVN, Azure DevOps</li>
                  <li><span className="font-semibold text-[#ff014f]">Testing:</span> Junit, Mockito</li>
                  <li><span className="font-semibold text-[#ff014f]">Build Scripts:</span> Maven, Jenkins, Ant, Gradle</li>
                  <li><span className="font-semibold text-[#ff014f]">Methodologies:</span> Agile, Scrum, Test Driven Development</li>
                  <li><span className="font-semibold text-[#ff014f]">Database:</span> Oracle, DB2, SQL Server, MySQL, PostgreSQL, MongoDB</li>
                </ul>
              </div>

              <div className="bg-white p-8 rounded-xl shadow-md">
                <h3 className="text-2xl font-bold text-gray-900 mb-6">Key Skills</h3>
                <ul className="space-y-3 text-gray-700">
                  <li className="flex items-center"><span className="w-2 h-2 bg-[#ff014f] rounded-full mr-3"></span>Software & System Development</li>
                  <li className="flex items-center"><span className="w-2 h-2 bg-[#ff014f] rounded-full mr-3"></span>System Programming and Maintenance</li>
                  <li className="flex items-center"><span className="w-2 h-2 bg-[#ff014f] rounded-full mr-3"></span>Team Leadership</li>
                  <li className="flex items-center"><span className="w-2 h-2 bg-[#ff014f] rounded-full mr-3"></span>Agile Methodology</li>
                  <li className="flex items-center"><span className="w-2 h-2 bg-[#ff014f] rounded-full mr-3"></span>Managerial & System Support</li>
                  <li className="flex items-center"><span className="w-2 h-2 bg-[#ff014f] rounded-full mr-3"></span>Process Optimization</li>
                  <li className="flex items-center"><span className="w-2 h-2 bg-[#ff014f] rounded-full mr-3"></span>Coding</li>
                  <li className="flex items-center"><span className="w-2 h-2 bg-[#ff014f] rounded-full mr-3"></span>Customer Needs Translation</li>
                  <li className="flex items-center"><span className="w-2 h-2 bg-[#ff014f] rounded-full mr-3"></span>User Interaction</li>
                  <li className="flex items-center"><span className="w-2 h-2 bg-[#ff014f] rounded-full mr-3"></span>Functionality Extension Debugging</li>
                  <li className="flex items-center"><span className="w-2 h-2 bg-[#ff014f] rounded-full mr-3"></span>Compliance</li>
                  <li className="flex items-center"><span className="w-2 h-2 bg-[#ff014f] rounded-full mr-3"></span>Technology Implementation</li>
                </ul>
              </div>
            </div>
          )}

          {/* Experience Tab */}
          {activeTab === 'experience' && (
            <div className="space-y-8 animate-fadeIn">
              <ExperienceCard
                title="Full Stack Java Developer (On-site)"
                company="Macy's - Atlanta, GA"
                period="January 2020 - Present"
                description="Successfully completed / built an application capable of collecting customer product choices, amount of expenses, frequency of shopping at a physical store or the website, and several other variables to create offers and discounts deals tailored for each customer."
                highlights={[
                  'Performed in Agile Methodology (Scrum) to meet customer expectations',
                  'Created efficient designs using HTML5, CSS3, JavaScript, jQuery, and Ajax',
                  'Implemented validation controls using Angular and TypeScript',
                  'Utilized Java8 Lambda expressions with Streams',
                  'Built single-page applications with Angular, TypeScript, and RXJS',
                  'Migrated stored procedures from Oracle DB to PostgreSQL DB',
                  'Developed Microservices using Spring Boot',
                  'Worked with AWS EC2, S3, and IAM'
                ]}
              />

              <ExperienceCard
                title="Senior Full Stack Developer (On-site)"
                company="Lowe's - Mooresville, NC"
                period="August 2016 – December 2019"
                description="Played a critical role in analysis, detail design, development, bug fixing, and enhancement in SAFe Agile methodology. Developed multiple Spring Boot Starters to support applications."
                highlights={[
                  'Developed pages using AngularJS directives and routing',
                  'Implemented Hibernate annotations',
                  'Utilized SHA-1 hashing algorithm',
                  'Developed UI screens using Angular-JS, Ajax, Bootstrap',
                  'Worked with Vue.js, ReactJS, and Node.js',
                  'Developed server-side services using Java and Spring',
                  'Employed Maven scripts for build and deployment'
                ]}
              />

              <ExperienceCard
                title="Java Developer (Remote)"
                company="Glen Oaks Hospital, Greenville, TX"
                period="July 2015 – May 2016"
                description="Involved in various phases of Software Development Life Cycle (SDLC). Contributed to system design using Rational Rose Tool."
                highlights={[
                  'Implemented Dependency Injection using Spring Framework',
                  'Developed application using Spring MVC and Web flow',
                  'Utilized Hibernate for data persistence',
                  'Built Web Services for prescription details'
                ]}
              />

              <ExperienceCard
                title="Java Developer (Remote)"
                company="Catholic Health, Denver, CO"
                period="September 2013 – June 2015"
                description="Created Technical/Functional specifications based on Requirement Elicitation. Employed OO techniques and UML methodology."
                highlights={[
                  'Built User Interface using JavaScript, HTML, JSP, CSS',
                  'Coded various action classes in Struts',
                  'Implemented business logic with Spring MVC framework',
                  'Used IOC Pattern and Dependency Injection'
                ]}
              />
            </div>
          )}

          {/* Contribution Tab */}
          {activeTab === 'contribution' && (
            <div className="animate-fadeIn">
              <div className="bg-white p-8 rounded-xl shadow-md">
                <h3 className="text-2xl font-bold text-gray-900 mb-6">SIGNATURE CONTRIBUTION</h3>
                <p className="text-gray-700 leading-relaxed">
                  Received a bug report from the DevOps team concerning a database that was being overworked as a result of an expensive query being called frequently from the UI. Examined the logs to determine and track when the problem first occurred. The bug was reproduced on the most recent piece of code, but only in production. I used git bisect to find the commit that caused the bug and then withdrew the branch. Using the browser DevTools, I tapped into the UI to debug. The initiative was successful; it was discovered that the faulty method was being called on every page, rather than just once in a while from a less-used specific feature. Due to an alignment of the modification and another piece of work from another developer that was merged into master minutes prior, CoffeeScript code that had been &quot;commented out&quot; years earlier was being included in minified production code.
                </p>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}

function ExperienceCard({ title, company, period, description, highlights }: {
  title: string;
  company: string;
  period: string;
  description: string;
  highlights: string[];
}) {
  return (
    <div className="bg-white p-8 rounded-xl shadow-md hover:shadow-lg transition-shadow">
      <div className="mb-4">
        <h3 className="text-xl font-bold text-gray-900">{title}</h3>
        <p className="text-gray-600 font-medium mt-1">{company}</p>
        <p className="text-[#ff014f] text-sm mt-1">{period}</p>
      </div>
      <p className="text-gray-700 mb-4">
        <span className="font-semibold">Project: </span>
        {description}
      </p>
      <h4 className="font-semibold text-gray-900 mb-3">Key Initiatives:</h4>
      <ul className="space-y-2">
        {highlights.map((highlight, index) => (
          <li key={index} className="flex items-start text-gray-700">
            <span className="w-2 h-2 bg-[#ff014f] rounded-full mr-3 mt-2 flex-shrink-0"></span>
            <span>{highlight}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}
