import React from "react";
import { Checkbox } from "@/components/ui/checkbox";
import { IoCalendarOutline } from "react-icons/io5";
import { cn } from "@/lib/utils";
import { IoCalendar } from "react-icons/io5";

const TaskItem = ({
  it,
  completed,
  date,
}: {
  it: string;
  completed: boolean;
  date: string;
}) => {
  return (
    <div className="flex items-center justify-between rounded-2xl bg-white p-3 font-medium text-primary-9 shadow-md shadow-slate-300">
      <div className="flex items-center gap-2">
        <Checkbox
          className="rounded-full border-primary-9 data-[state=checked]:bg-primary-9"
          checked={completed}
          // checked = {completed.includes(it)} onCheckedChange={(isChecked)=>handleCheck(it, isChecked)}
        />
        <h4 className={cn(completed && "line-through")}>{it}</h4>
      </div>

      <div className="flex items-center gap-3">
        <IoCalendar size={"20"} />
        <h4>{date}</h4>
      </div>
    </div>
  );
};

export default TaskItem;
