import { SCENES, generateHourlyArray } from "../constants/grilla";
import CosquinEvent from "./Event";

const grouped = generateHourlyArray();
const keys = Object.keys(grouped);

const DayCalendar = () => {
  return (
    <div className="h-full w-full py-5 px-5">
      <div className="grid grid-cols-7 w-full border-2 divide-x-2 divide-solid  rounded-t-xl fixed top-0 bg-black">
        <div></div>
        {SCENES.map((scene) => {
          return (
            <div key={scene} className="text-center py-2 font-semibold">
              {scene}
            </div>
          );
        })}
      </div>
      {keys.map((hour) => {
        const events = grouped[hour];
        return (
          <div className="grid grid-cols-7 w-full border-2  divide-x divide-solid ">
            <div>{hour}</div>
            {events.map((event, index) => {
              return (
                <div key={index} className="text-center">
                  <CosquinEvent title={event} index={`${index}`} />
                </div>
              );
            })}
          </div>
        );
      })}
    </div>
  );
};

export default DayCalendar;
