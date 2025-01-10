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
import Loading from "@/app/(root)/loading";

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

const Sidebar = () => {
  const [open, setOpen] = useState(false);
  const [url, setUrl] = useState("");

  const form = useForm<fieldType>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      newListTitle: "",
    },
  });

  const userDetails = useUserDetails();
  const { error, isLoading, mutate } = useApi("/api/taskList", {
    method: "POST",
    onSuccess: (data) => {
      console.log("New List created successfully", data);
    },
    onError: (error) => {
      console.error("Failed to create new list", error);
    },
  });

  function onSubmit(data: fieldType) {
    console.log(data);
    mutate({
      body: { userId: userDetails.userId, listName: data.newListTitle },
    });
    setOpen(false);
  }

  useEffect(() => {
    if (isLoading) {
      <Loading />;
    } else {
      setUrl(`/api/taskList?userId=${userDetails.userId}`);
    }
  }, [isLoading, userDetails.userId]);

  const {
    data: listNames,
    error: fetchError,
    isLoading: FetchisLoading,
  } = useApi(url);
  // if (fetchError) return <p>Error: {fetchError.message}</p>;
  console.log(listNames);
  const listNamesString = JSON.parse(JSON.stringify(listNames, null, 2));
  console.log(listNamesString);

  return (
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
              <RxHamburgerMenu className="text-lg text-primary-10 group-hover:text-white" />
            </Button>
          </CollapsibleTrigger>
        </div>
        <CollapsibleContent>
          <div className="flex flex-col gap-1">
            {!listNamesString?.lists?.length ? (
              <BorderBox key={0}>No List created</BorderBox>
            ) : (
              listNamesString.lists.map((it: TaskList) => {
                return <BorderBox key={it._id}>{it.listName}</BorderBox>;
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
