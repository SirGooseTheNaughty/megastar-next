'use client';

import { useEffect } from "react";
import Image from "next/image";
import { useState } from "react";

export const Hero = ({ locale }) => {
	const [isAutoplay, setIsAutoplay] = useState(false);
    const [isMuted, setIsMuted] = useState(true);

	useEffect(() => {
		const isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator?.userAgent);
		setIsAutoplay(!isMobile);
	}, []);

    return (
        <div className="hidden relative aspect-14/6 lg:grid items-center overflow-clip cursor-pointer" onClick={() => setIsMuted(!isMuted)}>
			<Image src={isMuted ? "/soundOff.png" : "/soundOn.png"} alt="" width={42} height={37} className="absolute right-8 top-8 z-10" />
			<video muted={isMuted} autoPlay={isAutoplay} loop width="100%" poster="/hero-cover.jpg" className="w-full absolute">
				<source src={locale === 'en' ? '/hero.mp4' : '/hero-ru.mp4'} />
			</video>
		</div>
    )
};
