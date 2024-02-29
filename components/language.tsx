'use client';

import Link from "next/link";
import cn from 'classnames';
import { useRouter } from 'next/navigation';
import { usePathname } from 'next/navigation';
import { useTranslation } from 'react-i18next';
import i18nConfig from '@/i18n-config';

export const Language = ({ locale, language }) => {
  const { i18n } = useTranslation();
  const currentLocale = i18n.language;
  const router = useRouter();
  const currentPathname = usePathname();

  const onChange = () => {
    const days = 30;
    const date = new Date();
    date.setTime(date.getTime() + days * 24 * 60 * 60 * 1000);
    const expires = date.toUTCString();
    document.cookie = `NEXT_LOCALE=${language};expires=${expires};path=/`;

    // redirect to the new locale path
    if (
      currentLocale === i18nConfig.defaultLocale &&
      !i18nConfig.prefixDefault
    ) {
      router.push('/' + language + currentPathname);
    } else {
      router.push(
        currentPathname.replace(`/${currentLocale}`, `/${language}`)
      );
    }

    router.refresh();
  };

  return (
    <button
      className={cn('block uppercase font-light', { 'font-normal pointer-events-none': locale === language })}
      onClick={onChange}
    >
      {language}
    </button>
  );
};
