import { cn } from "../utils/cn";

const getPercentageByMinutes = (time: string) => {
  const [_, minutes] = time.split(":").map(Number);
  const percentage = ((minutes / 60) * 100).toFixed(0);
  return percentage;
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
          `absolute w-[95%] h-[50px] rounded-xl z-10 -translate-x-[50%] transform`
        )}
        style={{
          top: `${percentage}%`,
          right: "50%",
          left: "50%",
        }}
      >
        <div
          className={cn("absolute w-full h-full   rounded-md z-20", {
            "bg-red-500 opacity-30": scene === "Blues",
            "bg-green-500 opacity-30": scene === "Norte",
            "bg-blue-500 opacity-30": scene === "Sur",
            "bg-yellow-500 opacity-30": scene === "Montaña",
            "bg-purple-500 opacity-30": scene === "Boomerang",
            "bg-pink-500 opacity-30": scene === "Paraguay",
          })}
        />
        <div className="h-full w-full flex gap-2 py-1 px-1">
          <div
            className={cn("w-1 h-full rounded-lg", {
              "bg-red-500": scene === "Blues",
              "bg-green-500": scene === "Norte",
              "bg-blue-500": scene === "Sur",
              "bg-yellow-500": scene === "Montaña",
              "bg-purple-500": scene === "Boomerang",
              "bg-pink-500": scene === "Paraguay",
            })}
          />
          <div className="absolute right-5 top-1 text-xs font-extrabold">
            {hour}
          </div>
          <div className={cn("z-20 flex flex-col justify-between")}>
            <h1
              className={cn("line-clamp-2 text-[8px] text-left font-bold", {
                "text-red-500": scene === "Blues",
                "text-green-500": scene === "Norte",
                "text-blue-500": scene === "Sur",
                "text-yellow-500": scene === "Montaña",
                "text-purple-500": scene === "Boomerang",
                "text-pink-500": scene === "Paraguay",
              })}
            >
              {title}
            </h1>
            <h1
              className={cn("line-clamp-1 text-xs text-left font-bold", {
                "text-red-500": scene === "Blues",
                "text-green-500": scene === "Norte",
                "text-blue-500": scene === "Sur",
                "text-yellow-500": scene === "Montaña",
                "text-purple-500": scene === "Boomerang",
                "text-pink-500": scene === "Paraguay",
              })}
            >
              {hour}
            </h1>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EventBox;
