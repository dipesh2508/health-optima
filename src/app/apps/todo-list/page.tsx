"use client"

import React, { useState, ReactElement } from 'react';

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
      <ul>
        {maintask.map((task, i) => (
          <li key={i} className='flex items-center justify-between mb-5 '>
            <div className='flex items-center justify-evenly gap-52  md:text-3xl font-bold w-full md:w-3/5 lg:w-1/2 xl:w-1/3'>
              <h5 className='text-4xl font-bold md:text-3xl '>{task.Title}</h5>
              <h6 className='text-2xl font-semibold outline-black'>{task.Desc}</h6>
            </div>
            <button
              onClick={() => {
                deleteHandeler(i);
              }}
              className='bg-red-400 rounded-xl font-mono  text-2xl font-bold p-3'
            >
              Delete
            </button>
          </li>
        ))}
      </ul>
    );
  }

  return (
    <>
      <h1 className='text-4xl md:text-7xl mt-5 text-center font-thin bg-blend-color-dodge text-black'>
        Todo List
      </h1>
      <form className='mt-2 ' onSubmit={submitHandler}>
        <div className='w-full flex flex-col md:flex-row justify-evenly'>
          <input
            className='mt-5 mr-3 p-2 rounded-xl border-2 text-xl md:text-3xl font-bold w-full md:w-3/5 lg:w-1/2 xl:w-1/3'
            type='text'
            placeholder='Enter your title'
            value={Title}
            required
            onChange={(e) => {
              setTitle(e.target.value);
            }}
          />
          <input
            className='mt-5 mr-3 p-2 rounded-xl border-2 text-xl md:text-3xl font-bold w-full md:w-3/5 lg:w-1/2 xl:w-1/3'
            type='text'
            placeholder='Enter your Task'
            value={Desc}
            required
            onChange={(e) => {
              setDesc(e.target.value);
            }}
          />
          <button
            className='mt-5 mr-3 p-2 rounded-xl text-xl md:text-3xl font-bold hover:ring-2 ring-black bg-green-500 text-white w-full md:w-auto'
            type='submit'
          >
            Add task
          </button>
        </div>
      </form>
      <div className='p-4 md:p-8 '>{renTask}</div>
    </>

  );
};

export default Page;
