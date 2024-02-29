export enum EventType {
    EVENT = 'event',
    PROJECT = 'project',
    ALBUM = 'album',
    VIDEO = 'video',
};

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

export type EventData = {
    id: string,
    albums?: AlbumLink[],
    exlinks?: ExternalLink[],
    cover: Localized,
    description: Localized,
    date: Localized,
    vid: string,
};
