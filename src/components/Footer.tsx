import React from 'react';
import { SiGithub, SiLinkedin, SiFacebook } from 'react-icons/si';
import { FiArrowUp } from 'react-icons/fi';

export default function Footer() {
    return (
        <footer className="w-full py-8" style={{ background: 'var(--site-surface)' }}>
            <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-4">
                <div className="text-site-muted text-sm">© {new Date().getFullYear()} Prosenjit Kumar Mandal</div>

                {/* Back to top button - uses anchor so the existing smooth-scroll behavior applies */}
                <div>
                    <a
                        href="#home"
                        aria-label="Back to top"
                        title="Back to top"
                        className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-neutral-800 hover:bg-neutral-700 text-white transition focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-neutral-900 hover:ring-2 hover:ring-white hover:ring-offset-2 hover:ring-offset-neutral-900"
                    >
                        <FiArrowUp size={18} />
                    </a>
                </div>

                <div className="flex gap-3">
                    <a href="https://github.com/prosenjitkm" target="_blank" rel="noreferrer" aria-label="GitHub" className="text-site-muted hover:text-white">
                        <SiGithub size={18} />
                    </a>
                    <a href="https://www.linkedin.com/in/prosenjitkm/" target="_blank" rel="noreferrer" aria-label="LinkedIn" className="text-site-muted hover:text-white">
                        <SiLinkedin size={18} />
                    </a>
                    <a href="https://www.facebook.com/prosenjitkm" target="_blank" rel="noreferrer" aria-label="Facebook" className="text-site-muted hover:text-white">
                        <SiFacebook size={18} />
                    </a>
                </div>
            </div>
        </footer>
    );
}
