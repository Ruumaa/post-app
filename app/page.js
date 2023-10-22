import PostCard from "./components/PostCard";
import prisma from "./lib/db";

async function getData() {
  const res = await prisma.post.findMany({
    select: { id: true, title: true, content: true, tag: true },
    orderBy: {
      createdAt: "desc",
    },
  });
  return res;
}

export default async function Home() {
  const posts = await getData();
  return (
    <main className="grid items-center md:grid-cols-2 lg:grid-cols-3 gap-4 mt-10">
      {posts.map((post) => (
        <PostCard key={post.id} post={post} />
      ))}
    </main>
  );
}
