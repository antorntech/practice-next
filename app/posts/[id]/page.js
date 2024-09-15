import Comments from "@/app/components/Comments";
import getPostComments from "@/lib/getPostComments";
import getSinglePost from "@/lib/getSinglePost";
import React, { Suspense } from "react";

export async function generateMetadata({ params }) {
  const { id } = params;
  const post = await getSinglePost(id);
  return {
    title: post.title,
    description: post.body,
  };
}

const SinglePost = async ({ params }) => {
  const { id } = params;
  const postPromise = getSinglePost(id);
  const commentsPromise = getPostComments(id);

  const post = await postPromise;
  return (
    <main className="w-1/2">
      <div>
        <h1 className="text-2xl font-bold capitalize">{post.title}</h1>
        <p className="capitalize">{post.body}</p>
      </div>
      <Suspense fallback={<div>Loading...</div>}>
        <Comments promise={commentsPromise} />
      </Suspense>
    </main>
  );
};

export default SinglePost;
