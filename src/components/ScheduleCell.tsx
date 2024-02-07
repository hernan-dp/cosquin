import React from "react";

type ScheduleCellProps = {
  scene: string;
  title: string;
};

const ScheduleCell = ({ title, scene }: ScheduleCellProps) => {
  return <div className={`p-4 border`}>{title}</div>;
};

export default ScheduleCell;
