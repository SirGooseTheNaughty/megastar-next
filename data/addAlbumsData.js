const { Client } = require("basic-ftp") 
const fs = require('fs');
const albums = require('./albums.json');

console.log(process.env.FTP_HOST);

const FTP_VARS = {
    host: 'megastar-group.ru',
    user: 'u1069399',
    password: 'nN1Um1XtLmY0j5K2',
}
const FTP_ROOT_PATH = '/www/megastar-group.ru/';

const getAlbumsData = async (rawAlbums) => {
    const client = new Client();
    client.ftp.verbose = true
    let enrichedYears = [];

    try {
        console.log('Start connecting');
        await client.access({
            ...FTP_VARS,
            secure: false
        })
        console.log('Connection successful');

        for (const { year, albums } of rawAlbums) {
            console.log(`------ Getting year ${year} ------`);
            const enrichedAlbums = [];

            for (const album of albums) {
                console.log(`------ Getting album ${album.id} ------`);
                const albumFiles = await client.list(`${FTP_ROOT_PATH}/images/${album.src}`);
                console.log(`++++++ Got album ${album.id} ++++++`);

                enrichedAlbums.push({
                    ...album,
                    files: albumFiles.map((fileData) => fileData.name),
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
        console.log(err);
    } finally {
        console.log('Closing connection');
        client.close();
        console.log('Connection closed');
    }

    fs.writeFileSync('enrichedAlbums.json', JSON.stringify(enrichedYears));
}

getAlbumsData(albums);