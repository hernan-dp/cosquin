type HourCellProps = {
  hour: string;
};

const minutes = ["00", "15", "30", "45"];

const HourCell = ({ hour }: HourCellProps) => {
  return (
    <div className="font-bold text-center h-[100px] w-full flex relative px-2">
      <div>{hour}</div>
      {minutes.map((minute, index) => {
        return (
          <div
            key={index}
            className="absolute h-1 text-xs right-3"
            style={{
              top: `${index * 25}%`,
            }}
          >
            {minute}
          </div>
        );
      })}
    </div>
  );
};

export default HourCell;
