const CatalogOfServices = [
  {
    id: "1",
    img: require("../images/01.webp"),
    title: "Мелодия Дагестана",
    description:
      "Дагестан — это колыбель истории с ее великими радостными и скорбными событиями. Именно здесь началась и закончилась Кавказская война с ее великими битвами, — при Ахульго, за Гимры, взятие Гуниба, — всех не перечислить. Культура Дагестана удивит вас, — например, вы знали, что знаменитая песня «Журавли» («Мне кажется порою, что солдаты») изначально была стихотворением, написанным Расулом Гамзатовым на аварском? Подобных сюрпризов в Дагестане множество!",
    date: "28.08.2023 - 01.09.2023",
    price: 36000,
  },
  {
    id: "2",
    img: require("../images/02.webp"),
    title: "Волшебный Дагестан",
    description:
      "Дагестан — это колыбель истории с ее великими радостными и скорбными событиями. Именно здесь началась и закончилась Кавказская война с ее великими битвами, — при Ахульго, за Гимры, взятие Гуниба, — всех не перечислить. Культура Дагестана удивит вас, — например, вы знали, что знаменитая песня «Журавли» («Мне кажется порою, что солдаты») изначально была стихотворением, написанным Расулом Гамзатовым на аварском? Подобных сюрпризов в Дагестане множество!",
    date: "19.06.2023 - 23.06.2023",
    price: 38000,
  },
  {
    id: "3",
    img: require("../images/03.webp"),
    title: "Перу - Боливия",
    description:
      "Приглашаю вас присоединиться к нашей экспедиции по Перу и Боливии. Начнем мы наше путешествие с города Лима, в котором сделаем несколько запоминающихся остановок: обед на берегу Тихого океана, где попробуем свежайшие морепродукты. Посетим музей гравированных камней Ики, на которых изображены различные материки, инопланетяне проводящие опыты, жизнь динозавров и многое другое.",
    date: "20.10.2023 - 10.11.2023",
    price: 390000,
  },
  {
    id: "4",
    img: require("../images/04.webp"),
    title: "Кабардино-Балкария",
    description:
      "Приглашаем вас в путешествие по краю гор, водопадов, озер! Где даже виды из машины по дороге не оставляют равнодушными!",
    date: "19.06.2023 - 23.06.2023",
    price: 28000,
  },
  {
    id: "5",
    img: require("../images/05.webp"),
    title: "Золотое Кольцо Алтая",
    description:
      "Бесспорно, этот маршрут самый крутой и популярный среди всех туров на Алтае! Мы всю неделю будем путешествовать и увидим уголки с суровой и первозданной природой!",
    date: "23.06.2023 - 29.06.2023",
    price: 44000,
  },
  {
    id: "6",
    img: require("../images/06.webp"),
    title: "Каппадокия для влюбленных!",
    description:
      "Каппадокия - место загадочное и волшебное. Здесь, среди величественных утесов и древних скальных храмов, романтика оживает в полной мере. Вечернее солнце сияет ярко над горизонтом, золотистые лучи проникают сквозь фольклорные обрядовые шторы и играют крошечными танцами на земле. Здесь Вы и напишите свою любовную историю на Землях Всемирного Наследия ЮНЕСКО!",
    date: "19.06.2023 - 23.06.2023",
    price: 190000,
  },
  {
    id: "7",
    img: require("../images/07.webp"),
    title: "Выходные на Телецком озере",
    description:
      "Едем гулять по Телецкому озеру - крупнейшему на Алтае. Окаймленное скальными утесами - озеро очень красиво! В программе прогулка по эко-тропе, экскурсия на катере по самым крутым местам Телецкого, подъем на гору Кокуя на кресельном подъемнике и баня!",
    date: "14.07.2023 - 16.07.2023",
    price: 9000,
  },
  {
    id: "8",
    img: require("../images/08.webp"),
    title: "Тропический остров",
    description:
      "Главная цель программы позволит бюджетно отдохнуть на Мальдивских островах, но в тоже время получить максимум ярких эмоций. Предлагаю вашему вниманию побывать на тропическом острове, познакомиться с местной культурой, совершить экспедицию на плантацию, где выращивают экзотические фрукты и одновременно продегустировать их.",
    date: "07.07.2023 - 15.07.2023",
    price: 106000,
  },
  {
    id: "9",
    img: require("../images/09.webp"),
    title: "Джип-тур на выходные по горной Ингушетии",
    description:
      "Прямо с аэропорта мы мчимся в горы, где Вас ждут захватывающие виды горной Ингушетии, на джипах мы доберёмся до труднодоступных мест на Цейломском и Цоринском перевалах, где единении с природой и перезагрузка Вам будут обеспечены с первого часа пребывания в горах!",
    date: "23.06.2023 - 25.06.2023",
    price: 30000,
  },
  {
    id: "10",
    img: require("../images/10.webp"),
    title: "Архыз: Величие гор и магия озер",
    description:
      "Я приглашаю вас в удивительный мир горных озёр! Мы будем исследовать с Вами живописные тропы и наслаждаться умиротворяющими пейзажами. Погрузимся в спокойствие окружающей природы. Прикоснемся к звёздам! Этот тур станет незабываемым приключением, о котором вы ещё долго будете вспоминать с теплотой!",
    date: "24.06.2023 - 27.06.2023",
    price: 28500,
  },
  {
    id: "11",
    img: require("../images/11.webp"),
    title: "КОТ-Д'ИВУАР",
    description:
      "А вы знаете, где в Африке самые красочные маски? А самые зажигательные танцы? Видели ли вы увеличенную копию римского собора св.Петра? А может быть знаете, почему мужчины народа сенуфо не живут со своими женами? Доводилось ли вам гулять по мосту, построенному из лиан? Добро пожаловать в нашу экспедицию в Кот-Д'Ивуар, где мы узнаем ответы на эти вопросы!",
    date: "10.02.2024 - 21.02.2024",
    price: 338000,
  },
  {
    id: "12",
    img: require("../images/12.webp"),
    title: "Яхтенный круиз вдоль Ликийской тропы",
    description:
      "Белоснежная парусная яхта - это абсолютно другой стиль путешествия! Романтика моря, потрясающие пейзажи, зажигательные вечеринки и вкусная кухня - всё это ваше новое хобби!",
    date: "24.06.2024 - 01.07.2024",
    price: 85000,
  },
  {
    id: "13",
    img: require("../images/13.webp"),
    title: "Лучшее в Грузии за 7 дней!",
    description:
      "За 7 дней мы посмотрим самые знаковые достопримечательности Грузии! Древние храмы, вкусные винодельни, парки, крепости с богатой историей, красивейший город Тбилиси, пещерные города, горы. Попробуем прекрасные вина и волшебную кухню, в которой можно найти блюда на любой вкус, будем кушать пастилу и чурчхелу, местный натуральный сыр. А рассказы и тосты местных гидов придадут путешествию дополнительный колорит. ",
    date: "25.06.2023 - 01.07.2023",
    price: 34000,
  },
  {
    id: "14",
    img: require("../images/14.webp"),
    title: "Приключения на Мальдивах",
    description:
      "Приглашаю в активный тур 'Приключения на Мальдивах' для всех, кто хочет яркую программу, окунуться в местную культуру, прочувствовать на себе местный колорит в небольшой группе и по доступной цене. Мальдивы - это доступный отдых каждому, а также любовь и воспоминания от тропической природы на всю жизнь❤️",
    date: "19.07.2023 - 28.07.2023",
    price: 114000,
  },
  {
    id: "15",
    img: require("../images/15.webp"),
    title: "Пингвины в Африке! Сафари и океан",
    description:
      "Пришло время отправиться в Африку, чтобы увидеть все своими глазами! Предлагаем Вам удивительное путешествие  в ЮАР - одну из самых красивых стран африканского континента! Увидим самый богатый город Африки Кейптаун глазами местного жителя,  откупорим бутылочку игристого на краю Земли - Мысе Доброй Надежды и загадаем желание,  сделаем селфи с африканскими пингвинами, проедем по знаменитому 'Винному пути' и конечно, будем дегустировать местные вина на лучших винодельнях африканского Прованса. Поучаствуете в настоящем Африканском сафари - соберем свою Большую пятерку:  львов,  леопардов, носорогов, буйволов и слонов.",
    date: "16.09.2023 - 25.09.2023",
    price: 231000,
  },
  {
    id: "16",
    img: require("../images/16.webp"),
    title: "Всё лучшее в Карелии",
    description:
      "В эту поездку входят самые значимые объекты республики Карелия. Как наиболее красивые природные места (горный парк Рускеала, Ладожские шхеры, водопад Кивач), исторические (крепость Корела, музей деревянного зодчества Кижи), и архитектурные (ВАЛААМ). Карелия - это большая сказка!",
    date: "17.07.2023 - 20.07.2023",
    price: 48000,
  },
  {
    id: "17",
    img: require("../images/17.webp"),
    title: "Чарующая Камчатка",
    description:
      "'ЧАРУЮЩАЯ» Камчатка' – незабываемое путешествие по самым красивым местам Камчатки. Восхождения на вулканы, морские прогулки и купание в горячих источниках ждут Вас в данном туре. Вы будете очарованы вулканами, дикими животными и невероятными пейзажами Камчатки. Тур проходит в период с июля по сентябрь. Необходима средняя физическая подготовка. В зависимости от погодных условий возможны изменения в последовательность программы тура.",
    date: "02.07.2023 - 09.07.2023",
    price: 99000,
  },
  {
    id: "18",
    img: require("../images/18.webp"),
    title: "Териберка: киты на Баренцевом море",
    description:
      "Итак, мы отправимся к побережью Баренцева моря в посёлок Териберка, куда часто подходят киты в поисках рыбы. Здесь можно увидеть полосатика (финвал), малого полосатика (минке), горбатого кита. Редко, но всё же можно увидеть кашалота, синего кита и косаток. Плюс нашего тура в том, что в мае и летние месяцы в море мы выходим на 7-8 часов (а не на 2 как обычно бывает). В сентябре выходы в море будут 5 часов, в октябре и ноябре 3 часа (чтобы вас не заморозить). Кроме того, благодаря насыщенной программе, мы успеем погулять по тундре и берегу моря, а также посетить все достопримечательности старой Териберки. ",
    date: "14.06.2023 - 16.06.2023",
    price: 39000,
  },
];

export default CatalogOfServices;
