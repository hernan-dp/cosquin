type HourCellProps = {
  hour: string;
};

const minutes = ["", "15", "30", "45"];

const HourCell = ({ hour }: HourCellProps) => {
  return (
    <div className="font-bold text-center text-black h-[100px] w-full flex relative px-2">
      <div className="font-semibold text-sm my-auto">{hour}</div>
      {minutes.map((minute, index) => {
        return (
          <div
            key={index}
            className="absolute h-1 text-[10px] font-semibold right-3"
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
