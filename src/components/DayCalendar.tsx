import { Fragment, useMemo } from "react";
import { getGoruped, getSceneByDay } from "../constants/grilla";
import { hours } from "../constants/hours";
import EventBox from "./EventBox";
import HourCell from "./HourCell";

const emptyEvent = {
  title: "",
  scene: "",
  time: "",
};

const DayCalendar = ({ day }: { day: number }) => {
  const grouped = useMemo(() => getGoruped(day), [day]);
  const SCENES = useMemo(() => getSceneByDay(day), [day]);

  return (
    <div className="w-full py-5 flex flex-col  px-5 h-full ">
      <div className="grid grid-cols-6 w-full scrollbar-none scrollbar-thumb-red-800 divide-x  border-x border-t  bg-white ">
        {/* header */}
        {[" ", ...SCENES].map((scene, index) => {
          if (index === 0)
            return (
              <div
                key={`${index}-${scene}`}
                className="text-center py-5 text-black font-semibold border-b"
              >
                Hora
              </div>
            );

          return (
            <div
              key={`${index}-${scene}`}
              className="text-center py-5 text-black font-semibold"
            >
              {scene}
            </div>
          );
        })}
      </div>
      <div className="grid grid-cols-6 w-full bg-white overflow-y-auto scrollbar-none  divide-x border-x divide-y">
        {/* body */}
        {hours.map((hour, index) => {
          const keys = Object.keys(grouped);
          const keysInBetweenHour = keys.filter((key) => {
            const [timeKey] = key.split(":");
            const [hourKey] = hour.split(":");
            return timeKey === hourKey;
          });

          const eventsInHour = keysInBetweenHour
            .map((key) => {
              return grouped[key];
            })
            .flat();

          const eventsRow = Array(SCENES.length).fill(emptyEvent);

          eventsInHour.forEach((event) => {
            const index = SCENES.indexOf(event.scene);
            eventsRow[index] = event;
          });

          return (
            <Fragment key={`${index}-${hour}`}>
              <HourCell key={`${index}-${hour}`} hour={hour} />
              {eventsRow.map((event, index) => {
                return (
                  <EventBox
                    key={`${index}-${hour}-${event.title}`}
                    scene={event.scene}
                    hour={event.time}
                    title={event.title}
                  />
                );
              })}
            </Fragment>
          );
        })}
      </div>
    </div>
  );
};

export default DayCalendar;
