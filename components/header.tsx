import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Language } from "./language";

export const Header = ({
    events = [],
    albums = [],
    projects = [],
    t,
    locale
}: {
    events: any[],
    albums: any[],
    projects: any[],
    t: Function,
    locale: string
}) => {
    const MenuItem = ({ title, link, children }: any) => (
        <div className="relative group h-full">
            <a href={link} className="flex h-full items-center gap-2 uppercase text-lg">
                {t(title)}
                {children && <Image src="/nav_arrow.png" width={13} height={3} alt="" className="duration-200 group-hover:rotate-180" />}
            </a>
            {children && (
                <ul className="absolute top-100 left-0 hidden group-hover:block px-8 py-4 bg-lightblue bg-opacity-90">
                    {children}
                </ul>
            )}
        </div>
    );

    return (
        <header className="flex justify-between relative w-full h-32 px-20 z-10">
            <Link href="/" className="h-full block overflow-hidden">
                <Image
                    src="/logo.png"
                    alt="Megastar logo"
                    width={135}
                    height={135}
                />
            </Link>
            <nav className="hidden md:flex items-center justify-center gap-4">
                <MenuItem title='events' link='#events'>
                    {events.map(({ id, description }: any) => <MenuDropdownItem key={id} link={`?event=${id}`} text={description[locale]} />)}
                </MenuItem>
                <MenuItem title='projects' link='#projects'>
                    {projects.map(({ id, description }: any) => <MenuDropdownItem key={id} link={`?event=${id}`} text={description[locale]} />)}
                </MenuItem>
                <MenuItem title='photos' link='#photos'>
                    {albums.map(({ year }: any) => <MenuDropdownItem key={year} link='#photos' text={year} />)}
                </MenuItem>
                <MenuItem title='videos' link='#videos'></MenuItem>
                <MenuItem title='contacts' link='#contacts'></MenuItem>
            </nav>
            <div className="hidden md:flex items-center justify-center gap-2 text-lg">
                <Language locale={locale} language={'en'} />
                <Language locale={locale} language={'ru'} />
            </div>
        </header>
    );
};

const MenuDropdownItem = ({ link, text }: any) => (
    <li className="truncate">
        <Link href={link} shallow className="block text-sm py-2 duration-200 hover:text-purple">{text}</Link>
    </li>
);
