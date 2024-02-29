'use client';

import Script from "next/script";

export const ScrollBarWidth = () => (
    <Script id='compute-scroll-bar-width'>
        {"document.documentElement.style.setProperty('--scroll-bar-width', `${window.innerWidth - document.body.clientWidth}px`);"}
    </Script>
);
