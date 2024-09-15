import React from "react";

const SingleBlog = ({ params }) => {
  const { id } = params;
  return <div>SingleBlog {id}</div>;
};

export default SingleBlog;
