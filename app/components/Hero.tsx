'use client';

import { useState, useEffect } from 'react';

export default function Hero() {
  const [displayText, setDisplayText] = useState('');
  const fullText = 'Full Stack Java Developer';

  useEffect(() => {
    let currentIndex = 0;
    const interval = setInterval(() => {
      if (currentIndex <= fullText.length) {
        setDisplayText(fullText.slice(0, currentIndex));
        currentIndex++;
      } else {
        clearInterval(interval);
      }
    }, 100);

    return () => clearInterval(interval);
  }, []);

  const socialLinks = [
    { name: 'Facebook', url: 'https://www.facebook.com/prosenjitkm', icon: 'facebook' },
    { name: 'GitHub', url: 'https://github.com/prosenjitkm', icon: 'github' },
    { name: 'LinkedIn', url: 'https://www.linkedin.com/in/prosenjitkm/', icon: 'linkedin' },
  ];

  const skills = [
    { name: 'Java', icon: '/assets/images/icons/java.png' },
    { name: 'JavaScript', icon: '/assets/images/icons/javaScript.png' },
    { name: 'Angular', icon: '/assets/images/icons/angular.png' },
  ];

  return (
    <section id="home" className="min-h-screen flex items-center pt-20 bg-gradient-to-b from-gray-50 to-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="order-2 lg:order-1">
            <span className="text-[#ff014f] text-sm font-semibold uppercase tracking-wider">
              Welcome to my world
            </span>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 mt-4 mb-6">
              Hi, I&apos;m <span className="text-[#ff014f]">Prosenjit Kumar Mandal</span>
            </h1>
            <div className="text-2xl sm:text-3xl font-semibold text-gray-700 mb-6 h-12">
              a {displayText}
              <span className="animate-pulse">|</span>
            </div>
            <p className="text-gray-600 text-lg mb-8 max-w-2xl">
              Delivers innovative IT strategies to drive operations and create impactful solutions.
            </p>
            <a
              href="/assets/images/resume/Prosenjit-Kumar-Mandal.docx"
              download
              className="inline-flex items-center px-8 py-3 bg-[#ff014f] text-white rounded-lg hover:bg-[#d4013f] transition-all duration-200 shadow-lg hover:shadow-xl"
            >
              Hire Me
              <svg
                className="ml-2 w-5 h-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M17 8l4 4m0 0l-4 4m4-4H3"
                />
              </svg>
            </a>

            {/* Social & Skills */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 mt-12">
              {/* Social Links */}
              <div>
                <span className="text-sm text-gray-500 uppercase tracking-wider">Find with me</span>
                <div className="flex gap-4 mt-4">
                  {socialLinks.map((social) => (
                    <a
                      key={social.name}
                      href={social.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-12 h-12 bg-white shadow-md rounded-lg flex items-center justify-center hover:bg-[#ff014f] hover:text-white transition-all duration-200"
                    >
                      <span className="sr-only">{social.name}</span>
                      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                        {social.icon === 'facebook' && (
                          <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
                        )}
                        {social.icon === 'github' && (
                          <path d="M12 2C6.477 2 2 6.477 2 12c0 4.42 2.865 8.17 6.839 9.49.5.092.682-.217.682-.482 0-.237-.008-.866-.013-1.7-2.782.603-3.369-1.34-3.369-1.34-.454-1.156-1.11-1.463-1.11-1.463-.908-.62.069-.608.069-.608 1.003.07 1.531 1.03 1.531 1.03.892 1.529 2.341 1.087 2.91.831.092-.646.35-1.086.636-1.336-2.22-.253-4.555-1.11-4.555-4.943 0-1.091.39-1.984 1.029-2.683-.103-.253-.446-1.27.098-2.647 0 0 .84-.269 2.75 1.025A9.578 9.578 0 0112 6.836c.85.004 1.705.114 2.504.336 1.909-1.294 2.747-1.025 2.747-1.025.546 1.377.203 2.394.1 2.647.64.699 1.028 1.592 1.028 2.683 0 3.842-2.339 4.687-4.566 4.935.359.309.678.919.678 1.852 0 1.336-.012 2.415-.012 2.743 0 .267.18.578.688.48C19.138 20.167 22 16.418 22 12c0-5.523-4.477-10-10-10z" />
                        )}
                        {social.icon === 'linkedin' && (
                          <path d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2zM4 2a2 2 0 110 4 2 2 0 010-4z" />
                        )}
                      </svg>
                    </a>
                  ))}
                </div>
              </div>

              {/* Skills */}
              <div>
                <span className="text-sm text-gray-500 uppercase tracking-wider">Best skill on</span>
                <div className="flex gap-4 mt-4">
                  {skills.map((skill) => (
                    <div
                      key={skill.name}
                      className="w-12 h-12 bg-white shadow-md rounded-lg flex items-center justify-center hover:shadow-lg transition-all duration-200"
                    >
                      <img src={skill.icon} alt={skill.name} className="w-8 h-8 object-contain" />
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Image */}
          <div className="order-1 lg:order-2">
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-tr from-[#ff014f] to-pink-400 rounded-full blur-3xl opacity-20"></div>
              <img
                src="/assets/images/slider/banner-01.png"
                alt="Prosenjit Kumar Mandal"
                className="relative w-full max-w-md mx-auto rounded-2xl"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
