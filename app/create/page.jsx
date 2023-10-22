"use client";
import { useMutation } from "@tanstack/react-query";
import BackButton from "../components/BackButton";
import FormPost from "../components/FormPost";
import axios from "axios";
import { useRouter } from "next/navigation";

const Page = () => {
  const router = useRouter();
  const handleSubmit = (data) => {
    createPost(data);
  };

  const { mutate: createPost, isLoading: isLoadingSubmit } = useMutation({
    mutationFn: (newPost) => {
      return axios.post("/api/posts/create", newPost);
    },
    onError: (error) => {
      console.error(error);
    },
    onSuccess: () => {
      router.push("/");
      router.refresh();
    },
  });

  return (
    <div>
      <BackButton />
      <div>
        <h1 className="text-center text-3xl font-bold my-4">Add New Post</h1>
      </div>
      <FormPost submit={handleSubmit} isEditing={false} isLoadingSubmit={isLoadingSubmit}/>
    </div>
  );
};

export default Page;
