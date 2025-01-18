"use client";

import Sidebar from "@/components/apps/taskList/Sidebar";
import TaskInputField from "@/components/apps/taskList/TaskInputField";
import { useState } from "react";

const Page = () => {
  const [listId, setListId] = useState<string>("");
  return (
    <div className="grid min-h-[85vh] grid-cols-4 bg-white">
      <div className="hidden md:col-span-1 md:flex">
        <Sidebar setListId={setListId} />
      </div>

      <TaskInputField listId={listId} setListId={setListId} />
    </div>
  );
};

export default Page;
