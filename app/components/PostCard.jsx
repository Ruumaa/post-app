import Link from "next/link";
import React from "react";

const PostCard = ({post}) => {
  const {id,title, content, tag} = post
  return (
    <div className="card w-full bg-base-100 shadow-xl border">
      <div className="card-body">
        <h2 className="card-title">{title}</h2>
        <p className="truncate">{content}</p>
        <div className="card-actions justify-end">
        <div className="badge badge-neutral">{tag.name}</div>
         <Link href={`/blog/${id}`} className="hover:underline">Read more...</Link>
        </div>
      </div>
    </div>
  );
};

export default PostCard;
