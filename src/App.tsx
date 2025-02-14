import { useState } from "react";
import DayCalendar from "./components/DayCalendar";
import useScreenOrientation from "./hooks/useScreenOrientation";

function App() {
  const [day, setDay] = useState(1);
  const isPortrait = useScreenOrientation();

  if (isPortrait)
    return (
      <div className="h-screen w-screen flex justify-center items-center flex-col gap-5 text-black">
        Gira el fono
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          width={32}
          height={32}
          stroke-width="1.5"
          stroke="currentColor"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="M16.023 9.348h4.992v-.001M2.985 19.644v-4.992m0 0h4.992m-4.993 0 3.181 3.183a8.25 8.25 0 0 0 13.803-3.7M4.031 9.865a8.25 8.25 0 0 1 13.803-3.7l3.181 3.182m0-4.991v4.99"
          />
        </svg>
      </div>
    );
  return (
    <div className="flex flex-col h-[100dvh] w-[100dvw] relative">
      <DayCalendar day={day} />
      <button
        onClick={() => {
          setDay(day === 1 ? 2 : 1);
        }}
        className="bottom-2 right-2 absolute z-50"
      >
        Dia {day}
      </button>
    </div>
  );
}

export default App;
