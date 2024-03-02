import { MouseEventHandler, useState } from "react";
import Image from 'next/image';
import cn from "classnames";
import Close from '../public/close.svg';
import ArrowRight from '../public/arrow-right.svg';
import { CloseIcon } from "./closeIcon";

const arrowClassNames = `
    absolute top-1/2 -translate-y-1/2 
    w-16 h-16 grid place-items-center rounded-full 
    bg-white bg-opacity-30 hover:bg-opacity-50 duration-200 cursor-pointer
`;

export const PhotoModal = ({ photos = [], initialIndex = 0, closePhoto }: { photos: string[], initialIndex: number, closePhoto: MouseEventHandler }) => {
    const [index, setIndex] = useState(initialIndex);
    const photoUrl = photos[index];

    const nextPhoto = () => setIndex(currentIndex => currentIndex < photos.length - 1 ? currentIndex + 1 : 0);
    const previousPhoto = () => setIndex(currentIndex => currentIndex > 0 ? currentIndex - 1 : photos.length - 1);

    return (
        <div className='grid place-items-center relative w-max bg-lightblue mx-auto px-16 py-12'>
            <CloseIcon onClick={closePhoto} />
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
