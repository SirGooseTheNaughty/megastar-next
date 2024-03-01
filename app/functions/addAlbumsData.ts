import { Client, FileInfo } from "basic-ftp";
import { Album, AlbumYear } from "@/app/types";

export const getAlbumsData = async (rawAlbums: AlbumYear[]) => {
    const client = new Client();
    client.ftp.verbose = true
    let enrichedYears: AlbumYear[] = [];

    try {
        console.log('Start connecting');
        await client.access({
            host: process.env.FTP_HOST,
            user: process.env.FTP_USER,
            password: process.env.FTP_PASSWORD,
            secure: false
        })
        console.log('Connection successful');

        for (const { year, albums } of rawAlbums) {
            console.log(`------ Getting year ${year} ------`);
            const enrichedAlbums: Album[] = [];

            for (const album of albums) {
                console.log(`------ Getting album ${album.id} ------`);
                const albumFiles: FileInfo[] = await client.list(`${process.env.FTP_ROOT_PATH}/images/${album.src}`);
                console.log(`++++++ Got album ${album.id} ++++++`);

                enrichedAlbums.push({
                    ...album,
                    files: albumFiles.map((fileData: FileInfo) => fileData.name),
                });
            }

            enrichedYears.push({
                year,
                albums: enrichedAlbums
            });
            console.log(`++++++ Got year ${year} ++++++`);
        }

        console.log('Result', enrichedYears);
    } catch(err) {
        // console.log(err);
    } finally {
        console.log('Closing connection');
        client.close();
        console.log('Connection closed');
    }

    return enrichedYears.length ? enrichedYears : rawAlbums;
}