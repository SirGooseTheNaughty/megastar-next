'use client';

import Link from "next/link";

export const Language = ({ locale, language, isDefault = false }) => {
  const className = locale === language ? 'font-light pointer-events-none' : '';

  const onChange = () => {
    // set cookie for next-i18n-router
    const days = 30;
    const date = new Date();
    date.setTime(date.getTime() + days * 24 * 60 * 60 * 1000);
    const expires = date.toUTCString();
    document.cookie = `NEXT_LOCALE=${language};expires=${expires};path=/`;
  };

  return (
    <Link
      href={isDefault ? '/' : `/${language}`}
      className={`block uppercase ${className}`}
      onClick={onChange}
    >
      {language}
    </Link>
  );
};
