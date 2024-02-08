import { cn } from "../utils/cn";

const getPercentageByMinutes = (time: string) => {
  const [_, minutes] = time.split(":").map(Number);
  const percentage = ((minutes / 60) * 100).toFixed(0);
  return percentage;
};

const timePosition: { [key: number]: string } = {
  10: "top-[10%]",
  20: "top-[20%]",
  30: "top-[30%]",
  40: "top-[40%]",
  50: "top-[50%]",
  60: "top-[60%]",
  70: "top-[70%]",
  80: "top-[80%]",
  90: "top-[90%]",
  100: "top-[100%]",
  0: "top-[0%]",
};

const EventBox = ({
  title,
  hour,
  scene,
}: {
  title: string;
  hour: string;
  scene: string;
}) => {
  if (!title || !hour || !scene)
    return <div className="text-center h-[100px] relative px-2" />;

  const percentage = getPercentageByMinutes(hour);

  return (
    <div className="text-center h-[100px] relative">
      <div
        className={cn(
          `absolute  w-[90%] h-[50px] py-5 bg-slate-700 rounded-xl z-10 px-3 -translate-x-[50%] transform`,
          {
            "bg-red-500": scene === "Blues",
            "bg-green-500": scene === "Norte",
            "bg-blue-500": scene === "Sur",
            "bg-yellow-500": scene === "Montaña",
            "bg-purple-500": scene === "Boomerang",
            "bg-pink-500": scene === "Paraguay",
          }
        )}
        style={{
          top: `${percentage}%`,
          right: "50%",
          left: "50%",
        }}
      >
        <div className="absolute right-5 top-1 text-xs font-extrabold">
          {hour}
        </div>
        <div className="line-clamp-1"> {title}</div>
      </div>
    </div>
  );
};

export default EventBox;
