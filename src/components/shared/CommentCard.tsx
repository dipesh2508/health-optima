'use client'

import React, { useState } from "react";
import MotionDiv from "../animations/MotionDiv";
import { Heart } from "lucide-react";
import { likeComment } from "@/lib/actions/blog.actions";
import Image from "next/image";
import { formatDistanceToNow, format, isYesterday } from 'date-fns';

const CommentCard = ({
  id,
  profileImage,
  name,
  createdAt,
  content,
  likes,
  index,
  userId,
}: {
  id: string;
  profileImage: string;
  name: string;
  createdAt: string;
  content: string;
  likes: string[];
  index: number;
  userId?: string;
}) => {
  const [isLoading, setIsLoading] = useState(false);
  const [localLikes, setLocalLikes] = useState(likes);

  const formatTimeAgo = (date: string) => {
    const commentDate = new Date(date);
    const now = new Date();
    const diffInMinutes = Math.floor((now.getTime() - commentDate.getTime()) / (1000 * 60));
    
    if (diffInMinutes < 1) {
      return 'just now';
    }
    
    if (diffInMinutes < 60) {
      return `${diffInMinutes} ${diffInMinutes === 1 ? 'minute' : 'minutes'} ago`;
    }
    
    if (diffInMinutes < 24 * 60) {
      const hours = Math.floor(diffInMinutes / 60);
      return `${hours} ${hours === 1 ? 'hour' : 'hours'} ago`;
    }
    
    if (isYesterday(commentDate)) {
      return 'yesterday';
    }
    
    // If more than 24 hours ago, show the full date
    return format(commentDate, 'MMMM d, yyyy');
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!userId || isLoading) return;
    
    try {
      setIsLoading(true);
      await likeComment(id, userId);
      
      // Optimistically update likes
      const hasLiked = localLikes.includes(userId);
      if (hasLiked) {
        setLocalLikes(prev => prev.filter(id => id !== userId));
      } else {
        setLocalLikes(prev => [...prev, userId]);
      }
    } catch (error) {
      console.error('Error liking comment:', error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <MotionDiv
      key={id}
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="rounded-lg border border-gray-100 bg-white p-6 shadow-sm transition-shadow duration-200 hover:shadow-md"
    >
      <div className="flex items-start gap-4">
        <div className="flex-shrink-0">
          <Image
            src={profileImage}
            alt={name}
            width={40}
            height={40}
            className="rounded-full border-2 border-primary-5"
          />
        </div>
        <div className="flex-grow">
          <div className="mb-2 flex items-center justify-between">
            <h4 className="font-semibold text-primary-9">{name}</h4>
            <span className="text-xs text-gray-500" suppressHydrationWarning>
              {formatTimeAgo(createdAt)}
            </span>
          </div>
          <div className="flex items-start justify-between gap-4">
            <p className="text-sm leading-relaxed text-gray-700">{content}</p>
            <div className="flex-shrink-0">
              <form onSubmit={handleSubmit}>
                <button
                  type="submit"
                  disabled={!userId || isLoading}
                  className={`flex items-center gap-1 text-gray-500 transition-colors hover:text-red-500 disabled:opacity-50 disabled:hover:text-gray-500 ${
                    isLoading ? 'cursor-not-allowed opacity-50' : ''
                  }`}
                >
                  <Heart 
                    className={`h-4 w-4 ${
                      localLikes.includes(userId || '') 
                        ? 'fill-red-500 text-red-500' 
                        : ''
                    } ${isLoading ? 'animate-pulse' : ''}`}
                  />
                  <span className="text-sm">{localLikes.length || 0}</span>
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </MotionDiv>
  );
};

export default CommentCard;
