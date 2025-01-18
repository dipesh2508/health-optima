import { Skeleton } from "@/components/ui/skeleton";

export function SidebarSkeleton() {
  return (
    <div className="flex w-full max-w-sm flex-col gap-4 p-4">
      {/* Header Skeleton */}
      <div className="flex items-center justify-between bg-primary-4">
        <Skeleton className="h-8 w-36" />
        <Skeleton className="h-8 w-8 rounded-full" />
      </div>

      {/* Search Bar Skeleton */}
      <Skeleton className="h-10 w-full" />

      {/* List Items Skeleton */}
      <div className="mt-4 flex flex-col gap-2">
        {[1, 2, 3, 4, 5].map((index) => (
          <Skeleton key={index} className="h-12 w-full bg-primary-3" />
        ))}
      </div>

      {/* Add List Button Skeleton */}
      <Skeleton className="mt-auto h-10 w-full bg-primary-3" />
    </div>
  );
}
