const fs = require('fs');

const events = [
    {
      "id": "christmas_star_fire_fest",
      "links": "2022 2021 2020 2019 2018",
      "exlinks": "vk",
      "src": "images/events/fire_fest_eng.jpg",
      "desc": "“Christmas Star” <br>Fire Festival",
      "month": "January",
      "src_ru": "images/events/fire_fest.jpg",
      "desc_ru": "Фестиваль Огня «Рождественская Звезда»",
      "month_ru": "Январь",
      "vid": "videos/fire_fest_2023.mp4"
    },
    {
      "id": "flower_fest",
      "links": "2023 2022 2021 2020 2019 2018",
      "exlinks": "vk",
      "src": "images/events/flower_fest_eng.jpg",
      "desc": "International <br>Flower Festival",
      "month": "June",
      "src_ru": "images/events/flower_fest.jpg",
      "desc_ru": "Международный Фестиваль цветов",
      "month_ru": "Июнь",
      "vid": "videos/flower_fest_2023.mp4"
    },
    {
      "id": "sup",
      "links": "2023 2021 2020 2019",
      "exlinks": "vk web",
      "src": "images/events/sup_eng.jpg",
      "desc": "River-Carnival and SUP-Fest",
      "month": "July",
      "src_ru": "images/events/sup.jpg",
      "desc_ru": "Речной карнавал и SUP-Фестиваль",
      "month_ru": "Июль",
      "vid": "videos/sup_2023.mp4"
    },
    {
      "id": "IDJazz",
      "links": "2021 2020",
      "exlinks": "vk",
      "src": "images/others/idJazz.jpg",
      "desc": "IDJazz Spb",
      "month": "July 15-17",
      "src_ru": "images/others/idJazz.jpg",
      "desc_ru": "IDJazz Spb",
      "month_ru": "15-17 июля",
      "vid": "videos/IDJazz_2021.mp4"
    },
    {
      "id": "theremin",
      "links": "2021 2020",
      "exlinks": "vk",
      "src": "images/others/theremin.jpg",
      "desc": "Theremin Fest",
      "month": "October 8 and 9",
      "src_ru": "images/others/theremin.jpg",
      "desc_ru": "Theremin Fest",
      "month_ru": "8 и 9 октября",
      "vid": "videos/theremin_fest_2021.mp4"
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
