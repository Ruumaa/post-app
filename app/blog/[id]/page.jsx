import BackButton from "@/app/components/BackButton";
import ButtonActions from "@/app/components/ButtonActions";
import prisma from "@/app/lib/db";
import React from "react";

const Details = async ({ params }) => {
  const { id } = params;
  const res = await prisma.post.findUnique({
    where: { id: id },
    include: { tag: true },
  });
  return (
    <div>
      <BackButton />
      <div className="mb-8">
        <div className="text-2xl font-bold my-4">
          Details {res?.title}
          <span className="badge badge-neutral">{res?.tag.name}</span>
        </div>
        <p className="text-slate-700">{res?.content}</p>
      </div>
      <ButtonActions id={id} />
    </div>
  );
};

export default Details;
