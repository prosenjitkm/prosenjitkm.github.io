import Image from 'next/image'

export default function Home() {
  return (
    <>
      {/* Start Header */}
      <header className="rn-header haeder-default black-logo-version header--fixed header--sticky">
        <div className="header-wrapper rn-popup-mobile-menu m--0 row align-items-center">
          {/* Start Header Left */}
          <div className="col-lg-2 col-6">
            <div className="header-left">
              <div className="logo">
                <a href="#home">
                  <img src="/assets/images/logo/logo.png" alt="logo" style={{ height: '85px' }} />
                </a>
              </div>
            </div>
          </div>
          {/* End Header Left */}
          {/* Start Header Center */}
          <div className="col-lg-10 col-6">
            <div className="header-center">
              <nav id="sideNav" className="mainmenu-nav navbar-example2 d-none d-xl-block">
                {/* Start Mainmanu Nav */}
                <ul className="primary-menu nav nav-pills">
                  <li className="nav-item">
                    <a className="nav-link smoth-animation active" href="#home">Home</a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link smoth-animation" href="#about">About</a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link smoth-animation" href="#resume">Resume</a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link smoth-animation" href="#contacts">Contact</a>
                  </li>
                </ul>
                {/* End Mainmanu Nav */}
              </nav>
              {/* Start Header Right  */}
              <div className="header-right">
                <a className="rn-btn" target="_blank" href="/assets/images/resume/Prosenjit-Kumar-Mandal.docx">
                  <span>Download Resume</span>
                </a>
                <div className="hamberger-menu d-block d-xl-none">
                  <i id="menuBtn" className="feather-menu humberger-menu"></i>
                </div>
                <div className="close-menu d-block">
                  <span className="closeTrigger">
                    <i data-feather="x"></i>
                  </span>
                </div>
              </div>
              {/* End Header Right  */}
            </div>
          </div>
          {/* End Header Center */}
        </div>
      </header>
      {/* End Header Area */}
      
      {/* Start Popup Mobile Menu  */}
      <div className="popup-mobile-menu">
        <div className="inner">
          <div className="menu-top">
            <div className="menu-header">
              <a className="logo" href="#home">
                <img src="/assets/images/logo/logo.png" alt="Personal Portfolio" />
              </a>
              <div className="close-button">
                <button className="close-menu-activation close">
                  <i data-feather="x"></i>
                </button>
              </div>
            </div>
            <h4 className="title">Prosenjit Kumar Mandal</h4>
            <p className="description">Full Stack Java Developer</p>
          </div>
          <div className="content">
            <ul className="primary-menu nav nav-pills">
              <li className="nav-item">
                <a className="nav-link smoth-animation active" href="#home">Home</a>
              </li>
              <li className="nav-item">
                <a className="nav-link smoth-animation" href="#about">About</a>
              </li>
              <li className="nav-item">
                <a className="nav-link smoth-animation" href="#resume">Resume</a>
              </li>
              <li className="nav-item">
                <a className="nav-link smoth-animation" href="#contacts">Contact</a>
              </li>
            </ul>
            {/* social share area */}
            <div className="social-share-style-1 mt--40">
              <span className="title">find with me</span>
              <ul className="social-share d-flex liststyle">
                <li className="facebook">
                  <a href="https://www.facebook.com/prosenjitkm">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-facebook">
                      <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
                    </svg>
                  </a>
                </li>
                <li className="github">
                  <a href="https://github.com/prosenjitkm">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-github">
                      <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
                    </svg>
                  </a>
                </li>
                <li className="linkedin">
                  <a href="https://www.linkedin.com/in/prosenjitkm/">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-linkedin">
                      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                      <rect x="2" y="9" width="4" height="12"></rect>
                      <circle cx="4" cy="4" r="2"></circle>
                    </svg>
                  </a>
                </li>
              </ul>
            </div>
            {/* end */}
          </div>
        </div>
      </div>
      {/* End Popup Mobile Menu  */}

      <main className="main-page-wrapper">
        <div dangerouslySetInnerHTML={{ __html: getPortfolioContent() }} />
      </main>

      {/* Start Footer Area */}
      <div className="rn-footer-area rn-section-gap section-separator">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="footer-area text-center">
                <div className="logo">
                  <a href="#home">
                    <img src="/assets/images/logo/logo.png" alt="logo" className="img-fluid" />
                  </a>
                </div>
                <p className="description mt--30">
                  © All rights reserved by <a href="/">Prosenjit Kumar Mandal.</a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* End Footer Area */}
    </>
  )
}

function getPortfolioContent() {
  // This function will return the main content HTML
  // In a production app, this would be better split into components
  return `
    <!-- Start Slider Area -->
    <div id="home" class="rn-slider-area">
      <div class="slide slider-style-1">
        <div class="container">
          <div class="row row--30 align-items-center">
            <div class="order-2 order-lg-1 col-lg-7 mt_md--50 mt_sm--50 mt_lg--30">
              <div class="content">
                <div class="inner">
                  <span class="subtitle">Welcome to my world</span>
                  <h1 class="title">
                    Hi, I'm <span>Prosenjit Kumar Mandal</span><br />
                    <span class="header-caption" id="page-top">
                      <span class="cd-headline clip is-full-width">
                        <span>a </span>
                        <span class="cd-words-wrapper">
                          <b class="is-visible">Full Stack Java Developer</b>
                        </span>
                      </span>
                    </span>
                  </h1>
                  <div>
                    <p class="description">
                      Delivers innovative IT strategies to drive operations and create impactful solutions.
                    </p>
                    <a href="/assets/images/resume/Prosenjit-Kumar-Mandal.docx" class="rn-btn" target="blank">
                      <span>Hire Me</span>
                      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-arrow-right">
                        <line x1="5" y1="12" x2="19" y2="12"></line>
                        <polyline points="12 5 19 12 12 19"></polyline>
                      </svg>
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div class="order-1 order-lg-2 col-lg-5">
              <div class="thumbnail">
                <div class="inner">
                  <img src="/assets/images/slider/banner-01.png" alt="Personal Portfolio Images" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- End Slider Area -->
  ` + getAboutSection() + getResumeSection() + getContactSection()
}

function getAboutSection() {
  return `
    <!-- Start About Area -->
    <div class="rn-service-area rn-section-gap section-separator" id="about">
      <div class="container">
        <div class="row">
          <div class="col-lg-12">
            <div class="section-title text-center">
              <span class="subtitle">My Skills</span>
              <h2 class="title">What I Do</h2>
            </div>
          </div>
        </div>
        <div class="row row--25 mt_md--10 mt_sm--10">
          <!-- Start Service Main Area  -->
          <div class="col-lg-12 mt--50 mt_md--30 mt_sm--30">
            <div class="row row--25">
              <div class="col-lg-6 col-md-12 col-12">
                <div class="rn-address">
                  <div class="icon">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-award">
                      <circle cx="12" cy="8" r="7"></circle>
                      <polyline points="8.21 13.89 7 23 12 20 17 23 15.79 13.88"></polyline>
                    </svg>
                  </div>
                  <div class="inner">
                    <h4 class="title">8+</h4>
                    <p>Years of <br /> Experience</p>
                  </div>
                </div>
              </div>
              <div class="col-lg-6 col-xl-6 col-md-6 col-sm-6 col-12 mt_mobile--30">
                <div class="skill-share-inner">
                  <span class="title">best skill on</span>
                  <ul class="skill-share d-flex liststyle">
                    <li>
                      <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg" alt="Java" style="width: 60px; height: 60px;" />
                    </li>
                    <li>
                      <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" alt="JavaScript" style="width: 60px; height: 60px;" />
                    </li>
                    <li>
                      <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/angularjs/angularjs-original.svg" alt="Angular" style="width: 60px; height: 60px;" />
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <!-- End  Service Main Area  -->
        </div>
        <div class="row mt--60">
          <div class="col-lg-12">
            <div class="section-title text-left mb--30">
              <span class="subtitle">About</span>
              <h2 class="title">About Me</h2>
            </div>
          </div>
        </div>
        <div class="row mt--30">
          <div class="col-lg-12">
            <div class="about-wrapper">
              <p class="description">
                Results-oriented Full Stack Java Developer with 8+ years of progressive experience. Skilled in providing support and leadership while managing the inter-relationship between various departments within highly complex organizational structures. Superior record of optimizing small to large scale, mission critical projects on time while exceeding quality assurance expectations.
              </p>
              <p class="description mt--20">
                Recognized as a trusted, logistical, resource with a history of making key decisions regarding projects, teams, and application support functions. Experienced in using Agile methodologies. 
                Versatile Full Stack Java Developer with expertise in Java EE, Spring, Hibernate, Microservices, Angular, React, and modern cloud technologies. Proven track record in building scalable applications with emphasis on performance optimization and security.
              </p>
              <div class="row mt--30 mt_sm--10">
                <div class="col-lg-6 col-md-12 col-sm-12 col-12">
                  <div class="about-us-list">
                    <h3 class="title">Education</h3>
                    <p>Master of Science in Information Technology <br/> Guru Gobind Singh Indraprastha University</p>
                  </div>
                </div>
                <div class="col-lg-6 col-md-12 col-sm-12 col-12 mt_mobile--30">
                  <div class="about-us-list">
                    <h3 class="title">Skills</h3>
                    <p>
                      Java, Spring Boot, Microservices, Angular, React, 
                      JavaScript, Typescript, Angular, and ReactJS. Worked in Agile and Six Sigma methodology for better
                      quality services and timely completion of the tasks. Focused on results and continuous improvement.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- End About Area -->
  `
}

function getResumeSection() {
  return `
    <!-- Start Resume Area -->
    <div class="rn-resume-area rn-section-gap section-separator" id="resume">
      <div class="container">
        <div class="row">
          <div class="col-lg-12">
            <div class="section-title text-center">
              <span class="subtitle">8+ Years of Experience</span>
              <h2 class="title">My Resume</h2>
            </div>
          </div>
        </div>
        <div class="row mt--45">
          <div class="col-lg-12">
            <ul class="rn-nav-list nav nav-tabs" id="myTabs" role="tablist">
              <li class="nav-item">
                <a class="nav-link active" id="education-tab" data-toggle="tab" href="#education" role="tab" aria-controls="education" aria-selected="true">Education</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" id="professional-tab" data-toggle="tab" href="#professional" role="tab" aria-controls="professional" aria-selected="false">Professional Skills</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" id="experience-tab" data-toggle="tab" href="#experience" role="tab" aria-controls="experience" aria-selected="false">Experience</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" id="interview-tab" data-toggle="tab" href="#interview" role="tab" aria-controls="interview" aria-selected="false">Interview</a>
              </li>
            </ul>
            
            <!-- Tab Content -->
            <div class="rn-nav-content tab-content" id="myTabContents">
              <!-- Education Tab -->
              <div class="tab-pane show active fade single-tab-area" id="education" role="tabpanel" aria-labelledby="education-tab">
                <div class="personal-experience-inner mt--40">
                  <div class="row">
                    <div class="col-lg-12 col-md-12 col-12">
                      <div class="resume-single-list">
                        <div class="inner">
                          <div class="heading">
                            <div class="title">
                              <h4>Master of Science in Information Technology</h4>
                              <span>Guru Gobind Singh Indraprastha University (2012 - 2015)</span>
                            </div>
                          </div>
                          <p class="description">
                            Completed Master's degree with focus on Software Engineering, Database Management Systems, and Advanced Java Programming.
                          </p>
                        </div>
                      </div>
                      <div class="resume-single-list">
                        <div class="inner">
                          <div class="heading">
                            <div class="title">
                              <h4>Bachelor of Science in Computer Science</h4>
                              <span>University of Delhi (2009 - 2012)</span>
                            </div>
                          </div>
                          <p class="description">
                            Completed Bachelor's degree with strong foundation in Computer Science fundamentals, Data Structures, Algorithms, and Software Development.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <!-- End Education Tab -->
              
              <!-- Professional Skills Tab -->
              <div class="tab-pane fade" id="professional" role="tabpanel" aria-labelledby="professional-tab">
                <div class="personal-experience-inner mt--40">
                  <div class="row row--40">
                    <div class="col-lg-12 col-md-12 col-12">
                      <h3 class="maintitle">Technical Skills</h3>
                      <div class="progress-wrapper">
                        <div class="content">
                          <span class="subtitle">Programming Languages:</span>
                          <p>Java, JavaScript, TypeScript, Python, C++</p>
                        </div>
                      </div>
                      <div class="progress-wrapper">
                        <div class="content">
                          <span class="subtitle">Web Technologies:</span>
                          <p>HTML5, CSS3, jQuery, Bootstrap, Angular, Node.JS, Express.js, ReactJS</p>
                        </div>
                      </div>
                      <div class="progress-wrapper">
                        <div class="content">
                          <span class="subtitle">Java Technologies:</span>
                          <p>Spring, Spring Boot, Hibernate, JPA, Microservices, REST APIs, SOAP</p>
                        </div>
                      </div>
                      <div class="progress-wrapper">
                        <div class="content">
                          <span class="subtitle">Databases:</span>
                          <p>MySQL, PostgreSQL, MongoDB, Oracle, MS SQL Server</p>
                        </div>
                      </div>
                      <div class="progress-wrapper">
                        <div class="content">
                          <span class="subtitle">Tools & Technologies:</span>
                          <p>Git, Jenkins, Docker, Kubernetes, AWS, Azure, Maven, Gradle</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <!-- End Professional Skills Tab -->
              
              <!-- Experience Tab -->
              <div class="tab-pane fade" id="experience" role="tabpanel" aria-labelledby="experience-tab">
                <div class="personal-experience-inner mt--40">
                  <div class="row">
                    <div class="col-lg-12 col-md-12 col-12">
                      <div class="resume-single-list">
                        <div class="inner">
                          <div class="heading">
                            <div class="title">
                              <h4>Senior Full Stack Java Developer</h4>
                              <span>Various Organizations (2016 - Present)</span>
                            </div>
                          </div>
                          <p class="description">
                            Led development of enterprise applications using Spring Boot, Angular, and microservices architecture. Implemented CI/CD pipelines and cloud deployments. Mentored junior developers and participated in code reviews.
                          </p>
                          <ul class="list-style">
                            <li>Developed and maintained microservices using Spring Boot and Spring Cloud</li>
                            <li>Built responsive single-page applications using Angular and React</li>
                            <li>Implemented RESTful APIs and integrated third-party services</li>
                            <li>Worked with Docker, Kubernetes for containerization and orchestration</li>
                            <li>Developed pages using AngularJS directives, expressions, routing capabilities for bookmarking, filters, validations, and Angular UI components such as grid, buttons, carousels, date pickers, modal dialogs, other input components.</li>
                            <li>Developed the User Interface Screens for presentation using Angular-JS, Ajax, Bootstrap, JavaScript, and HTML.</li>
                            <li>Instrumental in the development and maintenance of the website using HTML5, CSS, Ajax, jQuery, JavaScript, AngularJS, Vue.js, ReactJS, and Node.js.</li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <!-- End Experience Tab -->
              
              <!-- Interview Tab -->
              <div class="tab-pane fade" id="interview" role="tabpanel" aria-labelledby="interview-tab">
                <div class="personal-experience-inner mt--40">
                  <div class="row">
                    <div class="col-lg-12">
                      <div class="about-wrapper">
                        <h3 class="maintitle mb--20">Interview Availability</h3>
                        <p class="description">
                          I am currently open to new opportunities and available for interviews. Feel free to reach out to discuss potential roles and projects.
                        </p>
                        <ul class="list-style mt--20">
                          <li>Available for full-time positions</li>
                          <li>Open to contract opportunities</li>
                          <li>Interested in remote and hybrid work arrangements</li>
                          <li>Flexible with interview schedules</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <!-- End Interview Tab -->
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- End Resume Area -->
  `
}

function getContactSection() {
  return `
    <!-- Start Contact Area -->
    <div class="rn-contact-area rn-section-gap section-separator" id="contacts">
      <div class="container">
        <div class="row">
          <div class="col-lg-12">
            <div class="section-title text-center">
              <span class="subtitle">Contact</span>
              <h2 class="title">Contact With Me</h2>
            </div>
          </div>
        </div>
        <div class="row mt--50 mt_md--40 mt_sm--40 mt-contact-sm">
          <div class="col-lg-5">
            <div class="contact-about-area">
              <div class="thumbnail">
                <img src="/assets/images/contact/contact1.png" alt="contact-img" />
              </div>
              <div class="title-area">
                <h4 class="title">Prosenjit Kumar Mandal</h4>
                <span>Full Stack Java Developer</span>
              </div>
              <div class="description">
                <p>I am available for freelance work. Connect with me via email or social media.</p>
                <span class="phone">Phone: <a href="tel:+919999999999">+91 999 999 9999</a></span>
                <span class="mail">Email: <a href="mailto:prosenjit@example.com">prosenjit@example.com</a></span>
              </div>
              <div class="social-area">
                <div class="name">FIND WITH ME</div>
                <div class="social-icone">
                  <a href="https://www.facebook.com/prosenjitkm"><i data-feather="facebook"></i></a>
                  <a href="https://www.linkedin.com/in/prosenjitkm/"><i data-feather="linkedin"></i></a>
                  <a href="https://github.com/prosenjitkm"><i data-feather="github"></i></a>
                </div>
              </div>
            </div>
          </div>
          <div data-aos="fade-up" data-aos-duration="500" data-aos-delay="200" data-aos-once="true" class="col-lg-7 contact-input">
            <div class="contact-form-wrapper">
              <div class="introduce">
                <form class="rnt-contact-form row" id="contact-form" method="POST">
                  <div class="col-lg-6">
                    <div class="form-group">
                      <label for="name">Your Name</label>
                      <input class="form-control form-control-lg" name="name" id="name" type="text" required />
                    </div>
                  </div>
                  <div class="col-lg-6">
                    <div class="form-group">
                      <label for="phone">Phone Number</label>
                      <input class="form-control" name="phone" id="phone" type="text" required />
                    </div>
                  </div>
                  <div class="col-lg-12">
                    <div class="form-group">
                      <label for="email">Email</label>
                      <input class="form-control form-control-sm" id="email" name="email" type="email" required />
                    </div>
                  </div>
                  <div class="col-lg-12">
                    <div class="form-group">
                      <label for="subject">Subject</label>
                      <input class="form-control form-control-sm" id="subject" name="subject" type="text" required />
                    </div>
                  </div>
                  <div class="col-lg-12">
                    <div class="form-group">
                      <label for="message">Your Message</label>
                      <textarea name="message" id="message" cols="30" rows="10" required></textarea>
                    </div>
                  </div>
                  <div class="col-lg-12">
                    <button name="submit" type="submit" id="submit" class="rn-btn">
                      <span>SEND MESSAGE</span>
                      <i data-feather="arrow-right"></i>
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- End Contact Area -->
  `
}
