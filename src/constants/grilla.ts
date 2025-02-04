import _ from "lodash";

const eventsDay2Norte = [
  { title: "Luck Ra", time: "00:00", scene: "Norte" },
  { title: "Nafta", time: "23:00", scene: "Norte" },
  { title: "La Delio Valdez", time: "21:00", scene: "Norte" },
  { title: "Nicki Nicole", time: "19:40", scene: "Norte" },
  { title: "Ca7riel y Paco Amoroso", time: "17:50", scene: "Norte" },
  { title: "Bhavi", time: "16:30", scene: "Norte" },
  { title: "Agusfortnite2008 & Stiffy", time: "15:20", scene: "Norte" },
  { title: "K4", time: "14:30", scene: "Norte" },
];

// Day 2 - Escenario Sur
const eventsDay2Sur = [
  { title: "Los Piojos", time: "22:00", scene: "Sur" },
  { title: "Skay y Los Fakires", time: "20:30", scene: "Sur" },
  { title: "Las Pelotas", time: "19:10", scene: "Sur" },
  { title: "Ale Kurz", time: "17:50", scene: "Sur" },
  { title: "La Chancha Muda", time: "16:30", scene: "Sur" },
  { title: "Wayra Iglesias", time: "15:20", scene: "Sur" },
  { title: "Daniela Milagro", time: "14:30", scene: "Sur" },
];

// Day 2 - Escenario Montaña
const eventsDay2Montaña = [
  { title: "Peces Raros", time: "00:20", scene: "Montaña" },
  { title: "Juan Hansen Live", time: "23:10", scene: "Montaña" },
  { title: "Deadmau5", time: "20:40", scene: "Montaña" },
  { title: "Bandalos Chinos", time: "18:40", scene: "Montaña" },
  { title: "Silvestre y La Naranja", time: "17:10", scene: "Montaña" },
  { title: "Blair", time: "15:50", scene: "Montaña" },
  { title: "Genitallica", time: "14:30", scene: "Montaña" },
];

// Day 2 - Escenario Paraguay
const eventsDay2Paraguay = [
  { title: "Hijo de la Tormenta", time: "23:30", scene: "Paraguay" },
  { title: "Rosa Profunda", time: "22:30", scene: "Paraguay" },
  { title: "Winona Riders", time: "21:30", scene: "Paraguay" },
  { title: "Massacre", time: "20:10", scene: "Paraguay" },
  { title: "Vapors of Morphine", time: "19:00", scene: "Paraguay" },
  { title: "Zoe Gotusso", time: "18:00", scene: "Paraguay" },
  { title: "Javiera Mena", time: "16:50", scene: "Paraguay" },
  { title: "Manu Martínez", time: "16:00", scene: "Paraguay" },
  { title: "Lara 91K", time: "15:10", scene: "Paraguay" },
  { title: "Fonso y Las Paritarias", time: "14:20", scene: "Paraguay" },
];

const eventsDay2Blues = [
  { title: "Los Búfalos Sedientos", time: "22:45", scene: "Blues" },
  { title: "Ivan Singh & Sheryl Youngblood", time: "21:45", scene: "Blues" },
  { title: "Piti Fernández", time: "20:30", scene: "Blues" },
  { title: "The Rhythm Gamblers", time: "19:25", scene: "Blues" },
  {
    title: "César Valdomir + Mari Pole + Nico Raffetta",
    time: "18:20",
    scene: "Blues",
  },
  { title: "Sol Bassa", time: "17:25", scene: "Blues" },
  { title: "Cindy Coleoni", time: "16:20", scene: "Blues" },
  { title: "Marlene Suchy & The Super Sax", time: "15:25", scene: "Blues" },
  { title: "Papi Chimi Romero & Brossoul", time: "14:30", scene: "Blues" },
];

const eventsDay1Norte = [
  {
    title: "LOS AUTÉNTICOS DECADENTES",
    time: "00:40",
    scene: "Norte",
  },
  { title: "DILLOM", time: "23:10", scene: "Norte" },
  { title: "AIRBAG", time: "21:40", scene: "Norte" },
  { title: "DIVIDIDOS", time: "19:35", scene: "Norte" },
  { title: "EL MATO A UN POLICIA MOT", time: "17:50", scene: "Norte" },
  { title: "HILDA CANTA A CHARLY", time: "16:30", scene: "Norte" },
  { title: "KOINO YOKAN", time: "15:20", scene: "Norte" },
  { title: "SANTI CELLI", time: "14:30", scene: "Norte" },
];

const eventsDay1Sur = [
  { title: "RATONES PARANOICOS", time: "00:30", scene: "Sur" },
  { title: "LAS PASTILLAS DEL ABUELO", time: "23:10", scene: "Sur" },
  { title: "BABASONICOS", time: "21:40", scene: "Sur" },
  { title: "WOS", time: "19:40", scene: "Sur" },
  { title: "GUASONES", time: "17:50", scene: "Sur" },
  { title: "LOS TIPITOS", time: "16:30", scene: "Sur" },
  { title: "JOVENES PORDIOSEROS", time: "15:20", scene: "Sur" },
  { title: "RYAN", time: "14:30", scene: "Sur" },
];

const eventsDay1Montaña = [
  { title: "POPOF B2B", time: "02:00", scene: "Montaña" },
  { title: "JULIAN JEWEIL", time: "01:00", scene: "Montaña" },
  { title: "MARIANO MELLINO", time: "00:00", scene: "Montaña" },
  { title: "CONOCIENDO RUSIA", time: "22:40", scene: "Montaña" },
  { title: "NO TE VA A GUSTAR", time: "20:40", scene: "Montaña" },
  { title: "LA VELA PUERCA", time: "18:40", scene: "Montaña" },
  { title: "CRUZANDO EL CHARCO", time: "17:10", scene: "Montaña" },
  { title: "EL ZAR", time: "15:50", scene: "Montaña" },
  { title: "INAZULINA", time: "15:00", scene: "Montaña" },
];

const eventsDay1Boomerang = [
  { title: "POLENTA", time: "00:00", scene: "Boomerang" },
  { title: "TURF", time: "22:50", scene: "Boomerang" },
  { title: "EL PLAN DE LA MARIPOSA", time: "21:30", scene: "Boomerang" },
  { title: "EMMANUEL HORVILLEUR", time: "20:30", scene: "Boomerang" },
  {
    title: "INDIOS",
    time: "19:20",
    scene: "Boomerang",
  },
  { title: "LEO RIZZI", time: "18:20", scene: "Boomerang" },
  {
    title: "SIDDHARTHA",
    time: "17:20",
    scene: "Boomerang",
  },
  { title: "VINOCIO", time: "16:30", scene: "Boomerang" },
  { title: "FLORIAN", time: "15:40", scene: "Boomerang" },
  { title: "UMA", time: "14:50", scene: "Boomerang" },
];

const eventsCasitaDeBlues = [
  {
    title: "TRUBUTO A PAPPO",
    time: "22:40",
    scene: "Blues",
  },
  {
    title: "MEMPHIS LA BLUSERA",
    time: "21:15",
    scene: "Blues",
  },
  {
    title: "CLAUDIA SETTE Y TOYO BAGOSO",
    time: "20:10",
    scene: "Blues",
  },
  {
    title: "LOS ESPIRITUS",
    time: "18:55",
    scene: "Blues",
  },
  {
    title: "CLAUDETTE KING",
    time: "17:50",
    scene: "Blues",
  },
  { title: "YULIE Y VANE RUTH", time: "16:55", scene: "Blues" },
  { title: "THE GINGER HEARTS", time: "16:00", scene: "Blues" },
  {
    title: "LOS MENTIDORES",
    time: "15:00",
    scene: "Blues",
  },
];

export const SCENES = [
  "Norte",
  "Sur",
  "Montaña",
  "Boomerang",
  "Paraguay",
  "Blues",
];

export const getSceneByDay = (day: number) => {
  if (day === 1) return ["Norte", "Sur", "Montaña", "Boomerang", "Blues"];
  return ["Norte", "Sur", "Montaña", "Paraguay", "Blues"];
};

export const SCENE_BY_INDEX: { [key: string]: string } = {
  0: "Norte",
  1: "Sur",
  2: "Montaña",
  3: "Boomerang",
  4: "Paraguay",
  5: "Blues",
};

export const eventByDay = {
  1: [
    ...eventsDay1Norte,
    ...eventsDay1Sur,
    ...eventsDay1Montaña,
    ...eventsDay1Boomerang,
    ...eventsCasitaDeBlues,
  ],
  2: [
    ...eventsDay2Norte,
    ...eventsDay2Sur,
    ...eventsDay2Montaña,
    ...eventsDay2Paraguay,
    ...eventsDay2Blues,
  ],
};

export const getGoruped = (day: number) => {
  const events = eventByDay[day as keyof typeof eventByDay];
  const order = _.orderBy(events, "time", "asc");
  const grouped = _.groupBy(order, "time");

  return grouped;
};
