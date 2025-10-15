"use client";

import React, { FormEvent, useState } from 'react';

export default function Contact() {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');

    function sendMail() {
        const subject = encodeURIComponent(`Website contact from ${name || 'Visitor'}`);
        const body = encodeURIComponent(`${message}\n\nFrom: ${name || ''} <${email || ''}>`);
        window.location.href = `mailto:prosenjitkm91@gmail.com?subject=${subject}&body=${body}`;
    }

    function handleSubmit(e: FormEvent) {
        e.preventDefault();
        sendMail();
    }

    function handleSend() {
        // simple client-side validation before opening mail client
        if (!email || !message) {
            // focus the first missing field
            if (!email) {
                const el = document.getElementById('contact-email') as HTMLInputElement | null;
                el?.focus();
            } else if (!message) {
                const el = document.getElementById('contact-message') as HTMLTextAreaElement | null;
                el?.focus();
            }
            return;
        }

        sendMail();
    }

    return (
        <section id="contact" className="w-full py-16" style={{ background: 'var(--site-bg)' }}>
            <div className="max-w-6xl mx-auto px-6">
                <div className="mb-6">
                    <h2 className="text-3xl font-extrabold text-white">Contact</h2>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-stretch">
                    {/* Form (left) */}
                    <aside className="h-72 md:h-80 lg:h-96 w-full">
                        <form onSubmit={handleSubmit} className="h-full bg-neutral-900/50 border border-neutral-800 p-6 rounded-lg flex flex-col">
                            <div className="mt-4 space-y-3 flex-grow">
                                <input
                                    id="contact-name"
                                    name="name"
                                    className="w-full px-4 py-3 bg-neutral-800/40 border border-neutral-700 rounded-md text-white placeholder:text-site-muted"
                                    placeholder="Your Name"
                                    value={name}
                                    onChange={(e) => setName(e.target.value)}
                                />

                                <input
                                    id="contact-email"
                                    name="email"
                                    className="w-full px-4 py-3 bg-neutral-800/40 border border-neutral-700 rounded-md text-white placeholder:text-site-muted"
                                    placeholder="Your Email"
                                    type="email"
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                    required
                                />

                                <textarea
                                    id="contact-message"
                                    name="message"
                                    className="w-full px-4 py-3 bg-neutral-800/40 border border-neutral-700 rounded-md text-white placeholder:text-site-muted h-20 md:h-24"
                                    placeholder="Your Message"
                                    value={message}
                                    onChange={(e) => setMessage(e.target.value)}
                                    required
                                />
                            </div>

                            <div className="mt-4 md:mt-6">
                                <button
                                    onClick={handleSend}
                                    aria-label="Send message"
                                    className="w-full md:w-3/4 px-6 py-3 bg-green-500 hover:bg-green-600 text-white rounded-md shadow-md transition"
                                >
                                    Send Message
                                </button>
                            </div>
                        </form>
                    </aside>

                    {/* Map (right) */}
                    <aside className="h-72 md:h-80 lg:h-96 w-full rounded-lg overflow-hidden border border-neutral-800 bg-black">
                        <iframe
                            title="Paterson, NJ Map"
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3027.072888937352!2d-74.17181032402146!3d40.91676597135709!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c2f8e3e2e3e3e3%3A0x3e3e3e3e3e3e3e3e!2sPaterson%2C%20NJ!5e0!3m2!1sen!2sus!4v1718030000000!5m2!1sen!2sus"
                            className="w-full h-full"
                            style={{ border: 0, filter: 'invert(90%) hue-rotate(180deg)', backgroundColor: '#111' }}
                            loading="lazy"
                            allowFullScreen
                            referrerPolicy="no-referrer-when-downgrade"
                        />
                    </aside>
                </div>
            </div>
        </section>
    );
}
