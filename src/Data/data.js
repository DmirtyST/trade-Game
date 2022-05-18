/** @format */

import {v4 as uuidv4} from "uuid";

export const headerData = {
	navigatioHeader: [
		{id: uuidv4(), names: "Warhammer", path: "/"},
		{id: uuidv4(), names: "Magic:the Cathering", path: "/"},
		{id: uuidv4(), names: "Мероприятия", path: "/"},
		{id: uuidv4(), names: "О центре", path: "/"},
		{id: uuidv4(), names: "Контакты", path: "/"},
	],
	socialHeader: [
		{id: uuidv4(), icon: "./Image/icons_inst.svg", path: "/", alt: "inst"},
		{id: uuidv4(), icon: "./Image/icon_vk.svg", path: "/", alt: "vk"},
		{id: uuidv4(), icon: "./Image/icon_fb.svg", path: "/", alt: "fb"},
	],
	dropMenuNav: [
		{id: uuidv4(), names: "Настольные игры", index: 1},
		{id: uuidv4(), names: "Warhammer 40000", index: 2},
		{id: uuidv4(), names: "Magic: the Gathering", index: 3},
		{id: uuidv4(), names: "Аксессуары для игр", index: 4},
		{id: uuidv4(), names: "Товары для детей", index: 5},
		{id: uuidv4(), names: "Аксессуары для моделизма", index: 6},
	],
	warhammerLinkData: [
		{id: uuidv4(), names: "Альтернативные миниатюры (69)", path: "/"},
		{id: uuidv4(), names: "Warhammer 40k (400)", path: "/"},
		{id: uuidv4(), names: "Age of Sigmar (263)", path: "/"},
		{id: uuidv4(), names: "Warcry (49)", path: "/"},

		{id: uuidv4(), names: "Nercomunda (21)", path: "/"},
		{id: uuidv4(), names: "Lord of the Rings(16)", path: "/"},
		{id: uuidv4(), names: "Blood Bowl (28)", path: "/"},
		{id: uuidv4(), names: "Titanicus (4)", path: "/"},

		{id: uuidv4(), names: "Warcry (49)", path: "/"},
		{id: uuidv4(), names: "Warhammer: Underworlds (22)", path: "/"},
		{id: uuidv4(), names: "Killtem (4)", path: "/"},
	],

	logo: [{id: uuidv4(), pathImg: "./Image/logo.svg"}],
};

export const searchData = [
	{id: uuidv4(), imagePath: "./Image/productList1.png", title: "Warhammer 40,000:Chaos Space Marines", path: "/", price: 3657, add: "В коризну", players: "2-4", time: "30-60s", age: "18+"},
	{id: uuidv4(), imagePath: "./Image/productList2.png", title: "На марсе", path: "/", price: 1244, add: "В коризну", players: "2-4", time: "30-60s", age: "18+"},
	{id: uuidv4(), imagePath: "./Image/productList3.png", title: "Broken Realms: Horrek's Dreadlance ", path: "/", price: 2300, add: "В коризну", players: "2-4", time: "30-60s", age: "16+"},
	{id: uuidv4(), imagePath: "./Image/productList4.png", title: "Orks: Ghazghkull Thraka Коллекционный выпуск ", path: "/", price: 3434, add: "В коризну", players: "2-4", time: "30-60s", age: "18+"},
	{id: uuidv4(), imagePath: "./Image/productList5.png", title: "Broken Realms: Morathi  ", path: "/", price: 5122, add: "В коризну", players: "2-4", time: "30-60s", age: "12+"},
	{
		id: uuidv4(),
		imagePath: "./Image/specialoffer1.png",
		title: "Warhammer 40,000:Chaos Space Marines",
		path: "/",
		price: 3657,
		add: "В коризну",
		players: "2-4",
		time: "30-60s",
		age: "18+",
		specialprice: "2300 грн",
	},
	{
		id: uuidv4(),
		imagePath: "./Image/specialoffer2.png",
		title: "Таверна Красный дракон",
		path: "/",
		price: 2224,
		add: "В коризну",
		players: "2-4",
		time: "30-60s",
		age: "18+",
		specialprice: "1800 грн",
	},
	{
		id: uuidv4(),
		imagePath: "./Image/specialoffer3.png",
		title: "Гравити Фолз: Спасти Пухлю ",
		path: "/",
		price: 3330,
		add: "В коризну",
		players: "2-4",
		time: "30-60s",
		age: "16+",
		specialprice: "2600 грн",
	},
	{
		id: uuidv4(),
		imagePath: "./Image/specialoffer1.png",
		title: "Звездные войны Внешнее кольцо ",
		path: "/",
		price: 4334,
		add: "В коризну",
		players: "2-4",
		time: "30-60s",
		age: "18+",
		specialprice: "3450 грн",
	},
	{
		id: uuidv4(),
		imagePath: "./Image/productList1.png",
		title: "Broken Realms: Horrek's Dreadlance ",
		path: "/",
		price: 1241,
		add: "В коризну",
		players: "2-4",
		time: "30-60s",
		age: "12+",
		specialprice: "760 грн",
	},
];

export const homeData = {
	sliderBeginningData: [
		{id: uuidv4(), imagePath: "./Image/slide1Begin.png", title: "Magic: the Gathering", sub: "Самая популярная карточная игра", path: "/"},
		{id: uuidv4(), imagePath: "./Image/slide2Begin.svg", title: "Warhmmer games", sub: "Настольная игра варгейм", path: "/"},
		{id: uuidv4(), imagePath: "./Image/slide3Begin.png", title: "Весь католог ", sub: "Попробуй игры разных жанров", path: "/"},
	],
	catalogData: {
		firstItem: [{id: 1, imagePath: "./Image/catalog1.png", title: "Настольные игры", path: "/"}],
		lastItems: [
			{id: 1, imagePath: "./Image/catalog2.png", title: "Варгеймы", path: "/"},
			{id: 2, imagePath: "./Image/catalog3.png", title: "Краски ", path: "/"},
			{id: 3, imagePath: "./Image/catalog4.png", title: "Magic:the Cathering ", path: "/"},
			{id: 4, imagePath: "./Image/catalog5.png", title: "Весь католог ", path: "/"},
		],
	},
	productListData: [
		{id: uuidv4(), imagePath: "./Image/productList1.png", title: "Warhammer 40,000:Chaos Space Marines", path: "/", price: 3657, add: "В коризну", players: "2-4", time: "30-60s", age: "18+"},
		{id: uuidv4(), imagePath: "./Image/productList2.png", title: "На марсе", path: "/", price: 1244, add: "В коризну", players: "2-4", time: "30-60s", age: "18+"},
		{id: uuidv4(), imagePath: "./Image/productList3.png", title: "Broken Realms: Horrek's Dreadlance ", path: "/", price: 2300, add: "В коризну", players: "2-4", time: "30-60s", age: "16+"},
		{id: uuidv4(), imagePath: "./Image/productList4.png", title: "Orks: Ghazghkull Thraka Коллекционный выпуск ", path: "/", price: 3434, add: "В коризну", players: "2-4", time: "30-60s", age: "18+"},
		{id: uuidv4(), imagePath: "./Image/productList5.png", title: "Broken Realms: Horrek's Dreadlance ", path: "/", price: 5122, add: "В коризну", players: "2-4", time: "30-60s", age: "12+"},
	],
	specialOffer: [
		{
			id: uuidv4(),
			imagePath: "./Image/specialoffer1.png",
			title: "Warhammer 40,000:Chaos Space Marines",
			path: "/",
			price: 3657,
			add: "В коризну",
			players: "2-4",
			time: "30-60s",
			age: "18+",
			specialprice: "2300 грн",
		},
		{
			id: uuidv4(),
			imagePath: "./Image/specialoffer2.png",
			title: "Таверна Красный дракон",
			path: "/",
			price: 2224,
			add: "В коризну",
			players: "2-4",
			time: "30-60s",
			age: "18+",
			specialprice: "1800 грн",
		},
		{
			id: uuidv4(),
			imagePath: "./Image/specialoffer3.png",
			title: "Гравити Фолз: Спасти Пухлю ",
			path: "/",
			price: 3330,
			add: "В коризну",
			players: "2-4",
			time: "30-60s",
			age: "16+",
			specialprice: "2600 грн",
		},
		{
			id: uuidv4(),
			imagePath: "./Image/specialoffer1.png",
			title: "Звездные войны Внешнее кольцо ",
			path: "/",
			price: 4334,
			add: "В коризну",
			players: "2-4",
			time: "30-60s",
			age: "18+",
			specialprice: "3450 грн",
		},
		{
			id: uuidv4(),
			imagePath: "./Image/productList1.png",
			title: "Broken Realms: Horrek's Dreadlance ",
			path: "/",
			price: 1241,
			add: "В коризну",
			players: "2-4",
			time: "30-60s",
			age: "12+",
			specialprice: "760 грн",
		},
	],
	eventsData: [
		{
			id: uuidv4(),
			imagePath: "./Image/events1.png",
			title: "Halloween c GoldFish",
			sub: "Мы соберемся,чтобы узнать,кто же все-таки был Мафией и что будет с тем,кого убили..",
			path: "/",
			titleData: "31 октября 2021 г. 19:00",
		},
		{
			id: uuidv4(),
			imagePath: "./Image/events2.png",
			title: "Турнир Warhammer",
			sub: "Готов сразиться в ожесточенной битве Warhammer? Нет? Мы тебя обязтально научим!",
			path: "/",
			titleData: "9 ноября 2021 г. 18:30",
		},
	],
	informationData: [
		{
			id: uuidv4(),
			imagePath: "./Image/information1.png",
			title: "Аэронавтика Империалис: введение в игру",
			sub: "Детально ознакомимся с правилами игры ",
			path: "/",
		},
		{
			id: uuidv4(),
			imagePath: "./Image/information2.png",
			title: "Лучшие настолки в Steam для игры с друзьми на карантине",
			sub: "По рейтингу 2021",
			path: "/",
		},
		{
			id: uuidv4(),
			imagePath: "./Image/information3.png",
			title: "Желанные, но маловероятные релизы ",
			sub: "Небольшой список «а вот бы...»",
			path: "/",
		},
	],
	aboutData: {
		colFirst: [
			{id: uuidv4(), text: "«GoldFish»- магазин, в котором Вы можете купить отличный подарок как для себя, так и для своих близких. "},
			{
				id: uuidv4(),
				text:
					"В ассортименте нашего магазина представлены тысячи настольных игр на любой вкус: простые и посложнее, семейные и только для взрослых, для двоих и для больших компаний, детективные и логические, ролевые и стратегические настолки. «GoldFish» также  регулярно проводит собственные игротеки:турниры по Magic: the Gathering (от компании Wizards of the coast) и Warhammer (от Games Workshop). ",
			},
			{
				id: uuidv4(),
				text:
					"В нашем магазине можно найти нужные аксессуары для любимых игр (протекторы для карт и коллекций), инструменты для самостоятельного оформления и покраски фигурок (кейсы, подставки, краски Vallejo и др.) и многое другое. ",
			},
			{
				id: uuidv4(),
				text:
					"«GoldFish» - это не только магазин настольных игр, но и полноценный хобби-центр. Здесь можно арендовать столы для игр с друзьями, проходить обучение и мастер-классы по интересующим тебя играм, заводить новые знакомства и приобщаться к игровому комьюнити!",
			},
		],

		colLast: [{id: uuidv4(), pathImg: "./Image/about.png"}],
	},
	contactsData: {
		infoContacts: [
			{id: 1, text: "+7 (495) 911-10-11", icon: "./Image/iconContacts1.svg", path: "tel:+74959111011", title: "Телефон:"},
			{id: 2, text: "msk@magicgoldfish.ru", icon: "./Image/iconContacts2.svg", path: "mailto:msk@magicgoldfish.ru", title: "E-mail:"},
			{id: 3, text: "г. Москва ст.м. Таганская (кольцевая) Малый Дровяной переулок 6", icon: "./Image/iconContacts3.svg", title: "Адрес:"},
			{id: 4, text: "11:00-23:00 (ежедневно)", icon: "./Image/iconContacts4.svg", title: "Режим работы клуба:"},
		],

		formContacts: [
			{id: 1, label: "Ваше имя", place: "Имя"},
			{id: 2, label: "Ваш телефон", place: "+7 ___ _______"},
			{id: 3, label: "Ваш комментарий", place: "Комментарий"},
		],
	},
};

export const footerData = [
	{id: uuidv4(), pathImg: "./Image/logo.svg", text: "г. Москва ст.м. Таганская Малый Дровяной переулок 6"},

	{id: uuidv4(), names: "Warhammer 40000", path: "/"},
	{id: uuidv4(), names: "Настольные игры", path: "/"},
	{id: uuidv4(), names: "Magic: the Gathering", path: "/"},
	{id: uuidv4(), names: "Аксессуары для игр", path: "/"},
	{id: uuidv4(), names: "Краски ", path: "/"},
	{id: uuidv4(), names: "Аксессуары для моделизма", path: "/"},

	{id: uuidv4(), names: "Правила клуба", path: "/"},
	{id: uuidv4(), names: "Мероприятия", path: "/"},
	{id: uuidv4(), names: "О нас", path: "/"},
	{id: uuidv4(), names: "Контакты", path: "/"},
	{id: uuidv4(), names: "Блог  ", path: "/"},

	{id: uuidv4(), names: "Оплата и достака", path: "/"},
	{id: uuidv4(), names: "Гарантия и возврат", path: "/"},

	{id: uuidv4(), names: "Заказать звонок", path: "/"},
	{id: uuidv4(), names: "+7 (495) 911-10-11", path: "tel:+74959111011"},
	{id: uuidv4(), names: "msk@magicgoldfish.ru", path: "mailto:msk@magicgoldfish.ru"},
	{id: uuidv4(), pathImg: "./Image/icons_inst.svg", path: "/"},
	{id: uuidv4(), pathImg: "./Image/icon_vk.svg", path: "/"},
	{id: uuidv4(), pathImg: "./Image/icon_fb.svg", path: "/"},
];
