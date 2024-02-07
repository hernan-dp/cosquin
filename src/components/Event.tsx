import { SCENE_BY_INDEX } from "../constants/grilla";

type CEventProps = {
  hour?: string;
  title: string;
  index: string;
};

const BG_COLORS_BY_SCENE: {
  [key: string]: string;
} = {
  Norte: "bg-red-400",
  Sur: "bg-green-400",
  Montaña: "bg-yellow-400",
  Boomerang: "bg-blue-400",
  Paraguay: "bg-indigo-400",
  Blues: "bg-purple-400",
};

const CosquinEvent = ({ title, index }: CEventProps) => {
  if (!title) return 
  const scene = SCENE_BY_INDEX[index];
  const bgColor = BG_COLORS_BY_SCENE[scene];

  return (
    <div className={`flex flex-col ${bgColor} h-28 justify-center px-2`}>
      <p className="text-lg font-bold">{title}</p>
    </div>
  );
};

export default CosquinEvent;
