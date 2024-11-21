import React from 'react'
import { getAllBlogs } from '@/lib/actions/blog.actions'
import Image from 'next/image'

const Page = async () => {
  const blogs = await getAllBlogs()
  const firstBlog = blogs[0]

  if (!firstBlog) {
    return <div>No blogs found</div>
  }

  return (
    <article className="max-w-2xl mx-auto p-6 space-y-6">
      <header className="space-y-4">
        <h1 className="text-3xl font-bold">{firstBlog.title}</h1>
        <div className="flex gap-4 text-gray-600">
          <span>By: {firstBlog.userId.name}</span>
          <span>Category: {firstBlog.category}</span>
          <span>Likes: {firstBlog.likes}</span>
        </div>
      </header>

      <Image 
        src={firstBlog.coverImage} 
        alt={firstBlog.title}
        className="w-full h-[400px] rounded-lg object-cover"
        width={400}
        height={300}
      />

      <div className="space-y-4">
        <p className="text-lg font-semibold">{firstBlog.description}</p>
        <div className="prose max-w-none">{firstBlog.content}</div>
      </div>

      <footer className="text-sm text-gray-500">
        <p>Comments: {firstBlog.comments.length}</p>
        <p>Created: {new Date(firstBlog.createdAt).toLocaleDateString()}</p>
        <p>Last Updated: {new Date(firstBlog.updatedAt).toLocaleDateString()}</p>
      </footer>
    </article>
  )
}

export default Page
