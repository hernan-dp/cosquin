import { useState } from "react";
import DayCalendar from "./components/DayCalendar";

function App() {
  const [day, setDay] = useState(1);
  return (
    <div className="flex flex-col h-[100dvh] w-[100dvw] relative">
      <DayCalendar day={day} />
      <button
        onClick={() => {
          setDay(day === 1 ? 2 : 1);
        }}
        className="bottom-2 right-2 absolute"
      >
        Dia {day}
      </button>
    </div>
  );
}

export default App;
