import React, { useEffect, useState } from "react";
import { Label } from "@/components/ui/label";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
  DialogFooter,
} from "@/components/ui/dialog";
import { GiHamburgerMenu } from "react-icons/gi";
import { FaPlus } from "react-icons/fa6";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible";
import { RxHamburgerMenu } from "react-icons/rx";
import BorderBox from "@/components/shared/BorderBox";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { useApi } from "@/hooks/useApi";
import { useUserDetails } from "@/hooks/useUserDetails";
import { useToast } from "@/hooks/use-toast";
import { SidebarSkeleton } from "./SidebarSkeleton";

const formSchema = z.object({
  newListTitle: z.string().min(1, {
    message: "Title must be at least 1 character.",
  }),
});
type fieldType = z.infer<typeof formSchema>;

interface ListNames {
  userid: string;
  listname: string;
}

interface TaskList {
  _id: string;
  userId: string;
  listName: string | null;
  taskIds: [];
  createdAt: string | null;
  updatedAt: string | null;
  __v: number;
}

interface TaskListData {
  lists: TaskList[];
}

const Sidebar = () => {
  const [open, setOpen] = useState(false);
  const {toast} = useToast();

  const form = useForm<fieldType>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      newListTitle: "",
    },
  });

  const { userId, isLoading: userLoading } = useUserDetails();

  const {
    data: newList,
    error,
    isLoading,
    mutate,
  } = useApi("/api/taskList", {
    method: "POST",
    onSuccess: (data) => {
      toast({
        title: "List Created",
        description: "Your new list has been created successfully",
      });
    },
    onError: (error) => {
      toast({
        variant: "destructive",
        title: "Error",
        description: "Error creating new list",
      });
    },
  });

  async function onSubmit(data: fieldType) {
    await mutate({
      body: { userId: userId, listName: data.newListTitle },
    });
    setOpen(false);
  }

  const {
    data: listNames,
    error: fetchError,
    isLoading: fetchIsLoading,
  } = useApi<TaskListData>(`/api/taskList?userId=${userId}`, {
    enabled: !!userId,
    dependencies: [userId],
    onError: (error) => {
      toast({
        variant: "destructive",
        title: "Error",
        description: "Error fetching lists",
      });
    },
    onSuccess: (data) => {
      toast({
        title: "Lists Fetched",
        description: "Lists fetched successfully",
      });
    }
  });

  if (userLoading || fetchIsLoading) {
    return <SidebarSkeleton />;
  }

  if (fetchError || error) {
    return <div>Error loading lists</div>;
  }

  return (
    <div className="sidebar col-span-1 flex flex-col justify-between border-r-2 border-primary-2 bg-white p-6">
      <Collapsible defaultOpen={true}>
        <div className="mb-3 mt-4 flex items-center justify-between space-x-4 bg-primary-0 p-2 px-4">
          <h4 className="text-lg font-medium text-primary-10">My Lists</h4>
          <CollapsibleTrigger asChild>
            <Button
              variant="ghost"
              size="sm"
              className="group hover:bg-primary-4"
            >
              <RxHamburgerMenu className="text-lg text-primary-10 group-hover:text-white" />
            </Button>
          </CollapsibleTrigger>
        </div>
        <CollapsibleContent>
          <div className="flex flex-col gap-1">
            {!listNames?.lists.length ? (
              <BorderBox key={0}>No List created</BorderBox>
            ) : (
              listNames.lists.map((it: TaskList) => {
                return (
                  <BorderBox key={it._id}>{it.listName as string}</BorderBox>
                );
              })
            )}
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
          <DialogDescription></DialogDescription>

          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)}>
              <FormField
                control={form.control}
                name="newListTitle"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>New List Title</FormLabel>
                    <FormControl>
                      <Input placeholder="New List" {...field} />
                    </FormControl>
                    <FormDescription>
                      Let&apos;s plan a new list!
                    </FormDescription>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <DialogFooter>
                <Button type="submit">
                  {isLoading ? "Creating..." : "Create"}
                </Button>
              </DialogFooter>
            </form>
          </Form>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default Sidebar;
