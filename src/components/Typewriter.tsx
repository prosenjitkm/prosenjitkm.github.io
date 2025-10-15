"use client";

import React, { useEffect, useMemo, useState } from "react";

type TypewriterProps = {
    words: string[];
    loop?: boolean;
    typeSpeed?: number; // ms per char
    deleteSpeed?: number; // ms per char when deleting
    pause?: number; // ms pause after completing a word
    className?: string;
};

export default function Typewriter({
    words,
    loop = true,
    typeSpeed = 80,
    deleteSpeed = 40,
    pause = 1200,
    className,
}: TypewriterProps) {
    const [index, setIndex] = useState(0); // which word
    const [subIndex, setSubIndex] = useState(0); // how many chars
    const [isDeleting, setIsDeleting] = useState(false);
    const [blink, setBlink] = useState(true);

    const prefersReducedMotion = useMemo(() => {
        try {
            if (typeof window === 'undefined' || !window.matchMedia) return false;
            return window.matchMedia('(prefers-reduced-motion: reduce)').matches;
        } catch {
            return false;
        }
    }, []);

    // Blinking caret
    useEffect(() => {
        if (prefersReducedMotion) return;
        const iv = setInterval(() => setBlink((v) => !v), 500);
        return () => clearInterval(iv);
    }, [prefersReducedMotion]);

    useEffect(() => {
        if (prefersReducedMotion) {
            // If reduced motion, just show the first word statically
            setIndex(0);
            setSubIndex(words[0]?.length ?? 0);
            return;
        }

        const current = words[index % words.length] ?? "";

        // choose interval per step
        const interval = isDeleting ? deleteSpeed : typeSpeed;

        const handle = window.setTimeout(() => {
            if (!isDeleting && subIndex === current.length) {
                // pause then start deleting
                setIsDeleting(true);
            } else if (isDeleting && subIndex === 0) {
                setIsDeleting(false);
                setIndex((i) => i + 1);
            } else {
                setSubIndex((s) => s + (isDeleting ? -1 : 1));
            }
        }, interval);

        // When we just finished typing a word, pause before deleting
        if (!isDeleting && subIndex === current.length) {
            clearTimeout(handle);
            const pauseTimeout = window.setTimeout(() => setIsDeleting(true), pause);
            return () => clearTimeout(pauseTimeout);
        }

        return () => clearTimeout(handle);
    }, [subIndex, index, isDeleting, words, typeSpeed, deleteSpeed, pause, prefersReducedMotion]);

    // If not looping and we've cycled through all words, keep last word
    const wordToShow = (() => {
        if (!loop && index >= words.length) return words[words.length - 1] ?? "";
        return words[index % words.length] ?? "";
    })();

    return (
        <span className={className} aria-live="polite">
            {wordToShow.slice(0, subIndex)}
            <span aria-hidden className={`inline-block ml-0 w-2 ${blink ? "opacity-100" : "opacity-0"}`}>
                |
            </span>
        </span>
    );
}
