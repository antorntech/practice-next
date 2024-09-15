export default async function Comments({ promise }) {
  const comments = await promise;
  return (
    <div className="mt-5">
      <h1 className="text-lg font-bold">Comments</h1>
      <ul>
        {comments.map((comment) => (
          <li key={comment.id} className="bg-slate-900 mb-2 p-2">
            ↪ {comment.body}
          </li>
        ))}
      </ul>
    </div>
  );
}
