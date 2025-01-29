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
  }
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
      <Card className="animate-pulse flex flex-col md:flex-row overflow-hidden">
        <div className="h-[240px] bg-gray-200 w-full md:w-[40%]" />
        <div className="p-6 space-y-4 w-full md:w-[60%]">
          <div className="h-4 bg-gray-200 rounded w-1/4" />
          <div className="h-6 bg-gray-200 rounded w-3/4" />
          <div className="h-20 bg-gray-200 rounded w-full" />
          <div className="h-8 bg-gray-200 rounded w-24" />
        </div>
      </Card>
    );
  }

  if (error || !bmiBlog?.blog) {
    return (
      <Card className="p-6 mb-8">
        <div className="text-center space-y-4">
          <p className="text-red-500 font-medium">Failed to load blog content</p>
          <Button 
            onClick={() => window.location.reload()} 
            variant="outline"
          >
            Retry
          </Button>
        </div>
      </Card>
    );
  }

  return (
    <Card className="flex flex-col md:flex-row overflow-hidden hover:shadow-lg transition-shadow duration-300 mb-8">
      <div className="relative h-[240px] w-full md:w-[40%] overflow-hidden">
        <Image
          src={bmiBlog.blog.coverImage}
          alt={`Featured image for article: ${bmiBlog.blog.title}`}
          fill
          className="object-cover transition-transform duration-300 hover:scale-105"
          loading="lazy"
        />
      </div>
      <div className="flex w-full md:w-[60%] flex-col justify-between p-6 space-y-4">
        <div className="space-y-3">
          <p className="text-sm text-muted-foreground font-medium uppercase tracking-wide">
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
              className="hover:translate-x-1 transition-transform duration-200"
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
