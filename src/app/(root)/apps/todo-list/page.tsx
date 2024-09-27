"use client";

import React, { useState, ReactElement } from "react";
import { Button } from "@/components/ui/button";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible"
import { FaAngleDown } from "react-icons/fa6";
import { FaAngleUp } from "react-icons/fa6";
import BorderBox from "@/components/shared/BorderBox";
import { FaPlus } from "react-icons/fa6";

const listNames = [
  { title: "Grocerry" },
  { title: "Study" },
  { title: "Work" },
  { title: "Gym" },
  { title: "I" }
];

const page = () => {
  return (
    <div className="grid grid-cols-4 bg-white min-h-[85vh]">
      <div className="sidebar col-span-1 bg-white border-r-2 border-primary-2 p-6 flex flex-col justify-between">
        <Collapsible>
          <CollapsibleTrigger asChild>
            <Button variant="ghost" size="sm" className="w-9 p-0">
              List
              <FaAngleUp />
              <FaAngleDown />
            </Button>
          </CollapsibleTrigger>
          <CollapsibleContent>
            <div className="flex flex-col gap-1">
              {listNames.map((it, index)=>{
                return <BorderBox key={index}>{it.title}</BorderBox>
              })}
            </div>
          </CollapsibleContent>
        </Collapsible>

        <Button className="flex gap-2 text-primary-10 border-primary-4 hover:bg-primary-4 hover:text-white" variant={"outline"}><FaPlus/>New List</Button>

      </div>
      
      <div className="col-span-3 px-28 py-24">
        <h2 className="bg-gradient-to-b from-primary-9 to-primary-5 bg-clip-text text-transparent text-4xl font-semibold font-serif mb-16">Untitled List</h2>

        <div className="purple-50 px-28 pt-10">

          <input type="text" placeholder="Add Task"/>

        </div>
      </div>
    </div>
  )
}

export default page


// interface Task {
//   Title: string;
//   Desc: string;
// }

// const Page: React.FC = (): ReactElement => {
//   const [Title, setTitle] = useState<string>("");
//   const [Desc, setDesc] = useState<string>("");
//   const [maintask, setmaintask] = useState<Task[]>([]);

//   const submitHandler = (e: React.FormEvent): void => {
//     e.preventDefault();

//     setmaintask([...maintask, { Title, Desc }]);

//     // Set title and desc empty
//     setDesc("");
//     setTitle("");
//   };

//   const deleteHandeler = (i: number): void => {
//     let copyTask = [...maintask];
//     copyTask.splice(i, 1);
//     setmaintask(copyTask);
//   };

//   let renTask: ReactElement = <h1>No task available</h1>;

//   if (maintask.length > 0) {
//     renTask = (
//       <ul className="list-decimal">
//         {maintask.map((task, i) => (
//           <li key={i} className="grid grid-cols-3 items-center justify-between ">
//               <h5 className="text-lg font-base md:text-xl ">{task.Title}</h5>
//               <h6 className="text-xl font-base ">
//                 {task.Desc}
//               </h6>
//             <div className="grid justify-end">
//             <Button
//               onClick={() => {
//                 deleteHandeler(i);
//               }}
//               className="" size="sm" variant="destructive"
//             >
//               Delete
//             </Button>
//             </div>
//           </li>
//         ))}
//       </ul>
//     );
//   }

//   return (
//     <main className="mx-8 my-12 px-2 md:mx-28">
      
//     </main>
//   );
// };

// export default Page;
