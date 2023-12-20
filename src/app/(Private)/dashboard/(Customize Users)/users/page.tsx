
"use client"
import React, { useEffect, useState } from "react";

interface Users {
  _id: string;
  name: string;
  email: string;
  role: string;
  createdAt: number | string;
}

const UsersPage = () => {
  const [users, setUsers] = useState<Users[]>([]);
  const [filteredUsers, setFilteredUsers] = useState<Users[]>([]);
  const [roleFilter, setRoleFilter] = useState<string>("All");
  const [sortConfig, setSortConfig] = useState<{
    key: string;
    direction: string;
  }>({
    key: "name",
    direction: "asc",
  });
  const [searchInput, setSearchInput] = useState<string>("");

  useEffect(() => {
    // Make a GET request to the /api/users endpoint
    fetch(`${process.env.NEXT_PUBLIC_URL}/api/dashboard/users`)
      .then((response) => response.json())
      .then((data) => {
        setUsers(data);
        setFilteredUsers(data);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, []);

  const handleRoleFilter = (role: string) => {
    setRoleFilter(role);

    // If a role filter is applied, filter users based on the role and search input
    filterUsers({ role });
  };


  const handleSort = (key: string) => {
    let direction = "asc";

    if (sortConfig.key === key && sortConfig.direction === "asc") {
      direction = "desc";
    }

    setSortConfig({ key, direction });

    const sortedUsers = [...filteredUsers].sort((a, b) => {
      if (key === "createdAt") {
        const dateA = new Date((a as any)[key]).getTime();
        const dateB = new Date((b as any)[key]).getTime();
        return direction === "asc" ? dateA - dateB : dateB - dateA;
      } else {
        return direction === "asc"
          ? (a as any)[key].localeCompare((b as any)[key])
          : (b as any)[key].localeCompare((a as any)[key]);
      }
    });

    setFilteredUsers(sortedUsers);
  };

  const handleSearch = (input: string) => {
    setSearchInput(input);

    // Filter users based on search input and current role filter
    filterUsers({ searchInput: input, role: roleFilter });
  };

  const filterUsers = ({
    searchInput,
    role,
  }: {
    searchInput?: string;
    role?: string;
  }) => {
    let filtered = users;

    // Filter by role
    if (role && role !== "All") {
      filtered = filtered.filter((user) => user.role === role);
    }

    // Filter by search input in name or email
    if (searchInput) {
      const normalizedInput = searchInput.toLowerCase();
      filtered = filtered.filter(
        (user) =>
          user.name.toLowerCase().includes(normalizedInput) ||
          user.email.toLowerCase().includes(normalizedInput)
      );
    }

    setFilteredUsers(filtered);
  };

  const getSortIndicator = (key: string) => {
    if (sortConfig.key === key) {
      return sortConfig.direction === "asc" ? "▲" : "▼";
    }
    return null;
  };

  return (
    <div className="h-screen p-4">
      <div className=" flex justify-between">
        <div className="mb-4">
          <label className="capitalize font-bold">Filter by Role:</label>
          <select
            className="p-2 ml-2 bg-gray-800 text-white rounded-md shadow-lg"
            onChange={(e) => handleRoleFilter(e.target.value)}
            value={roleFilter || ""}
          >
            <option value="All" >All</option>
            <option value="ADMIN">Admin</option>
            <option value="USER">User</option>
          </select>
        </div>

        <div className="mb-4">
          
          <input
            type="text"
            className="p-2 ml-2 text-white bg-gray-800 rounded-md shadow-lg"
            value={searchInput}
            placeholder=" Search by Name or Email:"
            onChange={(e) => handleSearch(e.target.value)}
          />
        </div>
      </div>
      <div className="overflow-x-auto rounded-md">
        <table className="table   shadow-xl w-full text-white">
          <thead className="bg-gray-800 cursor-pointer">
            <tr className="text-white border-0">
              <th className="p-2 sm:p-4">NO:</th>
              <th
                title="Sort by name"
                className="p-2 sm:p-4"
                onClick={() => handleSort("name")}
              >
                Name {getSortIndicator("name")}
              </th>
              <th
                title="Sort by email"
                className="p-2 sm:p-4"
                onClick={() => handleSort("email")}
              >
                Email {getSortIndicator("email")}
              </th>
              <th
                title="Sort by Role"
                className="p-2 sm:p-4"
                onClick={() => handleSort("role")}
              >
                Role {getSortIndicator("role")}
              </th>
              <th
                title="Sort by Date"
                className="p-2 sm:p-4"
                onClick={() => handleSort("createdAt")}
              >
                CreatedAt {getSortIndicator("createdAt")}
              </th>
            </tr>
          </thead>
          <tbody className="font-serif bg-gray-800 overflow-auto">
            {filteredUsers?.map((user, index) => (
              <tr
                key={index}
                className={`hover:bg-gray-600 duration-300  border-0 ${
                  index % 2 === 0 ? " bg-black bg-opacity-20" : ""
                } `}
              >
                <td className="p-2 sm:p-4">{index + 1}</td>
                <td className="p-2 sm:p-4">{user?.name}</td>
                <td className="p-2 sm:p-4">{user?.email}</td>
                <td className="p-2 sm:p-4">{user?.role}</td>
                <td className="p-2 sm:p-4">{user?.createdAt}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default UsersPage;
