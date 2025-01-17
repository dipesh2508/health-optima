import { useState } from "react";
import { Button } from "@/components/ui/button";
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
import clsx from "clsx";
import { useApi } from "@/hooks/useApi";
import { toast } from "@/hooks/use-toast";

interface BorderBoxProps {
  children: React.ReactNode;
  taskListId: string;
  setListId: (id: string) => void;
  setListSelected: (selected: string) => void;
  listSelected: string;
  delList: (id: string) => void;
  updateList: (id: string, newTitle: string) => void;
  userId: string;
}

export default function BorderBox({
  children,
  taskListId,
  setListId,
  setListSelected,
  listSelected,
  delList,
  updateList,
  userId,
}: BorderBoxProps) {
  const [isEditOpen, setIsEditOpen] = useState(false);
  const [isDeleteOpen, setIsDeleteOpen] = useState(false);
  const [editValue, setEditValue] = useState("");

  const {
    mutate: deleteList,
    error: deleteError,
    isLoading: deleteLoading,
  } = useApi<void>(`/api/taskList/${taskListId}`, {
    method: "DELETE",
    enabled: false,
    onSuccess: () => {
      toast({
        title: "Deleted",
        description: "List has been deleted",
      });
    },
    onError: (error) => {
      toast({
        title: "Error",
        description: "Failed to delete task list",
        variant: "destructive",
      });
    },
  });

  const {
    data,
    mutate: updateListName,
    error: updateError,
    isLoading: updateLoading,
  } = useApi<void>(`/api/taskList/${taskListId}`, {
    method: "PUT",
    enabled: false,
    onSuccess: () => {
      toast({
        title: "Updated",
        description: "List has been updated",
      });
    },
    onError: (error) => {
      toast({
        title: "Error",
        description: "Failed to update task list",
        variant: "destructive",
      });
    },
  });

  const handleBoxClick = (e: React.MouseEvent) => {
    setListId(taskListId);
    setListSelected(taskListId);
  };

  const handleDropdownClick = (e: React.MouseEvent) => {
    e.stopPropagation();
  };

  const handleEditClick = () => {
    setEditValue(children?.toString() || "");
    setIsEditOpen(true);
  };

  const handleDeleteClick = () => {
    setIsDeleteOpen(true);
  };

  const handleEdit = () => {
    updateListName({
      body: {
        userId: userId,
        listName: editValue,
      },
    });

    if (data) {
      updateList(taskListId, editValue);
    }
    setIsEditOpen(false);
  };

  const handleDelete = () => {
    deleteList();
    delList(taskListId);
    setIsDeleteOpen(false);
  };

  return (
    <div
      className={clsx(
        "flex cursor-pointer items-center rounded-md border border-purple-400 p-2 text-sm font-medium text-primary-9 hover:border-none",
        {
          "border-teal-400 from-primary-5 to-teal-200 text-teal-800 hover:bg-gradient-to-r hover:text-white":
            listSelected === taskListId,
          "from-primary-5 to-primary-2 hover:bg-gradient-to-r hover:text-white":
            listSelected !== taskListId,
        },
      )}
      onClick={handleBoxClick}
    >
      <div className="flex-1 text-left">{children}</div>

      <div onClick={handleDropdownClick}>
        <DropdownMenu modal={false}>
          <DropdownMenuTrigger asChild>
            <Button
              variant="ghost"
              size="icon"
              className={clsx("h-8 w-8 rounded-full transition-colors", {
                "hover:bg-teal-100": listSelected === taskListId,
                "hover:bg-primary-1": listSelected !== taskListId,
              })}
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
            <DialogTitle>Edit List Name</DialogTitle>
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
          <p>Are you sure you want to delete this list?</p>
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
  );
}
