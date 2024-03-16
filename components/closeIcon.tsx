'use client';

import Image from "next/image";
import { useRouter } from "next/navigation";
import Close from '@/public/close.svg';
import { MouseEventHandler } from "react";

export const CloseIcon = ({ onClick }: { onClick?: MouseEventHandler }) => {
    const router = useRouter();

    const handleClick = onClick ? onClick : () => router.back();

    return (
        <button className='absolute top-1 right-1 lg:top-4 lg:right-4' onClick={handleClick}>
            <Image src={Close} width={32} alt='close icon' className="w-6 lg:w-8" />
        </button>
    )
};