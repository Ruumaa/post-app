"use client";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { useForm } from "react-hook-form";

const FormPost = ({ submit, isEditing, initialValue, isLoadingSubmit }) => {
  const { register, handleSubmit } = useForm({ defaultValues: initialValue });
  const { data: dataTags, isLoading: isLoadingTags } = useQuery({
    queryKey: ["tags"],
    queryFn: async () => {
      const response = await axios.get("/api/tags");
      return response.data;
    },
  });
  return (
    <div>
      <form
        className="flex flex-col gap-6 items-center my-12"
        onSubmit={handleSubmit(submit)}
      >
        <label>Title</label>
        <input
          {...register("title", { required: true })}
          type="text"
          placeholder="post title..."
          className="input input-bordered w-full max-w-lg"
        />
        <label>Content</label>
        <textarea
          {...register("content", { required: true })}
          className="textarea textarea-bordered w-full max-w-lg"
          placeholder="post content"
        ></textarea>
        <label>Tags</label>

        {isLoadingTags ? (
          <span className="loading loading-dots loading-md"></span>
        ) : (
          <select
            {...register("tag", { required: true })}
            className="select select-bordered w-full max-w-lg"
            defaultValue={''}
          >
            <option disabled value=''>
              Select Tags
            </option>
            {dataTags?.map((item) => (
              <option key={item.id} value={item.id}>
                {item.name}
              </option>
            ))}
          </select>
        )}
        <button className="btn btn-accent w-full max-w-lg" type="submit">
          {isLoadingSubmit && <span className="loading loading-spinner"></span>}
          {isEditing
            ? isLoadingSubmit
              ? "Updating"
              : "Update"
            : isLoadingSubmit
            ? "Creating"
            : "Create"}
        </button>
      </form>
    </div>
  );
};

export default FormPost;
