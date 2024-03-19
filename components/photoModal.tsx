'use client';

import { MouseEventHandler, useState, useEffect, useCallback } from "react";
import Image from 'next/image';
import cn from "classnames";
import ArrowRight from '../public/arrow-right.svg';
import { CloseIcon } from "./closeIcon";

const arrowClassNames = `
    absolute top-1/2 -translate-y-1/2 
    w-16 h-16 grid place-items-center rounded-full 
    bg-white bg-opacity-30 hover:bg-opacity-50 duration-200 cursor-pointer
`;

export const PhotoModal = ({ photos = [], initialIndex = 0, closePhoto }: { photos: string[], initialIndex: number, closePhoto: Function }) => {
    const [index, setIndex] = useState(initialIndex);
    const photoUrl = photos[index];

    const nextPhoto = useCallback(
        () => setIndex(currentIndex => currentIndex < photos.length - 1 ? currentIndex + 1 : 0),
        [photos.length]
    );
    const previousPhoto = useCallback(
        () => setIndex(currentIndex => currentIndex > 0 ? currentIndex - 1 : photos.length - 1),
        [photos.length]
    );

    useEffect(() => {
        const handleKeyPress = (event: KeyboardEvent) => {
            console.log(event);
            switch (event.key) {
                case 'ArrowRight':
                    nextPhoto();
                    break;
                case 'ArrowLeft':
                    previousPhoto();
                    break;
                case 'Escape':
                    closePhoto();
                    break;
            }
        };

        document.addEventListener('keydown', handleKeyPress);

        return () => document.removeEventListener('keydown', handleKeyPress);
    }, [nextPhoto, previousPhoto, closePhoto]);

    return (
        <div className='grid place-items-center relative w-max bg-lightblue mx-auto px-16 py-12'>
            <CloseIcon onClick={closePhoto as MouseEventHandler} />
            <Image
                src={photoUrl}
                width={1200}
                height={900}
                alt=''
                className='w-auto max-h-[75vh] max-w-[70vw] min-w-[400px] min-h-[300px] skeleton-animation'
            />
            <div className={cn(arrowClassNames, '-left-20')}>
                <Image src={ArrowRight} width={32} alt='close icon' onClick={previousPhoto} className="-scale-100" />
            </div>
            <div className={cn(arrowClassNames, '-right-20')}>
                <Image src={ArrowRight} width={32} alt='close icon' onClick={nextPhoto} />
            </div>
        </div>
    )
};
