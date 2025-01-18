import React, { useState } from "react";
import { Checkbox } from "@/components/ui/checkbox";
import { IoCalendarOutline } from "react-icons/io5";
import { cn } from "@/lib/utils";
import { IoCalendar } from "react-icons/io5";
import { useApi } from "@/hooks/useApi";
import { toast } from "@/hooks/use-toast";
import { Button } from "@/components/ui/button";
import clsx from "clsx";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogClose,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { MoreVertical, Pencil, Trash2 } from "lucide-react";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { Calendar } from "@/components/ui/calendar";

interface TaskGetData {
  complete: boolean;
  taskName: string;
  dueTime: string;
  listId: string;
  _id: string;
  createdAt: string;
  updatedAt: string;
  __v: number;
}

const TaskItem = ({
  task,
  toggleComplete,
  deleteTask,
  updateTask,
}: {
  task: TaskGetData;
  toggleComplete: (val: string) => void;
  deleteTask: (val: string) => void;
  updateTask: (val: TaskGetData) => void;
}) => {
  const [isEditOpen, setIsEditOpen] = useState(false);
  const [isDeleteOpen, setIsDeleteOpen] = useState(false);
  const [editValue, setEditValue] = useState("");
  const [date, setDate] = React.useState<Date | undefined>(new Date());

  const {
    data,
    mutate: updateMutateTask,
    error: updateErrorTask,
    isLoading: updateLoadingTask,
  } = useApi<TaskGetData>(`/api/taskList/${task.listId}/tasks/${task._id}`, {
    method: "PUT",
    enabled: false,
    onSuccess: (data) => {
      console.log(data);
      updateTask(data);
      toast({
        title: "Updated",
        description: "Task has been updated",
      });
    },
    onError: (error) => {
      toast({
        title: "Error",
        description: "Failed to update task",
        variant: "destructive",
      });
    },
  });

  const {
    mutate: deleteMutateTask,
    error: deleteErrorTask,
    isLoading: deleteLoadingTask,
  } = useApi<void>(`/api/taskList/${task.listId}/tasks/${task._id}`, {
    method: "DELETE",
    enabled: false,
    onSuccess: () => {
      toast({
        title: "Deleted",
        description: "Task has been deleted",
      });
    },
    onError: (error) => {
      toast({
        title: "Error",
        description: "Failed to delete task",
        variant: "destructive",
      });
    },
  });

  const toggleCompleted = () => {
    toggleComplete(task._id);
    updateMutateTask({
      body: {
        taskName: task.taskName,
        dueTime: task.dueTime,
        complete: !task.complete,
      },
    });
  };

  const handleDropdownClick = (e: React.MouseEvent) => {
    e.stopPropagation();
  };

  const handleEditClick = () => {
    setEditValue(task.taskName?.toString() || "");
    setIsEditOpen(true);
  };

  const handleDeleteClick = () => {
    setIsDeleteOpen(true);
  };

  const handleEdit = () => {
    updateMutateTask({
      body: {
        taskName: editValue,
        dueTime: task.dueTime,
        complete: task.complete,
      },
    });
    setIsEditOpen(false);
  };

  const handleDelete = () => {
    deleteMutateTask();
    deleteTask(task._id);
    setIsDeleteOpen(false);
  };

  const handleDate = (selectedDate: Date | undefined) => {
    updateMutateTask({
      body: {
        taskName: task.taskName,
        dueTime: selectedDate === undefined ? "" : selectedDate.toISOString(),
        complete: task.complete,
      },
    });
  };

  return (
    <div className="flex items-center justify-between rounded-2xl bg-white p-3 font-medium text-primary-9 shadow-md shadow-slate-300">
      <div className="flex items-center gap-2">
        <Checkbox
          className="rounded-full border-primary-9 data-[state=checked]:bg-primary-9"
          checked={task.complete}
          onCheckedChange={toggleCompleted}
        />
        <h4 className={cn(task.complete && "line-through")}>{task.taskName}</h4>
      </div>

      <div className="flex items-center md:gap-3">
        <Popover>
          <PopoverTrigger asChild>
            <Button size="icon" className="border-none bg-transparent">
              <IoCalendar
                size={"20"}
                className="text-primary-9 hover:text-slate-800"
              />
            </Button>
          </PopoverTrigger>
          <PopoverContent className="w-auto">
            <Calendar
              mode="single"
              selected={date}
              onSelect={(selectedDate) => {
                setDate(selectedDate || undefined);
                handleDate(selectedDate);
              }}
              className="rounded-md border"
            />
          </PopoverContent>
        </Popover>
        <h4>{new Date(task.dueTime).toLocaleDateString("en-GB")}</h4>

        <div onClick={handleDropdownClick}>
          <DropdownMenu modal={false}>
            <DropdownMenuTrigger asChild>
              <Button
                variant="ghost"
                size="icon"
                className="h-8 w-8 rounded-full hover:bg-primary-2"
              >
                <MoreVertical className="h-4 w-4" />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
              <DropdownMenuItem onSelect={handleEditClick} className="gap-2">
                <Pencil className="h-4 w-4" />
                <span>Edit</span>
              </DropdownMenuItem>
              <DropdownMenuItem
                onSelect={handleDeleteClick}
                className="gap-2 text-red-500"
              >
                <Trash2 className="h-4 w-4" />
                <span>Delete</span>
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>

        <Dialog open={isEditOpen} onOpenChange={setIsEditOpen}>
          <DialogContent onClick={(e) => e.stopPropagation()}>
            <DialogHeader>
              <DialogTitle>Edit Task Name</DialogTitle>
            </DialogHeader>
            <Input
              value={editValue}
              onChange={(e) => setEditValue(e.target.value)}
              placeholder="Enter new name"
              autoFocus
            />
            <div className="flex justify-end gap-2">
              <DialogClose asChild>
                <Button variant="outline" onClick={() => setEditValue("")}>
                  Cancel
                </Button>
              </DialogClose>
              <Button onClick={handleEdit}>Save</Button>
            </div>
          </DialogContent>
        </Dialog>

        <Dialog open={isDeleteOpen} onOpenChange={setIsDeleteOpen}>
          <DialogContent onClick={(e) => e.stopPropagation()}>
            <DialogHeader>
              <DialogTitle>Confirm Deletion</DialogTitle>
            </DialogHeader>
            <p>Are you sure you want to delete this task?</p>
            <div className="flex justify-end gap-2">
              <DialogClose asChild>
                <Button variant="outline">Cancel</Button>
              </DialogClose>
              <Button variant="destructive" onClick={handleDelete}>
                Delete
              </Button>
            </div>
          </DialogContent>
        </Dialog>
      </div>
    </div>
  );
};

export default TaskItem;
