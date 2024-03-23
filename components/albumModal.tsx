'use client';

import React, { useState, useMemo, RefObject } from 'react';
import Image from 'next/image';
import { useSearchParams } from 'next/navigation';
import { EventType, AlbumYear, YEAR, Album } from '@/app/types';
import { useNoScroll } from '@/app/hooks/useNoScroll';
import { useDirectClick } from '@/app/hooks/useDirectClick';
import { PhotoModal } from './photoModal';
import { CloseIcon } from './closeIcon';
import { MEDIA_PATH } from '@/utils/constants';

export const AlbumModal = ({
    albums = [],
    locale,
}: {
    albums: AlbumYear[],
    locale: string,
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

    return <AlbumModalContent year={year as string} data={data} locale={locale} />;
};

export const AlbumModalContent = ({
    year,
    data,
    locale,
}: {
    year: string,
    data: Album,
    locale: string,
}) => {
    useNoScroll();
    const [openedPhotoIndex, setOpenedPhotoIndex] = useState<number | null>(null);
    const closePhoto = () => setOpenedPhotoIndex(null);

    const albumRef = useDirectClick();
    const photoModalRef = useDirectClick(closePhoto);

    const { id, description, files = [] } = data;
    const photos = files.map((fileName: string) => `${MEDIA_PATH.ROOT}/${MEDIA_PATH.IMAGES}/${MEDIA_PATH.PHOTOS}/${year}/${id}/${fileName}`);

    const content = useMemo(() => {
        if (openedPhotoIndex === null) {
            return (
                <div className='relative bg-lightblue w-10/12 mx-auto px-4 lg:px-16 py-3 lg:py-12'>
                    <CloseIcon />
                    <h3 className='text-3xl'>{description[locale]} | {year}</h3>
                    <div className="flex flex-wrap justify-center gap-x-[2%] gap-y-8 py-10">
                        {photos.map((imageUrl, index) => (
                            <div
                                key={imageUrl}
                                className='relative w-full md:w-[49%] xl:w-[32%] aspect-4/3 skeleton-animation'
                            >
                                <Image
                                    src={imageUrl}
                                    width={400}
                                    height={300}
                                    alt=''
                                    className='relative w-full h-full cursor-pointer z-10'
                                    onClick={() => setOpenedPhotoIndex(index)}
                                />
                            </div>
                        ))}
                    </div>
                </div>
            )
        }
        return (
            <div className="h-full grid place-items-center -translate-y-8 lg:translate-y-0" ref={photoModalRef as RefObject<HTMLDivElement>}>
                <PhotoModal photos={photos} initialIndex={openedPhotoIndex as number} closePhoto={closePhoto} />
            </div>
        );
    }, [openedPhotoIndex, photos, year, description, locale, photoModalRef]);

    return (
        <div
            ref={albumRef as RefObject<HTMLDivElement>}
            className='modal fixed top-0 left-0 w-full h-full overflow-y-auto py-20 bg-lightblue bg-opacity-50 z-40 backdrop-blur-md'
        >
            {content}
        </div>
    );
};
