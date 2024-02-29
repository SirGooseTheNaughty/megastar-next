'use client';

import { useState } from "react";
import Image from "next/image";
import { useTranslation } from 'react-i18next';
import cn from "classnames";
import Reply from '../public/reply.svg';

export const CopyLink = () => {
    const { t } = useTranslation();
    const [isCopied, setIsCopied] = useState(false);

    const copyLink = () => {
        navigator.clipboard.writeText(window.location.toString());
        setIsCopied(true);
    };

    return (
        <div className="flex gap-2" onClick={copyLink}>
            <div>{t('copy_link')}</div>
            <Image src={Reply} width={24} alt='copy link' className={cn("cursor-pointer -scale-x-100", { 'opacity-50': isCopied })} />
        </div>
    )
};
