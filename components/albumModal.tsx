'use client';

import React, { useState, useMemo } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { useSearchParams } from 'next/navigation';
import { EventType, AlbumYear, YEAR, Album } from '@/app/types';
import Close from '../public/close.svg';
import { useNoScroll } from '@/app/hooks/useNoScroll';
import { PhotoModal } from './photoModal';

export const AlbumModal = ({
    albums = [],
    locale,
    imageRootUrl,
}: {
    albums: AlbumYear[],
    locale: string,
    imageRootUrl?: string,
}) => {
    const searchParams = useSearchParams();
    const year = searchParams.get(YEAR);
    const album = searchParams.get(EventType.ALBUM);

    const data: Album | undefined | null = useMemo(() => {
        if (!year || !album) {
            return null;
        }
        const yearAlbums = albums.find(({ year: albumYear }) => year === albumYear);
        return yearAlbums?.albums?.find(({ id }) => id === album);
    }, [year, album, albums]);
    
    if (!data) {
        return null;
    }

    return <AlbumModalContent year={year as string} data={data} locale={locale} imageRootUrl={imageRootUrl} />;
};

export const AlbumModalContent = ({
    year,
    data,
    locale,
    imageRootUrl,
}: {
    year: string,
    data: Album,
    locale: string,
    imageRootUrl?: string,
}) => {
    useNoScroll();
    const [openedPhotoIndex, setOpenedPhotoIndex] = useState<number | null>(null);
    const closePhoto = () => setOpenedPhotoIndex(null);

    const { id, description, files = [] } = data;
    const photos = files.map((fileName: string) => `${imageRootUrl}/photos/${year}/${id}/${fileName}`);

    const content = useMemo(() => {
        if (openedPhotoIndex === null) {
            return (
                <div className='relative bg-lightblue w-10/12 mx-auto px-16 py-12'>
                    <Link href='/' scroll={false} className='absolute top-4 right-4'>
                        <Image src={Close} width={32} alt='close icon' />
                    </Link>
                    <h3 className='text-3xl'>{description[locale]} | {year}</h3>
                    <div className="flex flex-wrap justify-center gap-x-[2%] gap-y-8 py-10">
                        {photos.map((imageUrl, index) => (
                            <Image
                                key={imageUrl}
                                src={imageUrl}
                                width={400}
                                height={300}
                                alt=''
                                className='w-[32%] aspect-4/3 cursor-pointer'
                                onClick={() => setOpenedPhotoIndex(index)}
                            />
                        ))}
                    </div>
                </div>
            )
        }
        return (
            <PhotoModal photos={photos} initialIndex={openedPhotoIndex as number} closePhoto={closePhoto} />
        );
    }, [openedPhotoIndex, photos, year, description, locale]);

    return (
        <div className='modal fixed top-0 left-0 w-full h-full overflow-y-auto py-20 bg-lightblue bg-opacity-50 z-40 backdrop-blur-md'>
            {content}
        </div>
    );
};
