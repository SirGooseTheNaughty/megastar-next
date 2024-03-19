'use client';

import React, { useState, useRef, useEffect, useMemo } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { useSearchParams } from 'next/navigation';
import { useTranslation } from 'react-i18next';
import { ExternalLink } from './externalLink';
import { CopyLink } from './copyLink';
import { CloseIcon } from './closeIcon';
import { EventType, EventData, ExternalLinkApp } from '@/app/types';
import Play from '../public/play.svg';
import { useNoScroll } from '@/app/hooks/useNoScroll';
import { useAutoFocus } from '@/app/hooks/useAutoFocus';
import { MEDIA_PATH } from '@/utils/constants';

export const EventModal = ({
    events = [],
    projects = [],
    videos = [],
    locale,
}: {
    events: EventData[],
    projects: EventData[],
    videos: EventData[],
    locale: string,
}) => {
    const searchParams = useSearchParams();
    const event = searchParams.get(EventType.EVENT);
    const project = searchParams.get(EventType.PROJECT);
    const video = searchParams.get(EventType.VIDEO);

    const data: EventData | undefined | null = useMemo(() => {
        if (event) {
            return events.find(({ id }) => id === event);
        }
        if (project) {
            return projects.find(({ id }) => id === project);
        }
        if (video) {
            return videos.find(({ id }) => id === video);
        }
        return null;
    }, [event, project, video, events, projects, videos]);
    
    if (!data) {
        return null;
    }

    return <EventModalContent data={data} locale={locale} />;
};

export const EventModalContent = ({
    data,
    locale,
}: {
    data: EventData,
    locale: string,
}) => {
    const { t } = useTranslation();
    const [isPlaying, setIsPlaying] = useState(false);
    const { description, albums, exlinks, vid, cover, booklet } = data;

    useNoScroll();
    const videoRef = useAutoFocus<HTMLVideoElement>();

    useEffect(() => {
        const onPlay = () => setIsPlaying(true);
        const onPause = () => setIsPlaying(false);

        const videoElement = videoRef.current;

        videoElement?.addEventListener('play', onPlay);
        videoElement?.addEventListener('pause', onPause);

        return () => {
            videoElement?.addEventListener('play', onPlay);
            videoElement?.addEventListener('pause', onPause);
        }
    }, [videoRef]);

    const play = () => {
        videoRef.current?.play?.()?.catch?.();
    };

    const renderCover = () => {
        if (isPlaying) {
            return null;
        }

        const coverUrl = typeof cover === 'string' ? cover : cover[locale];

        return (
            <div className='absolute top-0 left-0 w-full h-full'>
                <Image
                    src={`${MEDIA_PATH.ROOT}/${MEDIA_PATH.IMAGES}/${coverUrl}`}
                    width={1200}
                    height={800}
                    alt='close icon'
                    className='w-full h-full object-cover'
                />
                <Image
                    src={Play}
                    width={80}
                    alt='play icon'
                    onClick={play}
                    className='absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-10 cursor-pointer'
                />
            </div>
        );
    };

    const renderPhotos = () => {
        if (!albums?.length) {
            return null;
        }

        return (
            <div className='flex gap-2 lg:gap-3'>
                <div className='capitalize'>{t('photos')}:</div>
                {albums.map(({ year, label, id: albumId }) => (
                    <Link
                        key={albumId}
                        href={`?year=${year}&${EventType.ALBUM}=${albumId}`}
                        className='underline truncate max-w-24 lg:max-w-none'
                    >{label?.[locale] || year}</Link>
                ))}
            </div>
        );
    };

    const renderExternalLinks = () => {
        if (!exlinks?.length) {
            return null;
        }

        return (
            <div className='flex items-center gap-2'>
                <p className='capitalize'>{t('links')}:</p>
                {exlinks.map(({ app, link }) => <ExternalLink key={app} app={app} link={link} />)}
            </div>
        );
    };

    const renderBooklet = () => {
        if (!booklet) {
            return null;
        }

        return (
            <div className='flex items-center gap-2 mr-4'>
                <p className='capitalize'>{t('booklet')}:</p>
                <ExternalLink app={ExternalLinkApp.BOOKLET} link={`${MEDIA_PATH.ROOT}/${MEDIA_PATH.BOOKLETS}/${booklet[locale]}`} />
            </div>
        );
    };

    return (
        <div className='modal fixed top-0 left-0 w-full h-full grid items-center bg-lightblue bg-opacity-50 z-40 backdrop-blur-md'>
            <div className='relative bg-lightblue w-11/12 lg:w-10/12 mx-auto p-6 lg:px-16 lg:py-12'>
                <CloseIcon />
                <div className='relative'>
                    <video
                        controls
                        src={`${MEDIA_PATH.ROOT}/${MEDIA_PATH.VIDEOS}/${vid}`}
                        ref={videoRef}
                        className='w-full h-60vh max-h-[70vh] outline-1 outline focus:outline-purple'
                    />
                    {renderCover()}
                </div>
                <h3 className='text-2xl lg:text-4xl my-4'>{description[locale]}</h3>
                <div className='flex flex-col xl:flex-row justify-end text-lg lg:text-2xl'>
                    <div className='flex gap-1 lg:gap-3 mr-auto'>
                        {renderBooklet()}
                        {renderPhotos()}
                    </div>
                    <div className='flex gap-4 lg:gap-8'>
                        {renderExternalLinks()}
                        <CopyLink />
                    </div>
                </div>
            </div>
        </div>
    );
};
