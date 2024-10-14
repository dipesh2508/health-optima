import React from 'react'
import { Checkbox } from '../ui/checkbox'
import { IoCalendarOutline } from "react-icons/io5";
import { cn } from "@/lib/utils"
import { IoCalendar } from "react-icons/io5";

const TaskItem = ({key, it, completed, date}: {key: number, it: string, completed: boolean, date: string}) => {
  return (
    <div key={key} className="rounded-3xl bg-white text-primary-9 font-medium p-3 flex justify-between items-center shadow-md shadow-slate-300">
        <div className='flex gap-2 items-center'>
            <Checkbox className="rounded-full border-primary-9 data-[state=checked]:bg-primary-9" checked = {completed}
            // checked = {completed.includes(it)} onCheckedChange={(isChecked)=>handleCheck(it, isChecked)}
            />
            <h4 className={cn(completed && "line-through")}>{it}</h4>
        </div>
        
        <div className='flex gap-3 items-center'>

          <IoCalendar size={'20'}/>
          <h4>{date}</h4>
        </div>
    </div>
  )
}

export default TaskItem
