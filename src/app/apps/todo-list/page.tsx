"use client";

import React, { useState, ReactElement } from "react";
import { Button } from "@/components/ui/button";

interface Task {
  Title: string;
  Desc: string;
}

const Page: React.FC = (): ReactElement => {
  const [Title, setTitle] = useState<string>("");
  const [Desc, setDesc] = useState<string>("");
  const [maintask, setmaintask] = useState<Task[]>([]);

  const submitHandler = (e: React.FormEvent): void => {
    e.preventDefault();

    setmaintask([...maintask, { Title, Desc }]);

    // Set title and desc empty
    setDesc("");
    setTitle("");
  };

  const deleteHandeler = (i: number): void => {
    let copyTask = [...maintask];
    copyTask.splice(i, 1);
    setmaintask(copyTask);
  };

  let renTask: ReactElement = <h1>No task available</h1>;

  if (maintask.length > 0) {
    renTask = (
      <ul className="list-decimal">
        {maintask.map((task, i) => (
          <li key={i} className="grid grid-cols-3 items-center justify-between ">
              <h5 className="text-lg font-base md:text-xl ">{task.Title}</h5>
              <h6 className="text-xl font-base ">
                {task.Desc}
              </h6>
            <div className="grid justify-end">
            <Button
              onClick={() => {
                deleteHandeler(i);
              }}
              className="" size="sm" variant="destructive"
            >
              Delete
            </Button>
            </div>
          </li>
        ))}
      </ul>
    );
  }

  return (
    <main className="mx-8 my-12 px-2 md:mx-28">
      <h1 className="text-center font-serif text-2xl font-semibold text-dark-primary md:text-5xl">
        Todo List
      </h1>
      <form className="mt-16 w-full" onSubmit={submitHandler}>
        <div className="flex flex-col justify-between md:flex-row content-center">
          <input
            className=" text-normal w-2/5 font-base rounded-xl focus:border-dark-primary border-2 p-2 font-sans md:text-xl"
            type="text"
            placeholder="Enter your title"
            value={Title}
            required
            onChange={(e) => {
              setTitle(e.target.value);
            }}
          />
          <input
            className="text-normal w-2/5 font-base rounded-xl focus:border-dark-primary border-2 p-2 font-sans md:text-xl"
            type="text"
            placeholder="Enter your Task"
            value={Desc}
            required
            onChange={(e) => {
              setDesc(e.target.value);
            }}
          />
          <Button className="" type="submit" size="lg">
            Add task
          </Button>
        </div>
      </form>
      <div className="">
      <ul className="list-decimal pt-8">

          <li className="grid grid-cols-3 items-center justify-between font-serif font-semibold text-dark-primary">

              <h5 className="text-lg font-base md:text-xl ">Title</h5>
              <h6 className="text-xl font-base ">
            Description
              </h6>
            

          </li>
      </ul>
      </div>
      <div className="py-4 md:py-8 font-sans">{renTask}</div>
    </main>
  );
};

export default Page;
