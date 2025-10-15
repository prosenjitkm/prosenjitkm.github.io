import React from 'react';

export default function Resume() {
    return (
        <section id="resume" className="w-full py-16" style={{ background: 'var(--site-bg)' }}>
            <div className="max-w-6xl mx-auto px-6">
                <div className="flex items-center justify-between mb-6">
                    <h2 className="text-3xl font-extrabold text-white">Resume</h2>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div>
                        <h3 className="text-lg font-semibold text-white">Experience</h3>
                        <div className="mt-4 text-site-muted space-y-6">
                            <div>
                                <h4 className="font-semibold text-white">United States Postal Service (USPS)</h4>
                                <p className="text-site-muted">May 2023 – Present · Full Stack Java Developer</p>
                            </div>

                            <div>
                                <h4 className="font-semibold text-white">SS&C Technologies / Centene</h4>
                                <p className="text-site-muted">Dec 2021 – May 2023 · Full Stack Java Developer</p>
                            </div>

                            <div>
                                <h4 className="font-semibold text-white">ITA Group</h4>
                                <p className="text-site-muted">Jan 2019 – Dec 2021 · Java Developer</p>
                            </div>
                        </div>
                    </div>

                    <aside>
                        <h3 className="text-lg font-semibold text-white">Education</h3>
                        <ul className="list-disc ml-5 mt-2 text-site-muted">
                            <li>MSc AI & ML (in progress) — Colorado State University Global</li>
                            <li>BSc Information Technology — William Paterson University</li>
                            <li>BSc Electrical & Electronic Engineering — Independent University, Dhaka</li>
                        </ul>

                        <h3 className="text-lg font-semibold text-white mt-4">Certifications</h3>
                        <ul className="list-disc ml-5 mt-2 text-site-muted">
                            <li>Red Hat Certified Administrator (RHCSA)</li>
                            <li>ITIL Foundation Level</li>
                        </ul>
                    </aside>
                </div>

                <div className="mt-6 block sm:hidden">
                    <a
                        href="/files/Prosenjit_Kumar_Mandal_Resume.pdf"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-block px-4 py-2 bg-green-600 hover:bg-green-700 text-white rounded-md"
                    >
                        Download PDF
                    </a>
                </div>
            </div>
        </section>
    );
}

