'use client';

import { useState, useMemo, useEffect } from "react";
import Image from "next/image";
import cn from "classnames";
import { useTranslation } from "react-i18next";
import { Language } from "./language";
import { blockScroll, unblockScroll } from "@/app/hooks/useNoScroll";
import BurgerIcon from '@/public/burger.svg';
import CloseIcon from '@/public/close.svg';
import Logo from '@/public/logo.svg';

const BurgerLink = ({ title, link, onClick }) => (
    <li>
        <a href={link} onClick={onClick}>{title}</a>
    </li>
);

export const Burger = ({ locale }) => {
    const { t } = useTranslation();
    const [isOpened, setIsOpened] = useState(false);

    const close = () => setIsOpened(false);

    useEffect(() => {
        isOpened ? blockScroll() : unblockScroll();
    }, [isOpened]);

    const icon = useMemo(() => {
        const icon = isOpened ? CloseIcon : BurgerIcon;
        const onClick = () => setIsOpened(!isOpened);

        return (
            <button className="absolute top-12 right-8 cursor-pointer pointer-events-auto" onClick={onClick}>
                <Image src={icon} width={40} height={40} alt='burger icon' />
            </button>
        )
    }, [isOpened]);

    return (
        <div className="fixed lg:hidden top-0 left-0 w-screen h-screen overflow-hidden z-50 pointer-events-none">
            <div className={cn('w-full h-full p-8 bg-blue pointer-events-auto duration-300', { 'translate-x-full opacity-0': !isOpened })}>
                <Image src={Logo} width={110} height={110} alt='Megastar logo' />
                <ul className="mt-20 text-2xl uppercase space-y-2">
                    <BurgerLink onClick={close} link='#start' title={t('home')} />
                    <BurgerLink onClick={close} link='#events' title={t('events')} />
                    <BurgerLink onClick={close} link='#projects' title={t('projects')} />
                    <BurgerLink onClick={close} link='#photos' title={t('photos')} />
                    <BurgerLink onClick={close} link='#videos' title={t('videos')} />
                    <BurgerLink onClick={close} link='#contacts' title={t('contacts')} />
                    <li className="flex items-center justify-center w-max gap-2">
                        <Language locale={locale} language={'en'} />
                        <Language locale={locale} language={'ru'} />
                    </li>
                </ul>
            </div>
            {icon}
        </div>
    )
};
