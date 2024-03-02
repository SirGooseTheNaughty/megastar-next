export enum EventType {
    EVENT = 'event',
    PROJECT = 'project',
    ALBUM = 'album',
    VIDEO = 'video',
};

export const YEAR = 'year';

export type AlbumLink = {
    label: string,
    id: string,
};

export enum ExternalLinkApp {
    VK = 'vk',
    WEB = 'web',
    IG = 'ig',
};

export type ExternalLink = {
    app: string,
    link: string,
};

export type Localized = {
    ru: string,
    en: string,
};

export type OptionallyLocalized = Localized | string;

export type EventData = {
    id: string,
    albums?: AlbumLink[],
    exlinks?: ExternalLink[],
    cover: OptionallyLocalized,
    description: Localized,
    date?: Localized,
    vid: string,
};

export type Album = {
    id: string,
    src: string,
    cover: string,
    description: Localized,
    date: Localized,
    files?: string[],
};

export type AlbumYear = {
    year: string,
    albums: Album[],
};

export const YEAR_EVENT = 'set-year';
