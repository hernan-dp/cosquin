import DayCalendar from "./components/DayCalendar";
import { getGoruped } from "./constants/grilla";

const Goruped = getGoruped();
console.log(Goruped);
function App() {
  return (
    <div className="flex flex-col h-screen w-screen">
      <DayCalendar />
    </div>
  );
}

export default App;
