import React from "react";

// import { initTranslations } from '@/app/i18n';
import { Header } from '@/components/header';

import events from '@/data/events.json';
import albums from '@/data/albums.json';

export default async function Home({ params: { locale } }: any) {
  // const { t } = await initTranslations(locale, ['common']);
  const t = (key: string) => key;

  return (
    <main>
      <Header events={events} albums={albums} t={t} />
    </main>
  );
}
