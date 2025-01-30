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

interface BlogData {
  blog: {
    _id: string;
    title: string;
    description: string;
    category: string;
    coverImage: string;
  };
}

const BmiBlog = () => {
  const {
    data: bmiBlog,
    error,
    isLoading,
  } = useApi<BlogData>(`/api/blog/6798a4851e243111a8afca95`, {
    method: "GET",
    onError: (error) => {
      toast({
        variant: "destructive",
        title: "Error",
        description: "Failed to load blog content",
      });
    },
    onSuccess: (data) => {
      console.log("Blog fetched successfully");
    },
  });

  if (isLoading) {
    return (
      <Card className="flex animate-pulse flex-col overflow-hidden md:flex-row">
        <div className="h-[240px] w-full bg-gray-200 md:w-[40%]" />
        <div className="w-full space-y-4 p-6 md:w-[60%]">
          <div className="h-4 w-1/4 rounded bg-gray-200" />
          <div className="h-6 w-3/4 rounded bg-gray-200" />
          <div className="h-20 w-full rounded bg-gray-200" />
          <div className="h-8 w-24 rounded bg-gray-200" />
        </div>
      </Card>
    );
  }

  if (error || !bmiBlog?.blog) {
    return (
      <Card className="mb-8 p-6">
        <div className="space-y-4 text-center">
          <p className="font-medium text-red-500">
            Failed to load blog content
          </p>
          <Button onClick={() => window.location.reload()} variant="outline">
            Retry
          </Button>
        </div>
      </Card>
    );
  }

  return (
    <Card className="mx-2 mb-10 flex flex-col overflow-hidden transition-shadow duration-300 hover:shadow-lg md:mx-0 md:flex-row">
      <div className="relative w-full overflow-hidden md:w-[45%] lg:h-[240px]">
        <Image
          src={bmiBlog.blog.coverImage}
          alt={`Featured image for article: ${bmiBlog.blog.title}`}
          fill
          className="object-cover transition-transform duration-300 hover:scale-105"
          loading="lazy"
        />
      </div>
      <div className="flex w-full flex-col justify-between space-y-4 p-6 md:w-[60%]">
        <div className="space-y-3">
          <p className="text-muted-foreground text-sm font-medium uppercase tracking-wide">
            {bmiBlog.blog.category}
          </p>
          <h3 className="text-xl font-bold leading-tight tracking-tight md:text-2xl">
            {bmiBlog.blog.title}
          </h3>
          <p className="text-muted-foreground text-sm leading-relaxed">
            {bmiBlog.blog.description}
          </p>
        </div>
        <div className="pt-4">
          <Link
            href={`/blogs/${bmiBlog.blog._id}`}
            aria-label={`Read full article about ${bmiBlog.blog.title}`}
          >
            <Button
              variant="secondary"
              size="sm"
              className="transition-transform duration-200 hover:translate-x-1"
            >
              Read Article
            </Button>
          </Link>
        </div>
      </div>
    </Card>
  );
};

export default BmiBlog;
