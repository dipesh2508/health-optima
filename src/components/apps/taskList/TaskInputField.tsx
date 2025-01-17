import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { FaCirclePlus } from "react-icons/fa6";
import { Input } from "@/components/ui/input";
import TaskItem from "@/components/apps/taskList/TaskItem";
import { IoCalendarOutline } from "react-icons/io5";
import { Calendar } from "@/components/ui/calendar";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { getLists } from "@/lib/actions/todo.actions";
import { boolean, number, z } from "zod";
import Loading from "@/app/(root)/loading";
import { toast } from "@/hooks/use-toast";
import { useApi } from "@/hooks/useApi";
import { useUserDetails } from "@/hooks/useUserDetails";
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
import { cn } from "@/lib/utils";
import { format } from "date-fns";

const schema = z.object({
  newTaskName: z.string().min(1, {
    message: "Task name must be at least 1 character.",
  }),
  dueDate: z.date(),
});

type fieldType = z.infer<typeof schema>;

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

interface ListById {
  _id: string;
  userId: string;
  listName: string | null;
  taskIds: [];
  createdAt: string | null;
  updatedAt: string | null;
  __v: number;
}

interface List {
  list: ListById;
}

interface TaskPostData {
  taskName: string;
  dueTime: string;
  complete: boolean;
}

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

interface PostResponse {
  task: TaskGetData;
}
interface Tasks {
  tasks: TaskGetData[];
}

const completedItems = [
  { id: 0, title: "Grocerry", date: "15/10/24" },
  { id: 1, title: "Study bla bal blaljfoijiorjggeio", date: "15/10/24" },
  { id: 2, title: "Work", date: "20/10/24" },
  { id: 3, title: "Gym", date: "30/10/24" },
  { id: 4, title: "I", date: "25/10/24" },
];

const TaskInputField = ({
  listId,
  setListId,
}: {
  listId: string;
  setListId: (str: string) => void;
}) => {
  const { userId, isLoading: userLoading } = useUserDetails();

  const [tasksLocal, setTasksLocal] = useState<Tasks | null>();
  const [date, setDate] = React.useState<Date | undefined>(new Date());

  const [completed, setcompleted] = useState<string[]>([]);
  // const [isChecked, setIsChecked] = useState(false);

  const form = useForm<fieldType>({
    resolver: zodResolver(schema),
    defaultValues: {
      newTaskName: "",
      dueDate: date,
    },
  });

  const {
    data: userListNames,
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
      if (data) {
        console.log(data);

        setListId(data.lists.at(0)?._id || "");
      }
      toast({
        title: "Lists Fetched",
        description: "Lists fetched successfully",
      });
    },
  });

  const {
    data: listData,
    error: fetchErrorTasks,
    isLoading: isLoadingTasks,
  } = useApi<List>(`/api/taskList/${listId}`, {
    enabled: !!listId,
    dependencies: [listId],
    onError: (error) => {
      toast({
        variant: "destructive",
        title: "Error",
        description: "Error fetching list",
      });
    },
    onSuccess: (data) => {
      console.log("Get request to fetch the List selected in sidebar");
      toast({
        title: "List Fetched",
        description: "List fetched successfully",
      });
    },
  });

  const {
    data: taskData,
    error,
    isLoading,
    mutate,
  } = useApi<PostResponse>(`/api/taskList/${listId}/tasks`, {
    method: "POST",
    onSuccess: (data) => {
      console.log("list ka data aa gya", data);
      console.log("list mein task hai ki nhi", data.task);
      if (data?.task.taskName.trim() !== "") {
        setTasksLocal((prev) => {
          if (!prev) return null;
          return { ...prev, tasks: [...prev.tasks, data.task] };
        });
      }
      console.log("updated Array: ", tasksLocal);
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

  const {
    data: allTasks,
    error: allTasksError,
    isLoading: allTasksLoading,
  } = useApi<Tasks>(`/api/taskList/${listId}/tasks`, {
    method: "GET",
    enabled: !!listId,
    dependencies: [listId],
    onError: (error) => {
      toast({
        variant: "destructive",
        title: "Error",
        description: "Error fetching Tasks",
      });
    },
    onSuccess: (data) => {
      console.log("Get req to fetch the tasks of the list");

      if (data) {
        setTasksLocal(data);
      }
      toast({
        title: "Tasks Fetched",
        description: "Tasks fetched successfully",
      });
    },
  });

  if (userLoading || fetchIsLoading || allTasksLoading || isLoadingTasks) {
    return <Loading />;
  }

  if (fetchError || allTasksError || fetchErrorTasks) {
    return <div>Error loading list</div>;
  }

  async function addTaskApi(newTask: TaskPostData) {
    await mutate({
      body: {
        taskName: newTask.taskName,
        dueTime: newTask.dueTime,
        complete: newTask.complete,
      },
    });
  }

  function handletaskSubmit(data: fieldType) {
    const newTask = {
      taskName: data.newTaskName,
      dueTime: data === undefined ? "" : data.dueDate.toISOString(),
      complete: false,
    };

    addTaskApi(newTask);

    form.reset({
      newTaskName: "", // Reset task name to empty
      dueDate: new Date(), // Reset date to undefined or default value
    });
  }

  // function handleCheck(item:string, isChecked: boolean | 'indeterminate'){

  //   if(isChecked){//means was completed but now unchecking

  //     setcompleted(completed.filter((checked)=>{checked!==item}));
  //     setTasks([...tasks, item]);

  //   }else{//was not completed but now clicked so completed

  //     setTasks(tasks.filter((unchecked)=>{unchecked!==item}));
  //     setcompleted([...completed, item]);//item added to completed
  //   }

  // }
  // console.log(completed);
  return (
    <div className="col-span-3 px-28 py-11">
      <h2 className="mb-12 bg-gradient-to-b from-primary-9 to-primary-5 bg-clip-text font-serif text-4xl font-semibold text-transparent">
        {listData?.list.listName}
      </h2>

      <div className="min-h-96 bg-purple-50 px-16 pb-4 pt-10">
        <div className="mb-10 flex items-center gap-4 rounded-3xl bg-white p-3 shadow shadow-purple-300">
          <Form {...form}>
            <form
              onSubmit={form.handleSubmit(handletaskSubmit)}
              className="flex w-full items-center gap-4"
            >
              <FormField
                control={form.control}
                name="dueDate"
                render={({ field }) => (
                  <FormItem>
                    <Popover>
                      <PopoverTrigger asChild>
                        <FormControl>
                          <Button className="rounded-full border-none bg-primary-10 from-primary-6 to-teal-400 p-2 hover:bg-gradient-to-b">
                            <IoCalendarOutline className="text-xl text-white" />
                          </Button>
                        </FormControl>
                      </PopoverTrigger>
                      <PopoverContent className="w-auto">
                        <Calendar
                          mode="single"
                          selected={
                            field.value ? new Date(field.value) : undefined
                          }
                          onSelect={(selectedDate) => {
                            field.onChange(selectedDate);
                            setDate(selectedDate || undefined);
                          }}
                          className="rounded-md border"
                        />
                      </PopoverContent>
                    </Popover>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="newTaskName"
                render={({ field }) => (
                  <FormItem className="w-full">
                    <FormControl>
                      <Input
                        placeholder="New task"
                        className="w-full rounded-3xl border-none focus-visible:ring-primary-2"
                        id="task"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <Button
                variant={"ghost"}
                className="rounded-full p-0 hover:bg-transparent"
                type="submit"
              >
                <FaCirclePlus className="text-4xl text-primary-10" />
              </Button>
            </form>
          </Form>
        </div>

        <h3 className="my-3 text-xl font-medium text-primary-10">To Do</h3>
        <div className="flex flex-col gap-3">
          {tasksLocal?.tasks.map((it, index) => (
            <TaskItem
              key={it._id}
              it={it.taskName}
              completed={it.complete}
              date={new Date(it.dueTime).toLocaleDateString("en-GB")}
            />
          ))}
        </div>

        <h3 className="mb-3 mt-6 text-xl font-medium text-primary-10">
          Completed
        </h3>
        <div className="flex flex-col gap-3">
          {completedItems.map((it, index) => (
            <TaskItem
              key={index}
              it={it.title}
              completed={true}
              date={it.date}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default TaskInputField;
