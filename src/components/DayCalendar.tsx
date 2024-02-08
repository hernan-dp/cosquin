import { SCENES, getGoruped } from "../constants/grilla";
import { hours } from "../constants/hours";
import EventBox from "./EventBox";
import HourCell from "./HourCell";

const grouped = getGoruped();

const emptyEvent = {
  title: "",
  scene: "",
  time: "",
};

const DayCalendar = () => {
  return (
    <div className="w-full py-5 px-5 h-screen">
      <div className="grid grid-cols-7 w-full  scrollbar-thin scrollbar-thumb-red-800 divide-x-2 divide-y-2 rounded-t-lg border bg-black">
        {/* header */}
        {[" ", ...SCENES].map((scene, index) => (
          <div key={`${index}-${scene}`} className="text-center py-5 font-bold">
            {scene}
          </div>
        ))}
      </div>
      <div className="grid grid-cols-7 w-full overflow-y-auto scrollbar-thin scrollbar-thumb-red-800 divide-x-2 divide-y-2 border">
        {/* body */}
        {hours.map((hour, index) => {
          const keys = Object.keys(grouped);
          const keysInBetweenHour = keys.filter((key) => {
            const [timeKey] = key.split(":");
            const [hourKey] = hour.split(":");
            return timeKey === hourKey;
          });

          let eventsInHour = keysInBetweenHour
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
            <>
              <HourCell key={index} hour={hour} />
              {eventsRow.map((event, index) => {
                return (
                  <EventBox
                    key={index}
                    scene={event.scene}
                    hour={event.time}
                    title={event.title}
                  />
                );
              })}
            </>
          );
        })}
      </div>
    </div>
  );
};

export default DayCalendar;
