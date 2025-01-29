import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { toast } from "@/hooks/use-toast";
import { useApi } from "@/hooks/useApi";
import { getBlogById } from "@/lib/actions/blog.actions";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

interface blogData {
  _id: string;
  userId: string;
  title: string;
  category: string;
  description: string;
  content: string;
  youtubeVideo: string;
  coverImage: string;
  likes: number;
  comments: [];
  createdAt: string;
  updatedAt: string;
  __v: number;
}

const BmiBlog = () => {
  const {
    data: bmiBlog,
    error,
    isLoading,
  } = useApi(`/api/blog/6798a4851e243111a8afca95`, {
    method: "GET",
    onError: (error) => {
      toast({
        variant: "destructive",
        title: "Error",
        description: "Error fetching Tasks",
      });
    },
    onSuccess: (data) => {
      console.log("success with blog fetch");
    },
  });

  if (isLoading) {
    return <div>Error loading</div>;
  }

  if (error) {
    return <div>Error loading</div>;
  }

  console.log("bmiBlog data", bmiBlog);

  return (
    <>
      <Card>
        <div className="relative h-[200px] w-full md:h-auto md:w-[40%]">
          <Image
            src={bmiBlog.coverImage}
            alt={`Featured image for article: ${bmiBlog.title}`}
            fill
            className="object-cover"
            loading="lazy"
          />
        </div>
        <div className="flex w-full flex-col justify-between p-4 md:w-[60%]">
          <div className="space-y-2">
            <p className="text-muted-foreground text-sm font-light md:text-base">
              {bmiBlog.category}
            </p>
            <h3 className="line-clamp-2 text-lg font-semibold md:text-xl">
              {bmiBlog.title}
            </h3>
            <p className="text-muted-foreground line-clamp-2 text-xs font-light md:text-sm">
              {bmiBlog.description}
            </p>
          </div>
          <div className="mt-4 flex justify-start md:mt-auto">
            <Link
              href={`/blogs/${bmiBlog._id}`}
              aria-label={`Read full article about ${bmiBlog.title}`}
            >
              <Button variant={"secondary"} size={"sm"}>
                Read Article
              </Button>
            </Link>
          </div>
        </div>
      </Card>
    </>
  );
};

export default BmiBlog;
