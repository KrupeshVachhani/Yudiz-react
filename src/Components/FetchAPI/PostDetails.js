import React, { useEffect, useState } from "react";
import { axiosInstance } from "../Axios-Interceptor/AxiosPlaceHolderUser";
import {  useNavigate, useParams } from "react-router-dom";
import { RefreshCw } from "lucide-react";

const PostDetail = () => {
  const { id } = useParams();
  const [post, setPost] = useState(null);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchPostDetail = async () => {
      try {
        const response = await axiosInstance.get(`/posts/${id}`);
        setPost(response.data);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching post details:", error);
        setLoading(false);
      }
    };

    fetchPostDetail();
  }, [id]);

  if (loading) {
    return (
      <div className="flex items-center justify-center h-64">
        <RefreshCw className="w-8 h-8 animate-spin text-blue-500" />
      </div>
    );
  }

  if (!post) {
    return <div>Post not found</div>;
  }

  return (
    <div className="p-4">
      <div
        key={post.id}
        className="flex bg-slate-500 p-10 m-10 text-teal-400 cursor-pointer border-2 rounded-md"
      >
        <div>
          <h2 className="text-2xl font-medium">
            {post.id} {post.title}
          </h2>
          <p>{post.body}</p>
        </div>
        <button
          className="border-2 px-5 my-4  rounded-md hover:text-black text-emerald-400 hover:border-black"
          onClick={() => {
            navigate(`/api-fetch-crud/`);
          }}
        >
          Back
        </button>
      </div>
    </div>
  );
};

export default PostDetail;
