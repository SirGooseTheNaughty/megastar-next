'use client';

import React, { useState, useRef, useEffect, useMemo } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { useSearchParams } from 'next/navigation';
import { useTranslation } from 'react-i18next';
import { ExternalLink } from './externalLink';
import { CopyLink } from './copyLink';
import { EventType, EventData } from '@/app/types';
import Close from '../public/close.svg';
import Play from '../public/play.svg';
import { useNoScroll } from '@/app/hooks/useNoScroll';

export const EventModal = ({
    events = [],
    projects = [],
    videos = [],
    locale,
    imageRootUrl,
    videoRootUrl,
}: {
    events: EventData[],
    projects: EventData[],
    videos: EventData[],
    locale: string,
    imageRootUrl?: string,
    videoRootUrl?: string,
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

    return <EventModalContent data={data} locale={locale} imageRootUrl={imageRootUrl} videoRootUrl={videoRootUrl} />;
};

export const EventModalContent = ({
    data,
    locale,
    imageRootUrl,
    videoRootUrl,
}: {
    data: EventData,
    locale: string,
    imageRootUrl?: string,
    videoRootUrl?: string,
}) => {
    const { t } = useTranslation();
    const [isPlaying, setIsPlaying] = useState(false);
    const videoRef = useRef<HTMLVideoElement | null>(null);
    const { description, albums, exlinks, vid, cover } = data;

    useNoScroll();

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
    }, []);

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
                    src={`${imageRootUrl}/${coverUrl}`}
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
            <div className='flex gap-3 mr-auto'>
                <div className='capitalize'>{t('photos')}:</div>
                {albums.map(({ label, id: albumId }) => <Link key={albumId} href={`?${EventType.ALBUM}=${albumId}`} className='underline'>{label}</Link>)}
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
        )
    };

    return (
        <div className='modal fixed top-0 left-0 w-full h-full grid items-center bg-lightblue bg-opacity-50 z-50 backdrop-blur-md'>
            <div className='relative bg-lightblue w-10/12 mx-auto px-16 py-12'>
                <Link href='/' scroll={false} className='absolute top-4 right-4'>
                    <Image src={Close} width={32} alt='close icon' />
                </Link>
                <div className='relative'>
                    <video controls src={`${videoRootUrl}/${vid}`} ref={videoRef} className='w-full h-60vh max-h-[70vh]' />
                    {renderCover()}
                </div>
                <h3 className='text-4xl my-4'>{description[locale]}</h3>
                <div className='flex justify-end text-2xl'>
                    {renderPhotos()}
                    <div className='flex gap-8'>
                        {renderExternalLinks()}
                        <CopyLink />
                    </div>
                </div>
            </div>
        </div>
    )
};
