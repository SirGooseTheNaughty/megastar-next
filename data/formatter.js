const src = `
"wonder_of_light" => array(
    "links" => "2022 2021 2020 tus palace",
    "exlinks" => "vk",
    "src" => "images/events/wonder_of_light_eng.jpg",
    "desc" => '“Wonder of Light” Festival',
    "month" => "November",
    "src_ru" => "images/events/wonder_of_light_fall.jpg",
    "desc_ru" => 'Фестиваль «Чудо Света»',
    "month_ru" => "Ноябрь",
    "vid" => "videos/wonder_of_light_2023.mp4"
),
"christmas_star_fire_fest" => array(
    "links" => "2022 2021 2020 2019 2018",
    "exlinks" => "vk",
    "src" => "images/events/fire_fest_eng.jpg",
    "desc" => "“Christmas Star” <br>Fire Festival",
    "month" => "January",
    "src_ru" => "images/events/fire_fest.jpg",
    "desc_ru" => 'Фестиваль Огня «Рождественская Звезда»',
    "month_ru" => "Январь",
    "vid" => "videos/fire_fest_2023.mp4"
),
"flower_fest" => array(
    "links" => "2023 2022 2021 2020 2019 2018",
    "exlinks" => "vk",
    "src" => "images/events/flower_fest_eng.jpg",
    "desc" => "International <br>Flower Festival",
    "month" => "June",
    "src_ru" => "images/events/flower_fest.jpg",
    "desc_ru" => 'Международный Фестиваль цветов',
    "month_ru" => "Июнь",
    "vid" => "videos/flower_fest_2023.mp4"
),
"sup" => array(
    "links" => "2023 2021 2020 2019",
    "exlinks" => "vk web",
    "src" => "images/events/sup_eng.jpg",
    "desc" => "River-Carnival and SUP-Fest",
    "month" => "July",
    "src_ru" => "images/events/sup.jpg",
    "desc_ru" => 'Речной карнавал и SUP-Фестиваль',
    "month_ru" => "Июль",
    "vid" => "videos/sup_2023.mp4"
),
"IDJazz" => array(
    "links" => "2021 2020",
    "exlinks" => "vk",
    "src" => "images/others/idJazz.jpg",
    "desc" => 'IDJazz Spb',
    "month" => "July 15-17",
    "src_ru" => "images/others/idJazz.jpg",
    "desc_ru" => 'IDJazz Spb',
    "month_ru" => "15-17 июля",
    "vid" => "videos/IDJazz_2021.mp4"
),
"theremin" => array(
    "links" => "2021 2020",
    "exlinks" => "vk",
    "src" => "images/others/theremin.jpg",
    "desc" => 'Theremin Fest',
    "month" => "October 8 and 9",
    "src_ru" => "images/others/theremin.jpg",
    "desc_ru" => 'Theremin Fest',
    "month_ru" => "8 и 9 октября",
    "vid" => "videos/theremin_fest_2021.mp4"
),
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