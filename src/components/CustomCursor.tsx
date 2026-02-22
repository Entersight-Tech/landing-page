"use client";

import { useEffect, useRef } from "react";

export default function CustomCursor() {
    const cursorRef = useRef<HTMLDivElement>(null);
    const ringRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        let mx = 0, my = 0, rx = 0, ry = 0;
        let animationFrameId: number;

        const onMouseMove = (e: MouseEvent) => {
            mx = e.clientX;
            my = e.clientY;
            if (cursorRef.current) {
                cursorRef.current.style.left = mx - 6 + "px";
                cursorRef.current.style.top = my - 6 + "px";
            }
        };

        const animRing = () => {
            rx += (mx - rx - 20) * 0.12;
            ry += (my - ry - 20) * 0.12;
            if (ringRef.current) {
                ringRef.current.style.left = rx + "px";
                ringRef.current.style.top = ry + "px";
            }
            animationFrameId = requestAnimationFrame(animRing);
        };

        document.addEventListener("mousemove", onMouseMove);
        animationFrameId = requestAnimationFrame(animRing);

        // Add hover effects with a delay to ensure interactive elements are mounted
        const timeoutId = setTimeout(() => {
            document.querySelectorAll("a, button, .project-item, .solution-card, .benefit-card").forEach((el) => {
                el.addEventListener("mouseenter", () => {
                    if (cursorRef.current) cursorRef.current.style.transform = "scale(2.5)";
                    if (ringRef.current) ringRef.current.style.transform = "scale(1.3)";
                });
                el.addEventListener("mouseleave", () => {
                    if (cursorRef.current) cursorRef.current.style.transform = "scale(1)";
                    if (ringRef.current) ringRef.current.style.transform = "scale(1)";
                });
            });
        }, 500);

        return () => {
            document.removeEventListener("mousemove", onMouseMove);
            cancelAnimationFrame(animationFrameId);
            clearTimeout(timeoutId);
        };
    }, []);

    return (
        <>
            <div className="cursor" ref={cursorRef}></div>
            <div className="cursor-ring" ref={ringRef}></div>
        </>
    );
}
