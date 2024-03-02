import Image from "next/image";
import VkIcon from '../public/vk.svg';
import WebIcon from '../public/web.svg';
import BookletIcon from '../public/booklet.svg';
import { ExternalLink as ExternalLinkType, ExternalLinkApp } from "@/app/types";

const getExternalLinkIcon = (app: string) => {
    switch(app) {
        case ExternalLinkApp.VK:
            return VkIcon;
        case ExternalLinkApp.BOOKLET:
            return BookletIcon;
        case ExternalLinkApp.WEB:
        default:
            return WebIcon;
    }
};

export const ExternalLink = ({ app, link }: ExternalLinkType) => (
    <a href={link} target="_blank">
        <Image src={getExternalLinkIcon(app)} alt='' width={24} />
    </a>
);
