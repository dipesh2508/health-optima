"use client";

import React, { useState, useEffect } from "react";
import { searchAndSortBlogs } from "@/lib/actions/blog.actions";
import { Spinner } from "@/components/ui/spinner";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardFooter,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";
import MotionDiv from "@/components/animations/MotionDiv";
import Pagination from "@/components/shared/Pagination";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useSearchParams } from "next/navigation";
import { truncateText } from "@/app/(root)/blogs/page";
import { FaSearch } from "react-icons/fa";

const AllBlogs = () => {
  const searchParams = useSearchParams();
  const [blogs, setBlogs] = useState([]);
  const [loading, setLoading] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [sortOrder, setSortOrder] = useState<"asc" | "desc">("desc");
  const [currentPage, setCurrentPage] = useState(
    Number(searchParams.get("page")) || 1,
  );
  const [totalPages, setTotalPages] = useState(1);

  useEffect(() => {
    fetchBlogs();
  }, [searchQuery, sortOrder, currentPage]);

  const fetchBlogs = async () => {
    setLoading(true);
    try {
      const {
        blogs,
        totalPages: pages,
        currentPage: page,
      } = await searchAndSortBlogs(searchQuery, sortOrder, currentPage);
      setBlogs(blogs);
      setTotalPages(pages);
      setCurrentPage(page);
    } catch (error) {
      console.error("Error fetching blogs:", error);
    } finally {
      setLoading(false);
    }
  };

  const handlePageChange = (page: number) => {
    setCurrentPage(page);

    const params = new URLSearchParams(searchParams);
    params.set("page", page.toString());
  };

  return (
    <section className="mx-8 my-16 px-2 md:mx-28">
      <div className="mb-6 flex flex-col md:flex-row gap-8 md:gap-0 items-center justify-between">
        <h1 className="font-serif text-2xl font-semibold text-primary-10 md:text-4xl">
          All Blogs
        </h1>
        <div className="flex flex-col w-full md:w-auto md:flex-row items-center gap-4">
          <Select
            value={sortOrder}
            onValueChange={(value: "asc" | "desc") => setSortOrder(value)}
          >
            <SelectTrigger className="w-full md:w-[140px]">
              <SelectValue placeholder="Sort by" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="desc">Newest First</SelectItem>
              <SelectItem value="asc">Oldest First</SelectItem>
            </SelectContent>
          </Select>
          <div className="relative w-full md:w-[200px]">
            <FaSearch className="absolute left-2 top-1/2 h-4 w-4 -translate-y-1/2 text-gray-500" />
            <Input
              type="text"
              placeholder="Search blogs..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="pl-8"
            />
          </div>
        </div>
      </div>

      {loading ? (
        <div className="flex min-h-[200px] items-center justify-center">
          <Spinner size="large" />
        </div>
      ) : (
        <>
          {blogs.length === 0 ? (
            <div className="flex min-h-[200px] items-center justify-center">
              <p>No results found.</p>
            </div>
          ) : (
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {blogs.map((item: any, index: number) => (
                <MotionDiv
                  key={item._id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="h-full"
                >
                  <Card className="overflow-hidden transition-all hover:shadow-lg">
                    <div className="relative aspect-video w-full overflow-hidden">
                      <Image
                        src={item.coverImage}
                        alt={item.title}
                        fill
                        className="object-cover transition-transform duration-300 hover:scale-105"
                      />
                    </div>

                    <CardHeader>
                      <div className="flex items-center gap-2">
                        <span className="rounded-full bg-slate-100 px-3 py-1 text-xs font-medium text-slate-800">
                          {item.category}
                        </span>
                      </div>
                      <CardTitle className="line-clamp-2 font-serif text-xl">
                        {item.title}
                      </CardTitle>
                      <CardDescription className="line-clamp-2">
                        {truncateText(item.description, 150)}
                      </CardDescription>
                    </CardHeader>

                    <CardFooter className="flex justify-between">
                      <div className="flex items-center gap-2">
                        {item.userId?.profileImage && (
                          <Image
                            src={item.userId.profileImage}
                            alt={item.userId.name || "author"}
                            width={24}
                            height={24}
                            className="rounded-full"
                          />
                        )}
                        <span className="text-sm text-slate-600">
                          {item.userId?.name || "Anonymous"}
                        </span>
                      </div>
                      <Link href={`/blogs/${item._id}`}>
                        <Button variant="secondary" size="sm">
                          Read More
                        </Button>
                      </Link>
                    </CardFooter>
                  </Card>
                </MotionDiv>
              ))}
            </div>
          )}
          <div className="mt-8 flex justify-center">
            <Pagination
              totalPages={totalPages}
              currentPage={currentPage}
              onPageChange={handlePageChange}
            />
          </div>
        </>
      )}
    </section>
  );
};

export default AllBlogs;
