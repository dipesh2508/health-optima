"use client";

import React, { useState, ReactElement } from "react";
import { Button } from "@/components/ui/button";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible";
import { RxHamburgerMenu } from "react-icons/rx";
import BorderBox from "@/components/shared/BorderBox";
import { GiHamburgerMenu } from "react-icons/gi";
import { FaPlus } from "react-icons/fa6";
import { FaCirclePlus } from "react-icons/fa6";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
  DialogFooter,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Checkbox } from "@/components/ui/checkbox";
import TaskItem from "@/components/apps/TaskItem";
import { IoCalendarOutline } from "react-icons/io5";
import { Calendar } from "@/components/ui/calendar";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";

const listNames = [
  { title: "Grocerry" },
  { title: "Study bla bal blaljfoijiorjggeio" },
  { title: "Work" },
  { title: "Gym" },
  { title: "I" },
];

const completedItems = [
  { title: "Grocerry", date: "15/10/24" },
  { title: "Study bla bal blaljfoijiorjggeio", date: "15/10/24" },
  { title: "Work", date: "20/10/24" },
  { title: "Gym", date: "30/10/24" },
  { title: "I", date: "25/10/24" },
];

interface taskInterface {
  title: string;
  date: string;
}

const Page = () => {
  const [listName, setListName] = useState("");
  const [open, setOpen] = useState(false);
  const [taskitem, setTaskitem] = useState<taskInterface>({
    title: "",
    date: "",
  });
  const [tasks, setTasks] = useState<taskInterface[]>([]);
  const [completed, setcompleted] = useState<string[]>([]);
  // const [isChecked, setIsChecked] = useState(false);

  const [date, setDate] = React.useState<Date | undefined>(new Date());

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    //connect to backend

    setOpen(false);
  }
  // console.log(tasks);
  function handletaskSubmit(e: React.FormEvent) {
    e.preventDefault();

    if (taskitem?.title.trim() !== "") {
      setTasks((prevtasks) => [...prevtasks, taskitem]);
      setTaskitem({
        title: "",
        date: "",
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
    <div className="grid min-h-[85vh] grid-cols-4 bg-white">
      <div className="sidebar col-span-1 flex flex-col justify-between border-r-2 border-primary-2 bg-white p-6">
        <Collapsible>
          <div className="mb-3 mt-4 flex items-center justify-between space-x-4 bg-primary-0 p-2 px-4">
            <h4 className="text-lg font-medium text-primary-10">My Lists</h4>
            <CollapsibleTrigger asChild>
              <Button
                variant="ghost"
                size="sm"
                className="group hover:bg-primary-4"
              >
                {/* <GiHamburgerMenu className="text-primary-6"/> */}
                <RxHamburgerMenu className="text-lg text-primary-10 group-hover:text-white" />
              </Button>
            </CollapsibleTrigger>
          </div>
          <CollapsibleContent>
            <div className="flex flex-col gap-1">
              {listNames.map((it, index) => {
                return <BorderBox key={index}>{it.title}</BorderBox>;
              })}
            </div>
          </CollapsibleContent>
        </Collapsible>

        <Dialog open={open} onOpenChange={setOpen}>
          <DialogTrigger asChild>
            <Button
              className="flex gap-2 border-primary-4 text-primary-10 hover:bg-primary-4 hover:text-white"
              variant={"outline"}
            >
              <FaPlus />
              New List
            </Button>
          </DialogTrigger>
          <DialogContent>
            <DialogHeader>
              <DialogTitle className="py-2 text-xl">
                Choose a title for your new list!
              </DialogTitle>
            </DialogHeader>
            <form onSubmit={handleSubmit}>
              <div className="flex flex-col items-start gap-4">
                <Label htmlFor="title" className="text-left">
                  New List Title
                </Label>
                <Input
                  id="title"
                  placeholder="New List"
                  className="col-span-3"
                  onChange={(e) => setListName(e.target.value)}
                />
              </div>
              <DialogFooter>
                <Button type="submit">Create</Button>
              </DialogFooter>
            </form>
          </DialogContent>
        </Dialog>
      </div>

      <div className="col-span-3 px-28 py-11">
        <h2 className="mb-12 bg-gradient-to-b from-primary-9 to-primary-5 bg-clip-text font-serif text-4xl font-semibold text-transparent">
          Untitled List
        </h2>

        <div className="min-h-96 bg-purple-50 px-16 pb-4 pt-10">
          <div className="mb-10 flex items-center gap-4 rounded-3xl bg-white p-3 shadow shadow-purple-300">
            <div className="rounded-full bg-primary-10 size-9 flex items-center justify-center">
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
                  setTaskitem({ title: e.target.value, date: "34" })
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
            {tasks.map((it, idx) => (
              <TaskItem
                key={idx}
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
            {completedItems.map((it, idx) => (
              <TaskItem
                key={idx}
                it={it.title}
                completed={true}
                date={it.date}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Page;
