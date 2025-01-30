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
import { boolean, number, z } from "zod";
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
  FormMessage,
} from "@/components/ui/form";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import Sidebar from "./Sidebar";
import TaskInputFieldSkeleton from "./TaskInputFieldSkeleton";
import taskListImg from "@/assets/svgs/business-tasklist.svg";
import Image from "next/image";
import { FaArrowRight } from "react-icons/fa";

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
      if (data?.task.taskName.trim() !== "") {
        setTasksLocal((prev) => {
          if (!prev) return null;
          return { ...prev, tasks: [...prev.tasks, data.task] };
        });
      }
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
    return <TaskInputFieldSkeleton />;
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

  const toggleComplete = (id: string) => {
    setTasksLocal((prevTasks) => {
      if (!prevTasks) return null;
      return {
        ...prevTasks,
        tasks: prevTasks?.tasks.map((todo) =>
          todo._id === id ? { ...todo, complete: !todo.complete } : todo,
        ),
      };
    });
  };

  const deleteTask = (id: string) => {
    setTasksLocal((prevTasks) => {
      if (!prevTasks) return null;
      return {
        ...prevTasks,
        tasks: prevTasks.tasks.filter((todo) => todo._id !== id),
      };
    });
  };

  const updateTask = (todo: TaskGetData) => {
    setTasksLocal((prevTasks) => {
      if (!prevTasks) return null;
      return {
        ...prevTasks,
        tasks: prevTasks.tasks.map((item) =>
          item._id === todo._id
            ? { ...item, taskName: todo.taskName, dueTime: todo.dueTime }
            : item,
        ),
      };
    });
  };
  if (listId === "")
    return (
      <div className="col-span-4 bg-purple-50 px-4 py-11 pb-4 pt-7 md:col-span-3 md:px-5 lg:px-16 lg:pt-10">
        <Image src={taskListImg} alt="todoImg" className="m-auto" />
        <h3 className="mb-2 mt-1 text-center text-3xl text-primary-3">
          Select/Create a List
        </h3>
      </div>
    );
  return (
    <div className="sheet col-span-4 px-0 py-11 md:col-span-3 md:px-5 lg:px-28">
      <Sheet>
        <SheetTrigger asChild>
          <Button
            variant="outline"
            className="mb-3 ml-4 items-center gap-2 text-primary-8 md:ml-0 md:hidden"
          >
            My Lists
            <FaArrowRight className="text-lg text-primary-7 group-hover:text-white" />
          </Button>
        </SheetTrigger>
        <SheetContent className="h-full bg-zinc-50 px-0">
          <Sidebar setListId={setListId} />
        </SheetContent>
      </Sheet>

      <h2 className="mb-5 ml-4 bg-gradient-to-b from-primary-9 to-primary-5 bg-clip-text font-serif text-3xl font-semibold text-transparent md:ml-0 md:text-4xl lg:mb-8">
        {listData?.list.listName}
      </h2>

      <div className="bg-purple-50 px-4 pb-4 pt-7 lg:px-16 lg:pt-10">
        <div className="mb-7 flex items-center gap-4 rounded-3xl bg-white p-3 shadow shadow-purple-300 lg:mb-10">
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

        {tasksLocal?.tasks.length == 0 ? (
          <div className="flex flex-col items-center justify-center">
            <Image src={taskListImg} alt="todoImg" className="m-auto" />
            <h3 className="mb-2 text-4xl text-primary-3">No Tasks</h3>
          </div>
        ) : (
          <div className="max-h-screen overflow-y-auto p-3 scrollbar scrollbar-none">
            <h3 className="my-3 text-xl font-medium text-primary-10">To Do</h3>

            {tasksLocal?.tasks.some((it) => !it.complete) ? (
              <div className="flex flex-col gap-3">
                {tasksLocal?.tasks
                  .filter((it) => !it.complete)
                  .map((it) => (
                    <TaskItem
                      key={it._id}
                      task={it}
                      toggleComplete={toggleComplete}
                      deleteTask={deleteTask}
                      updateTask={updateTask}
                    />
                  ))}
              </div>
            ) : (
              <div className="flex flex-col items-center justify-center">
                <h3 className="mb-2 text-4xl text-primary-3">No Tasks</h3>
              </div>
            )}

            {tasksLocal?.tasks.some((it) => it.complete) ? (
              <h3 className="mb-3 mt-6 text-xl font-medium text-primary-10">
                Completed
              </h3>
            ) : (
              <div></div>
            )}

            <div className="flex flex-col gap-3">
              {tasksLocal?.tasks
                .filter((it) => it.complete)
                .map((it) => (
                  <TaskItem
                    key={it._id}
                    task={it}
                    toggleComplete={toggleComplete}
                    deleteTask={deleteTask}
                    updateTask={updateTask}
                  />
                ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default TaskInputField;
