export default function About() {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className="text-[#ff014f] text-sm font-semibold uppercase tracking-wider">
            Prosenjit Kumar Mandal
          </span>
          <h2 className="text-4xl font-bold text-gray-900 mt-4">About Me</h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Image */}
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-br from-[#ff014f] to-pink-400 rounded-2xl blur-2xl opacity-10"></div>
            <img
              src="/assets/images/about/mandal_about.jpg"
              alt="Prosenjit Mandal"
              className="relative w-full rounded-2xl shadow-2xl object-cover"
            />
          </div>

          {/* Content */}
          <div className="space-y-6">
            <h3 className="text-3xl font-bold text-gray-900">Full Stack Java Developer</h3>
            <div className="space-y-4 text-gray-600 leading-relaxed">
              <p>
                I am a passionate programmer, science enthusiast, traveler, foodie, and most importantly I am a
                family man. If I am not at work, then I am either spending time with my family at home or maybe
                planning our next food-filled adventure to a new part of the city or somewhere even further. I love
                my family, which includes my parents, siblings, and the person I cannot imagine my life without, my
                beloved wife.
              </p>
              <p>
                Being a first-generation immigrant in the US, I had to start on a difficult road. However, I have
                been fortunate enough to find work in what I am passionate about, and its software development and
                programming. At present, I am working as a Java Developer in a company based in New York.
              </p>
              <p>
                I aspire to become better at what I do, and If things keep going as smoothly as God permitted them
                to be, perhaps one day I will have a company of my own.
              </p>
              <p className="font-semibold text-gray-700">And when it comes to what I do for a living,</p>
              <p>
                I am a skilled Full Stack Java Developer with 8 years of experience in Design, Development, and
                Maintenance of web-based applications using JAVA/J2EE technologies. Experienced in all phases of
                SDLC including analysis, design, coding, and testing, expertise in integration using J2EE
                architecture. Expertise in developing Enterprise Web Apps with Spring MVC, Spring Boot, Spring REST
                Services, Maven, Java, JSP, Servlet, JDBC, JPA, Hibernate, Spring Data JPA, Junit, Mockito, HTML,
                JavaScript, Typescript, Angular, and ReactJS. Worked in Agile and Six Sigma methodology for better
                results and reduced defects.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
