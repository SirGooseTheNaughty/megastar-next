'use client';

import { YEAR_EVENT } from "@/app/types";
import { MenuDropdownItem } from "./menuDropdownItem";

export const MenuYearDropdownItem = ({ link, year }: { link: string, year: string }) => {
    const onClick = () => window.postMessage({ type: YEAR_EVENT, data: year });

    return (
        <MenuDropdownItem link={link} text={year} onClick={onClick} />
    );
};