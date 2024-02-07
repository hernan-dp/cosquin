import _ from "lodash";

type Ev = {
  title: string;
  time: string;
  scene: string;
};

const events1 = [
  {
    title: "LOS AUTÉNTICOS DECADENTES",
    time: "00:20",
    scene: "Norte",
  },
  { title: "CONOCIENDO RUSIA", time: "22:50", scene: "Norte" },
  { title: "BABASONICOS", time: "21:20", scene: "Norte" },
  { title: "DILLOM", time: "20:00", scene: "Norte" },
  { title: "LOS PERICOS Y AMIGOS", time: "18:30", scene: "Norte" },
  { title: "NAFTA", time: "17:10", scene: "Norte" },
  { title: "SILVESTRE Y LA NARANJA", time: "16:10", scene: "Norte" },
  { title: "NATALIE PEREZ", time: "15:20", scene: "Norte" },
  { title: "BLAIR", time: "14:30", scene: "Norte" },
];

const event2 = [
  { title: "CARAS EXTRAÑAS", time: "01:10", scene: "Sur" },
  { title: "LA VELA PUERCA", time: "23:40", scene: "Sur" },
  { title: "SKAY Y LOS FAKIRES", time: "22:10", scene: "Sur" },
  { title: "DIVIDIDOS", time: "20:00", scene: "Sur" },
  { title: "AIRBAG", time: "18:30", scene: "Sur" },
  { title: "SUEÑO DE PESCADO", time: "17:00", scene: "Sur" },
  { title: "LA MISSISSIPPI", time: "15:50", scene: "Sur" },
  { title: "LA CHANCHA MUDA", time: "15:00", scene: "Sur" },
  { title: "WINONA RIDERS", time: "14:30", scene: "Sur" },
];

const eventsMontaña = [
  { title: "CLAPTONE", time: "02:15", scene: "Montaña" },
  { title: "GORDO", time: "00:50", scene: "Montaña" },
  { title: "VICTORIA ENGEL", time: "23:45", scene: "Montaña" },
  { title: "TIAGO PZK", time: "22:30", scene: "Montaña" },
  { title: "LALI", time: "21:00", scene: "Montaña" },
  { title: "MIRANDA!", time: "19:30", scene: "Montaña" },
  { title: "BANDALOS CHINOS", time: "18:10", scene: "Montaña" },
  { title: "ARDE BOGOTA", time: "17:10", scene: "Montaña" },
  { title: "SHINOVA", time: "16:10", scene: "Montaña" },
];

const eventsBoomerang = [
  { title: "POLENTA", time: "01:10", scene: "Boomerang" },
  { title: "LEON CORDERO", time: "00:00", scene: "Boomerang" },
  { title: "1915", time: "22:50", scene: "Boomerang" },
  { title: "ISLA DE CARAS", time: "21:50", scene: "Boomerang" },
  {
    title: "ALAN SUTTON Y LAS CRIATURITAS DE LA ANSIEDAD",
    time: "20:40",
    scene: "Boomerang",
  },
  { title: "DANTE SPINETTA", time: "19:40", scene: "Boomerang" },
  {
    title: "MELANIE WILLIAMS & EL CABLOIDE",
    time: "17:30",
    scene: "Boomerang",
  },
  { title: "VEINTIUNO", time: "16:40", scene: "Boomerang" },
  { title: "PEDRO PASTOR", time: "15:50", scene: "Boomerang" },
  { title: "MARTIN GIUSTA", time: "15:00", scene: "Boomerang" },
];

const eventsParaguay = [
  {
    title: "FIESTA SABOR: VILLA DIAMANTE – CONEJA CHINA",
    time: "00:30",
    scene: "Paraguay",
  },
  { title: "SABOR CANELA", time: "23:50", scene: "Paraguay" },
  { title: "SARA HEBE", time: "22:10", scene: "Paraguay" },
  { title: "KE PERSONAJES", time: "20:50", scene: "Paraguay" },
  { title: "LA DELIO VALDEZ", time: "19:40", scene: "Paraguay" },
  { title: "LOS TABALEROS", time: "18:30", scene: "Paraguay" },
  { title: "LOS PEÑALOZA", time: "17:30", scene: "Paraguay" },
  { title: "LUANA", time: "16:30", scene: "Paraguay" },
  { title: "KAMADA", time: "15:30", scene: "Paraguay" },
];

const eventsCasitaDeBlues = [
  {
    title: "JULIETA LASO",
    time: "22:45",
    scene: "Blues",
  },
  {
    title: "ESCALANDRUM",
    time: "21:40",
    scene: "Blues",
  },
  {
    title: "IVAN SINGH Y ALICIA YA YAH TOWNSEND",
    time: "20:35",
    scene: "Blues",
  },
  {
    title: "CUATRO AL HILO",
    time: "19:40",
    scene: "Blues",
  },
  {
    title: "WAYRA IGLESIAS",
    time: "18:45",
    scene: "Blues",
  },
  { title: "MIAU TRIO", time: "17:50", scene: "Blues" },
  { title: "MARLENE", time: "16:55", scene: "Blues" },
  {
    title: "THE ROCKMEN",
    time: "16:00",
    scene: "Blues",
  },
];

export const ALL_EVENTS = [
  ...events1,
  ...event2,
  ...eventsMontaña,
  ...eventsBoomerang,
  ...eventsParaguay,
  ...eventsCasitaDeBlues,
];

export const SCENES = [
  "Norte",
  "Sur",
  "Montaña",
  "Boomerang",
  "Paraguay",
  "Blues",
];

export const SCENE_BY_INDEX: { [key: string]: string } = {
  0: "Norte",
  1: "Sur",
  2: "Montaña",
  3: "Boomerang",
  4: "Paraguay",
  5: "Blues",
};

export const getGoruped = () => {
  const order = _.orderBy(ALL_EVENTS, "time", "asc");
  const grouped = _.groupBy(order, "time");

  return grouped;
};

const groupedData = getGoruped();

export const generateHourlyArray = () => {
  const hours = Object.keys(groupedData);
  const newGrouped: { [key: string]: string[] } = {};

  for (let hour = 0; hour < hours.length; hour++) {
    const element = groupedData[hours[hour]];

    newGrouped[hours[hour]] = handleHour(element);
  }

  return newGrouped;
};

const handleHour = (entriesByHour: Ev[]) => {
  const completeArray: string[] = [];
  SCENES.forEach((scene) => {
    const found = entriesByHour.find((entry) => entry.scene === scene);
    if (found) {
      completeArray.push(found.title);
    } else {
      completeArray.push("");
    }
  });

  return completeArray;
};
