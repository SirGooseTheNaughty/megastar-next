const fs = require('fs');

const events = [
  {
    id: 'show_opera',
    links: '2020 2019 2018 2017',
    exlinks: 'vk web',
    src: 'images/projects/show_opera.jpg',
    desc: 'Show Opera',
    month: '',
    src_ru: 'images/projects/show_opera.jpg',
    desc_ru: 'Show Opera',
    month_ru: '',
    vid: 'videos/show_opera.mp4',
    booklet: ''
  },
  {
    id: 'chorus',
    links: '',
    exlinks: '',
    src: 'images/projects/chorus.jpg',
    desc: 'St.Petersburg Chorus & Dance Ensemble of Russian Army',
    month: '',
    src_ru: 'images/projects/chorus.jpg',
    desc_ru: 'Ансамбль песни и пляски Западного Военного округа',
    month_ru: '',
    vid: '',
    booklet: 'booklet'
  },
  {
    id: 'ballet',
    links: '',
    exlinks: '',
    src: 'images/projects/ballet.png',
    desc: 'St.Petersburg Imperial Ballet',
    month: '',
    src_ru: 'images/projects/ballet.png',
    desc_ru: 'Императорский балет Санкт-Петербурга',
    month_ru: '',
    vid: '',
    booklet: 'booklet'
  },
  {
    id: 'ice_opera',
    links: '2021',
    exlinks: '',
    src: 'images/projects/ice_opera.jpg',
    desc: 'Ice Opera',
    month: '',
    src_ru: 'images/projects/ice_opera.jpg',
    desc_ru: 'Ice Opera',
    month_ru: '',
    vid: 'videos/ice_opera.mp4',
    booklet: 'add_booklet'
  },
  {
    id: 'kids_show',
    links: '2021',
    exlinks: '',
    src: 'images/projects/kids_show.jpg',
    desc: 'Kids Show on Ice @MAZE',
    month: '',
    src_ru: 'images/projects/kids_show.jpg',
    desc_ru: 'Детское шоу на льду @MAZE',
    month_ru: '',
    vid: 'videos/kids_show.mp4',
    booklet: 'add_booklet)'
  }
];  

function jsonFormatter(src = [], output = 'output.json') {
    const res = src.map((event) => {
        const { id, links, exlinks, src, desc, month, src_ru, desc_ru, month_ru, vid } = event;
        return {
            id,
            albums: links.split(' ').map((year) => ({
                label: year,
                id: `${id}_${year}`,
            })),
            exlinks: exlinks.split(' ').map((exlink) => ({
                label: exlink,
                link: '',
            })),
            cover: {
                ru: src_ru,
                en: src,
            },
            description: {
                ru: desc_ru,
                en: desc,
            },
            date: {
                ru: month_ru,
                en: month,
            },
            vid
        }
    });

    console.log(res);

    fs.writeFile(output, JSON.stringify(res), () => {});
};

jsonFormatter(events, 'events-preformed.json');
