const fs = require('fs');

const events = [
  {
    id: 'flower_fest_alb_2017',
    num: 'count(scandir(images/photos/2017/.flower_fest_alb_2017))-1',
    src: 'images/photos/2017/.flower.jpg',
    desc: 'International Flower Festival',
    date: 'June 12',
    desc_ru: 'Международный Фестиваль цветов',
    date_ru: '12 июня'
  },
  {
    id: 'aurora_alb_2017',
    num: 'count(scandir(images/photos/2017/.aurora_alb_2017))-1',
    src: 'images/projects/aurora.jpg',
    desc: 'Aurora17',
    date: 'November 4 and 5',
    desc_ru: 'Аврора17',
    date_ru: '4 и 5 ноября'
  },
  {
    id: 'show_opera_alb_2017',
    num: 'count(scandir(images/photos/2017/.show_opera_alb_2017))-1',
    src: 'images/photos/2017/.show_opera.jpg',
    desc: 'Show Opera in Hungary',
    date: 'Days of Moscow in Budapest | November 22',
    desc_ru: 'Show Opera в Венгрии',
    date_ru: 'Дни Москвы в Будапеште | 22 ноября'
  },
  {
    id: 'new_year_night_alb_2017',
    num: 'count(scandir(images/photos/2017/.new_year_night_alb_2017))-1',
    src: 'images/photos/2017/.ded_moroz.jpg',
    desc: 'New Year Night',
    date: 'December 23 and 31',
    desc_ru: 'Новогодняя ночь',
    date_ru: '23 и 31 декабря)'
  }
];  

function jsonFormatter(src = [], output = 'output.json') {
    const res = src.map((event) => {
        const { id, num, src, desc, date, desc_ru, date_ru } = event;
        return {
            id,
            src: num.replace('count(scandir(', '').replace('))-1', ''),
            cover: src,
            description: {
                ru: desc_ru,
                en: desc,
            },
            date: {
                ru: date_ru,
                en: date,
            }
        }
    });

    console.log(res);

    fs.writeFile(output, JSON.stringify(res), () => {});
};

jsonFormatter(events, 'albums-preformed.json');
