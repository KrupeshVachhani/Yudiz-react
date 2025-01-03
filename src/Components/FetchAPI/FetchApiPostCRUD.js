import React, { useEffect, useState } from "react";
import { axiosInstance } from "../Axios-Interceptor/AxiosPlaceHolderUser";
import { Search, RefreshCw, Trash2, NotebookPen } from "lucide-react";
import { useNavigate } from "react-router-dom";

const FetchApiPostCRUD = () => {
  const [post, setPost] = useState([]);
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");
  const [search, setSearch] = useState("");
  const [showAddPost, setShowAddPost] = useState(false);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    const ApiFetch = async () => {
      const posts = await axiosInstance.get("/posts");
      setPost(posts.data);
      setLoading(false);
    };

    ApiFetch();
  }, []);

  const handleSearch = (e) => {
    setSearch(e.target.value);
  };

  const filteredPost = post.filter((e) => {
    return (
      e.title.toLowerCase().includes(search.toLowerCase()) ||
      e.body.toLowerCase().includes(search.toLowerCase())
    );
  });

  const handleAddPost = () => {
    setShowAddPost(true);
  };

  const handleAddPostApi = async () => {
    setLoading(true);
    if (title && body) {
      const newPost = {
        title,
        body,
        userId: 1,
      };

      try {
        const response = await axiosInstance.post("/posts", newPost);
        setPost([response.data, ...post]);
        setTitle("");
        setBody("");
        setShowAddPost(false);
        setLoading(false);
      } catch (error) {
        console.error("Error creating post:", error);
        setLoading(false);
        setShowAddPost(false);
      }
    } else {
      alert("Please fill in both title and body.");
      setLoading(false);
      setShowAddPost(false);
    }
  };

  const handlePost = (id) => {
    navigate(`/api-fetch-crud/${id}`);
  };

  const handleLocalDelete = async (a, id) => {
    a.stopPropagation();
    try {
      await axiosInstance.delete(`/posts/${id}`);
      setPost(post.filter((p) => p.id !== id));
    } catch (error) {
      console.error("Error deleting post:", error);
      alert("Failed to delete the post");
    }
  };

  const handleLocalUpdate = async (a, id) => {
    a.stopPropagation();
    await axiosInstance.put(`posts/${id}`);
    alert("Updated", id);
  };

  if (loading) {
    return (
      <div className="flex items-center justify-center h-64">
        <RefreshCw className="w-8 h-8 animate-spin text-blue-500" />
      </div>
    );
  }

  return (
    <div className="min-h-screen px-4 sm:px-6  overflow-x-hidden">
      <div className="max-w-7xl mx-auto space-y-6">
        {/* Search Input & Add Post Button */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 mb-6">
          <div className="relative w-full sm:w-auto sm:flex-grow">
            <Search className="absolute left-3 top-2.5 h-5 w-5 text-gray-400" />
            <input
              type="text"
              placeholder="Search posts..."
              value={search}
              onChange={handleSearch}
              className="w-full p-2 pl-10 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <button
            onClick={handleAddPost}
            className="w-full sm:w-auto bg-teal-500 text-white px-4 py-2 rounded-md hover:bg-teal-600 transition"
          >
            Add Post
          </button>
        </div>

        {/* Post Listings */}
        {filteredPost.length === 0 ? (
          <div className="text-center text-lg text-gray-500">
            No posts found.
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {filteredPost.map((e) => (
              <div
                key={e.id}
                onClick={() => handlePost(e.id)}
                className="bg-white p-4 sm:p-6 rounded-lg shadow-md hover:shadow-xl cursor-pointer transition"
              >
                <div className="flex flex-col sm:flex-row justify-between gap-4">
                  <div className="flex-1 min-w-0">
                    <h2 className="text-xl sm:text-2xl font-semibold text-gray-900 truncate">
                      {e.title}
                    </h2>
                    <p className="text-gray-600 break-words">{e.body}</p>
                  </div>
                  <div className="flex sm:flex-col justify-between gap-3">
                    <Trash2
                      className="w-6 h-6 text-red-600 hover:text-red-700"
                      onClick={(a) => handleLocalDelete(a, e.id)}
                    />
                    <NotebookPen
                      className="w-6 h-6 text-blue-600 hover:text-blue-700"
                      onClick={(a) => handleLocalUpdate(a, e.id)}
                    />
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>

      {/* Add Post Modal */}
      {showAddPost && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4">
          <div className="bg-indigo-300 rounded-lg w-full max-w-md p-4 sm:p-6">
            <h2 className="text-xl font-bold mb-4">Add New Post</h2>
            <div className="space-y-3">
              <div className="flex flex-col sm:flex-row gap-2">
                <label className="w-20 py-2">Title</label>
                <input
                  className="w-full p-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  value={title}
                  onChange={(e) => setTitle(e.target.value)}
                />
              </div>
              <div className="flex flex-col sm:flex-row gap-2">
                <label className="w-20 py-2">Body</label>
                <input
                  className="w-full p-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  value={body}
                  onChange={(e) => setBody(e.target.value)}
                />
              </div>
            </div>
            <button
              onClick={handleAddPostApi}
              className="mt-4 w-full bg-blue-500 text-white p-2 rounded-lg hover:bg-blue-600 transition"
            >
              Add Post
            </button>
            <button
              onClick={() => setShowAddPost(false)}
              className="mt-4 w-full bg-gray-500 text-white p-2 rounded-lg hover:bg-gray-600 transition"
            >
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default FetchApiPostCRUD;