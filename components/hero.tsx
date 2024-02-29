'use client';

import Image from "next/image";
import { useState } from "react";

export const Hero = ({ locale }) => {
    const [isMuted, setIsMuted] = useState(true);

    return (
        <div className="relative aspect-14/6 grid items-center overflow-clip cursor-pointer" onClick={() => setIsMuted(!isMuted)}>
			<Image src={isMuted ? "/soundOff.png" : "/soundOn.png"} alt="" width={42} height={37} className="absolute right-8 top-8 z-10" />
			<video muted={isMuted} autoPlay loop width="100%" poster="/hero-cover.jpg" className="w-full absolute">
				<source src={locale === 'en' ? '/hero.mp4' : '/hero-ru.mp4'} />
			</video>
		</div>
    )
};
