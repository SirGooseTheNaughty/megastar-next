'use client';

import { useEffect, useState } from "react";
import cn from 'classnames';
import { Grid } from "./grid";
import { Tile } from "./tile";
import { AlbumYear, EventType, YEAR_EVENT } from "@/app/types";
import { MEDIA_PATH } from "@/utils/constants";

export const Photos = ({ albums = [], locale }: { albums: AlbumYear[], locale: string }) => {
    const [year, setYear] = useState(albums?.[0].year);
    const activeYearAlbums = albums?.find(({ year: albumYear }) => albumYear === year)?.albums || [];

    useEffect(() => {
        const messageHandler = (event: MessageEvent) => {
            const { type, data } = event.data;
            if (type === YEAR_EVENT && albums.find(({ year }) => year === data)) {
                setYear(data);
            }
        };

        window.addEventListener('message', messageHandler);

        return () => window.removeEventListener('message', messageHandler);
    }, [setYear, albums]);

    return (
        <div>
            <div className="flex justify-center flex-wrap gap-x-4 text-xl px-8 md:px-0 md:text-2xl lg:text-3xl mt-20 lg:-mb-10">
                {albums.map(({ year: albumYear }) => (
                    <button
                        key={albumYear}
                        onClick={() => setYear(albumYear)}
                        className={cn(
                            'relative after:absolute after:-bottom-1 after:left-0 after:h-1 after:w-10 after:bg-purple after:opacity-0 after:duration-200',
                            { 'after:opacity-100': year === albumYear }
                        )}
                    >{albumYear}</button>
                ))}
            </div>
            <Grid>
                {activeYearAlbums.map(({ id, description, date, cover }) => (
                    <Tile
                        key={`album-${year}-${id}`}
                        id={id}
                        type={EventType.ALBUM}
                        year={year}
                        title={description[locale]}
                        text={date[locale]}
                        image={`${MEDIA_PATH.PHOTOS}/${cover}`}
                        noHover
                    />
                ))}
            </Grid>
        </div>
    );
};
