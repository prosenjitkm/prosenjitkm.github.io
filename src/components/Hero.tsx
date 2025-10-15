"use client";

import Image from "next/image";
import React from "react";
import Typewriter from "./Typewriter";
import { SiFacebook, SiGithub, SiLinkedin } from 'react-icons/si';

export default function Hero() {
    return (
        <section id="home" className="w-full">
            <div className="max-w-6xl mx-auto px-6 pt-28 pb-20 text-center sm:text-left">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
                    <div>
                        <h1 className="text-4xl sm:text-5xl font-extrabold text-white">Hi, I&apos;m Prosenjit</h1>
                        <p className="mt-4 text-neutral-300 max-w-xl">
                            I&apos;m a full-stack Java developer specializing in transforming legacy systems into robust Spring Boot microservices and modern, accessible frontends. I deliver secure, scalable backend solutions and maintainable user interfaces.
                        </p>
                        <div className="mt-6 h-10 flex items-center">
                            <span className="text-lg text-green-400 font-semibold mr-2">I&apos;m&nbsp;</span>
                            {/* Typewriter component will handle typing */}
                            <div className="inline-block align-middle">
                                <Typewriter words={["a Developer", "a Graduate Student", "an AI enthusiast"]} />
                            </div>
                        </div>
                        {/* Social links */}
                        <div className="mt-6 flex gap-4 justify-center sm:justify-start">
                            <a
                                href="https://www.facebook.com/prosenjitkm"
                                target="_blank"
                                rel="noopener noreferrer"
                                aria-label="Facebook"
                                className="px-3 py-2 rounded-md bg-blue-800 text-white hover:bg-blue-900 transition flex items-center gap-2"
                            >
                                <SiFacebook size={20} aria-hidden={false} />
                            </a>
                            <a
                                href="https://github.com/prosenjitkm"
                                target="_blank"
                                rel="noopener noreferrer"
                                aria-label="GitHub"
                                className="px-3 py-2 rounded-md bg-neutral-800 text-white hover:bg-neutral-700 transition flex items-center gap-2"
                            >
                                <SiGithub size={20} aria-hidden={false} />
                            </a>
                            <a
                                href="https://www.linkedin.com/in/prosenjitkm/"
                                target="_blank"
                                rel="noopener noreferrer"
                                aria-label="LinkedIn"
                                className="px-3 py-2 rounded-md bg-blue-600 text-white hover:bg-blue-700 transition flex items-center gap-2"
                            >
                                <SiLinkedin size={20} aria-hidden={false} />
                            </a>

                            <a
                                href="/files/Prosenjit_Kumar_Mandal_Resume.pdf"
                                target="_blank"
                                rel="noopener noreferrer"
                                aria-label="Resume"
                                className="px-3 py-2 rounded-md bg-green-600 text-white hover:bg-green-700 transition flex items-center ml-2"
                            >
                                Resume
                            </a>
                        </div>
                    </div>

                    {/* Framed portrait - two-layer border box */}
                    <div className="flex justify-center md:justify-end">
                        <figure className="relative w-56 h-56 md:w-64 md:h-64" aria-hidden="false">
                            {/* decorative outer frame */}
                            <div className="absolute -inset-1 transform rotate-1 translate-x-2 translate-y-2 border-2 border-neutral-700 rounded-2xl pointer-events-none" aria-hidden="true" />

                            {/* visible portrait */}
                            <div className="relative w-full h-full rounded-2xl overflow-hidden ring-1 ring-white/10 bg-neutral-800 flex items-center justify-center transition-transform duration-300 hover:scale-105 hover:ring-2 hover:ring-green-400">
                                <Image
                                    src="/images/banner-01.png"
                                    alt="Prosenjit Kumar Mandal portrait"
                                    fill
                                    style={{ objectFit: 'contain' }}
                                    sizes="(max-width: 768px) 200px, 256px"
                                />
                            </div>

                            <figcaption className="sr-only">Portrait of Prosenjit Kumar Mandal</figcaption>
                        </figure>
                    </div>
                </div>
            </div>
        </section>
    );
}
