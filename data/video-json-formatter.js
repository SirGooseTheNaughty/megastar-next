const fs = require('fs');

const events = [
  {
    id: 'vdnh_2023_vid',
    src: 'images/posters/.vdnh_2023.png',
    desc: 'St. Petersburg at the “Russia” exhibition',
    desc_ru: 'Санкт-Петербург на международной выставке «Россия»',
    vid: 'videos/vdnh_2023.mp4'
  },
  {
    id: 'wonder_of_light_2023_vid',
    src: 'images/posters/.wonder_of_light_2023..png',
    desc: '“Wonder of Light” 2023',
    desc_ru: '«Чудо Света» 2023',
    vid: 'videos/wonder_of_light_2023.mp4'
  },
  {
    id: 'sup_2023_vid',
    src: 'images/posters/.sup_2023.png',
    desc: 'SUP-Fontanka 2023',
    desc_ru: 'SUP-Фонтанка 2023',
    vid: 'videos/sup_2023.mp4'
  },
  {
    id: 'kronshbal_2023_vid',
    src: 'images/posters/.kronshbal_2023..png',
    desc: 'Kronstadt Ball 2023',
    desc_ru: 'Кронштадтский бал 2023',
    vid: 'videos/kronshbal_2023.mp4'
  },
  {
    id: 'flower_fest_2023_vid',
    src: 'images/posters/.flower_fest_2023..png',
    desc: 'International Flower Festival 2023',
    desc_ru: 'Международный Фестиваль цветов 2023',
    vid: 'videos/flower_fest_2023.mp4'
  },
  {
    id: 'orchestra_2023_vid',
    src: 'images/posters/.orchestra_2023..png',
    desc: 'International Brass Band Festival 2023',
    desc_ru: 'Международный фестиваль духовых оркестров 2023',
    vid: 'videos/orchestra_2023.mp4'
  },
  {
    id: 'fire_fest_2023_vid',
    src: 'images/posters/.fire_fest_2023..png',
    desc: 'Fire Festival 2023',
    desc_ru: 'Петровский Фестиваль огня 2023',
    vid: 'videos/fire_fest_2023.mp4'
  },
  {
    id: 'kronshled_2023_vid',
    src: 'images/posters/.kronshled_2023_cover..png',
    desc: '“KronshLED” 2023',
    desc_ru: '«КроншЛЁД» 2023',
    vid: 'videos/kronshled_2023.mp4'
  },
  {
    id: 'wonder_of_light_2022_vid',
    src: 'images/posters/.wonder_of_light_2022_cover..png',
    desc: '“Wonder of Light” 2022 Peter and Paul Fortress',
    desc_ru: '«Чудо Света» 2022 Петропавловская крепость',
    vid: 'videos/wonder_of_light_2022.mp4'
  },
  {
    id: 'water_fest_2022_vid',
    src: 'images/posters/.water_fest_2022_cover..png',
    desc: 'Water Fest 2022',
    desc_ru: 'Водный фестиваль 2022',
    vid: 'videos/water_fest_2022.mp4'
  },
  {
    id: 'flower_fest_2022_vid',
    src: 'images/posters/.flower_fest_2022..png',
    desc: 'International Flower Festival 2022',
    desc_ru: 'Международный Фестиваль цветов 2022',
    vid: 'videos/flower_fest_2022.mp4'
  },
  {
    id: 'fire_fest_2022_vid',
    src: 'images/posters/.fire_fest_2022_cover..png',
    desc: 'Fire Festival 2022',
    desc_ru: 'Петровский Фестиваль огня 2022',
    vid: 'videos/fire_fest_2022.mp4'
  },
  {
    id: 'wonder_of_light_2021_vid',
    src: 'images/posters/.wonder_of_light_2021..png',
    desc: '“Wonder of Light” 2021<br>Peter and Paul Fortress',
    desc_ru: '«Чудо Света» 2021 <br>Петропавловская крепость',
    vid: 'videos/wonder_of_light_2021.mp4'
  },
  {
    id: 'IDJazz_2021_vid',
    src: 'images/posters/.IDJazz_2021..png',
    desc: 'IDJazz SPb ',
    desc_ru: 'IDJazz SPb ',
    vid: 'videos/IDJazz_2021.mp4'
  },
  {
    id: 'star_of_hope_2021_vid',
    src: 'images/posters/.star_of_hope_2021..png',
    desc: '“Star of Hope” Festival 2021',
    desc_ru: 'Фестиваль<br>«Звезда Надежды» 2021',
    vid: 'videos/star_of_hope.mp4'
  },
  {
    id: 'theremin_fest_2021_vid',
    src: 'images/posters/.theremin_fest_2021..png',
    desc: 'Theremin Fest 2021',
    desc_ru: 'Theremin Fest 2021',
    vid: 'videos/theremin_fest_2021.mp4'
  },
  {
    id: 'flower_fest_2021_vid',
    src: 'images/posters/.flower_fest_2021..png',
    desc: 'International Flower Festival 2021',
    desc_ru: 'Международный Фестиваль цветов 2021',
    vid: 'videos/flower_fest_2021.mp4'
  },
  {
    id: 'sup_2021_vid',
    src: 'images/posters/.sup_2021_poster.png',
    desc: 'SUP-Fontanka 2021',
    desc_ru: 'SUP-Фонтанка 2021',
    vid: 'videos/sup_2021.mp4'
  },
  {
    id: 'kids_show_vid',
    src: 'images/projects/kids_show.jpg',
    desc: 'Kids Show on Ice @MAZE',
    desc_ru: 'Детское шоу на льду @MAZE',
    vid: 'videos/kids_show.mp4'
  },
  {
    id: 'christmas_star_fire_fest_2021_vid',
    src: 'images/posters/.christmas_star_fire_fest_2021..png',
    desc: '“Christmas Star” <br>Fire Festival 2021',
    desc_ru: 'Фестиваль огня «Рождественская Звезда» 2021',
    vid: 'videos/christmas_star_fire_fest_2021.mp4'
  },
  {
    id: 'wonder_of_light_vid',
    src: 'images/posters/.wonder_of_light_2020..png',
    desc: '“Wonder of Light” 2020<br>Peter and Paul Fortress',
    desc_ru: '«Чудо Света» 2020 <br>Петропавловская крепость',
    vid: 'videos/wonder_of_light_2020.mp4'
  },
  {
    id: 'drones_2020_vid',
    src: 'images/posters/.drones_2020..png',
    desc: '“Wonder of Light” 2020<br>Drone Show',
    desc_ru: '«Чудо Света» 2020 <br>Шоу дронов',
    vid: 'videos/drones_2020.mp4'
  },
  {
    id: 'theremin_fest_2020_vid',
    src: 'images/posters/.theremin_2020..png',
    desc: 'Theremin Fest',
    desc_ru: 'Theremin Fest',
    vid: 'videos/theremin_2020.mp4'
  },
  {
    id: 'flower_fest_2020_vid',
    src: 'images/posters/.flower_fest_2020..png',
    desc: 'International Flower Festival 2020',
    desc_ru: 'Международный Фестиваль цветов 2020',
    vid: 'videos/flower_fest_2020.mp4'
  },
  {
    id: 'sup_2020_vid',
    src: 'images/posters/.sup_2020..png',
    desc: 'SUP-Fontanka 2020',
    desc_ru: 'SUP-Фонтанка 2020',
    vid: 'videos/sup_2020.mp4'
  },
  {
    id: 'IDJazz_2020_vid',
    src: 'images/posters/.IDJazz_2020..png',
    desc: 'IDJazz SPb ',
    desc_ru: 'IDJazz SPb ',
    vid: 'videos/IDJazz_2020.mp4'
  },
  {
    id: 'russia_day_vid',
    src: 'images/posters/.russia_day..png',
    desc: 'Russia Day 2020',
    desc_ru: 'День России 2020',
    vid: 'videos/russia.mp4'
  },
  {
    id: 'petersburg317_vid',
    src: 'images/posters/.city_day_video..png',
    desc: '#Petersburg317',
    desc_ru: '#Петербург317',
    vid: 'videos/city_day_video.mp4'
  },
  {
    id: 'maslenitsa_vid',
    src: 'images/posters/.maslenitsa..png',
    desc: 'MASLENITSA 2.0',
    desc_ru: 'МАСЛЕНИЦА 2.0',
    vid: 'videos/maslenitsa.mp4'
  },
  {
    id: 'christmas_star_fire_fest_2020_vid',
    src: 'images/posters/.christmas_star_fire_fest_2020..png',
    desc: '“Christmas Star” <br>Fire Festival 2020',
    desc_ru: 'Фестиваль огня «Рождественская Звезда» 2020',
    vid: 'videos/christmas_star_fire_fest_2020.mp4'
  },
  {
    id: 'new_year_vid',
    src: 'images/posters/.new_year..png',
    desc: 'New Year in Palace Square',
    desc_ru: 'Новый год на Дворцовой площади',
    vid: 'videos/new_year.mp4'
  },
  {
    id: 'ded_moroz_vid',
    src: 'images/posters/.ded_moroz..png',
    desc: 'Meeting of Ded Moroz',
    desc_ru: 'Встреча Всероссийского<br>Деда Мороза',
    vid: 'videos/ded_moroz.mp4'
  },
  {
    id: 'wonder_of_light_fall_vid',
    src: 'images/posters/.wonder_of_light_fall..png',
    desc: 'Wonder of Light 2019 <br>Palace Square',
    desc_ru: '«Чудо Света» 2019 <br>Дворцовая площадь',
    vid: 'videos/wonder_of_light_fall.mp4'
  },
  {
    id: 'sup_vid',
    src: 'images/posters/.sup_2019..png',
    desc: ' SUP-Fontanka 2019',
    desc_ru: 'SUP-Фонтанка 2019',
    vid: 'videos/sup.mp4'
  },
  {
    id: 'flower_fest_vid',
    src: 'images/posters/.flower_fest_2019..png',
    desc: 'International <br>Flower Festival 2019',
    desc_ru: 'Международный Фестиваль цветов 2019',
    vid: 'videos/flower_fest.mp4'
  },
  {
    id: 'peter_sanctus_vid',
    src: 'images/posters/.peter_sanctus..png',
    desc: 'Peter Sanctus',
    desc_ru: 'Peter Sanctus',
    vid: 'videos/peter_sanctus.mp4'
  },
  {
    id: 'city_day_vid',
    src: 'images/posters/.city_day..png',
    desc: 'City Day. Festival on Nevsky prospect',
    desc_ru: 'День Города<br>Праздник на Невском',
    vid: 'videos/city_day.mp4'
  },
  {
    id: 'wonder_of_light_spring_vid',
    src: 'images/posters/.wonder_of_light_spring..png',
    desc: 'Wonder of Light 2019 <br>The A.Bryantsev Youth Theatre',
    desc_ru: '«Чудо Света» 2019 <br>ТЮЗ',
    vid: 'videos/wonder_of_light_spring.mp4'
  },
  {
    id: 'siege_panorama_vid',
    src: 'images/posters/.siege_panorama..png',
    desc: 'The Siege Panorama',
    desc_ru: 'Панорама Блокады',
    vid: 'videos/siege_panorama.mp4'
  },
  {
    id: 'christmas_star_fire_fest_2019_vid',
    src: 'images/posters/.christmas_star_fire_fest_2019..png',
    desc: 'Christmas Star <br>Fire Festival 2019',
    desc_ru: 'Фестиваль Огня «Рождественская Звезда» 2019',
    vid: 'videos/christmas_star_fire_fest.mp4'
  },
  {
    id: 'aurora_vid',
    src: 'images/posters/.aurora..png',
    desc: 'Aurora 17',
    desc_ru: 'Аврора 17',
    vid: 'videos/aurora.mp4'
  },
  {
    id: 'ice_opera_vid',
    src: 'images/posters/.ice_opera..png',
    desc: 'Ice Opera',
    desc_ru: 'Ice Opera',
    vid: 'videos/ice_opera.mp4'
  },
  {
    id: 'show_opera_vid',
    src: 'images/posters/.show_opera..png',
    desc: 'Show Opera',
    desc_ru: 'Show Opera',
    vid: 'videos/show_opera.mp4)'
  }
];  

function jsonFormatter(src = [], output = 'output.json') {
    const res = src.map((event) => {
        const { id, src, desc, desc_ru, vid } = event;
        return {
            id,
            cover: src,
            description: {
                ru: desc_ru,
                en: desc,
            },
            vid
        }
    });

    console.log(res);

    fs.writeFile(output, JSON.stringify(res), () => {});
};

jsonFormatter(events, 'videos-preformed.json');
