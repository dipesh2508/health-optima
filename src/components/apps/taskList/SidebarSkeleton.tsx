import { Skeleton } from "@/components/ui/skeleton";

export function SidebarSkeleton() {
  return (
    <div className="flex flex-col gap-4 p-4 w-full max-w-sm">
      {/* Header Skeleton */}
      <div className="flex items-center justify-between">
        <Skeleton className="h-8 w-36" />
        <Skeleton className="h-8 w-8 rounded-full" />
      </div>

      {/* Search Bar Skeleton */}
      <Skeleton className="h-10 w-full" />

      {/* List Items Skeleton */}
      <div className="flex flex-col gap-2 mt-4">
        {[1, 2, 3, 4, 5].map((index) => (
          <Skeleton key={index} className="h-12 w-full" />
        ))}
      </div>

      {/* Add List Button Skeleton */}
      <Skeleton className="h-10 w-full mt-auto" />
    </div>
  );
}