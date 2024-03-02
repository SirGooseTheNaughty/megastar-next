import React from "react";

import { initTranslations } from '@/app/i18n';
import { Header } from '@/components/header';
import { Burger } from "@/components/burger";
import { Hero } from "@/components/hero";
import { Heading } from "@/components/heading";
import { Grid } from "@/components/grid";
import { Tile } from "@/components/tile";
import { Photos } from "@/components/photos";
import { Contacts } from "@/components/contacts";
import { Footer } from "@/components/footer";
import { EventModal } from "@/components/eventModal";
import { TranslationsProvider } from "@/components/translationsProvider";
import { EventType } from "../types";
import { ScrollBarWidth } from "@/components/scrollBarWidth";
// import { getAlbumsData } from "../functions/addAlbumsData";

import events from '@/data/events.json';
import projects from '@/data/projects.json';
import albums from '@/data/enrichedAlbums.json';
// import albumsWithoutData from '@/data/albums.json';
import videos from '@/data/videos.json';
import { AlbumModal } from "@/components/albumModal";

const i18nNamespaces = ['common'];

export default async function Home({ params: { locale }}: any) {
  const { t, resources } = await initTranslations(locale, i18nNamespaces);
  // const albums = await getAlbumsData(albumsWithoutData);

  return (
    <TranslationsProvider
      namespaces={i18nNamespaces}
      locale={locale}
      resources={resources}
    >
      <main>
        <Header events={events} albums={albums} projects={projects} t={t} locale={locale} />
        <Burger locale={locale} />
        <Hero locale={locale} />
        <Heading id='events' t={t} />
        <Grid>
          {events.map(({ id, description, date, cover }) => (
            <Tile key={id} id={id} type={EventType.EVENT} title={description[locale]} text={date?.[locale]} image={cover?.[locale]} />
          ))}
        </Grid>
        <Heading id='projects' t={t} />
        <Grid>
          {projects.map(({ id, description, cover }) => (
            <Tile key={id} id={id} type={EventType.PROJECT} title={description[locale]} image={cover?.[locale]} />
          ))}
        </Grid>
        <Heading id='photos' t={t} />
        <Photos albums={albums} locale={locale} rootUrl={process.env.SRC_PHOTOS} />
        <Heading id='videos' t={t} />
        <Grid>
          {videos.map(({ id, description, cover }) => (
            <Tile key={id} id={id} type={EventType.VIDEO} title={description[locale]} image={cover} />
          ))}
        </Grid>
        <Heading id='contacts' t={t} />
        <Contacts />
        <Footer events={events} projects={projects} albums={albums} t={t} locale={locale} />
        <EventModal
          events={events}
          projects={projects}
          videos={videos}
          locale={locale}
          imageRootUrl={process.env.SRC_PHOTOS}
          videoRootUrl={process.env.SRC_VIDEOS}
        />
        <AlbumModal
          albums={albums}
          locale={locale}
          imageRootUrl={process.env.SRC_PHOTOS}
        />
      </main>
      <ScrollBarWidth />
    </TranslationsProvider>
  );
}
