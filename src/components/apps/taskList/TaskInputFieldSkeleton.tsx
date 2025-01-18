import { Skeleton } from "@/components/ui/skeleton";

function TaskInputFieldSkeleton() {
  return (
    <div className="sheet col-span-4 px-0 py-11 md:col-span-3 md:px-5 lg:px-28">
      <div className="mb-5 ml-4 flex items-center md:ml-0 md:hidden">
        <Skeleton className="h-10 w-10 rounded-md" />
      </div>

      <div className="mb-5 ml-4 md:ml-0">
        <Skeleton className="h-10 w-2/3 bg-gradient-to-b from-primary-6 to-primary-3" />
      </div>

      <div className="bg-purple-50 px-4 pb-4 pt-7 lg:px-16 lg:pt-10">
        {/* Task input form skeleton */}
        <div className="mb-7 flex items-center gap-4 rounded-3xl bg-white p-3 shadow shadow-purple-300 lg:mb-10">
          <Skeleton className="h-10 w-10 rounded-full bg-primary-6" />
          <Skeleton className="h-10 w-full rounded-3xl" />
          <Skeleton className="h-10 w-10 rounded-full" />
        </div>

        {/* To-Do and Completed Tasks Section Skeleton */}
        <div className="scrollbar scrollbar-none max-h-screen overflow-y-auto p-3">
          <Skeleton className="mb-3 h-6 w-1/4 bg-primary-6" />
          <div className="flex flex-col gap-3">
            {[...Array(3)].map((_, idx) => (
              <Skeleton
                key={idx}
                className="h-12 w-full rounded-lg bg-purple-100"
              />
            ))}
          </div>

          <Skeleton className="mb-3 mt-6 h-6 w-1/4 bg-primary-6" />
          <div className="flex flex-col gap-3">
            {[...Array(2)].map((_, idx) => (
              <Skeleton
                key={idx}
                className="h-12 w-full rounded-lg bg-purple-100"
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default TaskInputFieldSkeleton;
