'use client';

import { MouseEventHandler, useState, useCallback, useMemo } from "react";
import Image from 'next/image';
import cn from "classnames";
import ArrowRight from '../public/arrow-right.svg';
import { CloseIcon } from "./closeIcon";
import { useHandleKeyPress } from "@/app/hooks/useHandleKeyPress";

const arrowClassNames = `
    absolute top-full left-1/2 lg:top-1/2 lg:-translate-y-1/2 
    w-16 h-16 grid place-items-center rounded-full 
    bg-white bg-opacity-30 hover:bg-opacity-50 duration-200 cursor-pointer
`;

export const PhotoModal = ({ photos = [], initialIndex = 0, closePhoto }: { photos: string[], initialIndex: number, closePhoto: Function }) => {
    const [index, setIndex] = useState<number>(initialIndex);
    const photoUrl = photos[index];

    const getNextIndex = useCallback((currentIndex: number) => currentIndex < photos.length - 1 ? currentIndex + 1 : 0, [photos.length]);
    const getPreviousIndex = useCallback((currentIndex: number) => currentIndex > 0 ? currentIndex - 1 : photos.length - 1, [photos.length]);

    const nextPhoto = useCallback(() => setIndex(getNextIndex), [getNextIndex]);
    const previousPhoto = useCallback(() => setIndex(getPreviousIndex), [getPreviousIndex]);

    const { nextPreload, prevPreload } = useMemo(() => {
        const nextIndex = getNextIndex(index);
        const prevIndex = getPreviousIndex(index);

        return {
            nextPreload: photos[nextIndex],
            prevPreload: photos[prevIndex],
        }
    }, [photos, index, getNextIndex, getPreviousIndex]);

    const keyPressHandlers = useMemo(() => ({
        ArrowRight: nextPhoto,
        ArrowLeft: previousPhoto,
        Escape: closePhoto,
    }), [nextPhoto, previousPhoto, closePhoto]);

    useHandleKeyPress(keyPressHandlers);

    return (
        <div className='grid place-items-center relative w-max bg-lightblue mx-auto px-6 lg:px-16 py-4 lg:py-12'>
            <CloseIcon onClick={closePhoto as MouseEventHandler} />
            <Image
                src={photoUrl}
                width={1200}
                height={900}
                alt=''
                className='w-auto max-h-[75vh] max-w-[70vw] min-w-[400px] min-h-[300px] skeleton-animation'
                onClick={nextPhoto}
            />
            <button className={cn(arrowClassNames, '-translate-x-full lg:-left-20')}>
                <Image src={ArrowRight} width={32} alt='close icon' onClick={previousPhoto} className="-scale-100" />
            </button>
            <button className={cn(arrowClassNames, 'lg:-right-20')}>
                <Image src={ArrowRight} width={32} alt='close icon' onClick={nextPhoto} />
            </button>
            <link rel='preload' as='image' href={nextPreload} />
            <link rel='preload' as='image' href={prevPreload} />
        </div>
    )
};
