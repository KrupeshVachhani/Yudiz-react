import React, { useEffect, useState } from "react";
import { axiosInstance } from "../Axios-Interceptor/AxiosPlaceHolderUser";
import { useNavigate, useParams } from "react-router-dom";
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
    return (
      <div className="text-center text-lg text-gray-500">Post not found</div>
    );
  }

  return (
    <div className="min-h-screen p-6 bg-gray-50">
      <div className="max-w-3xl mx-auto space-y-6 bg-white p-6 rounded-lg shadow-lg">
        <h2 className="text-3xl font-semibold text-gray-800 mb-4">
          {post.title}
        </h2>
        <p className="text-gray-600 text-lg">{post.body}</p>
        <div className="mt-6 flex justify-center">
          <button
            className="px-6 py-2 bg-teal-500 text-white rounded-md hover:bg-teal-600 transition-colors"
            onClick={() => {
              navigate(`/api-fetch-crud/`);
            }}
          >
            Back
          </button>
        </div>
      </div>
    </div>
  );
};

export default PostDetail;
