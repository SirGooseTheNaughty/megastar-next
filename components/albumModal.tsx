'use client';

import React, { useMemo } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { useSearchParams } from 'next/navigation';
import { EventType, AlbumYear, YEAR, Album } from '@/app/types';
import Close from '../public/close.svg';
import { useNoScroll } from '@/app/hooks/useNoScroll';

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
    const { id, description, files = [] } = data;

    useNoScroll();

    return (
        <div className='modal fixed top-0 left-0 w-full h-full overflow-auto py-20 bg-lightblue bg-opacity-50 z-50 backdrop-blur-md'>
            <div className='relative bg-lightblue w-10/12 mx-auto px-16 py-12'>
                <Link href='/' scroll={false} className='absolute top-4 right-4'>
                    <Image src={Close} width={32} alt='close icon' />
                </Link>
                <h3 className='text-3xl'>{description[locale]} | {year}</h3>
                <div className="flex flex-wrap justify-center gap-x-[2%] gap-y-8 py-10">
                    {files.map((imageUrl) => (
                        <Image
                            key={imageUrl}
                            src={`${imageRootUrl}/photos/${year}/${id}/${imageUrl}`}
                            width={400}
                            height={300}
                            alt=''
                            className='w-[32%] aspect-4/3 cursor-pointer'
                        />
                    ))}
                </div>
            </div>
        </div>
    )
};
