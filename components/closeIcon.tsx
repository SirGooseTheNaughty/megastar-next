'use client';

import Image from "next/image";
import { useRouter } from "next/navigation";
import Close from '@/public/close.svg';
import { useCallback, useEffect } from "react";

export const CloseIcon = ({ onClick }: { onClick?: Function }) => {
    const router = useRouter();

    const handleClick = useCallback(() => onClick ? onClick() : router.back(), [onClick, router]);

    useEffect(() => {
        const handleKeyPress = (event: KeyboardEvent) => {
            if (event.key === 'Escape') {
                handleClick();
            }
        };

        document.addEventListener('keydown', handleKeyPress);
        return () => document.removeEventListener('keydown', handleKeyPress);
    }, [handleClick]);

    return (
        <button className='absolute top-1 right-1 lg:top-4 lg:right-4' onClick={handleClick}>
            <Image src={Close} width={32} alt='close icon' className="w-6 lg:w-8" />
        </button>
    )
};