import Image from "next/image";
import Link from "next/link";
import React from "react";
import blogThumb from "@/app/assets/blog.jpg";

export const metadata = {
  title: "Blogs",
  description: "This is blogs page",
};

const Blogs = () => {
  // Sample blog data
  const blogs = [
    {
      id: 1,
      name: "My First Blog",
      description: "This is my first blog",
      banner: blogThumb,
    },
    {
      id: 2,
      name: "My Second Blog",
      description: "This is my second blog",
      banner: blogThumb,
    },
    {
      id: 3,
      name: "My Third Blog",
      description: "This is my third blog",
      banner: blogThumb,
    },
  ];

  return (
    <main>
      {/* Blog header */}
      <div className="mb-3">
        <h1 className="text-2xl font-bold">Blogs</h1>
        <p>All blogs are here.</p>
      </div>

      {/* Blog grid */}
      <div className="grid gap-5 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        {blogs.map((item) => (
          <div
            key={item.id}
            className="p-5 bg-gray-700 border-2 border-slate-600 rounded-md"
          >
            {/* Blog banner image */}
            <Image
              src={item.banner}
              alt={item.name}
              quality={100}
              placeholder="blur"
            />

            {/* Blog title and description */}
            <h1 className="text-2xl font-bold mt-3">{item.name}</h1>
            <p className="mb-3">{item.description}</p>

            {/* Read more link */}
            <Link
              href={`/blogs/${item.id}`}
              className="px-4 py-2 bg-slate-800 text-white rounded-md hover:bg-slate-700 transition-all duration-500"
            >
              Read More
            </Link>
          </div>
        ))}
      </div>
    </main>
  );
};

export default Blogs;
