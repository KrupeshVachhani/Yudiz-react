import React, { useState, useEffect, useMemo, useCallback } from "react";
import { Search, RefreshCw, Mail, Phone, Globe, Building2, MapPin, X } from "lucide-react";

const UserDashboard = () => {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedUser, setSelectedUser] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        setLoading(true);
        const response = await fetch('https://jsonplaceholder.typicode.com/users');
        const data = await response.json();
        setUsers(data);
      } catch (err) {
        setError("Failed to fetch users");
        console.error(err);
      } finally {
        setLoading(false);
      }
    };

    fetchUsers();
  }, []);

  const filteredUsers = useMemo(() => {
    return users.filter(
      (user) =>
        user.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        user.email.toLowerCase().includes(searchTerm.toLowerCase())
    );
  }, [users, searchTerm]);

  const handleSearch = useCallback((event) => {
    setSearchTerm(event.target.value);
  }, []);

  if (loading) {
    return (
      <div className="flex items-center justify-center h-screen">
        <RefreshCw className="w-8 h-8 animate-spin text-blue-500" />
      </div>
    );
  }

  if (error) {
    return (
      <div className="flex items-center justify-center h-screen">
        <div className="w-96 p-6 text-center bg-white rounded-lg shadow-lg">
          <X className="w-12 h-12 mx-auto text-red-500" />
          <p className="font-semibold text-red-500">{error}</p>
          <button onClick={() => window.location.reload()} className="mt-4 px-6 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600">
            Try Again
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-pink-300 via-purple-300 to-indigo-400 p-6">
      <div className="max-w-6xl mx-auto bg-white rounded-lg shadow-lg p-6">
        <div className="flex items-center justify-between mb-6">
          <div className="flex items-center gap-2">
            <Building2 className="w-6 h-6" />
            <h1 className="text-2xl font-bold">User Management Dashboard</h1>
          </div>
          <div className="relative w-1/3">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-500" />
            <input
              type="text"
              placeholder="Search by name or email..."
              value={searchTerm}
              onChange={handleSearch}
              className="w-full pl-10 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
        </div>

        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {filteredUsers.map((user) => (
            <div
              key={user.id}
              className="cursor-pointer bg-white p-4 rounded-lg shadow-lg hover:shadow-xl transition-all"
              onClick={() => setSelectedUser(user)}
            >
              <div className="flex items-center gap-4 mb-4">
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-blue-500 to-indigo-600 flex items-center justify-center text-white font-bold text-lg">
                  {user.name.charAt(0)}
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900">{user.name}</h3>
                  <p className="text-sm text-gray-500 flex items-center gap-1">
                    <Mail className="w-3 h-3" /> {user.email}
                  </p>
                </div>
              </div>
              <div className="space-y-2">
                <div className="text-sm text-gray-600">
                  <Building2 className="inline w-3 h-3 mr-1" />
                  {user.company.name}
                </div>
                <div className="text-sm text-gray-600">
                  <Phone className="inline w-3 h-3 mr-1" />
                  {user.phone}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {selectedUser && (
        <div
          className="fixed inset-0 bg-gray-900 bg-opacity-50 flex items-center justify-center"
          onClick={() => setSelectedUser(null)}
        >
          <div
            className="bg-white p-6 rounded-lg shadow-lg w-full sm:w-96"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center gap-4 mb-4">
              <div className="w-16 h-16 rounded-full bg-gradient-to-br from-blue-500 to-indigo-600 flex items-center justify-center text-white font-bold text-2xl">
                {selectedUser.name.charAt(0)}
              </div>
              <div>
                <h2 className="text-xl font-semibold">{selectedUser.name}</h2>
                <p className="text-gray-500">{selectedUser.email}</p>
              </div>
            </div>

            <div className="space-y-3">
              <div className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-gray-500" />
                <span>{selectedUser.phone}</span>
              </div>
              <div className="flex items-center gap-2">
                <Globe className="w-4 h-4 text-gray-500" />
                <span>{selectedUser.website}</span>
              </div>
              <div className="flex items-center gap-2">
                <Building2 className="w-4 h-4 text-gray-500" />
                <span>{selectedUser.company.name}</span>
              </div>
              <div className="flex items-center gap-2">
                <MapPin className="w-4 h-4 text-gray-500" />
                <span>{`${selectedUser.address.street}, ${selectedUser.address.city}`}</span>
              </div>
            </div>

            <button
              className="w-full mt-4 px-6 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600"
              onClick={() => setSelectedUser(null)}
            >
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default UserDashboard;
