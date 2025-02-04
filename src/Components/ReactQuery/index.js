import React, { useState } from "react";
import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import axios from "axios";

// API functions remain the same
const fetchUser = async (userId) => {
  const { data } = await axios.get(
    `https://jsonplaceholder.typicode.com/users/${userId}`
  );
  return data;
};

const fetchPostsByUser = async (userId) => {
  const { data } = await axios.get(
    `https://jsonplaceholder.typicode.com/posts`,
    {
      params: { userId },
    }
  );
  return data;
};

const fetchCommentsByPost = async (postId) => {
  const { data } = await axios.get(
    `https://jsonplaceholder.typicode.com/comments`,
    {
      params: { postId },
    }
  );
  return data;
};

const updateUser = async (user) => {
  const { data } = await axios.put(
    `https://jsonplaceholder.typicode.com/users/${user.id}`,
    user
  );
  return data;
};

const ReactQuery = () => {
  const [userId, setUserId] = useState(1);
  const [selectedPostId, setSelectedPostId] = useState(null);
  const queryClient = useQueryClient();

  const { data: user, isLoading: userLoading } = useQuery({
    queryKey: ["user", userId],
    queryFn: () => fetchUser(userId),
    placeholderData: { name: "Loading...", email: "Loading..." },
    staleTime: 3000,
    refetchOnWindowFocus:true
  });
  
  const { data: posts, isLoading: postsLoading } = useQuery({
    queryKey: ["posts", userId],
    queryFn: () => fetchPostsByUser(userId),
    enabled: !!userId,
    initialData: [],
    refetchOnWindowFocus:true
  });
  
  const { data: comments, isLoading: commentsLoading } = useQuery({
    queryKey: ["comments", selectedPostId],
    queryFn: () => fetchCommentsByPost(selectedPostId),
    enabled: !!selectedPostId,
    initialData: [],
    refetchOnWindowFocus:true
  });

  const mutation = useMutation({
    mutationFn: updateUser,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["user", userId] });
    },
  });

  const handleUpdateUser = () => {
    mutation.mutate({
      id: userId,
      name: "Updated Name",
      email: "updated@example.com",
    });
  };

  return (
    <div className="">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl font-bold text-gray-800 mb-8 text-center">
          TanStack Query Demo with JSONPlaceholder
        </h1>

        <div className="bg-white rounded-lg shado   w-md p-6 mb-6">
          <label className="block mb-4">
            <span className="text-gray-700 font-medium">User ID:</span>
            <input
              type="number"
              value={userId}
              onChange={(e) => setUserId(Number(e.target.value))}
              min="1"
              max="10"
              className="mt-1 block w-24 rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 p-2 border"
            />
          </label>

          {userLoading ? (
            <p className="text-gray-500">Loading user...</p>
          ) : (
            <div className="space-y-4">
              <h2 className="text-xl font-semibold text-gray-800">
                User: {user.name}
              </h2>
              <p className="text-gray-600">Email: {user.email}</p>
              <button
                onClick={handleUpdateUser}
                className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 transition-colors"
              >
                Update User
              </button>
            </div>
          )}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-white rounded-lg shadow-md p-6">
            {postsLoading ? (
              <p className="text-gray-500">Loading posts...</p>
            ) : (
              <div>
                <h2 className="text-xl font-semibold text-gray-800 mb-4">
                  Posts
                </h2>
                <ul className="space-y-2">
                  {posts.map((post) => (
                    <li
                      key={post.id}
                      onClick={() => setSelectedPostId(post.id)}
                      className="p-3 rounded-md hover:bg-gray-50 cursor-pointer transition-colors border border-gray-200"
                    >
                      {post.title}
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>

          {selectedPostId && (
            <div className="bg-white rounded-lg shadow-md p-6">
              <h3 className="text-xl font-semibold text-gray-800 mb-4">
                Comments for Post {selectedPostId}
              </h3>
              {commentsLoading ? (
                <p className="text-gray-500">Loading comments...</p>
              ) : (
                <ul className="space-y-3">
                  {comments.map((comment) => (
                    <li
                      key={comment.id}
                      className="p-3 bg-gray-50 rounded-md text-gray-700 text-sm"
                    >
                      {comment.body}
                    </li>
                  ))}
                </ul>
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default ReactQuery;
