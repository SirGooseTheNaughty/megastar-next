import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Language } from "./language";

export const Header = async ({ events = [], albums = [], t, locale }: { events: any[], albums: any[], t: Function, locale?: string }) => {
    const MenuItem = ({ title, link, children }: any) => (
        <div className="relative group">
            <a href={link} className="flex h-full items-center gap-2 uppercase text-lg">
                {t(title)}
                {children && <Image src="/nav_arrow.png" width={13} height={3} alt="" className="group-hover:rotate-180" />}
            </a>
            {children && (
                <ul className="absolute top-100 left-0 hidden group-hover:block">
                    {children}
                </ul>
            )}
        </div>
    );

    return (
        <header className="flex justify-around relative w-full h-32">
            <Link href="/" className="h-full block">
                <Image
                    src="/header_logo.png"
                    alt="Megastar logo"
                    width={135}
                    height={135}
                    id="header_logo"
                />
            </Link>
            <nav className="hidden md:flex items-center justify-center gap-4">
                <MenuItem title='events' link='#events'>
                    {events.map(({ id, description }: any) => <MenuDropdownItem key={id} link={`#${id}`} text={description.en} />)}
                </MenuItem>
                <MenuItem title='projects' link='#projects'></MenuItem>
                <MenuItem title='photos' link='#photos'>
                    {albums.map(({ year }: any) => <MenuDropdownItem key={year} link='#photos' text={year} />)}
                </MenuItem>
                <MenuItem title='videos' link='#videos'></MenuItem>
                <MenuItem title='contacts' link='#contacts'></MenuItem>
            </nav>
            <div className="hidden md:flex items-center justify-center gap-2 text-lg">
                <Language locale={locale} language={'en'} isDefault />
                <Language locale={locale} language={'ru'} />
            </div>
        </header>
    );
};

const MenuDropdownItem = ({ link, text }: any) => (
    <li className="truncate">
        <a href={link}>{text}</a>
    </li>
);
