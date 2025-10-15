import React from "react";
import Image from "next/image";

export default function About() {
    return (
        <section id="about" className="w-full py-20" style={{ background: 'var(--site-bg)' }}>
            <div className="max-w-6xl mx-auto px-6">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-start">
                    <div className="md:col-span-2">
                        <h2 className="text-3xl font-bold text-white">About Me</h2>
                        <p className="mt-4 text-neutral-300 leading-relaxed text-justify">
                            I am a software developer and AI enthusiast dedicated to creating intelligent, scalable, and user-focused digital systems. My journey began with a fascination for how software can transform ideas into real-world solutions &mdash; and has evolved into a deep commitment to exploring how artificial intelligence can enhance the way we build, analyze, and interact with technology.
                        </p>
                        <p className="mt-4 text-neutral-300 leading-relaxed text-justify">
                            Currently pursuing graduate studies in Machine Learning and Artificial Intelligence, I combine academic insight with hands-on development experience. My work spans full-stack engineering, API architecture, and data-driven application design, often integrating machine learning models into practical production environments.
                        </p>
                        <p className="mt-4 text-neutral-300 leading-relaxed text-justify">
                            I&apos;m passionate about writing clean, modular code and applying modern development principles that balance performance with clarity. Beyond coding, I enjoy researching emerging AI techniques, experimenting with neural network architectures, and contributing to open-source projects that push the boundaries of what intelligent systems can achieve.
                        </p>
                        <p className="mt-4 text-neutral-300 leading-relaxed text-justify">
                            For me, software development is more than building applications &mdash; it&apos;s about solving complex problems with creativity, precision, and purpose.
                        </p>

                        {/* <div className="mt-6">
                            <h3 className="text-lg font-semibold text-white">Core skills</h3>
                            <ul className="mt-3 flex flex-wrap gap-2">
                                {[
                                    "Java",
                                    "Spring Boot",
                                    "REST APIs",
                                    "SQL",
                                    "Docker",
                                    "Kubernetes",
                                    "React",
                                    "TypeScript",
                                    "Tailwind CSS",
                                ].map((s) => (
                                    <li
                                        key={s}
                                        className="px-3 py-1 rounded-full bg-neutral-700 text-neutral-100 text-sm ring-1 ring-white/5"
                                    >
                                        {s}
                                    </li>
                                ))}
                            </ul>
                        </div> */}
                    </div>
                </div>
            </div>
        </section>
    );
}
