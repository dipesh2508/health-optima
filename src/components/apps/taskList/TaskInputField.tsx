import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { FaCirclePlus } from "react-icons/fa6";
import { Input } from "@/components/ui/input";
import TaskItem from "@/components/apps/taskList/TaskItem";
import { IoCalendarOutline } from "react-icons/io5";
import { Calendar } from "@/components/ui/calendar";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { getLists } from "@/lib/actions/todo.actions";
import { boolean, number } from "zod";

const completedItems = [
  { id: 0, title: "Grocerry", date: "15/10/24" },
  { id: 1, title: "Study bla bal blaljfoijiorjggeio", date: "15/10/24" },
  { id: 2, title: "Work", date: "20/10/24" },
  { id: 3, title: "Gym", date: "30/10/24" },
  { id: 4, title: "I", date: "25/10/24" },
];

interface taskInterface {
  title: string;
  date: string;
  completed: boolean;
}

const TaskInputField = () => {
  const [taskitem, setTaskitem] = useState<taskInterface>({
    title: "",
    date: "",
    completed: false,
  });
  const [tasks, setTasks] = useState<taskInterface[]>([]);
  const [completed, setcompleted] = useState<string[]>([]);
  // const [isChecked, setIsChecked] = useState(false);

  const [date, setDate] = React.useState<Date | undefined>(new Date());

  // console.log(tasks);
  function handletaskSubmit(e: React.FormEvent) {
    e.preventDefault();

    if (taskitem?.title.trim() !== "") {
      setTasks((prevtasks) => [...prevtasks, taskitem]);
      setTaskitem({
        title: "",
        date: "",
        completed: false,
      });
    }
    console.log("updated Array: ", tasks);
  }

  // function handleCheck(item:string, isChecked: boolean | 'indeterminate'){

  //   if(isChecked){//means was completed but now unchecking

  //     setcompleted(completed.filter((checked)=>{checked!==item}));
  //     setTasks([...tasks, item]);

  //   }else{//was not completed but now clicked so completed

  //     setTasks(tasks.filter((unchecked)=>{unchecked!==item}));
  //     setcompleted([...completed, item]);//item added to completed
  //   }

  // }
  // console.log(completed);
  return (
    <div className="col-span-3 px-28 py-11">
      <h2 className="mb-12 bg-gradient-to-b from-primary-9 to-primary-5 bg-clip-text font-serif text-4xl font-semibold text-transparent">
        Untitled List
      </h2>

      <div className="min-h-96 bg-purple-50 px-16 pb-4 pt-10">
        <div className="mb-10 flex items-center gap-4 rounded-3xl bg-white p-3 shadow shadow-purple-300">
          <div className="flex size-9 items-center justify-center rounded-full bg-primary-10">
            <Popover>
              <PopoverTrigger>
                <IoCalendarOutline className="text-xl text-white" />
              </PopoverTrigger>
              <PopoverContent className="w-auto">
                <Calendar
                  mode="single"
                  selected={date}
                  onSelect={setDate}
                  className="rounded-md border"
                />
              </PopoverContent>
            </Popover>
          </div>
          <form
            onSubmit={handletaskSubmit}
            className="flex w-full items-center gap-4"
          >
            <Input
              type="text"
              placeholder="Add Task"
              className="rounded-3xl border-none focus-visible:ring-primary-2"
              id="task"
              value={taskitem.title}
              onChange={(e) =>
                setTaskitem({
                  title: e.target.value,
                  date: new Date().toLocaleDateString(),
                  completed: false,
                })
              }
            />
            <Button
              variant={"ghost"}
              className="rounded-full p-0 hover:bg-transparent"
              type="submit"
            >
              <FaCirclePlus className="text-4xl text-primary-10" />
            </Button>
          </form>
        </div>

        <h3 className="my-3 text-xl font-medium text-primary-10">To Do</h3>
        <div className="flex flex-col gap-3">
          {tasks.map((it, index) => (
            <TaskItem
              key={index}
              it={it.title}
              completed={false}
              date={it.date}
            />
          ))}
        </div>

        <h3 className="mb-3 mt-6 text-xl font-medium text-primary-10">
          Completed
        </h3>
        <div className="flex flex-col gap-3">
          {completedItems.map((it, index) => (
            <TaskItem
              key={index}
              it={it.title}
              completed={true}
              date={it.date}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default TaskInputField;
