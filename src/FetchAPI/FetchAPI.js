
import React, { useState, useEffect, useMemo, useCallback } from "react";
import { Search, RefreshCw } from "lucide-react";

const UserDashboard = () => {
  // State management with useState
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedUser, setSelectedUser] = useState(null);

  // Fetch users data using useEffect
  useEffect(() => {
    const fetchUsers = async () => {
      try {
        // setTimeout(() => {
        setLoading(true);
        // }, 3000);
        const response = await fetch(
          "https://jsonplaceholder.typicode.com/users"
        );
        const data = await response.json();
        setUsers(data);
      } catch (err) {
        throw new Error("Something Went wronge", err);
      } finally {
        setTimeout(() => {
          setLoading(false);
        }, 1000);
      }
    };

    fetchUsers();
  }, []);

  // Memoized filtered and sorted users using useMemo
  const filteredUsers = useMemo(() => {
    return users
      .filter(
        (user) =>
          user.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
          user.email.toLowerCase().includes(searchTerm.toLowerCase())
      )
      .sort((a, b) => {
        return a.name.localeCompare(b.name);
      });
  }, [users, searchTerm]);

  // Search handler using useCallback
  const handleSearch = useCallback((event) => {
    setSearchTerm(event.target.value);
  }, []);

  if (loading) {
    return (
      <div className="flex items-center justify-center h-64">
        <RefreshCw className="w-8 h-8 animate-spin text-blue-500" />
      </div>
    );
  }

  return (
    <div className="p-4 max-w-4xl mx-auto">
      <div className="  rounded-lg shadow-lg p-6">
        <div className="mb-6">
          <h1 className="text-2xl font-bold text-gray-800 mb-4">
            User Management Dashboard
          </h1>

          <div className="flex items-center gap-4">
            <div className="relative flex-1">
              <input
                type="text"
                placeholder="Search users..."
                value={searchTerm}
                onChange={handleSearch}
                className="w-full p-2 pl-10 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <Search className="absolute left-3 top-2.5 h-5 w-5 text-gray-400" />
            </div>
          </div>
        </div>

        <div className="grid gap-4 md:grid-cols-2">
          {filteredUsers.map((user) => (
            <div
              key={user.id}
              className="p-4 rounded-lg border hover:shadow-lg transition-shadow cursor-pointer  "
              onClick={() => setSelectedUser(user)}
            >
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-blue-500 flex items-center justify-center text-white font-semibold">
                  {user.name.charAt(0)}
                </div>
                <div>
                  <h3 className="font-semibold text-gray-800">{user.name}</h3>
                  <p className="text-sm text-gray-500">{user.email}</p>
                </div>
              </div>

              <div className="mt-3 text-sm text-gray-600">
                <p className="font-medium">{user.company.name}</p>
                <p className="font-thin">{user.phone}</p>
              </div>
            </div>
          ))}
        </div>

        {selectedUser && (
          <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4">
            <div className="bg-indigo-300 rounded-lg w-full max-w-md p-6">
              <h2 className="text-xl font-bold mb-4">User Details</h2>
              <div className="space-y-3">
                <p>
                  <strong>Name:</strong> {selectedUser.name}
                </p>
                <p>
                  <strong>Email:</strong> {selectedUser.email}
                </p>
                <p>
                  <strong>Phone:</strong> {selectedUser.phone}
                </p>
                <p>
                  <strong>Website:</strong> {selectedUser.website}
                </p>
                <p>
                  <strong>Company:</strong> {selectedUser.company.name}
                </p>
                <p>
                  <strong>Address:</strong>{" "}
                  {`${selectedUser.address.street}, ${selectedUser.address.city}`}
                </p>
              </div>
              <button
                onClick={() => setSelectedUser(null)}
                className="mt-4 w-full bg-blue-500 text-white p-2 rounded-lg hover:bg-blue-600 transition-colors"
              >
                Close
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default UserDashboard;
