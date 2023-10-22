"use client";
import BackButton from "@/app/components/BackButton";
import FormPost from "@/app/components/FormPost";
import { useMutation, useQuery } from "@tanstack/react-query";
import axios from "axios";
import { useRouter } from "next/navigation";

const EditPage = ({ params }) => {
  const { id } = params;
  const router = useRouter();
  const { data: dataPost, isLoading } = useQuery({
    queryKey: ["posts", id],
    queryFn: async () => {
      const response = await axios.get(`/api/posts/${id}`);
      return response.data;
    },
  });
  const { mutate: updatePost, isLoading: isLoadingSubmit } = useMutation({
    mutationFn: (newPost) => {
      return axios.patch(`/api/posts/${id}`, newPost);
    },
    onError: (error) => {
      console.error(error);
    },
    onSuccess: () => {
      router.push("/");
      router.refresh();
    },
  });

  const handleEdit = (data) => {
    updatePost(data);
  };

  if (isLoading) {
    return (
      <div className="flex justify-center items-center h-screen">
        <span className="loading loading-spinner loading-lg"></span>
      </div>
    );
  }

  return (
    <div>
      <BackButton />
      <div>
        <h1 className="text-center text-3xl font-bold my-4">Edit Post</h1>
      </div>
      <FormPost
        submit={handleEdit}
        isEditing={true}
        initialValue={dataPost}
        isLoadingSubmit={isLoading}
      />
    </div>
  );
};

export default EditPage;
