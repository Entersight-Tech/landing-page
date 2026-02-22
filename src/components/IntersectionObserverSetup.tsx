"use client";

import { useEffect, useRef } from "react";

export default function IntersectionObserverSetup() {
    useEffect(() => {
        const reveals = document.querySelectorAll(".reveal");
        const observer = new IntersectionObserver((entries) => {
            entries.forEach((e) => {
                if (e.isIntersecting) {
                    e.target.classList.add("visible");
                    observer.unobserve(e.target);
                }
            });
        }, { threshold: 0.1 });

        reveals.forEach((el) => observer.observe(el));

        return () => {
            observer.disconnect();
        };
    }, []);

    return null;
}
