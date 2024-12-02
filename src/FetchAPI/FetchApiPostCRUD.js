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
    };

    ApiFetch();
    setLoading(false);
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

      console.log("Deleted post with ID:", id);
    } catch (error) {
      console.error("Error deleting post:", error);
      alert("Failed to delete the post");
    }
  };

  const handleLocalUpdate = async (a, id) => {
    a.stopPropagation();

    await axiosInstance.put(`posts/${id}`);
    alert("updated", id);
  };

  if (loading) {
    return (
      <div className="flex items-center justify-center h-64">
        <RefreshCw className="w-8 h-8 animate-spin text-blue-500" />
      </div>
    );
  }

  return (
    <div className="flex">
      <div className="flex-1 p-4">
        <div className="flex fixed top-0 left-64 right-0 bg-white p-4">
          {/* Search Input */}
          <div className="relative flex-grow">
            <input
              type="text"
              placeholder="Search posts..."
              value={search}
              onChange={handleSearch}
              className="w-full p-2 pl-10 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <Search className="absolute left-3 top-2.5 h-5 w-5 text-gray-400" />
          </div>

          {/* Add Post Button */}
          <button
            className="ml-4 bg-teal-500 text-white px-4 py-2 rounded-md"
            onClick={handleAddPost}
          >
            Add Post
          </button>
        </div>

        <div className="mt-16">
          {/* Show message when no posts match the search */}
          {filteredPost.length === 0 ? (
            <div className="text-center text-lg text-gray-500">
              No posts found.
            </div>
          ) : (
            filteredPost.map((e) => (
              <div
                onClick={() => handlePost(e.id)}
                key={e.id}
                className="flex justify-between bg-slate-500 p-10 m-10 hover:bg-slate-400 text-teal-400 hover:text-teal-700 cursor-pointer border-2 rounded-md"
              >
                <div className="m-5">
                  <h2 className="text-2xl font-medium">
                    {e.id} {e.title}
                  </h2>
                  <p>{e.body}</p>
                </div>
                <div className="flex flex-col justify-evenly gap-5">
                  {/* Delete Icon */}
                  <Trash2
                    className="w-8 h-8 hover:text-teal-300"
                    onClick={(a) => handleLocalDelete(a, e.id)}
                  />
                  {/* Edit Icon */}
                  <NotebookPen
                    className="w-8 h-8 hover:text-teal-300"
                    onClick={(a) => handleLocalUpdate(a, e.id)}
                  />
                </div>
              </div>
            ))
          )}
        </div>
      </div>

      {showAddPost && (
        <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4">
          <div className="bg-indigo-300 rounded-lg w-full max-w-md p-6">
            <h2 className="text-xl font-bold mb-4">Add New Post</h2>
            <div className="space-y-3">
              <div className="flex">
                <label className="w-10 py-2 mx-2">Title</label>
                <input
                  className="w-full p-1 pl-10 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  value={title}
                  onChange={(e) => setTitle(e.target.value)}
                />
              </div>
              <div className="flex">
                <label className="w-10 py-2 mx-2">Body</label>
                <input
                  className="w-full p-1 pl-10 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  value={body}
                  onChange={(e) => setBody(e.target.value)}
                />
              </div>
            </div>
            <button
              onClick={handleAddPostApi}
              className="mt-4 w-full bg-blue-500 text-white p-2 rounded-lg hover:bg-blue-600 transition-colors"
            >
              Add Post
            </button>
            <button
              onClick={() => setShowAddPost(false)}
              className="mt-4 w-full bg-gray-500 text-white p-2 rounded-lg hover:bg-gray-600 transition-colors"
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
