import Link from "next/link";
import Image from 'next/image';
import Email from '../public/email.svg';

export const Contacts = () => {
    return (
        <div className="container m-auto">
            <Link href='mailto:info@megastar-group.ru' className="flex items-center gap-8 py-20 pb-10">
                <Image src={Email} alt='Email icon' className="size-10" />
                <p className="text-4xl">info@megastar-group.ru</p>
            </Link>
        </div>
    )
};
