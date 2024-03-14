'use client';

import { YEAR_EVENT } from "@/app/types";
import { FooterNavItem } from "./footer";

export const FooterYearItem = ({ year }: { year: string }) => {
    const onClick = () => window.postMessage({ type: YEAR_EVENT, data: year });

    return (
        <FooterNavItem link='#photos' text={year} onClick={onClick} />
    );
};