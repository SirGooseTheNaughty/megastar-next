import Image from "next/image";
import Link from "next/link";
import Logo from '@/public/logo.svg';

import { FooterYearItem } from "./footerYear";

export const Footer = (
    {
        events = [],
        projects = [],
        albums = [],
        t,
        locale
    }: {
        events: any[],
        projects: any[],
        albums: any[],
        t: Function,
        locale: string
    }
) => {
    return (
        <div className="grid place-items-center lg:place-items-start lg:grid-cols-[auto_auto_auto_auto_auto] gap-4 lg:p-20">
            <Link href="/" className="h-full block overflow-hidden">
                <Image
                    src={Logo}
                    alt="Megastar logo"
                    width={200}
                    height={200}
                />
            </Link>
            <FooterColumn title={t('our_events')} link='#events'>
                {events.map(({ id, description }: any) => <FooterNavItem key={id} link={`#${id}`} text={description[locale]} />)}
            </FooterColumn>
            <FooterColumn title={t('our_projects')} link='#projects'>
                {projects.map(({ id, description }: any) => <FooterNavItem key={id} link={`#${id}`} text={description[locale]} />)}
            </FooterColumn>
            <FooterColumn title={t('photos')} link='#photos'>
                {albums.map(({ year }: any) => <FooterYearItem key={year} year={year} />)}
            </FooterColumn>
            <ul className="hidden lg:block">
                <a href='#videos'>
                    <li className="uppercase font-bold mb-2">{t('videos')}</li>
                </a>
                <a href='#contacts'>
                    <li className="uppercase font-bold mb-2">{t('contacts')}</li>
                </a>
            </ul>
        </div>
    )
};

const FooterColumn = ({ title, link, children = null }: any) => {
    return (
        <ul className="hidden lg:block">
            <a href={link}>
                <li className="uppercase font-bold mb-2">{title}</li>
            </a>
            {children}
        </ul>
    );
};

export const FooterNavItem = ({ link, text, onClick }: any) => (
    <li className="">
        <a href={link} className="block text-sm py-1 duration-200 hover:text-purple" onClick={onClick}>{text}</a>
    </li>
);
