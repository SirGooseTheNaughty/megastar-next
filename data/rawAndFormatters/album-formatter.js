const src = `
"flower_fest_alb_2017" => array(
    "num" => count(scandir("images/photos/2017/"."flower_fest_alb_2017"))-1,
    "src" => "images/photos/2017/"."flower.jpg",
    "desc" => 'International Flower Festival',
    "date" => "June 12",
    "desc_ru" => 'Международный Фестиваль цветов',
    "date_ru" => "12 июня"
),
"aurora_alb_2017" => array(
    "num" => count(scandir("images/photos/2017/"."aurora_alb_2017"))-1,
    "src" => "images/projects/aurora.jpg",
    "desc" => "Aurora'17",
    "date" => "November 4 and 5",
    "desc_ru" => "Аврора'17",
    "date_ru" => "4 и 5 ноября"
),
"show_opera_alb_2017" => array(
    "num" => count(scandir("images/photos/2017/"."show_opera_alb_2017"))-1,
    "src" => "images/photos/2017/"."show_opera.jpg",
    "desc" => 'Show Opera in Hungary',
    "date" => "Days of Moscow in Budapest | November 22",
    "desc_ru" => 'Show Opera в Венгрии',
    "date_ru" => "Дни Москвы в Будапеште | 22 ноября"
),
"new_year_night_alb_2017" => array(
    "num" => count(scandir("images/photos/2017/"."new_year_night_alb_2017"))-1,
    "src" => "images/photos/2017/"."ded_moroz.jpg",
    "desc" => 'New Year Night',
    "date" => "December 23 and 31",
    "desc_ru" => 'Новогодняя ночь',
    "date_ru" => "23 и 31 декабря"
)
`;

function getEntries(src = '') {
    const result = [];
    const woBreaks = src.replaceAll('\n', '');
    const keyValuePairs = woBreaks.split('),');

    keyValuePairs
        .filter(v => !!v)
        .forEach(keyValuePair => {
            const [id, data] = keyValuePair.split(' => array(');
            const obj = { id: id.replaceAll('"', '') };
            const entries = data.split(',');
            entries.forEach(entry => {
                const [key, value] = entry.split(' => ');
                console.log(key, value)
                obj[key.trim().replaceAll('"', '')] = value.replaceAll('"', '').replaceAll("'", '');
            });
            result.push(obj);
        });

        console.log(result);
        return result;
}

getEntries(src);