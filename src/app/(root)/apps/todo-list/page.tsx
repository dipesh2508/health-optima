"use client";

import Sidebar from "@/components/apps/taskList/Sidebar";
import TaskInputField from "@/components/apps/taskList/TaskInputField";

const Page = () => {
  return (
    <div className="grid min-h-[85vh] grid-cols-4 bg-white">
      <Sidebar />
      <TaskInputField />
    </div>
  );
};

export default Page;
