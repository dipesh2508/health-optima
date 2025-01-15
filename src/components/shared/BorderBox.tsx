import clsx from "clsx";
import React, { useState } from "react";
import { MdOutlineModeEditOutline } from "react-icons/md";
import { RiDeleteBin2Line } from "react-icons/ri";
import { Input } from "@/components/ui/input";
import { BsThreeDotsVertical } from "react-icons/bs";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
  DialogClose,
} from "@/components/ui/dialog";
import { Button } from "../ui/button";
import { useApi } from "@/hooks/useApi";
import { toast } from "@/hooks/use-toast";
import Loading from "@/app/(root)/loading";

const BorderBox = ({
  children,
  setListId,
  taskListId,
  setListSelected,
  listSelected,
  delList,
  updateList,
}: {
  children: string;
  setListId: (str: string) => void;
  taskListId: string;
  setListSelected: (str: string) => void;
  listSelected: string;
  delList: (str: string) => void;
  updateList: (str: string, val: string) => void;
}) => {
  const [isListNameEditable, setIsListNameEditable] = useState(false);
  const [listMsg, setListMsg] = useState(children);
  const [isEditDialogOpen, setIsEditDialogOpen] = useState(false);
  const [isDeleteDialogOpen, setIsDeleteDialogOpen] = useState(false);

  const editListName = () => {
    console.log("hello");

    updateList(taskListId, listMsg);
    setIsListNameEditable(false);
  };

  const {
    mutate: deleteTaskList,
    error: deleteError,
    isLoading: deleteIsLoading,
  } = useApi<void>(`/api/taskList/${taskListId}`, {
    method: "DELETE",
    enabled: false,
    onError: (error) => {
      toast({
        variant: "destructive",
        title: "Error",
        description: "Failed to delete task list.",
      });
    },
    onSuccess: () => {
      toast({
        title: "Deleted",
        description: "Task list deleted successfully.",
      });
    },
  });

  const handleDelete = async () => {
    delList(taskListId);
    await deleteTaskList();
  };

  return (
    <div
      className={clsx(
        "flex cursor-pointer justify-between rounded-md border border-purple-400 p-2 text-sm font-medium text-primary-9",
        {
          "border-teal-400 text-teal-600": listSelected === taskListId,
          "from-primary-5 to-primary-2 hover:border-none hover:bg-gradient-to-r hover:text-white":
            listSelected !== taskListId,
        },
      )}
      onClick={() => {
        setListId(taskListId);
        setListSelected(taskListId);
      }}
    >
      {children}
      {/* <Input
        value={listMsg}
        readOnly={!isListNameEditable}
        onChange={(e) => {
          setListMsg(e.target.value);
        }}
        className={`foucs:outline-none focus-ring-offset-0 w-2/3 cursor-pointer rounded-lg border bg-transparent outline-none focus:ring-0 ${isListNameEditable ? "border-black/10" : "focus-ring-offset-0 border-transparent focus:border-teal-800 focus:outline-none focus:ring-0"}`}
      /> */}
      <div>
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="ghost" size="sm" className="h-8 w-8 p-0">
              <BsThreeDotsVertical
                className={`self-center rounded-lg text-lg ${
                  listSelected == taskListId
                    ? "text-teal-600 hover:bg-teal-100"
                    : "text-primary-7 hover:bg-primary-4"
                }`}
              />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end">
            {/* <DropdownMenuItem
              onClick={() => {
                if (isListNameEditable) {
                  editListName();
                } else {
                  setIsListNameEditable((prev) => !prev);
                }
              }}
            >
              <MdOutlineModeEditOutline
                className={`self-center rounded-lg text-lg ${
                  listSelected == taskListId
                    ? "text-teal-600 hover:bg-teal-100"
                    : "text-primary-8 hover:bg-primary-4"
                }`}
              />
              Rename
            </DropdownMenuItem> */}
            {/* <DropdownMenuSeparator /> */}

            <Dialog
              open={isDeleteDialogOpen}
              onOpenChange={(isOpen) => {
                setIsDeleteDialogOpen(isOpen);
              }}
            >
              <DialogTrigger asChild>
                <DropdownMenuItem onSelect={(e) => e.preventDefault()}>
                  <RiDeleteBin2Line
                    className={`self-center rounded-full text-lg ${
                      listSelected == taskListId
                        ? "text-teal-600 hover:bg-teal-100"
                        : "text-primary-8 hover:bg-primary-4"
                    }`}
                  />
                  Delete
                </DropdownMenuItem>
              </DialogTrigger>
              <DialogContent>
                <DialogHeader>
                  <DialogTitle>Are you absolutely sure?</DialogTitle>
                  <DialogDescription>
                    This action cannot be undone. This will permanently delete
                    your TaskList.
                  </DialogDescription>
                </DialogHeader>
                <DialogFooter className="sm:justify-start">
                  <Button
                    type="button"
                    variant="destructive"
                    onClick={handleDelete}
                  >
                    {deleteIsLoading ? "Deleting..." : "Delete"}
                  </Button>
                  <Button
                    type="button"
                    variant="outline"
                    onClick={() => setIsDeleteDialogOpen(false)}
                  >
                    Cancel
                  </Button>
                </DialogFooter>
              </DialogContent>
            </Dialog>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </div>
  );
};

export default BorderBox;
