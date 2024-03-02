import Link from "next/link";
import { MouseEventHandler } from "react";

export const MenuDropdownItem = ({ link, text, onClick }: { link: string, text: string, onClick?: MouseEventHandler }) => (
    <li className="truncate">
        <Link href={link} shallow className="block text-sm py-2 duration-200 hover:text-purple" onClick={onClick}>{text}</Link>
    </li>
);