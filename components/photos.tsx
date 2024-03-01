'use client';

import { useState } from "react";
import cn from 'classnames';
import { Grid } from "./grid";
import { Tile } from "./tile";
import { EventType } from "@/app/types";

export const Photos = ({ albums = [], locale, rootUrl = '' }: any) => {
    const [year, setYear] = useState(albums?.[0].year);
    const activeYearAlbums = albums?.find(({ year: albumYear }) => albumYear === year)?.albums || [];

    return (
        <div>
            <div className="flex justify-center gap-4 text-3xl mt-20 -mb-10">
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
                    <Tile key={id} id={id} type={EventType.ALBUM} year={year} title={description[locale]} text={date[locale]} image={cover} rootUrl={rootUrl} />
                ))}
            </Grid>
        </div>
    );
};
