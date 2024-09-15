import getAllPost from "@/lib/getAllPost";
import Link from "next/link";
import React from "react";

export const metadata = {
  title: "Posts",
  description: "This is posts page",
};

const Posts = async () => {
  const posts = await getAllPost();
  return (
    <main>
      <div>
        <h1 className="text-2xl font-bold">Posts</h1>
        <p>All posts are here.</p>
      </div>
      <div className="grid gap-5 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mt-3">
        {posts.map((item) => (
          <div
            key={item.id}
            className="p-5 bg-gray-700 border-2 border-slate-600 rounded-md"
          >
            <h1 className="text-lg font-bold">{item.title.slice(0, 30)}</h1>
            <p className="mb-3">{item.body.slice(0, 80)}...</p>
            <Link
              className="px-4 py-2 bg-slate-800 text-white rounded-md hover:bg-slate-700 transition-all duration-500"
              href={`/posts/${item.id}`}
            >
              Read more
            </Link>
          </div>
        ))}
      </div>
    </main>
  );
};

export default Posts;
