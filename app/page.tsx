"use client"
import { useState } from "react";

export default function App() {

  const [open, setOpen] = useState(true);

  return (
    <div className="flex h-screen bg-gray-100">

      {/* ---------------- SIDEBAR ---------------- */}
      <div className={`${open ? "w-64" : "w-20"} bg-blue-900 text-white transition-all duration-300`}>
        
        <div className="p-4 text-xl font-bold border-b border-blue-700">
          {open ? "My Admin" : "MA"}
        </div>

        <ul className="p-2 space-y-2">
          <li className="p-2 hover:bg-blue-700 rounded cursor-pointer">Dashboard</li>
          <li className="p-2 hover:bg-blue-700 rounded cursor-pointer">Users</li>
          <li className="p-2 hover:bg-blue-700 rounded cursor-pointer">Orders</li>
          <li className="p-2 hover:bg-blue-700 rounded cursor-pointer">Settings</li>
        </ul>

      </div>

      {/* ---------------- MAIN AREA ---------------- */}
      <div className="flex-1 flex flex-col">

        {/* TOP BAR */}
        <div className="bg-white shadow px-4 py-3 flex justify-between items-center">
          <button
            onClick={() => setOpen(!open)}
            className="px-3 py-1 bg-blue-500 text-white rounded"
          >
            Toggle
          </button>

          <h1 className="font-bold text-gray-700">Dashboard</h1>

          <div className="text-sm text-gray-500">Admin User</div>
        </div>

        {/* CONTENT */}
        <div className="p-6 space-y-6">

          {/* STATS CARDS */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">

            <div className="bg-white p-4 rounded-lg shadow">
              <h2 className="text-gray-500">Users</h2>
              <p className="text-2xl font-bold">1,250</p>
            </div>

            <div className="bg-white p-4 rounded-lg shadow">
              <h2 className="text-gray-500">Orders</h2>
              <p className="text-2xl font-bold">320</p>
            </div>

            <div className="bg-white p-4 rounded-lg shadow">
              <h2 className="text-gray-500">Revenue</h2>
              <p className="text-2xl font-bold">$12,500</p>
            </div>

          </div>

          {/* TABLE SECTION */}
          <div className="bg-white rounded-lg shadow overflow-hidden">

            <div className="p-4 border-b font-semibold">
              Recent Users
            </div>

            <table className="w-full text-sm">
              <thead className="bg-gray-100 text-left">
                <tr>
                  <th className="p-3">Name</th>
                  <th>Email</th>
                  <th>Status</th>
                </tr>
              </thead>

              <tbody>
                <tr className="border-b">
                  <td className="p-3">Mahmud</td>
                  <td>mahmud@gmail.com</td>
                  <td className="text-green-600">Active</td>
                </tr>

                <tr className="border-b">
                  <td className="p-3">Rahim</td>
                  <td>rahim@gmail.com</td>
                  <td className="text-red-500">Inactive</td>
                </tr>

                <tr>
                  <td className="p-3">Karim</td>
                  <td>karim@gmail.com</td>
                  <td className="text-green-600">Active</td>
                </tr>
              </tbody>
            </table>

          </div>

        </div>
      </div>
    </div>
  );
}