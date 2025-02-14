import { atomWithStorage } from "jotai/utils";
import { cn } from "../utils/cn";
import { useAtom } from "jotai";
import { useMemo } from "react";

const hiddenList = atomWithStorage<string[]>("hiddenList", []);

const getPercentageByMinutes = (time: string) => {
  const [, minutes] = time.split(":").map(Number);
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
  const [hidden, setHidden] = useAtom(hiddenList);

  const isHidden = useMemo(() => hidden.includes(title), [hidden, title]);

  if (!title || !hour || !scene)
    return <div className="text-center h-[100px] relative px-2" />;

  const percentage = getPercentageByMinutes(hour);

  return (
    <div
      className="text-center h-[100px] relative select-none"
      onClick={() => {
        if (isHidden) {
          setHidden((prev) => prev.filter((e) => e !== title));
        } else {
          setHidden((prev) => [...prev, title]);
        }
      }}
    >
      <div
        className={cn(
          `absolute w-[95%] h-[50px] opacity-100 rounded-xl z-10 -translate-x-[50%] transform`,
          {
            "opacity-25": isHidden,
          }
        )}
        style={{
          top: `${percentage}%`,
          right: "50%",
          left: "50%",
        }}
      >
        <div
          className={cn("absolute w-full h-full  rounded-md z-20", {
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
            className={cn("w-1 h-full rounded-lg opacity-100", {
              "bg-red-500": scene === "Blues",
              "bg-green-500": scene === "Norte",
              "bg-blue-500": scene === "Sur",
              "bg-yellow-500": scene === "Montaña",
              "bg-purple-500": scene === "Boomerang",
              "bg-pink-500": scene === "Paraguay",
            })}
          />
          <div className="absolute right-0 bottom-0 text-xs font-extrabold text-black z-30">
            {isHidden ? (
              <div
                className={cn("bg-gray-600 rounded-tl-md px-1 py-1 ", {
                  "bg-red-500": scene === "Blues",
                  "bg-green-500": scene === "Norte",
                  "bg-blue-500": scene === "Sur",
                  "bg-yellow-500": scene === "Montaña",
                  "bg-purple-500": scene === "Boomerang",
                  "bg-pink-500": scene === "Paraguay",
                })}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="white"
                  width="14"
                  height="14"
                >
                  <path d="M12 4.5C7.305 4.5 3.135 7.305 1.5 12c1.635 4.695 5.805 7.5 10.5 7.5s8.865-2.805 10.5-7.5C20.865 7.305 16.695 4.5 12 4.5zm0 12c-2.485 0-4.5-2.015-4.5-4.5S9.515 7.5 12 7.5s4.5 2.015 4.5 4.5-2.015 4.5-4.5 4.5zm0-7.5c-1.655 0-3 1.345-3 3s1.345 3 3 3 3-1.345 3-3-1.345-3-3-3z" />
                </svg>
              </div>
            ) : (
              <div
                className={cn("bg-gray-600 rounded-tl-md px-1 py-1 z-30", {
                  "bg-red-500": scene === "Blues",
                  "bg-green-500": scene === "Norte",
                  "bg-blue-500": scene === "Sur",
                  "bg-yellow-500": scene === "Montaña",
                  "bg-purple-500": scene === "Boomerang",
                  "bg-pink-500": scene === "Paraguay",
                })}
              >
                <svg
                  fill="white"
                  viewBox="0 0 32 32"
                  width={14}
                  height={14}
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
                  <g
                    id="SVGRepo_tracerCarrier"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  ></g>
                  <g id="SVGRepo_iconCarrier">
                    <path d="M 3.71875 2.28125 L 2.28125 3.71875 L 8.5 9.90625 L 19.59375 21 L 21.5 22.9375 L 28.28125 29.71875 L 29.71875 28.28125 L 23.5 22.0625 C 27.734375 19.964844 30.574219 16.851563 30.75 16.65625 L 31.34375 16 L 30.75 15.34375 C 30.480469 15.042969 24.085938 8 16 8 C 14.042969 8 12.195313 8.429688 10.5 9.0625 Z M 16 10 C 18.152344 10 20.1875 10.605469 22 11.4375 C 22.644531 12.515625 23 13.734375 23 15 C 23 16.816406 22.296875 18.476563 21.15625 19.71875 L 18.3125 16.875 C 18.730469 16.363281 19 15.714844 19 15 C 19 13.34375 17.65625 12 16 12 C 15.285156 12 14.636719 12.269531 14.125 12.6875 L 12.09375 10.65625 C 13.335938 10.273438 14.636719 10 16 10 Z M 6.6875 10.90625 C 3.480469 12.878906 1.398438 15.175781 1.25 15.34375 L 0.65625 16 L 1.25 16.65625 C 1.507813 16.945313 7.429688 23.425781 15.0625 23.9375 C 15.371094 23.96875 15.683594 24 16 24 C 16.316406 24 16.628906 23.96875 16.9375 23.9375 C 17.761719 23.882813 18.566406 23.773438 19.34375 23.59375 L 17.5625 21.8125 C 17.054688 21.929688 16.539063 22 16 22 C 12.140625 22 9 18.859375 9 15 C 9 14.46875 9.070313 13.949219 9.1875 13.4375 Z M 7.25 12.9375 C 7.089844 13.613281 7 14.300781 7 15 C 7 16.738281 7.488281 18.339844 8.34375 19.71875 C 6.054688 18.40625 4.304688 16.867188 3.40625 16 C 4.152344 15.277344 5.496094 14.078125 7.25 12.9375 Z M 24.75 12.9375 C 26.503906 14.078125 27.84375 15.277344 28.59375 16 C 27.695313 16.867188 25.917969 18.4375 23.625 19.75 C 24.484375 18.371094 25 16.738281 25 15 C 25 14.300781 24.910156 13.609375 24.75 12.9375 Z"></path>
                  </g>
                </svg>
              </div>
            )}
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
