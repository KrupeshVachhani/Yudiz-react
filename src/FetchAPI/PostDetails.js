import React, { useEffect, useState } from "react";
import { axiosInstance } from "../Axios-Interceptor/AxiosPlaceHolderUser";
import { useParams } from "react-router-dom";
import { RefreshCw } from "lucide-react";

const PostDetail = () => {
  const { id } = useParams();
  const [post, setPost] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchPostDetail = async () => {
      try {
        const response = await axiosInstance.get(`/posts/${id}`);
        setPost(response.data)  ;
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
        className="bg-slate-500 p-10 m-10 hover:bg-slate-400 text-teal-400 hover:text-teal-700 cursor-pointer border-2 rounded-md"
      >
        <h2 className="text-2xl font-medium">
          {post.id} {post.title}
        </h2>
        <p>{post.body}</p>
      </div>
    </div>
  );
};

export default PostDetail;
